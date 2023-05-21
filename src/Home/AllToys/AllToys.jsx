import React, { useState } from "react";
import ReactTitle from "../../Sheard/ReactTitle/ReactTitle";
import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
	const data = useLoaderData();

	return (
		<div>
			<ReactTitle title="All Toys"></ReactTitle>
			<div className="my-16">
				<ReactTitle title="My Toys"></ReactTitle>
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
