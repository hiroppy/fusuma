export async function createVMEnv() {
  import('../../assets/style/executableCode.css');

  const { createContext, runInNewContext } = await import('vm-browserify');

  Array.from(document.querySelectorAll('.executable-code-button')).forEach((el) => {
    el.addEventListener('click', (e) => {
      const list = e.target.nextSibling;

      if (list.style.display === 'none') {
        list.style.display = 'block';
      }
      const context = createContext({
        console: {
          log: (...res) => {
            const p = document.createElement('p');

            p.innerText = `- ${res.join(' ')}`;
            list.appendChild(p);
          },
        },
      });

      runInNewContext(e.target.dataset.value, context);
    });
  });
}
