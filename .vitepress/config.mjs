import { defineConfig } from "vitepress";
// import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  base: "/docs-myBlog/",
  title: "无敌大头",
  description: "A VitePress Site", // 给SEO用的(不改)
  head: [["link", { rel: "icon", href: "/docs-myBlog/logo.svg" }]],
  themeConfig: {
    logo: "/public/logo.svg",

    // 导航栏
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "前端四件套",
        items: [
          {
            text: "HTML",
            link: "/html",
          },
          {
            text: "CSS",
            link: "/css",
          },
          {
            items: [
              {
                text: "JS",
                link: "/JavaScript",
              },
              {
                text: "TS",
                link: "/typeScript",
              },
            ],
          },
        ],
      },
      {
        text: "Node",
        link: "/markdown-examples",
      },
      {
        text: "框架",
        items: [
          {
            text: "Vue",
            link: "/vue",
          },
          {
            text: "React",
            link: "/react",
          },
        ],
      },
      {
        text: "UI库",
        items: [
          {
            text: "element-plus",
            link: "/element-plus",
          },
          {
            text: "ant-design",
            link: "/ant-design",
          },
          {
            text: "vant",
            link: "/vant",
          },
        ],
      },
      {
        text: "工具库",
        items: [
          {
            text: "lodash",
            link: "/lodash",
          },
          {
            text: "dayjs",
            link: "/dayjs",
          },
          {
            text: "vueuse",
            link: "/vueuse",
          },
        ],
      },
      {
        text: "工程化",
        items: [
          {
            text: "vite",
            link: "/vite",
          },
          {
            text: "webpack",
            link: "/webpack",
          },
          {
            text: "rollup",
            link: "/rollup",
          },
        ],
      },
      {
        text: "设计模式",
        link: "/engineeringOriented",
      },
      {
        text: "算法",
        link: "/engineeringOriented",
      },
    ],

    // 搜索栏
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // 侧边栏
    /*  sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ], */

    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示

    // sidebar: { "/front-end/vue": set_sidebar("front-end/vue") },

    // 文章右侧目录
    outline: {
      label: "文章目录",
      outline: [2, 6],
    },

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/LJL0906" },
      { icon: "gitee", link: "https://github.com/LJL0906" },
      { icon: "bilibili", link: "https://github.com/LJL0906" },
    ],

    // 自定义页脚
    footer: {
      message: "欢迎光临",
      copyright: "您就是最牛逼的!",
    },
  },
});
