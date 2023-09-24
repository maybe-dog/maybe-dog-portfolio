import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

export default { component: Header } as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  args: {
    links: [
      { name: 'Home', to: '/' },
      { name: 'Works', to: '/works' },
      { name: 'Timeline', to: '/timeline' },
    ],
  },
};
