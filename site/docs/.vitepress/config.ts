import { demoBlockPlugin } from 'vitepress-theme-demoblock'

const sidebar = [
  {
    text: '引入',
    items: [
      {
        text: '介绍',
        link: '/guide/introduce'
      },
      {
        text: '快速开始',
        link: '/guide/quickstart'
      }
    ]
  },
  {
    text: '通用',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: '导航',
    items: [
      { text: 'Pagination 分页', link: '/components/pagination/' },
      { text: 'Tab 选项卡', link: '/components/tabs/' },
    ]
  },
  { text: '反馈', items: [
    { text: 'Modal 模态框', link: '/components/modal/' },
    { text: 'Popover 弹出框', link: '/components/popover/' }

  ] },
  { text: '数据录入', items: [
    { text: 'Form 表单', link: '/components/form/' },
    { text: 'Input 输入框', link: '/components/input/' },
    { text: 'AutoComplete 自动填充', link: '/components/auto-complete/' }

  ] },
  { text: '数据展示', items: [{ text: 'Tree 树', link: '/components/tree/' }] },
  { text: '布局', items: [] }
]

export default {
  title: "OceanUI",
  base: process.env.NODE_ENV === 'production' ? '/easyest/' : '/',
  themeConfig: {
    nav: [
      { text: "组件", link: "/components/button/" },
    ],
    sidebar,
    socialLinks: [
      { icon: "github", link: "https://github.com/Aurora-del-prog/Ocean-UI" },
    ],
  },
  markdown: {
    config: md => {
      // 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
      md.use(demoBlockPlugin)
    }
  }
}
