import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import avngerPhoto from "../../assets/slider/herophoto.jpg";
// import slider_2 from "../../assets/slider/slider_2.jpg";
// import slider_3 from "../../assets/slider/slider_3.jpg";

const Hero = () => {
	return (
		<>
			<div
				className=" hero mt-6 md:h-[80vh] "
				style={{ backgroundImage: `url(${avngerPhoto})` }}
			>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content  text-neutral-content">
					<div className="pr-[500px]">
						<h1 className="mb-5 text-white text-7xl font-bold">
							{" "}
							Collection of <br /> Avengers Toys
						</h1>

						<button className="btn rounded-md bg-[#F9AA01] border-none text-lg font-bold text-[#1D1427] btn-primary">
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
