const parseAttrs = (content) => {
  const res = {
    note      : '',
    contents  : [],
    className : '',
    background: 'default'
  };
  if (content === undefined) return res;

  // contents
  {
    const arr = content.match(/<!-- contents -->/);

    if (arr) {
      const regex = /<a href="(.*?)"\>(.*?)</g;
      let matches;

      while (matches = regex.exec(arr.input)) { // eslint-disable-line no-cond-assign
        res.contents.push({
          href: matches[1],
          text: matches[2]
        });
      }
    }
  }

  // background
  {
    const arr = content.match(/<!-- background: (.+) -->/);

    res.background = arr ? arr[1] : 'default';
  }

  // section-title
  if (content.match(/<!-- sectionTitle -->/)) {
    res.background = 'section-title';
    res.className = 'section-title';
  }

  // note
  {
    const arr = content.match(/<!-- note[\s\S]*-->/g);

    res.note = arr ? arr[0].replace(/<!-- note/g, '').replace(/-->/g, '') : '';
  }

  return res;
};

export default parseAttrs;
