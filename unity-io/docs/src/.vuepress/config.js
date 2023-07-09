const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Goldmetal Studio',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head 3eaf7c
   */
  head: [
    ['meta', { name: 'theme-color', content: '#FF9E00' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme : 'antdocs',
  themeConfig: {
    repo: 'Goldmetal/goldmetal-github-io',
    logo: '/assets/img/logo.png',
    editLinks: false,
    nextLinks: true,
    prevLinks: true,
    smoothScroll: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Config', link: '/config/' },
      { text: 'Youtube', link: 'https://www.youtube.com/@goldmetal' },
      { text: 'VuePress', link: 'https://v1.vuepress.vuejs.org' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [ '', 'using-vue', ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
