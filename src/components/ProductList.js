import React from 'react';
import Product from "./Product";


export default function ProductList({products}) {

  if(products.length === 0){
    return (
      <div className ="empty-search">
        <h3> there is no product match your search</h3>
      </div>
    )
  }

  return (
    <section className="productslist">
      <div className = "productslist-center">
        {
          products.map(item => {
            return <Product key = {item.id} product={item} />
          })
        }
      </div>

    </section>
    

  )
}
  