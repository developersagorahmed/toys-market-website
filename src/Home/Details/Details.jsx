import React, { useContext } from "react";
import { Rating } from "@smastrom/react-rating";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import "@smastrom/react-rating/style.css";

const Details = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const toy = useLoaderData();
	const { photoURL, toyName, price, rating, category, description, quantity } =
		toy;
	console.log(toy);
	return (
		<div className="my-11 mt-9  card lg:card-side h-[100vh] bg-base-100 shadow-xl">
			<figure>
				<img className="w-3/4 " src={photoURL} alt="Album" />
			</figure>
			<div className="card-body w-1/3">
				<h1 className="card-title text-2xl"> Toy Name : {toyName}</h1>
				<h2 className="card-title text-xl font-bold">
					Seller Name : {user?.displayName}
				</h2>
				<h2 className="font-bold text-lg">Sub-Category : {category}</h2>
				<h2 className="font-bold text-lg">Quantity : {quantity}</h2>
				<h2 className="card-title text-lg">Seller Email : {user?.email}</h2>
				<label className="text-lg font-semibold underline">Description:</label>
				<p className="h-[400px]">{description}</p>
				<div className="card-actions justify-between mx-36">
					<div className="text-xl mt-[4px] mr-3 font-bold">
						Price : ${price}
					</div>
					<div className="flex items-center justify-center">
						<h2 className="text-2xl mt-[2px] mr-3 font-bold">
							Rating: {rating} :{" "}
						</h2>
						<Rating style={{ maxWidth: 150 }} value={rating} readOnly />{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
