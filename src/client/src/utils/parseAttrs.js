export function parseAttrs(content) {
  const res = {
    fx: {
      direction: '',
      transition: ''
    },
    note: '',
    sectionTitle: '',
    className: '',
    shouldReplace: false,
    background: 'default'
  };

  if (content === undefined) return res;

  {
    const arr = content.match(/<!-- direction: (.+) -->/);

    res.fx.direction = arr ? arr[1] : 'horizontal';
  }

  {
    const arr = content.match(/<!-- transition: (.+) -->/);

    res.fx.transition = arr ? arr[1] : 'none';
  }

  // background
  {
    const arr = content.match(/<!-- background: (.+) -->/);

    res.background = arr ? arr[1] : 'default';
  }

  // section-title
  {
    const arr = content.match(/<!-- sectionTitle: (.+) -->/);

    if (arr) {
      res.background = 'section-title';
      res.className = 'section-title';
      res.sectionTitle = arr[1];
    }
  }

  // note
  {
    const arr = content.match(/<!-- note[\s\S]*-->/g);

    res.note = arr ? arr[0].replace(/<!-- note/g, '').replace(/-->/g, '') : '';
  }

  // support for replace-html
  {
    const arr = content.match(/<!-- contents -->/);

    if (arr) res.shouldReplace = true;
  }

  return res;
}
