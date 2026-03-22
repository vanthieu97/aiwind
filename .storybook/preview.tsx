import type { Preview } from '@storybook/react';
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      description: 'Light or dark surface (matches vanthdev html.dark)',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = (context.globals.theme as string) === 'dark' ? 'dark' : 'light';
      const isDark = theme === 'dark';
      return (
        <div
          className={isDark ? 'dark' : ''}
          style={{
            minHeight: '240px',
            width: '100%',
            padding: '2rem',
            background: isDark ? '#0a0f1a' : '#faf8f5',
            color: isDark ? '#e2e8f0' : '#1a1a1a',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
