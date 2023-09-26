import { Meta, StoryObj } from '@storybook/react';
import SimpleTimeline from './SimpleTimeline';

export default { component: SimpleTimeline } as Meta<typeof SimpleTimeline>;

export const Default: StoryObj<typeof SimpleTimeline> = {
  args: {},
};
