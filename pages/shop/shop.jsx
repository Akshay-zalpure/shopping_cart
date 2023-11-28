import React from 'react';
import { PRODUCTS } from "../../product";
import { Product } from "./product";

const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1>Alice Tech Shop</h1>
      </div>
      <div className="products">{PRODUCTS.map((product) => (<Product />))}</div>
    </div>
  )
}

export default Shop
