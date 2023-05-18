import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import slider_1 from "../../assets/slider/slider_1.jpg";
import slider_2 from "../../assets/slider/slider_2.jpg";
import slider_3 from "../../assets/slider/slider_3.jpg";

const Hero = () => {
	return (
		<>
			<div className="mt-8 rounded-md  carousel h-[80vh] w-full">
				<div id="slide1" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage: `url("${slider_1}")`,
						}}
					>
						<div className="hero-overlay"></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className=" text-5xl text-white font-bold">
									High-Octane Collection of Transformer Toys!"
								</h1>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage: `url("${slider_2}")`,
						}}
					>
						<div className="hero-overlay "></div>
						<div className="hero-content text-left space-y-3 text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 text-5xl text-white font-bold">
									Epic Collection of Avengers Toys!
								</h1>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<div
						className="hero min-h-screen"
						style={{
							backgroundImage: `url("${slider_3}")`,
						}}
					>
						<div className="hero-overlay "></div>
						<div className="hero-content text-center text-neutral-content">
							<div className="max-w-md">
								<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
							</div>
						</div>
					</div>
					<dirv className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</dirv>
				</div>
			</div>
		</>
	);
};

export default Hero;
