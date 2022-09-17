import React from 'react';
import {
  Product,
  FooterBanner,
  HeroBanner
} from '../components/index';
import {client} from '../lib/client';

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  };
}


const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]}/>
      <div className='products-heading'>
        <h2> Produtos Mais Vendidos </h2>
        <p> Fones de ouvidos de vários modelos </p>
      </div>

      <div className='products-container'>
        {products.map(product=> 
          <Product key={product._id} product={product}/>)}
      </div>

      <FooterBanner/>
    </>
  )
}

export default Home;