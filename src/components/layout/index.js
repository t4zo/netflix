// import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title = 'Netflix' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* <header>
        <nav>
          <Link href='/'>
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href='/users'>
            <a>Users List</a>
          </Link>{' '}
          | <a href='/api/users'>Users API</a>
        </nav>
      </header> */}
      {children}
      {/* <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer> */}
    </>
  );
}