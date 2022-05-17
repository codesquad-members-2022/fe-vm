const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-controls',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules', 'styles'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@lib': path.resolve(__dirname, '../src/lib'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    };
    return config;
  },
};
