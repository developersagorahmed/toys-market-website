import React, { useState } from "react";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState("dfsd");
	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};
	return (
		<div className="flex mb-8 justify-center ">
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
	);
};

export default Tabs;
