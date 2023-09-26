import { Meta, StoryObj } from '@storybook/react';
import TimelineCard from './TimelineCard';

export default { component: TimelineCard } as Meta<typeof TimelineCard>;

export const Default: StoryObj<typeof TimelineCard> = {
  args: {
    title: 'ここにタイトル',
    description: 'ここに説明文',
    tags: ['タグ1', 'タグ2'],
    date: {
      year: 2000,
      month: 1,
      day: 1,
    },
    link: {
      url: 'https://example.com',
      text: 'リンク',
    },
  },
};
