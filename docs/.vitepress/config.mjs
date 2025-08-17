export default {
  title: 'Joe Yeong Lab',
  description: 'Laboratory of Joe Poh Sheng YEONG - Spatial Omics Research',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Joe Yeong Lab',
      description: 'Laboratory of Joe Poh Sheng YEONG - Spatial Omics Research',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About Joe', link: '/about-joe' },
          { text: 'Team', link: '/team' },
          { text: 'Research', link: '/research' }
        ],
        sidebar: [
          {
            text: 'Navigation',
            items: [
              { text: 'Home', link: '/' },
              { text: 'About Joe', link: '/about-joe' },
              { text: 'Team', link: '/team' },
              { text: 'Research', link: '/research' }
            ]
          }
        ]
      }
    },
    'zh-cn': {
      label: '中文',
      lang: 'zh-CN',
      title: '杨宝诚实验室',
      description: '杨宝诚实验室 - 空间组学研究',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh-cn/' },
          { text: '关于杨宝诚', link: '/zh-cn/about-joe' },
          { text: '团队', link: '/zh-cn/team' },
          { text: '研究', link: '/zh-cn/research' }
        ],
        sidebar: [
          {
            text: '导航',
            items: [
              { text: '首页', link: '/zh-cn/' },
              { text: '关于杨宝诚', link: '/zh-cn/about-joe' },
              { text: '团队', link: '/zh-cn/team' },
              { text: '研究', link: '/zh-cn/research' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/logo.png',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/JY-Spatial-Omics' }
    ],

    footer: {
      message: 'Joe Yeong Laboratory - Spatial Omics Research',
      copyright: 'Copyright © 2025 Joe Poh Sheng YEONG'
    }
  }
}
