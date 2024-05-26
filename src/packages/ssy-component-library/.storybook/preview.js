/** @type { import('@storybook/react').Preview } */
import 'ssy-theme/dist/styles.css';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
