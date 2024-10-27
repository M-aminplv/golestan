import React from 'react'
import { products } from './data';
import Navbar from './Navbar';
import Footer from './Footer';

const Products= () => {
  return <div className="container mt-[108px]">
    <Navbar/>
    {
      products.map((item) =>{
        return (
					<div
						key={item.id}
						id="Product"
						className="flex flex-col justify-center items-center  p-10   ">
              <div className='flex flex-col items-center justify-center sm:flex-row product-reverse gap-10 lg:gap-20 ' >

						<img
							src={item.img}
							alt={item.title}
							className="w-[150px] h-[180px] sm:w-auto sm:h-auto "
              />
              <div className='gap-5 w-full flex flex-col justify-center items-center'>

						<h2 className='text-2xl text-red-500 p-5 mx-auto'>{item.title}</h2>
						<p className='text-xl mx-auto'>{item.desc}</p>
            <button className='border bg-white text-gray-400 rounded p-2 mt-5 mx-auto' >اطلاعات بیشتر</button>
              </div>
              </div>
					</div>
				);
      })
    }
    <Footer/>
  </div>;
}

export default Products