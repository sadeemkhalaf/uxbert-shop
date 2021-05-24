import { getProducts } from '@/api';
import ProductTile from '@/components/ProductTile';
import { Product } from '@/models/product';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home(data: any) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsList = data
      ? (Object.values(data).slice(0, 99) as Product[])
      : [];
    setProducts(productsList);
  }, [data]);

  return (
    <div className="py-0 px-2 flex flex-col justify-center items-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-col items-center px-2 py-0">
        <h1 className={styles.title}>
          Welcome to <a className="no-underline">SHOP. SHIP.</a>
        </h1>

        <p className={styles.description}>This is not an official starter!</p>
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {products &&
              products.map(({ title, thumbnailUrl }, i) => (
                <ProductTile pictureUrl={thumbnailUrl} title={title} price={280} key={i} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

Home.getInitialProps = async (data: any) => {
  const res = await getProducts();
  const json = await res.json();
  return json;
}
