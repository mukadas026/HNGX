import React from "react"
import { motion } from "framer-motion"
// import { ImageType } from "./ImageContainer"
// import { useDrag } from "react-dnd"

import {useDraggable} from '@dnd-kit/core';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Image = ({ image}) => {
	const {id, tags, largeImageURL} = image

	const tag = tags.split(',')[0]

	// const {setNodeRef, transform, listeners, attributes} = useDraggable({id: id})
	const {setNodeRef, transform, attributes, listeners, transition} = useSortable({id: id})
	// console.log(left)

		// console.log(id)

		const style = {
			transform: CSS.Translate.toString(transform),
			transition
		  }
	return (
		<div
			// drag
			// dragConstraints={parentRef}
			{...listeners}
			{...attributes}
			key={id}
			ref={setNodeRef}
			// animate={{
				// 	x: transform?.x,
				// 	y: transform?.y
				// }}
			style={style}
			className={`w-[20%] min-w-[250px] h-60 cursor-move relative`}
		>
			<img
				// ref={drag}
				// whileTap={{
				// 	scale: 0.9,
				// }}
				// {...listeners}
				// {...attributes}
				className="w-full h-full object-cover rounded-lg"
				src={largeImageURL}
				alt={tags}
			/>
			<p className="font-medium text-xs absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-xl">{tag}</p>
		</div>
	)
}

export default Image
