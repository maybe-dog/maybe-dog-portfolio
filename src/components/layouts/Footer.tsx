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
        <a href='https://zenn.dev/maybe_dog' className='mx-2'>
          <svg
            role='img'
            width='32'
            height='32'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill='#3EA8FF'
          >
            <path d='M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z' />
          </svg>
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
