import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const links = [
  { name: 'Home', to: '/' },
  { name: 'Works', to: '/works' },
  { name: 'Timeline', to: '/timeline' },
];

export default function Header(): React.JSX.Element {
  return (
    <header className='shadow bg-gray-100 dark:bg-neutral-700 py-4 px-8'>
      <div className='h-16 mx-auto px-5 flex items-center justify-between'>
        <a className={'text-2xl dark:text-neutral-400 hover:text-cyan-500 transition-colors cursor-pointer'}>
          おそらく犬
        </a>
        <ul className='flex items-center gap-5'>
          {links.map((link) => (
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
