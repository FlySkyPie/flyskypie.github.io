// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '工程屍 FlyPie 的異想世界',
  tagline: 'FlyPie\'s website',
  url: 'https://flyskypie.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flyskypie', // Usually your GitHub org/user name.
  projectName: 'flyskypie.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'post',
        routeBasePath: 'posts',
        path: './post',
        showReadingTime: false,
        blogTitle: '廢文雜談',
        blogDescription: 'Random post just like FB or Twitter.',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} FlyPie (Wei Ji)`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },

      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'the-key-of-huanche/index',
            position: 'left',
            label: '專案文件',
          },
          //{ to: '/blog', label: '數位手記', position: 'left' },
          {
            href: 'https://github.com/FlySkyPie',
            label: 'GitHub',
            position: 'right',
          },
          { to: "/blogs", label: "數位手記", position: "left" },
          { to: "/posts", label: "廢文雜談", position: "left" },
        ],
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} FlyPie (Wei Ji)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        //{ property: 'og:image', content: 'https://i.imgur.com/Mmyl0y8.png' },
        //{ property: 'og:type', content: 'website' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'zh_tw' },
      ],
    }),
};

module.exports = config;
