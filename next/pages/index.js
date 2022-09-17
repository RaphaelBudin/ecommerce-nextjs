import React from 'react'

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2> Produtos Mais Vendidos </h2>
        <p> Fones de ouvidos de vários modelos </p>
      </div>

      <div>
        {['Produto 1', 'Produto 2'].map((produto)=>produto+" ")}
      </div>

      Footer
    </>
  )
}

export default Home;