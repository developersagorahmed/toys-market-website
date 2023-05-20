import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { AiFillDelete } from "react-icons/ai";

const ToysRow = ({ toy }) => {
	console.log(toy);
	const {
		toyName,
		sellerName,
		sellerEmail,
		category,
		price,
		quantity,
		rating,
		photoURL,
	} = toy;
	return (
		<tr>
			<th></th>
			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={photoURL} alt="Avatar Tailwind CSS Component" />
						</div>
					</div>
					<div>
						<div className="font-bold">{toyName.slice(0, 25)}</div>
						<div className="text-sm opacity-50">
							<Rating style={{ maxWidth: 100 }} value={rating} readOnly />
						</div>
					</div>
				</div>
			</td>
			<td>
				{sellerEmail}
				<br />
			</td>
			<td>{sellerName}</td>
			<td>{category}</td>
			<td>${price}</td>
			<td>${quantity}</td>
			<th>
				<button className="btn rounded-md bg-black text-white font-bold hover:text-black hover:bg-[#ffbd03]">
					Update
				</button>
			</th>
			<th>
				<div>
					{" "}
					<AiFillDelete className="w-12 h-12 hover:text-[#ffbd03]"></AiFillDelete>{" "}
				</div>
			</th>
		</tr>
	);
};

export default ToysRow;
