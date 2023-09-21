/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useContext } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import { Bars3Icon, BellIcon, XMarkIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import { Context } from "../context/AppContext"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../auth/firebase"

function classNames(...classes) {
	return classes.filter(Boolean).join(" ")
}

export default function Navbar({ search, setSearch, searchImages }) {
	const { setUser } = useContext(Context)
	const navigate = useNavigate()
	const handleSearch = (e) => {
		console.dir(e)
		if (e.key == "Enter") {
			searchImages()
		}
	}
	const handleLogOut = () => {
		signOut(auth)
			.then((res) => console.log("signed out"))
			.catch((err) => console.log(err))
		setUser(null)
		navigate("/signin")
	}

	return (
		<Disclosure
			as='nav'
			className='sticky top-0 z-[99999] bg-gray-800'
		>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='flex items-center px-2 lg:px-0'>
								<div className='flex-shrink-0'>
									<img
										className='h-8 w-auto'
										src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
										alt='Your Company'
									/>
								</div>
							</div>
							<div className='flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end'>
								<div className='w-full max-w-lg lg:max-w-xs'>
									<label
										htmlFor='search'
										className='sr-only'
									>
										Search
									</label>
									<div className='relative'>
										<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
											<MagnifyingGlassIcon
												className='h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
										</div>
										<input
											id='search'
											name='search'
											className='block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 sm:text-sm sm:leading-6'
											placeholder='Search'
											type='search'
											value={search}
											onChange={(e) => setSearch(e.target.value)}
											onKeyDown={handleSearch}
										/>
									</div>
								</div>
							</div>
							<div className='flex lg:hidden'>
								{/* Mobile menu button */}
								<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='hidden lg:ml-4 lg:block'>
								<div
									className='text-white cursor-pointer'
									onClick={handleLogOut}
								>
									<ArrowLeftOnRectangleIcon
										color='white'
										width={30}
									/>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='lg:hidden'>
						<div className='border-t border-gray-700 pb-3 pt-4'>
							<div className='flex items-center px-5'></div>
							<div className='mt-3 space-y-1 px-2'>
								<Disclosure.Button
									// as='a'
									// href='#'
									className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 cursor-pointer hover:bg-gray-700 hover:text-white'
								>
									<div
										className='text-white cursor-pointer flex gap-x-2 items-center'
										onClick={handleLogOut}
									>
										<ArrowLeftOnRectangleIcon
											color='white'
											width={30}
										/>{" "}
										<span>Log out</span>
									</div>
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}
