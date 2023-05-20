import React, { useEffect, useState } from "react";
import ToysCart from "./ToyCart/ToysCart";

const Tabs = () => {
	const [toys, setToys] = useState([]);
	const [activeTab, setActiveTab] = useState("dfsd");

	useEffect(() => {
		fetch("http://localhost:5000/alltoys")
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, []);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	return (
		<div>
			<div className="container mx-auto flex mb-8  justify-center ">
				<div className=" tabs">
					<a
						onClick={() => handleTabClick("avenger")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "avenger" ? "tab-active  " : ""
						}`}
					>
						Avengers
					</a>
					<a
						onClick={() => handleTabClick("starWars")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "starWars" ? "tab-active" : ""
						}`}
					>
						Star Wars
					</a>
					<a
						onClick={() => handleTabClick("transformer")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "transformer" ? "tab-active" : ""
						}`}
					>
						Transformers
					</a>
				</div>
			</div>

			<div className=" container mx-auto gap-[100px] grid grid-cols-1 md:grid-cols-2">
				{toys?.map((toy) => (
					<ToysCart key={toy._id} toy={toy}></ToysCart>
				))}
			</div>
		</div>
	);
};

export default Tabs;
