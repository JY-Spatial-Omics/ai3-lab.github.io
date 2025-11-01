export default {
  title: 'Joe Yeong Lab',
  description: 'Laboratory of Joe Poh Sheng YEONG - Spatial Omics Research',
  base: '/',
  
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
    ],

    logo: '/logo.png',
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ai3-lab/ai3-lab.github.io' }
    ],

    footer: {
      message: 'Joe Yeong Laboratory - Spatial Omics Research',
      copyright: 'Copyright © 2025 Joe Poh Sheng YEONG'
    }
  }
}
