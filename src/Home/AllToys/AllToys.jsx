import React, { useContext, useEffect, useState } from "react";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";

import AllToysRow from "./AllToysRow";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const AllToys = () => {
	const { user } = useContext(AuthContext);
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		fetch("http://localhost:5000/alltoys")
			.then((res) => res.json())
			.then((datta) => setData(datta));
	}, [search]);

	const handleSearch = () => {
		fetch(`http://localhost:5000/toySearch/${search}`)
			.then((res) => res.json())
			.then((data) => setData(data));
	};
	return (
		<div>
			<ReactTitle title="All Toys"></ReactTitle>
			<div className="my-16">
				<div className="mx-auto text-center mb-8 -[#F9AA01]">
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered rounded-md input-primary w-full max-w-xs"
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						onClick={handleSearch}
						className="btn rounded-md ml-4  bg-[#F9AA01] text-black font-bold hover:text-white"
					>
						Search
					</button>
				</div>

				<div>
					<div></div>
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
								{data?.map((toy) => (
									<AllToysRow key={toy._id} toy={toy}></AllToysRow>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllToys;
