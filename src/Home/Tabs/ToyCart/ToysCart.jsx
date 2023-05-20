import React from "react";

const ToysCart = ({ toy }) => {
	const { photoURL, toyName, price, rating } = toy || {};

	return (
		<div className="container mx-auto md:ml-20 mt-9">
			<div className="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img className="h-[300px]" src={photoURL} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{toyName}</h2>

					<div className="card-actions justify-end">
						<div className="text-xl font-bold p-5 badge badge-outline">
							<span className="">Price :$</span>
							{price}
						</div>
						<div className="badge badge-outline text-xl font-bold p-5">
							{rating}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToysCart;
