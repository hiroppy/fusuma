export function setTargetBlank() {
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      if (e.target.host === location.host || e.target.href === '') return;

      e.preventDefault();
      window.open(e.target.href, '_blank');
    }
  });
}
