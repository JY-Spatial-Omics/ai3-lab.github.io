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
          { text: 'Research', link: '/research' },
          { text: 'News', link: '/news' },
          { text: 'Platforms', link: '/platforms' },
          { text: 'Contact', link: '/contact' }
        ],
        sidebar: [
          {
            text: 'Navigation',
            items: [
              { text: 'Home', link: '/' },
              { text: 'About Joe', link: '/about-joe' },
              { text: 'Team', link: '/team' },
              { text: 'Research', link: '/research' },
              { text: 'News', link: '/news' },
              { text: 'Platforms', link: '/platforms' },
              { text: 'Contact', link: '/contact' }
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
          { text: '研究', link: '/zh-cn/research' },
          { text: '新闻', link: '/zh-cn/news' },
          { text: '平台', link: '/zh-cn/platforms' },
          { text: '联系我们', link: '/zh-cn/contact' }
        ],
        sidebar: [
          {
            text: '导航',
            items: [
              { text: '首页', link: '/zh-cn/' },
              { text: '关于杨宝诚', link: '/zh-cn/about-joe' },
              { text: '团队', link: '/zh-cn/team' },
              { text: '研究', link: '/zh-cn/research' },
              { text: '新闻', link: '/zh-cn/news' },
              { text: '平台', link: '/zh-cn/platforms' },
              { text: '联系我们', link: '/zh-cn/contact' }
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
