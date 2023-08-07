import { ComponentStoryObj, Meta, StoryObj } from '@storybook/react';
import { Skill, SkillCard } from './SkillCard';

export default { component: SkillCard } as Meta<typeof SkillCard>;

export const Default: StoryObj<typeof SkillCard> = {
  args: {
    name: 'Python',
    icon: '/icons8-python.svg',
  },
};
