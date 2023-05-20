import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import "./AddToys.css";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AddAToys = () => {
	const { user } = useContext(AuthContext);

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();
	const onSubmit = (data, event) => {
		fetch("http://localhost:5000/addtoy", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast("Your Toy added");
				}
				console.log(data);
				event.target.reset();
			});
		console.log(data);
	};

	return (
		<div className="toy-form mt-10">
			<h2 className="text-2xl font-bold underline">Add a New Toy</h2>

			<form className="forms" onSubmit={handleSubmit(onSubmit)}>
				{errors.exampleRequired && <span>This field is required</span>}
				<p className="text-base font-bold">Picture URL</p>
				<input
					className="text-input"
					{...register("photoURL")}
					placeholder="Picture URL"
				/>
				<br />
				<p className="text-base font-bold">Toy Name</p>
				<input
					className="text-input"
					{...register("toyName", { required: true })}
					placeholder="Toy Name"
				/>
				<br />
				<p className="text-base font-bold">Seller Name</p>
				<input
					className="text-input"
					{...register("sellerName")}
					placeholder="Seller Name"
					value={user?.displayName}
					defaultValue={user.displayName}
				/>
				<br />
				<p className="text-base font-bold">Seller Email</p>
				<input
					className="text-input"
					{...register("sellerEmail")}
					placeholder="Seller Email"
					value={user.email}
					defaultValue={user?.email}
				/>
				<br />
				<p className="text-base font-bold">Select Category</p>

				<select
					className="select select-primary w-full rounded-md"
					{...register("category")}
				>
					<option value="" className="disabled">
						Select Category
					</option>
					<option value="Avengers">Avengers</option>
					<option value="Star  Wars">Star Wars</option>
					<option value="Transformer">Transformer</option>
				</select>

				<p className="text-base font-bold">Price</p>
				<input
					className="text-input"
					{...register("price")}
					placeholder="Price"
					type="number"
				/>
				<p className="text-base font-bold">Rating</p>
				<input
					className="text-input"
					{...register("rating")}
					placeholder="rating"
					type="number"
				/>
				<p className="text-base font-bold">Available Quantity</p>
				<input
					className="text-input"
					{...register("quantity")}
					placeholder="Quantity"
					type="number"
				/>
				<p className="text-base font-bold">Detail description</p>
				<textarea
					className="text-input"
					{...register("description")}
					placeholder="Detail description"
					type="text"
				/>

				{/* <Select
              
              onChange={setSelectedOption}
              options={options}
              isMulti
            /> */}

				<input className="submit-btn" value="Add Toy" type="submit" />
			</form>
			<ToastContainer />
		</div>
	);
};

export default AddAToys;
