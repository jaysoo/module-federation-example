import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Ui } from '@acme/ui'
import styles from './app.module.css';

const About = React.lazy(() => import('about/Module'));
const Blog = React.lazy(() => import('blog/Module'));
const Store = React.lazy(() => import('store/Module'));

export function App() {
  return (
    <>
      <nav className={styles['nav']}>
        <h1 className={styles['title']}>Acme Inc.</h1>
        <Link className={styles['link']} to="/">Home</Link>
        <Link className={styles['link']} to="/about">About</Link>
        <Link className={styles['link']} to="/blog">Blog</Link>
        <Link className={styles['link']} to="/store">Store</Link>
      </nav>
      <React.Suspense fallback={null}>
        <main className={styles['outlet']}>
          <Routes>
            <Route path="/" element={<><h1>Home</h1><Ui/></>} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
      </React.Suspense>
    </>
  );
}

export default App;
