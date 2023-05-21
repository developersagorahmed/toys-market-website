import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ToysRow = ({ toy, toys, setToys }) => {
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
	const handleDelete = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/myToys/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => console.log(data));
				if (data.deletedCount > 0) {
					Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
					const remaining = toys.filter((tooy) => tooy._id !== _id);
					setToys(remaining);
				}
			}
		});
	};
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
					{sellerEmail}
					<br />
				</td>
				<td>{sellerName}</td>
				<td>{category}</td>
				<td>${price}</td>
				<td>{quantity} Pics</td>
				<th>
					<Link
						to={`/myToys/updateToy/${_id}`}
						className="btn rounded-md bg-black text-white font-bold hover:text-black hover:bg-[#ffbd03]"
					>
						Edit
					</Link>
				</th>
				<th>
					<div onClick={() => handleDelete(_id)}>
						{" "}
						<AiFillDelete className="w-12 h-12 hover:text-[#ffbd03]"></AiFillDelete>{" "}
					</div>
				</th>
			</tr>
		</>
	);
};

export default ToysRow;
