import bespoke from 'bespoke';
import hash from 'bespoke-hash';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import scale from 'bespoke-scale';
import jumpy from 'bespoke-jumpy';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';
import fullscreen from 'bespoke-fullscreen';

const setup = (theme, opts = []) => {
  const common = [
    keys(),
    hash(),
    touch(),
    scale(),
    jumpy(),
    progress(),
    backdrop(),
    fullscreen()
  ];

  return bespoke.from('article', [
    theme(),
    ...common,
    ...opts.map((opt) => opt())
  ]);
};

export default setup;
