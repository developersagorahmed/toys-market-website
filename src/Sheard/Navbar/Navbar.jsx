import React, { useContext } from "react";
import logo from "../../assets/Action-Toys-logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then()
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="navbar bg-[#1D1427]">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
				</div>
				<a>
					<div className="rounded-lg ml-6">
						<img className="w-18 h-20 rounded-lg" src={logo} alt="" />
					</div>
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link
							to="/home"
							className="text-white hover:text-red-800 font-bold text-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/allToys"
							className="text-white hover:text-red-800 font-bold text-lg"
						>
							All Toys
						</Link>
					</li>

					{user ? (
						<>
							<li>
								<Link
									to="/myToys"
									className="text-white hover:text-red-800 font-bold text-lg"
								>
									My Toys
								</Link>
							</li>
							<li>
								<Link
									to="/addAToys"
									className="text-white hover:text-red-800 font-bold text-lg"
								>
									Add a Toy
								</Link>
							</li>
						</>
					) : (
						<></>
					)}
					<li>
						<Link
							to="/blogs"
							className="text-white hover:text-red-800 font-bold text-lg"
						>
							Blogs
						</Link>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				<div className="avatar">
					{user ? (
						<>
							<div className="w-12 mr-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
								<img src={user ? user.photoURL : <></>} />
							</div>
						</>
					) : (
						<></>
					)}
					<ul className="menu menu-horizontal px-1">
						{user ? (
							<>
								<li>
									<button
										onClick={handleLogOut}
										className="text-white hover:text-red-800 font-bold text-lg"
									>
										Logout
									</button>
								</li>
							</>
						) : (
							<>
								<li>
									<Link
										to="/login"
										className="text-white hover:text-red-800 font-bold text-lg"
									>
										LogIn
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
