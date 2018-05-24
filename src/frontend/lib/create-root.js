const createRoot = () => {
  const root = document.createElement('div');

  root.id = 'root';
  document.body.appendChild(root);

  return root;
};

export default createRoot;
