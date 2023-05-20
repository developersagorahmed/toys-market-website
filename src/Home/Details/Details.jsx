import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const Details = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	const toy = useLoaderData();
	const {
		_id,
		photoURL,
		toyName,
		price,
		rating,
		category,
		description,
		quantity,
		sellerEmail,
		sellerName,
	} = toy;
	console.log(toy);
	return (
		<div className="my-11  card lg:card-side h-[80vh] bg-base-100 shadow-xl">
			<figure>
				<img className="w-full h-full" src={photoURL} alt="Album" />
			</figure>
			<div className="card-body my-10 w-1/3">
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
					<div className="text-lg font-semibold">Price : ${price}</div>
					<div className="text-lg font-semibold">Rating : {rating}</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
