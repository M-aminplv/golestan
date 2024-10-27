import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import tea from './assets/tea-pic1.png'
import Footer from './Footer';

function App() {

  

  return (
		<>
			<div className="container">
				<Navbar />
				<div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-64  bg-slate-200 mt-[108px] ">
					<div className="max-w-[450px] mt-10">
						<h1 className="text-red-700 text-2xl lg:text-4xl mb-6 text-nowrap">
							قرعه‌کشی مصرف‌کنندگان گلستان
						</h1>
						<h3 className="text-xl lg:text-2xl mb-10 text-gray-500">
							قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
						</h3>
						<p className="w-auto leading-8 text-gray-400">
							هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد
							قرعه کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال
							1403شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
							است.
						</p>
						<button className="bg-white text-slate-500 p-3 rounded-md m-10 border border-gray-300 hover:bg-red-500 hover:text-white">
							اطلاعات بیشتر
						</button>
					</div>
					<img src={tea} alt="tea" className="max-w-[350] mt-10" />
				</div>
				<hr className="bg-slate-400 w-full h-[2px] m-5 mx-auto" />
				<div className="w-full lg:w-[680px] mx-auto">
					<h2 className="text-red-500 text-2xl mb-10 mx-3 ">معرفی گلستان</h2>
					<p className="leading-8 text-xl mb-10 mx-3 ">
						آنچه که امروز با نام مجموعه
						<span className="text-red-500"> گلستان </span> می‌شناسیم در سال 1329
						بنیان نهاده شد. زمانی که شرکت گلستان فعالیت خود را با بسته‌بندی و
						توزیع چای پاکتی آغاز کرد. با گذر زمان و رشد اقتصاد کشور، نهال
						<span className="text-red-500"> گلستان </span> به تدریج تقویت شد و
						شاخ و برگ گرفت. فعالیت‌های «گلستان» با تهیه، تولید و بسته‌بندی
						بهترین محصولات غذایی گسترش پیدا کرد.
						<span className="text-red-500">گلستان </span> پس از سال‌ها تلاش
						همچنان می‌کوشد تا به کمک تجربه‌های اندوخته شده در این سال‌ها
						کالاهایی قابل اعتماد و با کیفیت تولید نماید
					</p>
					<p className="leading-8 text-xl mb-20 mx-3">
						هدفمندی و برنامه‌ریزی موثر، ایمان و عزم راسخ برای دستیابی به اهداف
						تعیین شده، به کار گیری همکاران مجرب و دلسوز، استفاده از روش های نوین
						بازاریابی و مشتری محوری از جمله عوامل مهم در استراتژی{" "}
						<span className="text-red-500"> شرکت گلستان </span>
						است
					</p>
					<h2 className="text-red-500 text-2xl mb-8 mx-3">محصولات گلستان</h2>
					<p className="leading-8 text-xl mx-3">
						<span className="text-red-500">نام تجاری گلستان</span> قدمتی به
						اندازه عمر شرکت گلستان دارد. گلستان ممتازترین محصولات خود را با این
						نام تجاری عرضه می‌کند. مصرف‌کنندگان محصولات گلستان همواره از این نام
						تجاری خاطره محصولاتی ممتاز و منحصر بفرد دارند و با اطمینان از نهایت
						کیفیت این نام تجاری حمایت می‌کنند.
					</p>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App
