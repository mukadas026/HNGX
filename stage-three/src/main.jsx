import React from "react"
import ReactDOM from "react-dom/client"
import App from "./routes/Home.jsx"
import "./index.css"
import AppContext from "./context/AppContext.jsx"
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from "react-router-dom"
import SignIn from "./routes/SignIn"
import Home from "./routes/Home"
import PageNotFound from "./routes/PageNotFound"
import SignUp from "./routes/SignUp"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <PageNotFound />,
	},
	{
		path: "/signin",
		element: <SignIn />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppContext>
			<RouterProvider router={router} />
		</AppContext>
	</React.StrictMode>
)
