// TODO icons8へのリンクを貼る

import React from 'react';
import Image from 'next/image';

export default function Footer(): React.JSX.Element {
  return (
    <footer className='border-t-2 bg-gray-100 dark:bg-neutral-700 mt-auto w-auto'>
      <div className='my-2 flex justify-center'>
        <a href='https://twitter.com/maybe_dog_tech' className='mx-2'>
          <Image src='x-icon.svg' alt='X' width='32' height='32' />
        </a>
        <a href='https://github.com/maybe-dog' className='mx-2'>
          <Image src='github-icon.svg' alt='GitHub' width='32' height='32' />
        </a>
      </div>
      <div className='my-1 text-center text-neutral-700 dark:text-neutral-200'>
        © 2023 Copyright:
        <a className='text-neutral-700 dark:text-neutral-400'>maybe-dog</a>
      </div>
      <div className='my-1 text-center text-neutral-700 dark:text-neutral-200'>
        icons by&nbsp;
        <a className='text-neutral-700 dark:text-neutral-400' href='https://icons8.jp'>
          icons8
        </a>
      </div>
    </footer>
  );
}
