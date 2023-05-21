import React, { useContext, useState } from "react";
import loginImg from "../../assets/login_page_img/login_page.png";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";

const Login = () => {
	const { signIn, handleGoogleSignIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const logInSubmit = (event) => {
		event.preventDefault();
		if ((email, password)) {
			signIn(email, password)
				.then((result) => {
					const user = result.user;
					navigate(from);
					console.log(user);
					event.target.reset();
				})
				.catch((error) => setError(error));
		}
	};
	const handleGoogleLogin = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				setError("");
				navigate(from);
				console.log(user);
			})
			.catch((error) => setError(error.message));
	};

	return (
		<div className="bg-[#EFEAE6]">
			<ReactTitle title="Login"></ReactTitle>
			<h1 className="underline mx-auto text-center pt-12 text-5xl font-bold">
				Login now
			</h1>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="text-center lg:text-left">
						<img className="w-[600px]" src={loginImg} />
					</div>
					<form
						onSubmit={logInSubmit}
						className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					>
						<div className="card-body">
							<p className="text-red-700">{error}</p>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="email"
									className="input w-full rounded-md input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									onChange={(e) => setPassword(e.target.value)}
									type="password"
									placeholder="password"
									className="input w-full rounded-md  input-bordered"
									required
								/>
								<label className="label">
									<Link to="/signIn" className="font-semibold  link link-hover">
										New at Action Toys? Sign In
									</Link>
								</label>
							</div>

							<div className="form-control mt-6">
								<button className=" btn bg-white text-black border-[#1D1427] hover:border-none  hover:bg-[#1D1427] hover:text-white font-bold btn-primary">
									Login
								</button>
							</div>
							<div className="mx-auto">
								<button
									onClick={handleGoogleLogin}
									className="flex btn text-black mt-4 bg-transparent hover:bg-[#1D1427] text-[#black] font-bold hover:text-white py-2 px-4 border border-[#1D1427] hover:border-transparent rounded"
								>
									Login with Google{" "}
									<FaGoogle className=" ml-3 w-5 h-5"></FaGoogle>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
