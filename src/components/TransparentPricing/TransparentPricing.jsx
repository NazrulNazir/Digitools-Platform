import React from 'react'
import Product from '../Product/Product'
import { FaCheck } from 'react-icons/fa'
import { Bounce, toast } from 'react-toastify'

const transparent = [
    {
"id": 1,
"name": "Starter",
"description": "Perfect for getting started",
"price": 0,
"period": "Month",
"tag": "",
"tagType": "",
"features": [
    {"name": "Access to 10 free tools"},
    {"name": "Basic templates"},
    {"name" : "Community support"},
    {"name" : "1 project per month"}
],
"btn": "Get Started Free"
},
{
"id": 2,
"name": "Pro",
"description": "Best for professionals",
"price": 29,
"period": "Month",
"tag": "Most Popular",
"tagType": "most-popular",
"features": [
    {"name" : "Access to all premium tools"},
    {"name" : "Unlimited templates"},
    {"name" : "Priority support"},
    {"name" : "Unlimited projects"},
    {"name" : "Cloud sync"},
    {"name" : "Advanced analytics"}  
],
"btn": "Start Pro Trial"
},
{
"id": 3,
"name": "Enterprise",
"description": "For teams and businesses",
"price": 99,
"period": "Month",
"tag": "",
"tagType": "",
"features": [

    {"name" : "Everything in Pro"},
    {"name" : "Team collaboration"},
    {"name" : "Custom integrations"},
    {"name" : "Dedicated support"},
    {"name" : "SLA guarantee"},
    {"name" : "Custom branding"}
],
"btn" : "Contact Sales" 
}

]
const TransparentPricing = () => {

const buyProduct = ()=> {
        toast.success('🎉 You are Welcome..!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
    }


  return (
    <div className='mb-25 container mx-auto px-5 sm:px-0'>
        <div className='mb-15'>
            <h2 className='text-4xl md:text-5xl font-bold text-center'>Simple, Transparent Pricing</h2>
            <p className={`text-neutral-500 text-center mt-3`}>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
            {
            transparent.map(item => {
                return <div className='flex flex-col h-full'>
                    <div className='relative flex flex-col h-full'>
                        <div className={`absolute left-1/2 -translate-x-1/2 -top-4 px-6 py-2 rounded-2xl ${item.tag === 'Most Popular' && 'bg-amber-400 text-gray-900 font-bold'}`}>{item.tag}</div>
                        <div className={`p-5 pb-8 rounded-xl flex flex-col h-full
                            ${item.tag === 'Most Popular' 
                            ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]' 
                            : 'bg-base-300'} `}>
                            <div className=''>
                                <p className={`text-xl mt-3 font-bold ${item.tag === 'Most Popular' ? 'text-gray-100' : 'text-neutral-900'}`}>{item.name}</p>
                                <p className={`${item.tag === 'Most Popular' ? 'text-gray-300' : 'text-neutral-500'}`}>{item.description}</p>
                            </div>
                            <div className='my-5'>
                                <p className={`${item.tag === 'Most Popular' ? 'text-gray-300' : 'text-neutral-500'}`}><span className={`text-2xl font-bold ${item.tag === 'Most Popular' ? 'text-white' : 'text-neutral-900'}`}>${item.price}</span>/{item.period}</p>
                            </div>
                            <div className=''>
                                {
                                    item.features.map(product => <div className='flex gap-3 items-center'>
                                        <p className={`${item.tag !== 'Most Popular' ? 'text-green-700' : 'text-neutral-300'}`}><FaCheck/></p>
                                        <p className={`${item.tag === 'Most Popular' ? 'text-gray-300' : 'text-neutral-500'}`}>{product.name}</p>
                                    </div>)
                                }
                            </div>
                            <button onClick={()=>buyProduct()} className={`px-3 w-full mt-8 py-2 ${item.tag === 'Most Popular' ? 'text-purple-700' : 'text-white'} ${item.tag === 'Most Popular' ? 'bg-white' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA]'} rounded-full cursor-pointer font-bold`}>{item.btn}</button>
                        </div>
                    </div>
                </div>
            })
        }
        </div>
        
    </div>
  )
}

export default TransparentPricing
