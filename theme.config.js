export default {
  github: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Aidan\'s House',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Aidan's House</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        How to survive
      </span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Aidan's House: How to not die" />
      <meta name="apple-mobile-web-app-title" content="Aidan's House" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Aidan's House.</>,
  unstable_faviconGlyph: '👋',
}
