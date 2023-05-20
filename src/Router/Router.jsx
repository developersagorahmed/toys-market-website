import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blogs from "../Blogs/Blogs";
import AllToys from "../Home/AllToys/AllToys";
import MyToys from "../Home/MyToys/MyToys";
import AddAToys from "../Home/AddAToys/AddAToys";
import Login from "../LogInAndSignIn/Login/Login";
import SignIn from "../LogInAndSignIn/SignIn/SignIn";
import Details from "../Home/Details/Details";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "/allToys",
				element: <AllToys></AllToys>,
			},
			{
				path: "/myToys",
				element: <MyToys></MyToys>,
			},
			{
				path: "/addAToys",
				element: <AddAToys></AddAToys>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/signIn",
				element: <SignIn></SignIn>,
			},
			{
				path: "/details/:id",
				element: <Details></Details>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
		],
	},
]);

export default router;
