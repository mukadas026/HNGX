import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ContextProvider from "../context/ContextProvider"

const Layout = ({ children }) => {
	return (
		<ContextProvider>
			<div className='w-screen max-w-[1980px] relative mx-auto'>
				<Navbar />
				<main className='w-full'>{children}</main>
				<Footer />
			</div>
		</ContextProvider>
	)
}

export default Layout
