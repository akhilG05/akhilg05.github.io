import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Akhilesh Gonabal',
  tagline: 'Research Assistant & Robotics Engineer',
  favicon: 'img/favicon.ico',

  url: 'https://akhileshgonabal.com',
  baseUrl: '/',
  organizationName: 'akhilg05', // GitHub org/user name.
  projectName: 'akhilg05.github.io', // Repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // Navbar: No title or logo. All items use position 'left'; custom CSS centers them.
    navbar: {
      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
          className: 'navbar__item--home',
          activeBaseRegex: '^/$',
        },
        {
          to: '/about',
          label: 'About me',
          position: 'left',
          className: 'navbar__items--left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
          className: 'navbar__items--left',
        },
        {
          to: '/publications',
          label: 'Publications',
          position: 'left',
          className: 'navbar__items--left',
        },
        {
          to: '/contact',
          label: 'Contact me',
          position: 'left',
          className: 'navbar__items--left',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '© 2025 Akhilesh Anant Gonabal',
          items: [
            // If you want the text by itself, you can leave this empty or link to your home page.
          ],
        },
        {
          title: 'Built with Docusaurus',
          items: [
            // Another column, or link items if you prefer
          ],
        },
      ],
    },


    metadata: [
      { name: 'keywords', content: 'robotics, research, engineering, automation, cyber-physical systems' },
      { name: 'description', content: 'Akhilesh Gonabal - Research Assistant at IISc developing bio-inspired robotic systems' },
      { name: 'author', content: 'Akhilesh Anant Gonabal' },
      { property: 'og:title', content: 'Akhilesh Gonabal - Robotics Research & Engineering' },
      { property: 'og:description', content: 'Research Assistant at IISc developing bio-inspired robotic systems.' },
      { property: 'og:url', content: 'https://akhileshgonabal.com' },
      { property: 'og:image', content: '/img/og-image.jpg' }, // Update with your OG image as needed
    ],

    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  },

  customFields: {
    social: {
      github: 'https://github.com/akhilG05',
      email: 'akhilesh.gonabal@gmail.com',
    },
    enableBlog: false,
  },

  plugins: [
    // Additional plugins if required.
  ],
};

export default config;
