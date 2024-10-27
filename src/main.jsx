import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Blog from './Blog.jsx'
import './index.css'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Products from './Products.jsx';
import NotFound from './NotFound.jsx';




const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/وبلاگ",
		element: <Blog />,
	},
	{
		path: "/محصولات",
		element: <Products />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
