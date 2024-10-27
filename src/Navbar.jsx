import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from './assets/logo-fr.png'

import {navBar} from './data';
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = () => { 
		const [Nav,SetNav] = useState(true)
	
  return (
		<div className="fixed top-0 w-full  lg:w-[1600px] mx-auto z-50">
			<img
				src={logo}
				alt="logo"
				className="absolute top-10 left-10  lg:absolute lg:top-14 lg:right-60"
			/>
			<div className="bg-black min-h-20">
				<GiHamburgerMenu size={40} className=' text-white absolute top-2 right-4  ' onClick={()=>SetNav(!Nav)}/>
			
					<ul className='flex flex-col lg:flex-row lg: gap-5  p-5 pt-10 justify-center'>
						{navBar.map((item) => {
							
							return (
								<li
									key={item.id}
									className={Nav?`lg:border-l-2 border-zinc-600 pr-2 p-3 text-white`:`hidden`}>
									<Link to={`/${item.path}`}>{item.title}</Link>
								</li>
							);
						})}
						{Nav&& <li className="items-center justify-center p-3 text-white">EN</li>}
					</ul>
				
			</div>
		</div>
	);
}

export default Navbar