export function updateSearchParams(key, value) {
  const url = new URL(window.location);

  url.searchParams.set(key, value);
  window.history.pushState({}, '', url);
}
