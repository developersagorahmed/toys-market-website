import React from "react";
import Tabs from "../Tabs/Tabs";
import Hero from "../Hero/Hero";
import Gallery from "./Gallery/Gallery";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<h1 className="text-6xl text-[#1D1427] font-bold text-center mt-12 mb-12 underline ">
				Galley
			</h1>
			<Gallery></Gallery>
			<Tabs></Tabs>
		</div>
	);
};

export default Home;
