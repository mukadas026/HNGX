import React, { useContext } from "react"
import { Navigate, Route, RouterProvider, Routes, createBrowserRouter, useNavigate } from "react-router-dom"
import SignIn from "./routes/SignIn"
import Home from "./routes/Home"
import PageNotFound from "./routes/PageNotFound"
import SignUp from "./routes/SignUp"

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Home />,
// 		errorElement: <PageNotFound />,
// 	},
// 	{
// 		path: "/signin",
// 		element: <SignIn />,
// 	},
// 	{
// 		path: "/signup",
// 		element: <SignUp />,
// 	},
// ])

const App = () => {
	// return <RouterProvider router={router} />
	return (
		// <>
		// 	<Routes>
		// 		<Route
		// 			path='/'
		// 			element={<Home />}
        //             errorElement={<PageNotFound />}
		// 		/>
		// 		<Route
		// 			path='signup'
		// 			element={<SignUp />}
		// 		/>
		// 		<Route
		// 			path='signin'
		// 			element={<SignIn />}
		// 		/>
		// 	</Routes>
		// </>
	)
}

export default App
