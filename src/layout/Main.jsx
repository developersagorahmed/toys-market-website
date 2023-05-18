import React from "react";
import Navbar from "../Sheard/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Sheard/Footer/Footer.jsx";

const Main = () => {
	return (
		<div>
			<Navbar></Navbar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
