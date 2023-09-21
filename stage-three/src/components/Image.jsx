import React from "react"
import { motion } from "framer-motion"
import { ImageType } from "./ImageContainer"
import { useDrag } from "react-dnd"

const Image = ({ src, id, alt, parentRef }) => {
    
	
    // console.log(left)
	return (
		<motion.img
            drag
            dragConstraints={parentRef}
			// ref={drag}
			key={id}
			whileTap={{
				scale: 0.9,
			}}
			src={src}
			alt={alt}
			className={`w-[20%] min-w-[250px] h-60 cursor-move object-cover rounded-lg`}
		/>
	)
}

export default Image
