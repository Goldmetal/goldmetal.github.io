const { description } = require('../../package')


module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Goldmetal',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#ff9900' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-2370098368894636' }],
    ['script', { src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2370098368894636', crossorigin: 'anonymous', async: true }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'vt',
  themeConfig: {
    enableDarkMode: false,
    logo: "/logo.png",
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [
      { text: "Home", link: "/index" },
      //{ text: "Guide", link: "/guide/" },
      //{ text: "API", link: "/api/" },
      { text: "Youtube", link: "https://www.youtube.com/@goldmetal" },
      /*{ 
        text: "Nav Links on the left", 
        link: "/guide/navbar.html#nav-links-on-the-left",
        position: "left"
      },*/
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            {
              title: "Page",
              children: [
                "/guide/home",
                "/guide/api-page",
                "/guide/page-layout",
                "/guide/navbar",
                "/guide/sidebar",
                "/guide/dark-mode",
              ],
            },
            {
              title: "Modules",
              children: [
                "/guide/search",
                "/guide/global-components",
                "/guide/code-switcher",
                "/guide/status",
              ],
            },
            "/guide/configuration",
            "/guide/migration",
            "/guide/documenting",
          ],
        }
      ],
      "/api/": [
        {
          title: "Config",
          path: "/api/",
          collapsable: false,
          children: [
            "/api/config-theme",
            "/api/config-frontmatter",
            "/api/config-home",
          ],
        },
      ],
    }
  },
  codeSwitcher: {
    groups: {
      default: { ts: 'TypeScript', js: 'JavaScript' },
      'plugin-usage': { tuple: 'Tuple', object: 'Object' },
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    "vuepress-plugin-google-adsense",
    {
      adClient: "ca-pub-2370098368894636",
    }
  ]
}
