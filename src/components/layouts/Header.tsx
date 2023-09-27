import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  links: {
    name: string;
    to: string;
  }[];
};

export default function Header(props: Props): React.JSX.Element {
  return (
    <header className='shadow bg-gray-100 dark:bg-neutral-700 py-4 px-8'>
      <div className='mx-auto px-2 my-2 sm:flex'>
        <div className='flex flex-row'>
          <Link
            href='/'
            className={
              'text-2xl dark:text-neutral-400 hover:text-cyan-500 transition-colors cursor-pointer'
            }
          >
            おそらく犬
          </Link>
          <Image
            src='/maybe-dog-icon.jpg'
            alt='maybe-dog-icon'
            width='32'
            height='32'
            className='rounded-full mx-1'
          />
        </div>
        <ul className='flex items-center gap-5 ml-auto'>
          {props.links &&
            props.links.map((link) => (
              <li key={link.name}>
                <Link href={link.to} className={styles.textLink}>
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
}
