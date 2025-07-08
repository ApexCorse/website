export function getPathnameWithoutLocale(pathname: string) {
  let res = pathname;

  if (pathname.startsWith("/en/")) {
    res = res.substring(4);
  }

  return res;
}
