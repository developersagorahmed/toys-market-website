import React, { useContext, useEffect, useState } from "react";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import ToysRow from "./ToysRow";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [toys, setToys] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/myToys/${user?.email}`)
			.then((res) => res.json())
			.then((data) => setToys(data));
	}, [toys]);

	return (
		<div className="my-16">
			<ReactTitle title="My Toys"></ReactTitle>
			<div>
				<div className="mx-auto rounded-md text-center mb-8 -[#F9AA01]">
					<select className="select rounded-md select-primary w-2/1 max-w-xs">
						<option disabled selected>
							Short by
						</option>
						<option >High to Low Price</option>
						<option >Low to High Price</option>
						
					</select>
				</div>
				<div className="overflow-x-auto w-full">
					<table className="table w-full">
						<thead>
							<tr>
								<th></th>
								<th>Toy name</th>
								<th>Seller Email</th>
								<th>Seller Name</th>
								<th>Sub-Category</th>
								<th>Price</th>
								<th>Quantity</th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{toys?.map((toy) => (
								<ToysRow
									key={toy._id}
									toys={toys}
									setToys={setToys}
									toy={toy}
								></ToysRow>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyToys;
