import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const AllToysRow = ({ toy }) => {
	const {
		_id,
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
		<>
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
					{sellerEmail ? sellerEmail : "sagorahmed090400@gmail.com"}
					<br />
				</td>
				<td>{sellerName ? sellerName : "Sagor"}</td>
				<td>{category}</td>
				<td>${price}</td>
				<td>{quantity} Pics</td>
				<th></th>
				<th></th>
			</tr>
		</>
	);
};

export default AllToysRow;
