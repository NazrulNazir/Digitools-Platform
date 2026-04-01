import React, { PureComponent } from 'react'
import Product from '../Product/Product'

const Products = ({products, setCardData, cardData, setCardLength}) => {
    setCardLength(cardData.length)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
      {products.map(pdct => <Product pdct = {pdct} key={pdct.id} setCardData = {setCardData} cardData = {cardData}></Product>)}
    </div>
  )
}

export default Products
