import React from "react";
import { Link } from "react-router-dom";

const ToysCart = ({ toy }) => {
	const { _id, photoURL, toyName, price, rating } = toy || {};

	return (
		<div className="container mx-auto mb-9 md:ml-20 mt-9">
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img className="h-[300px]" src={photoURL} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-center mx-auto">{toyName}</h2>

					<div className="card-actions justify-evenly">
						<div className="text-xl font-bold p-5 badge badge-outline">
							<span className="">Price :$</span>
							{price}
						</div>
						<div className="badge badge-outline text-xl font-bold p-5">
							{rating}
						</div>
					</div>
					<div className="mx-auto mt-5 ">
						<Link to={`/details/${_id}`}>
							<button className="btn w-[200px] rounded-md bg-[#F9AA01] text-black font-bold hover:text-white">
								View Details
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToysCart;
