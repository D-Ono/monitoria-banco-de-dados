import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AntDesign from "./pages/AntDesign";
import Bootstrap from "./pages/Bootstrap";
import MaterialUI from "./pages/MaterialUI";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/antdesign",
		element: <AntDesign />,
	},
	{
		path: "/bootstrap",
		element: <Bootstrap />,
	},
	{
		path: "/materialui",
		element: <MaterialUI />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
