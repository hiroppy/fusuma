export function getSearchParams() {
  const parsedUrl = new URL(window.location.href);
  const params = parsedUrl.searchParams;

  return params;
}
