module.exports = {
  stories: ['../packages/**/*.stories.@(ts|tsx|mdx)','../native-app/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false, // type-check stories during Storybook build
  },
};
