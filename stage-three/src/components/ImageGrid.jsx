// import { motion } from "framer-motion"
// import { Fragment, useState } from "react"
// import { useDrag, useDrop } from "react-dnd"
import Image from "./Image"

// const files = [
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// 	{
// 		x: 0,
// 		y: 0,
// 		source: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
// 	},
// ]

// export const ImageType = {
// 	img: "image",
// }

export default function ImageGrid() {
	const [images, setImages] = useState(files)
	// const [{ isDragging, x, y }, drag] = useDrag(() => ({
	// 	type: ImageType.img,
	// 	collect: (monitor) => ({
	// 		isDragging: !!monitor.isDragging(),
	//         x: monitor.x,
	//         y: monitor.y
	// 	}),
	// }))
	const [, drop] = useDrop(() => ({
		accept: ImageType.img,
		drop: (item, monitor) => {
			const delta = monitor.getDifferenceFromInitialOffset()
			const x = Math.round(item.x + delta.x)
			const y = Math.round(item.y + delta.y)
            console.log(item)
            // updatePosition()
		},
	}))

	const updatePosition = (index, x, y) => {
		setImages((prev) => {
			prev[index] = {
				...prev[index],
				x: x,
				y: y,
			}
            return prev
		})
	}
	const swapImage = (one, two) => {
		const temp = ""

		setImages((prev) => {
			temp = prev[one]
			prev[one] = prev[two]
			prev[two] = temp

			return prev
		})
	}
	// console.log(x)

	return (
		<>
			{images.map((file, i) => (
				<Fragment key={i}>
					<Image
						src={file.source}
						id={i}
						x={null}
						y={null}
					/>
				</Fragment>
			))}
		</>
	)
}
