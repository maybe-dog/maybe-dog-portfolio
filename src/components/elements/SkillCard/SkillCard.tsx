import React from 'react';
import Image from 'next/image';

export type Skill = {
  name: string; // スキル名
  icon: string; // アイコンのパス
};

export const SkillCard = (skillProps: Skill): React.JSX.Element => {
  return (
    <div className='w-24 rounded border-white bg-gray-200 dark:bg-neutral-700 shadow-lg'>
      <Image
        className='w-full p-2'
        src={skillProps.icon}
        alt={skillProps.name}
        width='32'
        height='32'
      />
      <div className='py-2'>
        <div className='font-bold text-center dark:text-neutral-400'>
          {skillProps.name}
        </div>
      </div>
    </div>
  );
};
