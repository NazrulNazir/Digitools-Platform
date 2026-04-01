import { use } from "react";
import { useState } from "react"
import Card from "../Card/Card";
import Products from "./Products";

const Content = ({cardPromise, setCardLength, cardLength}) => {

const [isSelected, setIsSelected] = useState('avilable');

const products = use(cardPromise);

const [cardData, setCardData] = useState([]);


  return (
    <div className="container mx-auto px-6 sm:px-0">
      <div className='flex flex-col gap-4 justify-center items-center text-center'>
        <h1 className='text-4xl sm:text-5xl text-gray-800 font-bold'>Premium Digital Tools</h1>
        <p className='mb-4'>Choose from our curated collection of premium digital products designedto <br /> boost your productivity and creativity.</p>
        <div>
            <button onClick={()=>setIsSelected('avilable')} className={`btn btn-goest rounded-full ${isSelected === 'avilable' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''} `}>Products</button>
            
            <button onClick={()=> setIsSelected('selected')} className={`btn btn-goest rounded-full ${isSelected == 'selected' ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''} px-7`}>Cart ({cardLength})</button>
            
        </div>
      </div>

      {isSelected === 'avilable' ? (<Products products = {products} setCardData = {setCardData} cardData = {cardData} setCardLength = {setCardLength}></Products>) : (<Card cardData = {cardData} setCardLength = {setCardLength}></Card>)}
    </div>
  )
}

export default Content
