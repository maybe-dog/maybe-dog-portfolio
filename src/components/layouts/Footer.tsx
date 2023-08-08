// TODO icons8へのリンクを貼る

import React from 'react';

export default function Footer(): React.JSX.Element {
  return (
    <footer className='bg-white dark:bg-neutral-700 mt-auto w-screen'>
      <div className='pt-2 text-center text-neutral-700 dark:text-neutral-200'>
        © 2023 Copyright:
        <a className='text-neutral-700 dark:text-neutral-400'>maybe-dog</a>
      </div>
      <div className='pb-2 text-center text-neutral-700 dark:text-neutral-200'>
        icons by&nbsp;
        <a className='text-neutral-700 dark:text-neutral-400' href='https://icons8.jp'>
          icons8
        </a>
      </div>
    </footer>
  );
}
