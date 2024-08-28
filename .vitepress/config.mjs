import { defineConfig } from "vitepress";
// import { set_sidebar } from "../utils/auto-gen-sidebar.mjs"; // 改成自己的路径

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
  title: "无敌大头",
  description: "A VitePress Site", // 给SEO用的(不改)
  head: [["link", { rel: "icon", href: "/blog.svg" }]],
  themeConfig: {
    logo: "/blog.svg",

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
                text: "JS基础",
                link: "/JavascriptMD/js",
              },
              {
                text: "JS高级",
                link: "/JavascriptMD/js-high",
              },
            ],
          },
          {
            text: "TS",
            link: "/typeScript",
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

    sidebar: [
      {
        text: "JavaScript",
        items: [
          {
            text: "初始js",
            link: "/JavascriptMD/js",
          },
          {
            text: "变量",
            items: [
              {
                text: "变量声明",
                link: "/JavascriptMD/js",
              },
              {
                text: "变量作用域",
                link: "/JavascriptMD/js",
              },
            ],
          },
          {
            text: "数组",
            link: "/JavascriptMD/js",
          },
          {
            text: "对象",
            link: "/JavascriptMD/js",
          },
          {
            text: "函数",
            link: "/JavascriptMD/js",
          },
        ],
      },
    ],

    // 侧边栏
    // sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示

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
