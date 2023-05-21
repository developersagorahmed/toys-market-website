import React from "react";
import Tabs from "../Tabs/Tabs";
import Hero from "../Hero/Hero";
import Gallery from "./Gallery/Gallery";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
	return (
		<div>
			<ReactTitle title="Home"></ReactTitle>
			<Hero></Hero>
			<h1 className="text-6xl text-[#1D1427] font-bold text-center mt-12 mb-12 underline ">
				Galley
			</h1>
			<Gallery></Gallery>
			<Tabs></Tabs>
			<AboutUs></AboutUs>
		</div>
	);
};

export default Home;
