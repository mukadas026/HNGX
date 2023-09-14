import React from "react"
import { BsFacebook, BsTwitter, BsYoutube, BsGithub } from "react-icons/bs"

const Footer = () => {
	return (
		<div className='w-full min-h-[200px]  flex flex-col gap-y-4 border-t-2  items-center justify-center'>
			<div className="flex gap-x-4">
				<a href='#'>
					<BsFacebook size={25} color="#1877f2"/>
				</a>
				<a href='#'>
					<BsGithub size={25} color="#333"/>
				</a>
				<a href='#'>
					<BsTwitter size={25} color="#1da1f2"/>
				</a>
				<a href='#'>
					<BsYoutube size={25} color="#ff0000"/>
				</a>
			</div>
			<div></div>
			<p className="px-4 text-center text-sm">
				© 2021 MovieBox by <a href='#' className="text-blue-500">Abubakari Mohammed Mukadas Maltiti</a>
			</p>
		</div>
	)
}

export default Footer
