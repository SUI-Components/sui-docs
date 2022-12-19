// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SUI",
  tagline: "Adevinta Spain Frontend",
  url: "https://your-docusaurus-test-site.com", // TODO
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "SUI-Components", // Usually your GitHub org/user name.
  projectName: "sui", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        name: "design",
        sourceBaseUrl:
          "https://raw.githubusercontent.com/turolopezsanabria/DesignOps-Playbook/master",
        outDir: "docs/design-ops/",
        documents: [
          "About-us.md",
          "Accessibility.md",
          "Advocate.md",
          "Antipatterns.md",
          "Atomic-design.md",
          "Boolean-traps.md",
          "Browser-support.md",
          "Bugs.md",
          "CSS-SCSS-cssInJs-PostCSS.md",
          "Class-Components.md",
          "Code-of-conduct.md",
          "Collaboration-Model.md",
          "Colour-theming-multiplatform.md",
          "Colour.md",
          "Commits.md",
          "Communication.md",
          "Community.md",
          "Components.md",
          "Compound-components.md",
          "Contributing.md",
          "Controlled-Uncontrolled-Components.md",
          "Custom-hooks.md",
          "Declarative-approach.md",
          "Deprecation-in-Figma.md",
          "Deprecation.md",
          "Design-System.md",
          "DesignOps-Team.md",
          "Development-workflow.md",
          "Discussions.md",
          "DoD.md",
          "DoR.md",
          "Documentation-library.md",
          "Feedback-loops.md",
          "Figma-Files.md",
          "Figma-Handoff-QA.md",
          "Figma-Organisation.md",
          "Figma-Teams-Projects.md",
          "Figma-UI-Kits.md",
          "Figma.md",
          "Flexibility.md",
          "Functional-Components.md",
          "Grid.md",
          "Guidelines.md",
          "Home.md",
          "Hooks.md",
          "Implementation.md",
          "Improvements.md",
          "Initialise-state-using-props.md",
          "Innovation.md",
          "Judgment-and-Decision-making.md",
          "Layout.md",
          "Meetings.md",
          "Mobile-1st.md",
          "Motion.md",
          "Naming-convention.md",
          // "New-proposals.md",
          "Node-NPM.md",
          "Our-Mission-and-Vision.md",
          "Patterns.md",
          "Performance-dashboard.md",
          "Plugins.md",
          "Props-spreading.md",
          "Props.md",
          "QA-and-Review-guidelines.md",
          "README.md",
          "React-Components.md",
          "Release-process.md",
          "Requirements-and-dependencies.md",
          "Reset-and-Normalise.md",
          "Resources.md",
          "Retrocompatibility.md",
          "Roadmap.md",
          "SOLID.md",
          "SUI-Components.md",
          "SUI-Studio.md",
          "SUI-Theme.md",
          "SUI-agreements.md",
          "SUMMARY.md",
          "Slack.md",
          "Source.md",
          "State-mutation.md",
          "State.md",
          "Tech-stack.md",
          "Testing.md",
          "Tokens.md",
          "Troubleshooting.md",
          "Twitch.md",
          "TypeScript.md",
          "UX-and-Technical-Debt.md",
          "Using-index-as-a-key.md",
          "Values-and-Principles.md",
          "Versioning.md",
          "Weekly-streamings.md",
          "classNames.md",
          // "figma",
          "isFitted.md",
        ],
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        id: "tools",
        name: "tools",
        sourceBaseUrl:
          "https://raw.githubusercontent.com/SUI-Components/sui/master/packages/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs/sui-tools/",
        documents: [
          "babel-preset-sui/README.md",
          "sui-bundler/README.md",
          "sui-ci/README.md",
          "sui-component-dependencies/README.md",
          "sui-consents/README.md",
          "sui-critical-css-middleware/README.md",
          "sui-critical-css/README.md",
          "sui-dashboard/README.md",
          "sui-decorators/README.md",
          "sui-domain/README.md",
          "sui-helpers/README.md",
          "sui-hoc/README.md",
          "sui-html-tagger/README.md",
          "sui-i18n/README.md",
          "sui-js-compiler/README.md",
          "sui-js/README.md",
          "sui-lint/Readme.md",
          "sui-mock/README.md",
          "sui-mockmock/README.md",
          // "sui-mono/README.md",
          "sui-pde/README.md",
          "sui-polyfills/README.md",
          "sui-precommit/Readme.md",
          // "sui-react-context/README.md",
          "sui-react-head/README.md",
          "sui-react-initial-props/README.md",
          "sui-react-router/README.md",
          "sui-sass-loader/README.md",
          "sui-ssr/README.md",
          "sui-studio-create/README.md",
          "sui-studio-utils/README.md",
          // "sui-studio/README.md",
          "sui-svg/README.md",
          "sui-test-contract/README.md",
          "sui-test-e2e/README.md",
          "sui-test/README.md",
          "sui-theme/README.md",
        ],
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "components",
        sourceBaseUrl:
          "https://raw.githubusercontent.com/SUI-Components/sui-components/master/components/",
        outDir: "docs/sui-components/",
        documents: [
          "atom/actionButton/README.md",
          "atom/backToTop/README.md",
          "atom/badge/README.md",
          "atom/button/README.md",
          "atom/card/README.md",
          "atom/checkbox/README.md",
          "atom/helpText/README.md",
          "atom/icon/README.md",
          "atom/image/README.md",
          "atom/input/README.md",
          "atom/label/README.md",
          "atom/panel/README.md",
          "atom/pinInput/README.md",
          "atom/popover/README.md",
          "atom/progressBar/README.md",
          "atom/radioButton/README.md",
          "atom/skeleton/README.md",
          "atom/slider/README.md",
          "atom/spinner/README.md",
          "atom/switch/README.md",
          "atom/table/README.md",
          "atom/tag/README.md",
          "atom/textarea/README.md",
          "atom/toast/README.md",
          "atom/tooltip/README.md",
          "atom/upload/README.md",
          "atom/validationText/README.md",
          "behavior/sticky/README.md",
          "hook/usePortal/README.md",
          "layout/grid/README.md",
          "molecule/accordion/README.md",
          "molecule/autosuggest/README.md",
          "molecule/autosuggestField/README.md",
          "molecule/avatar/README.md",
          "molecule/badgeCounter/README.md",
          "molecule/breadcrumb/README.md",
          "molecule/buttonGroup/README.md",
          "molecule/buttonGroupField/README.md",
          "molecule/carousel/README.md",
          "molecule/checkboxField/README.md",
          "molecule/collapsible/README.md",
          "molecule/dataCounter/README.md",
          "molecule/drawer/README.md",
          "molecule/dropdownList/README.md",
          "molecule/dropdownOption/README.md",
          "molecule/field/README.md",
          "molecule/imageEditor/README.md",
          "molecule/inputField/README.md",
          "molecule/inputTags/README.md",
          "molecule/modal/README.md",
          "molecule/notification/README.md",
          "molecule/pagination/README.md",
          "molecule/photoUploader/README.md",
          "molecule/progressSteps/README.md",
          "molecule/quickAction/README.md",
          "molecule/radioButtonField/README.md",
          "molecule/radioButtonGroup/README.md",
          "molecule/rating/README.md",
          "molecule/select/README.md",
          "molecule/selectField/README.md",
          "molecule/selectPopover/README.md",
          "molecule/stepper/README.md",
          "molecule/tabs/README.md",
          "molecule/textareaField/README.md",
          "molecule/thumbnail/README.md",
          "molecule/validationCode/README.md",
          "organism/nestedCheckboxes/README.md",
          "primitive/injector/README.md",
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "SUI",
        logo: {
          alt: "SUI Logo",
          src: "img/logo.png",
        },
        items: [
          {
            label: "SUI Components",
            to: "docs/category/sui-components",
            position: "left",
          },
          {
            label: "Design Ops",
            to: "docs/category/design-ops",
            position: "left",
          },
          {
            label: "SUI Tools",
            to: "docs/category/sui-tools",
            position: "left",
          },
          {
            href: "https://github.com/SUI-Components",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "SUI",
            items: [
              {
                label: "SUI Components",
                to: "docs/category/sui-components",
              },
              {
                label: "SUI Tools",
                to: "docs/category/sui-tools",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitch",
                href: "https://www.twitch.tv/adevintaspaintech",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SUIEngineers",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/SUI-Components",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Adevinta Spain.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "32Y03CDQ8M",

        // Public API key: it is safe to commit it
        apiKey: "e55cf5a068ee7deb55db5fefa049a383",

        indexName: "adevinta",
      },
    }),
};

module.exports = config;
