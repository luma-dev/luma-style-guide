import Link from 'next/link';
import type { FC } from 'react';
import Layout from '../components/Layout';

const IndexPage: FC = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
