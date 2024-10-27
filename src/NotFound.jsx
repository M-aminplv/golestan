import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import Navbar from './Navbar';
import Footer from './Footer';


const NotFound = () => {
  return (
    <div className='container'>
      <Navbar />
		<div className="grid place-items-center  mx-auto mt-[108px] my-60 ">
      <div className='w-1\2 h-1/2 mx-auto my-20'>

			<h1 className='text-2xl lg:text-3xl mb-3 flex justify-center items-center '>صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
			<button className="border-none hover:text-green-400  flex justify-center items-center text-xl mx-auto">
				<Link to="/">صفحه اصلی</Link>
				<FaChevronLeft />
			</button>
      </div>
		</div>
    <Footer/>
    </div>
	);
}

export default NotFound