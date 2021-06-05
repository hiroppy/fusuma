'use strict';

const yaml = require('yaml');
const visit = require('unist-util-visit');
const transformQrToJSX = require('./transformers/transformQrToJSX');
const transformScreenToJSX = require('./transformers/transformScreenToJSX');
const transformChartToJSX = require('./transformers/transformChartToJSX');
const transformMarkdownImageNodeToJSX = require('./transformers/transformMarkdownImageNodeToJSX');
const transformExecJSCodeButtonToJSX = require('./transformers/transformExecJSCodeButtonToJSX');
const transformAccountToJSX = require('./transformers/transformAccountToJSX');
const commentParser = require('./commentParser');

function formatSlidesTimeline(fragmentSteps, fragmentId) {
  if (fragmentSteps === 0) {
    return [0];
  } else {
    return [[...Array(fragmentSteps)].fill(fragmentId)];
  }
}

function walk(tree) {
  const props = {};
  let isFragmentArea = false;
  let fragmentSteps = 0;
  let fragmentId = 0;
  let mermaidId = 1;
  let background = 0; // TODO: hmm... combine into fusumaProps but need to transform to `require`

  function walkAST(t) {
    visit(t, null, (node) => {
      const { type, value, lang, meta } = node;

      if (type === 'yaml') {
        const meta = yaml.parse(value);

        if (meta.background) {
          background = meta.background.includes('/')
            ? `require("${meta.background}")`
            : `'${meta.background}'`;
        }
        if (meta.sectionTitle) {
          props.sectionTitle = meta.sectionTitle;
        }
        if (meta.classes) {
          props.classes = meta.classes;
        }
      }

      if (type === 'comment') {
        const { prefix, valueStr, valueArr } = commentParser(value);

        if (prefix === 'background') {
          background = valueStr.includes('/') ? `require(${valueStr})` : `'${valueStr}'`;
        }
        if (prefix === 'section-title') {
          props.sectionTitle = valueStr;
        }
        if (prefix === 'classes') {
          props.classes = valueArr;
        }
        if (prefix === 'block-start') {
          node.type = 'jsx';
          node.value = valueArr.length === 0 ? '<div>' : `<div className="${valueArr.join(' ')}">`;
        }
        if (prefix === 'block-end') {
          node.type = 'jsx';
          node.value = '</div>';
        }
        if (prefix === 'fragments-start') {
          fragmentId = Math.random();

          node.type = 'jsx';
          node.value = `<Client.Fragments id={${fragmentId}}>`;
          isFragmentArea = true;
        }
        if (prefix === 'fragments-end') {
          node.type = 'jsx';
          node.value = '</ Client.Fragments>';
          isFragmentArea = false;
        }
        if (prefix === 'contents') {
          props.contents = true;
        }
        if (prefix === 'note') {
          props.note = htmlEscape(valueStr).replace(/\n/g, '\\n');
        }
        if (prefix === 'account') {
          Object.assign(node, ...transformAccountToJSX(valueArr));
        }
        if (prefix === 'qr') {
          Object.assign(node, ...transformQrToJSX(valueArr));
        }
        // if (prefix === 'executable-code') {
        //   const nextNode = tree.children[i + 1];

        //   if (nextNode.type === 'code' && ['js', 'javascript'].includes(nextNode.lang)) {
        //     props.hasExecutableCode = true;
        //     Object.assign(node, ...transformExecJSCodeButtonToJSX(nextNode.value));
        //   }
        // }
      }

      if (isFragmentArea) {
        fragmentSteps++;
      }

      if (type === 'code') {
        if (lang === 'chart' || lang === 'mermaid') {
          Object.assign(node, ...transformChartToJSX(mermaidId, value));

          ++mermaidId;
        } else if (lang) {
          langs.add(lang);
        }

        if (meta) {
          const lines = n.meta.match(/line="(.+?)"/);

          if (lines === null) {
            // slide.push(n);
          } else {
            const line = lines[1];
            const hash = mdxAstToMdxHast()(n);

            node.type = 'jsx';
            node.value = toJSX(hash).replace('<pre>', `<pre data-line="${line}">`);
          }
        }
      }

      // convert to chakra-ui
      if (type === 'heading') {
        node.type = 'jsx';
        node.value = `<Chakra.Heading
              as="h${node.depth}"
              fontSize="var(--h${node.depth}-font-size)"
              fontWeight="var(--h${node.depth}-font-weight)"
            >${node.children[0].value}</Chakra.Heading>`;
      } else if (node.type === 'text') {
        node.type = 'jsx';
        node.value = `<Chakra.Text>{\`${node.value}\`}</Chakra.Text>`;
      } else if (node.type === 'link') {
        node.type = 'jsx';
        node.value = `<Chakra.Link href="${node.url}">${node.children[0].value}</Chakra.Link>`;
      } else if (node.type === 'image') {
        const { type, value } = transformMarkdownImageNodeToJSX(node);
        node.type = type;
        node.value = value;
        delete node.alt;
        delete node.title;
        delete node.url;
      }

      if (type === 'jsx') {
        node.value = value
          .replace(/src="(.+?\.(png|jpg|gif|svg|mp4|webm?))"/g, 'src={require("$1")}')
          .replace(/class=/g, 'className=');
      }

      if (node.children) {
        walkAST(node.children);
      }
    });
  }

  walkAST(tree);

  return {
    ast: tree,
    props,
    background,
    fragmentSteps: formatSlidesTimeline(fragmentSteps, fragmentId),
  };
}

module.exports = walk;
