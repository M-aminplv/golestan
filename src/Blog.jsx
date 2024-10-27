import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { blog } from "./data";

const Blog = () => {
	return (
		<>
			<div className="container ">
				<Navbar />
				<div className="w-full lg:w-[1000px] mx-auto mt-[108px] pt-20 ">
					<h1 className="text-red-500 font-bold text-2xl mb-24   ">وبلاگ</h1>
					<div
						className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-around sm:justify-center
     items-center
    mx-auto gap-2 gap-y-20 max-w-[90%]
    lg:max-w-[1000px]">
						{blog.map((item) => {
							return (
								<div
									key={item.id}
									className=" w-[90%] sm:w-auto h-[576px] shadow-2xl rounded relative mx-auto px-2">
									<img
										src={item.img}
										alt={item.title}
										className="w-96 rounded-t h-[292px] object-cover"
									/>
									<h2 className="text-red-500 m-5 mt-10 text-xl">
										{item.title}
									</h2>
									<p className="w-[90%] mx-auto">{item.desc}</p>
									<button className="mt-5 mx-10 px-3 py-2 rounded border border-zinc-400 absolute right-3 bottom-3 hover:bg-red-500 hover:text-white ">
										ادامه مطلب
									</button>
								</div>
							);
						})}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Blog;
