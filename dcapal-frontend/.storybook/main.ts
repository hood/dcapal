import { StorybookConfig } from '@storybook/react-vite';
 
const config: StorybookConfig = {
  // ...
  // framework: '@storybook/react-webpack5', 👈 Remove this
  // 👈 Add this
  framework: '@storybook/react-vite',


   "addons": [
    '@storybook/experimental-addon-test',
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook"
  ],
};
 
export default config;
