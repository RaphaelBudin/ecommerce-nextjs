import React from 'react'
import Link from 'next/Link';
import {urlFor} from '../lib/client';

const Product = ({product: {image, title, slug, price, details}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <h1 className='product-name'> {title} </h1>
          <p> {details} </p>
          <h3 className='product-price'> {`\$${price}`} </h3>
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250} 
            className="product-image"
          />
          <br/>
          <button className=''  > Comprar Agora </button>
        </div>
      </Link>
    </div>
  )
}

export default Product