import bespoke from 'bespoke';
import fx from '@hiroppy/bespoke-fx';
import hash from 'bespoke-hash';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import scale from 'bespoke-scale';
import jumpy from 'bespoke-jumpy';
import progress from 'bespoke-progress';
import backdrop from 'bespoke-backdrop';
import fullscreen from 'bespoke-fullscreen';
import '@hiroppy/bespoke-fx/demo/animations.css';

export function setup(theme, opts = []) {
  const common = [keys(), hash(), touch(), scale(), jumpy(), progress(), backdrop(), fullscreen()];

  return bespoke.from('article', [theme(), ...common, fx(), ...opts.map((opt) => opt())]);
}
