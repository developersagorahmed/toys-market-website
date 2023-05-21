import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<div>
			<div className="container my-11 mx-auto">
				<h1 className=" rounded-lg  mb-5 bg-black p-6 text-center text-5xl font-bold underline  text-[#F9AA01]">
					Our Location
				</h1>
				<div className="mb-6 pb-6 chef-cart  mx-auto" data-aos="fade-up-left">
					<div className="bg-[black] text-white card lg:card-side shadow-xl">
						<figure>
							<img
								className="w-full h-[400px] rounded-xl ml-6"
								src="https://i.ibb.co/k2rBVmY/342544073-449714604039560-3861969621335099144-n.png"
								alt="Album"
							/>
						</figure>

						<div className="w-8/12 card-body">
							<h2 className="text-3xl underline card-title text-[#F9AA01]">
								America
							</h2>
							<p className="mt-6 grow-0 mb-5 ">
								<h2 className="underline card-title font-bold text-[#F9AA01]">
									Testy Food Restaurant Location Details
								</h2>
								<p className="mt-5">
									Welcome to our Testy Food restaurant! Here are the detailed
									location information of our store:
								</p>
								<p className="mt-5">
									<span className="font-bold text-[#F9AA01]">Address : </span>{" "}
									No. 99 Jianguo Road, Chaoyang District, Beijing, China
								</p>
								<p className="mt-3">
									<span className="font-bold text-[#F9AA01]">
										Phone Number :{" "}
									</span>{" "}
									010-12345678
								</p>
								<p className="mt-3">
									<span className="font-bold text-[#F9AA01]">
										Business Hours :{" "}
									</span>{" "}
									Monday-Sunday, 10:00 am - 9:00 pm
								</p>
								<p className="mt-4">
									<h2 className="underline card-title font-bold text-[#F9AA01]">
										Our Location :
									</h2>
									Our store is located on Jianguo Road, just a 5-minute walk
									from the nearest subway station, which is very convenient. We
									offer a variety of delicious pizzas and other dishes for you
									to enjoy. If you have any questions or concerns, please feel
									free to contact us at the phone number listed above. Thank you
									for choosing our restaurant, and we look forward to serving
									you!
								</p>
							</p>
							<div className="">
								<div className="mt-12 flex "></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h1 className=" rounded-lg  mb-5 bg-black p-6 mx-auto w-2/4 text-center text-5xl font-bold underline  text-[#F9AA01]">
				About Us
			</h1>
			<div
				data-aos="fade-down-right"
				className="pb-14 hero min-h-screen bg-white"
			>
				<div className="hero-content flex-col lg:flex-row">
					<img
						src="https://i.ibb.co/ZKxqwWZ/about-7.jpg"
						className="md:max-w-2xl rounded-lg shadow-2xl mr-10"
					/>
					<div>
						<h1 className="text-5xl font-bold underline aboutTitle">
							ABOUT US
						</h1>
						<h4 className="py-6 aboutSub ">
							Welcome to Dina, a modern restaurant with a focus on premium food
							tastes
						</h4>
						<p className="aboutDes">
							We invite you to celebrate our restaurant's delicious recipes
							whether you are here for a business lunch or dinner. Discover new
							tastes and inspired recipes from all over the world.
						</p>
						<button className="btn rounded-md bg-[#F9AA01] text-[black] font-bold hover:text-white">
							About Us
						</button>
					</div>
				</div>
			</div>
			<div>
				<div data-aos="zoom-in" className="container">
					<section className="  mb-24 pt-5">
						<h2 className="text-[#F9AA01] text-3xl font-bold text-center mb-10 underline">
							Trusted By
						</h2>
						<div className="flex items-center  gap-5 ui-container flex-wrap">
							<img
								className="w-[200px] mt-6 md:mt-auto mx-auto"
								src="https://i.ibb.co/pZLchg7/pngfind-com-flipkart-logo-png-3288902.png"
								alt=""
							/>
							<img
								className="w-[200px] mt-6 md:mt-auto mx-auto"
								src="https://i.ibb.co/wsfLg56/Shopee-logo-PNG1.png"
								alt=""
							/>
							<img
								className="w-[200px] mt-6 md:mt-auto mx-auto"
								src="https://i.ibb.co/cJ98XHD/Best-Buy-logo-PNG18.png"
								alt=""
							/>
							<img
								className="w-[200px] mt-6 md:mt-auto mx-auto"
								src="https://i.ibb.co/sVrfbwB/kisspng-ebay-sales-retail-customer-e-commerce-ebay-5b26ddca3ecb21-9701226115292738022572.png"
								alt=""
							/>
							<img
								className="w-[200px] mt-6 md:mt-auto mx-auto"
								src="https://i.ibb.co/dWgXRhK/Daco-5848619.png"
								alt=""
							/>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
