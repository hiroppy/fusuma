import classnames from 'classnames';

export function parseAttrs(content) {
  const res = {
    note: '',
    sectionTitle: '',
    className: '',
    shouldReplace: false
  };
  const classes = ['aligncenter'];

  if (content === undefined) return res;

  // class
  {
    const arr = content.match(/<!-- classes: (.+) -->/);

    // TODO: multiple string
    if (arr) {
      classes.push(arr[1]);
    }
  }

  // section-title
  {
    const arr = content.match(/<!-- sectionTitle: (.+) -->/);

    if (arr) {
      classes.push('section-title');
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

  // convert from an array to a string
  res.className = classnames(classes);

  return res;
}
