import React, { useContext, useEffect, useState } from "react"
// import ImageGrid from "../components/ImageGrid"
import Navbar from "../components/Navbar"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import ImageContainer from "../components/ImageContainer"
import { client } from "../utils/axios"
import { Context } from "../context/AppContext"
import { useNavigate } from "react-router-dom"
import { Dna } from "react-loader-spinner"
// import { createClient } from "pexels"

const Home = () => {
	const [images, setImages] = useState([])
	const [isLoading, setIsloading] = useState(true)
	const [search, setSearch] = useState("random")

	const navigate = useNavigate()
	const { user } = useContext(Context)
	// console.log(user)
	if (!user) {
		navigate("/signin")
	}
	// const pexelsClient = createClient(import.meta.env.VITE_API)
	const searchImages = () => {
		setIsloading(true)
		// const images = pexelsClient.photos
		try {
			client
				.get(`search?query=${search}`)
				.then((res) => {
					console.log(res)
					setImages(res.data.photos)
					setIsloading(false)
				})
				.catch((err) => {
					console.log(err)
				})
		} catch (err) {
			console.log(err)
		}
	}
	useEffect(() => {
		searchImages()
	}, [])
	return (
		<DndProvider backend={HTML5Backend}>
			<main className=' w-screen max-w-[1920px] mx-auto '>
				<Navbar
					search={search}
					setSearch={setSearch}
					searchImages={searchImages}
				/>
				{isLoading ? (
					<div className='w-full h-screen max-h-[1080px] flex item-center justify-center'>
						<Dna />
					</div>
				) : (
					<ImageContainer images={images} />
				)}
			</main>
		</DndProvider>
	)
}

export default Home
