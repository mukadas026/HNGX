import React, { useCallback, useEffect, useRef } from "react"
import update from "immutability-helper"

import { motion } from "framer-motion"
import { Fragment, useState } from "react"
import { useDrag, useDrop } from "react-dnd"
import Image from "./Image"

const files = [
	{
		id: 0,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 1,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 2,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 3,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 4,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 5,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 6,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 7,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 8,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 9,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 10,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 11,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 12,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 13,
		x: 0,
		y: 0,
		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
]

export const ImageType = {
	img: "image",
}

const ImageContainer = ({ images }) => {
	const containerRef = useRef(null)
	// const [images, setImages] = useState(images)

	useEffect(() => {}, [])

	return (
		<div
			// ref={drop}
			ref={containerRef}
			className='relative pt-16 w-full flex flex-wrap gap-x-4 gap-y-8 items-center justify-center'
		>
			<>
				{images.map((image, i) => (
					<Fragment key={image.id}>
						<Image
							alt={image.alt}
							src={image.src.portrait}
							id={image.id}
							parentRef={containerRef}
							// parentRef={drop}
						/>
					</Fragment>
				))}
			</>
		</div>
	)
}

export default ImageContainer
