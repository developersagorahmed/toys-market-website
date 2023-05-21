import React from "react";
import { useForm } from "react-hook-form";
import "./UpdateToy.css";
import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
	const toy = useLoaderData();
	const navigate = useNavigate();

	console.log(toy);

	const { description, quantity, price, _id } = toy;
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	const onSubmit = (data, event) => {
		event.preventDefault();

		console.log(data);
		fetch(`http://localhost:5000/myToys/updateToy/${_id}`, {
			method: "PUT",
			headers: { "content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount) {
					Swal.fire({
						title: "Success",
						text: "Toy Update Successfully",
						icon: "success",
						confirmButtonText: "cool",
					});
					navigate("/myToys");
				}
			});
	};
	return (
		<div className="">
			<h2 className="text-2xl font-bold underline">Update Your Toy</h2>
			<div className="w-full mx-auto toy-form">
				<form className="forms" onSubmit={handleSubmit(onSubmit)}>
					{errors.exampleRequired && <span>This field is required</span>}

					<p className="text-base font-bold">Price</p>
					<input
						className="text-input"
						{...register("price")}
						placeholder="Price"
						defaultValue={price}
						type="text"
					/>

					<p className="text-base font-bold">Available Quantity</p>
					<input
						className="text-input"
						{...register("quantity")}
						placeholder="Quantity"
						defaultValue={quantity}
						type="number"
					/>
					<p className="text-base font-bold">Detail description</p>
					<textarea
						className="text-input"
						{...register("description")}
						placeholder="Detail description"
						defaultValue={description}
						type="text"
					/>

					{/* <Select
              
              onChange={setSelectedOption}
              options={options}
              isMulti
            /> */}

					<input className="submit-btn" value="Add Toy" type="submit" />
				</form>
			</div>
		</div>
	);
};

export default UpdateToy;
