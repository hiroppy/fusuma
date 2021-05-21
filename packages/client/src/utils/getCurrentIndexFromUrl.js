export function getCurrentIndexFromUrl() {
  const params = new URLSearchParams(new URL(window.location.href).search);

  return params.get('index') || 0;
}
