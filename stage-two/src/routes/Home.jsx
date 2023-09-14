import React, { useContext } from "react"
import Header from "../components/Header"
import FeaturedMovies from "../components/FeaturedMovies"
import Layout from "../layout/Layout"
import SearchModal from "../components/SearchModal"
import { Context } from "../context/ContextProvider"

const Home = () => {
	// const {openModal} = useContext(Context)
	// console.log(openModal)
	return (
		<Layout>
			<Header />
			<FeaturedMovies />
		</Layout>
	)
}

export default Home
