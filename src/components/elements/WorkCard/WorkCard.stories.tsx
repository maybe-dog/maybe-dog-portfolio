import { Meta, StoryObj } from '@storybook/react';
import WorkCard from './WorkCard';

export default { component: WorkCard } as Meta<typeof WorkCard>;

export const Default: StoryObj<typeof WorkCard> = {
  args: {
    image: '/github-icon.svg',
    fit: 'contain',
    title: 'ここにタイトル',
    description: 'ここに説明文',
    link: {
      url: 'https://example.com',
      text: 'リンク',
    },
  },
};
