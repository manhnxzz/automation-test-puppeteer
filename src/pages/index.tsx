import Head from 'next/head';
import Image from 'next/image';
import UserModal from '../components/UserModal';

import styles from '@/pages/index.module.css';
import React from 'react';
import { Button } from 'react-bootstrap';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <h1
          className={`${styles.title} header`}
          id='header'
          style={{ fontFamily: 'Roboto' }}
        >
          Welcome to Next.js!
        </h1>

        <br />
        <p className={styles.description}>
          Get started by editing <code>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <Button className='open-modal' onClick={onClick}>
            Launch demo modal
          </Button>
          <UserModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
