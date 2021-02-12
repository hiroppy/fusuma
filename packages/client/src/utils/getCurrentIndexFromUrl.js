export function getCurrentIndexFromUrl() {
  const parsedUrl = new URL(window.location.href);
  const index = parsedUrl.hash.match(/^#slide-(.+?)$/);

  return index !== null ? index[1] - 1 : 0;
}
