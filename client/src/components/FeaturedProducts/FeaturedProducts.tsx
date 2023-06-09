import { useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Card, IProductItem } from '../Card/Card';
import styles from './FeaturedProducts.module.scss'

export const FeaturedProducts = ({ type }: { type: string }) => {
  const { data, loading, error } = useFetch<IProductItem[]>(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  useEffect(() => console.log(data), [data])

  return (
    <div className={styles.featuredProducts}>
      <div className={styles.top}>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className={styles.bottom}>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};