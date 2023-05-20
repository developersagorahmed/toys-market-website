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
import PrivateRoute from "../Provider/PrivateRouter/PrivateRouter";
import UpdateToy from "../Home/Home/UpdateToy/UpdateToy";

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
				element: (
					<PrivateRoute>
						<MyToys></MyToys>
					</PrivateRoute>
				),
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
				path: "updateToy/:id",
				element:<UpdateToy></UpdateToy>,
				loader:()=>fetch()
			},
			{
				path: "/details/:id",
				element: (
					<PrivateRoute>
						<Details></Details>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/details/${params.id}`),
			},
		],
	},
]);

export default router;
