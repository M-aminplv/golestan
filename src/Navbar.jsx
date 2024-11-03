import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import logo from './assets/logo-fr.png'

import {navBar} from './data';
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = () => { 
		const [Nav,SetNav] = useState(true)
		 const [width, setWidth] = useState(window.innerWidth);

			useEffect(() => {
				const handleResize = () => setWidth(window.innerWidth);
				window.addEventListener("resize", handleResize);
				return () => window.removeEventListener("resize", handleResize);
			}, [width]);
	
  return (
		<div className="fixed top-0 w-full  lg:w-[1600px] mx-auto z-50">
			<img
				src={logo}
				alt="logo"
				className="absolute top-10 left-10  lg:absolute lg:top-14 lg:right-60"
			/>
			<div className="bg-black min-h-20">
				<GiHamburgerMenu
					size={40}
					className=" text-white absolute top-2 right-4 lg:hidden  "
					onClick={() => SetNav(!Nav)}
				/>

				<ul
					className={
						Nav || width >= 1024
							? `flex flex-col lg:flex-row lg: gap-5  p-5 pt-10 justify-center`
							: `hidden`
					}>
					{navBar.map((item) => {
						return (
							<li
								key={item.id}
								className="lg:border-l-2 border-zinc-600 pr-2 p-3 text-white">
								<Link to={`/${item.path}`}>{item.title}</Link>
							</li>
						);
					})}
					{(Nav || width >= 1024) && (
						<li className="items-center justify-center p-3 text-white">EN</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Navbar