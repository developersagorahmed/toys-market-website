import React, { useContext, useState } from "react";
import signInImg from "../../assets/login_page_img/signup.png";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";

const SignIn = () => {
	const { handleGoogleSignIn, registerUser } = useContext(AuthContext);

	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const [name, setName] = useState("");

	const handleRegister = (event) => {
		event.preventDefault();
		if (password.length < 6) {
			setError("Password mush be 6 characters");
			return;
		}
		setError("");
		if ((photo, email, password)) {
			registerUser(email, password)
				.then((result) => {
					const currentUser = result.user;
					console.log(currentUser);

					updateProfile(currentUser, { displayName: name, photoURL: photo });
					setError("");
					event.target.reset();
					Navigate("/");
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	};

	const handleGoogleLogin = () => {
		handleGoogleSignIn()
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((error) => setError(error.message));
	};
	return (
		<div className="bg-[#EFEAE6]">
			<ReactTitle title="SignIn"></ReactTitle>
			<h1 className="mx-auto underline text-center pt-12 text-5xl font-bold">
				Sign In
			</h1>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row">
					<div className="text-center lg:text-left">
						<img className="w-[600px]" src={signInImg} />
					</div>
					<form
						onSubmit={handleRegister}
						className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
					>
						<div className="card-body">
							<p className="text-red-600 font-semibold">{error}</p>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									onChange={(e) => setName(e.target.value)}
									type="text"
									placeholder="Name"
									className="input  w-full rounded-md input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="email"
									className="input  w-full rounded-md input-bordered"
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
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo URL</span>
								</label>
								<input
									onChange={(e) => setPhoto(e.target.value)}
									type="text"
									placeholder="Photo URL"
									className="input w-full rounded-md  input-bordered"
								/>
							</div>
							<label className="label">
								<Link to="/login" className="font-semibold  link link-hover">
									Already have an account?
								</Link>
							</label>

							<div className="form-control mt-6">
								<button className=" btn font-bold bg-white text-black border-[#1D1427] hover:border-none  hover:bg-[#1D1427] hover:text-white btn-primary">
									Sign Up
								</button>
							</div>
							<div className="mx-auto">
								<button
									onClick={handleGoogleLogin}
									className="flex btn text-black mt-4 bg-transparent hover:bg-[#1D1427] text-[#black] font-bold hover:text-white py-2 px-4 border border-[#1D1427] hover:border-transparent rounded"
								>
									Sign Up with Google{" "}
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

export default SignIn;
