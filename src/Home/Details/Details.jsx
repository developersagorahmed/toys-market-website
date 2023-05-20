import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
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
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<img
					src={photoURL}
					alt="Album"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{toyName}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">Listen</button>
				</div>
			</div>
		</div>
	);
};

export default Details;
