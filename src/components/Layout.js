import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout({ children, title = 'ShopHub - E-Commerce Store' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Your favorite online shopping destination" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 OnlineStore. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}