
const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../projects/leods/src/**/*.stories.mdx',
    '../projects/leods/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (baseConfig, options) => {
    const { module = {} } = baseConfig;
    
    // Remove original less loader
    baseConfig.module.rules = baseConfig.module.rules.filter(
      f => f.test.toString() !== '/\\.less$/'
    );

    const newConfig = {
      ...baseConfig,
      module: {
        ...module,
        rules: [...(module.rules || [])],
      },
    };
    
    // ...

    // Less
    newConfig.module.rules.push({
      test: /\.less$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        },
      ],
    });

    return newConfig;
  },
};
