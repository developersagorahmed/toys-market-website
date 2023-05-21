import React, { useEffect, useState } from "react";
import ToysCart from "./ToyCart/ToysCart";

const Tabs = () => {
	const [toys, setToys] = useState([]);
	const [activeTab, setActiveTab] = useState("Avengers");
	console.log(activeTab);

	useEffect(() => {
		fetch(
			`https://action-toys-server-amber.vercel.app/myToys/updateToy/alltoys/${activeTab}`
		)
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, [activeTab]);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	return (
		<div>
			<div className="container mx-auto flex mb-8  justify-center ">
				<div className=" tabs">
					<a
						onClick={() => handleTabClick("Avengers")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "Avengers" ? "tab-active  " : ""
						}`}
					>
						Avengers
					</a>
					<a
						onClick={() => handleTabClick("StarWars")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "StarWars" ? "tab-active" : ""
						}`}
					>
						Star Wars
					</a>
					<a
						onClick={() => handleTabClick("Transformer")}
						className={`text-2xl font-bold tab tab-lg tab-lifted ${
							activeTab == "Transformer" ? "tab-active" : ""
						}`}
					>
						Transformers
					</a>
				</div>
			</div>

			<div className=" container mx-auto gap-[100px] grid grid-cols-1 md:grid-cols-2">
				{toys?.slice(0, 2).map((toy) => (
					<ToysCart key={toy._id} toy={toy}></ToysCart>
				))}
			</div>
		</div>
	);
};

export default Tabs;
