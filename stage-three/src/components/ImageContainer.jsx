import React, { useCallback, useEffect, useRef } from "react"
// import update from "immutability-helper"

// import { motion } from "framer-motion"
import { Fragment, useState } from "react"
// import { useDrag, useDrop } from "react-dnd"
import Image from "./Image"
// import {useDroppable} from '@dnd-kit/core';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"

const ImageContainer = ({ images, setImages }) => {
	// const containerRef = useRef(null)
	// const {setNodeRef, } = useDroppable({id: 'containerRef'})
	// const [images, setImages] = useState(images)

	useEffect(() => {}, [])
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	const handleDragEnd = (event) => {
		const { active, over } = event
		console.log(images)
		if (active.id !== over.id) {
			setImages((prev) => {
				// const oldIndex = prev.indexOf(active.id)
				let oldIndex = 0
				let newIndex = 0
				prev.forEach((item,i) => {
					if (item.id === active.id){
						oldIndex = i
					}
					if(item.id === over.id){
						newIndex = i
					}
				})
				// const newIndex = prev.indexOf(over.id)
				console.log(oldIndex, newIndex)

				return arrayMove(prev, oldIndex, newIndex)
			})
		}
	}

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<div
				// ref={drop}
				// ref={setNodeRef}
				className='relative pt-16 w-full h-full flex flex-wrap bg-red-500 gap-x-4 gap-y-8  justify-center'
			>
				<SortableContext
					items={images}
					strategy={rectSortingStrategy}
				>
					{images.map((image, i) => (
						<Fragment key={image.id}>
							<Image
								image={image}
								// parentRef={containerRef}
								// parentRef={drop}
							/>
						</Fragment>
					))}
				</SortableContext>
			</div>
		</DndContext>
	)
}

export default ImageContainer
