import React from "react";

const Blog = () => {
	return (
		<div className="container ml-14 mx-auto  mb-12">
			<div className="print">
				<div className="sss">
					<h1 className="mb-7 bg-black mt-10 rounded-lg py-10 text-[#F9AA01]  text-[60px] mx-auto text-center font-extrabold underline ]">
						Questions A<span className="text-[white]">nd Answer</span>
					</h1>
					<div className="grid grid-cols-2 gap-y-6 ml-10">
						<div className="bg-[black] w-[550px]  p-8  rounded-lg ">
							<h1 className="text-center text-[#F9AA01] text-2xl mb-7 font-extrabold">
								What is an access token and refresh token? How do they work and
								where should we store them on the client-side?
							</h1>
							<p className="text-center text-white text-lg font-semibold">
								Access tokens should be stored securely but should not be
								persisted for a long time. They are typically stored in memory
								or in a short-lived session storage mechanism provided by the
								client platform (e.g., browser session storage). Refresh tokens,
								being long-lived and more sensitive, need to be stored securely
								for an extended period. They are typically stored in a secure
								storage mechanism, such as an encrypted HTTP-only cookie or a
								secure storage solution provided by the client platform (e.g.,
								secure keychain storage on mobile devices). It's crucial to
								protect refresh tokens from unauthorized access and potential
								misuse.
							</p>
						</div>
						<div className="bg-[black] w-[550px]  p-8  rounded-lg ">
							<h1 className="text-center text-[#F9AA01] text-2xl mb-7 font-extrabold">
								Compare SQL and NoSQL databases?
							</h1>
							<p className="text-center text-white text-lg font-semibold">
								SQL: SQL databases are commonly used in applications where
								structured data, complex querying, and strong consistency are
								crucial. They are suitable for transactional systems, financial
								applications, and scenarios that require data integrity and ACID
								(Atomicity, Consistency, Isolation, Durability) properties.
								NoSQL: NoSQL databases are often used in scenarios involving
								large-scale data, high read/write workloads, and flexible data
								models. They are popular for web applications, real-time
								analytics, content management systems, and scenarios that
								prioritize scalability and performance over strict consistency.
							</p>
						</div>
						<div className="bg-[black] w-[550px]  p-8  rounded-lg ">
							<h1 className="text-center text-[#F9AA01] text-2xl mb-7 font-extrabold">
								What is express js? What is Nest JS ?
							</h1>
							<p className="text-center text-white text-lg font-semibold">
								Express.js is a lightweight and flexible web application
								framework for Node.js, while NestJS is a more structured and
								opinionated framework that builds upon Express.js, providing
								additional features and architectural patterns. Both frameworks
								have their strengths and can be chosen based on the specific
								requirements and preferences of the project.Express.js is a
								popular web application framework for Node.js that simplifies
								the process of building web applications and APIs. It provides a
								minimal and flexible set of features, allowing developers to
								handle routing, middleware, and HTTP request/response handling
								easily. Express.js is known for its simplicity, lightweight
								nature, and extensive ecosystem of middleware and plugins.
								Express.js is a popular web application framework for Node.js
								that simplifies the process of building web applications and
								APIs. It provides a minimal and flexible set of features,
								allowing developers to handle routing, middleware, and HTTP
								request/response handling easily. Express.js is known for its
								simplicity, lightweight nature, and extensive ecosystem of
								middleware and plugins.
							</p>
						</div>
						<div className="bg-[black] w-[550px]  p-8  rounded-lg ">
							<h1 className="text-center text-[#F9AA01] text-2xl mb-7 font-extrabold">
								What is MongoDB aggregate and how does it work
							</h1>
							<p className="text-center text-white text-lg font-semibold">
								Match: Filters the documents based on specified criteria,
								similar to the query condition in a find operation. It allows
								you to narrow down the data set before performing further
								operations. Group: Groups documents together based on a specific
								key and performs aggregations within each group. You can apply
								various aggregation functions like sum, average, count, etc., to
								calculate values based on the grouped data. Project: Reshapes
								the documents by including or excluding specific fields,
								renaming fields, or adding computed fields. It allows you to
								define the structure of the output documents. Sort: Orders the
								documents based on specified fields and sorting orders. Limit:
								Limits the number of documents in the output result. Skip: Skips
								a specified number of documents from the beginning of the result
								set.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
