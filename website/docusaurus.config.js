module.exports = {
  title: 'Format.JS',
  tagline: 'Internationalize your web apps on the client & server.',
  url: 'https://formatjs.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'formatjs', // Usually your GitHub org/user name.
  projectName: 'formatjs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Format.JS',
      logo: {
        alt: 'FormatJS',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/basic-internationalization-principles',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'left',
        },
        {to: 'docs/polyfills', label: 'Polyfills', position: 'left'},
        {to: 'docs/intl-messageformat', label: 'Libraries', position: 'left'},
        {to: 'docs/tooling/cli', label: 'Tooling', position: 'left'},
        {
          href: 'https://github.com/formatjs/formatjs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/formatjs',
            },
            {
              label: 'Slack',
              href: 'https://formatjs.slack.com/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/formatjs/formatjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FormatJS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/formatjs/formatjs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
