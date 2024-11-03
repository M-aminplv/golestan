import React from 'react'
import img1 from "./assets/footer-icon1.png";
import img2 from "./assets/footer-icon2.png";
import img3 from "./assets/footer-icon3.png";
import img4 from "./assets/footer-icon4.png";
import { footerA, footerH, footerT, footerTB } from './data';
import {
	FaInstagram,
	FaFacebookF,
	FaLinkedinIn,
	FaTelegramPlane,
} from "react-icons/fa";
import { SiAparat } from "react-icons/si";



const Footer = () => {
  return (
		<footer>
			<div className="flex items-center justify-center mt-10 gap-6 text-white  ">
				<FaInstagram
					size={50}
					className="bg-zinc-300 rounded-full p-1 hover:bg-red-500"
				/>
				<FaFacebookF
					size={50}
					className="bg-zinc-300 rounded-full p-1 hover:bg-blue-600"
				/>
				<FaLinkedinIn
					size={50}
					className="bg-zinc-300 rounded-full p-1 hover:bg-blue-400"
				/>
				<FaTelegramPlane
					size={50}
					className="bg-zinc-300 rounded-full p-1 hover:bg-blue-400"
				/>
				<SiAparat
					size={50}
					className="bg-zinc-300 rounded-full p-1 hover:bg-pink-500"
				/>
			</div>
			<div className="container  bg-black mt-10">
				<div className="w-full h-7 bg-red-600"></div>
				<div
					className="grid grid-cols-1 
      sm:grid-cols-2 lg:grid-cols-4
      justify-center items-center mx-auto w-full lg:w-[1000px] text-white">
					<div className="mx-auto">
						<img src={img1} alt="icon" />
						<div className="line" />
						<h3 className="p-5 text-xl">چای گلستان</h3>
						<div className="line" />
						<ul>
							{footerT.map((item) => {
								return <li key={item.id}>{item.title}</li>;
							})}
						</ul>
					</div>
					<div className="mx-auto">
						<img src={img4} alt="icon" />
						<div className="line" />
						<h3 className="p-5 text-xl">تی بگ گلستان</h3>
						<div className="line" />
						<ul>
							{footerTB.map((item) => {
								return <li key={item.id}>{item.title}</li>;
							})}
						</ul>
					</div>
					<div className="mx-auto">
						<img src={img3} alt="icon" />
						<div className="line" />
						<h3 className="p-5 text-xl">ادویه گلستان</h3>
						<div className="line" />
						<ul>
							{footerA.map((item) => {
								return <li key={item.id}>{item.title}</li>;
							})}
						</ul>
					</div>
					<div className="mx-auto">
						<img src={img2} alt="icon" />
						<div className="line" />
						<h3 className="p-5 text-xl">حبوبات گلستان</h3>
						<div className="line" />
						<ul>
							{footerH.map((item) => {
								return <li key={item.id}>{item.title}</li>;
							})}
						</ul>
					</div>
				</div>
				<div className="text-white flex flex-col pt-20 pb-10 ">
					<h2 className="mx-auto">
						All Right Reserved Golestan Company 2022-2025
					</h2>
					<p className="mx-auto">Redesign By: Amin Pahlavan</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer