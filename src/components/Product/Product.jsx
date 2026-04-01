import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Product = ({pdct, setCardData, cardData,}) => {
  const {name, period, price, tag, description, features, icon} = pdct;

  const handleClick = () => {
    toast("Successfully Done!");
  };

  const [clickCard, setClickCard] = useState('Buy Now');


  return (
    <div className='flex flex-col'>
      <div className={` border border-gray-300 p-5 rounded-lg grow`}>
        <div className='flex justify-between'>
          <p></p>
          <p className={`${tag === 'Best Seller' && 'bg-amber-100 px-4 py-1.5 rounded-full text-amber-500 font-bold border border-amber-300'} ${tag === 'Popular' && 'bg-[#E1E7FF] px-4 py-1.5 rounded-full text-purple-500 font-bold border border-blue-300'} ${tag === 'New' && 'bg-green-100 px-4 py-1.5 rounded-full text-green-500 font-bold border border-green-300'}`}>{tag}</p>
        </div>
        <span className='text-3xl border border-gray-200 rounded-full p-1.5'>{icon}</span>
        <h1 className='mt-8 mb-4 text-3xl font-bold'>{name}</h1>
        <p>{description}</p>
        <p><span className='text-2xl font-bold'>${price}</span>/{period}</p>
        <div>
          <p>{features[0]}</p>
          <p>{features[1]}</p>
          <p>{features[2]}</p>
        </div>

        <button onClick={()=> 
        {
          setClickCard('Add Card',); 
          handleClick(); 
          setCardData([...cardData, pdct])
        }
      } 
          className={`btn btn-ghost rounded-full w-full mt-5 ${clickCard === 'Buy Now' ? 'text-white' : 'text-sky-500'} bg-linear-to-r from-[#4F39F6] to-[#9514FA]`}>{clickCard}
        </button>
      </div>
    </div>
  )
}

export default Product
