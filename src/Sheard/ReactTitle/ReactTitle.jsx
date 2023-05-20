import React from "react";
import { Helmet } from "react-helmet";
const ReactTitle = ({ title }) => {
	return (
		<div>
			<Helmet>
				<title>Action Toys | {title}</title>
			</Helmet>
		</div>
	);
};

export default ReactTitle;
