import { createUserWithEmailAndPassword } from "firebase/auth"
import React, { useContext, useState } from "react"
import { auth } from "../auth/firebase"
import { Context } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const { setUser } = useContext(Context)
    const navigate = useNavigate()

	const handleSignin = () => {
		// signInWithEmailAndPassword(auth, email, password)
        console.log('signing in')
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCred) => {
				console.log(userCred.user)
				setUser(userCred.user)
                navigate('/')
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className='flex bg-gray-900 h-screen max-h-[1080px] flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className='mx-auto h-10 w-auto'
					src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
					alt='Your Company'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>Sign Up</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<div
					className='space-y-6'
                    // method="post"
					// onSubmit={handleSignin}
				>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 text-white'
						>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 text-white'
							>
								Password
							</label>
							<div className='text-sm'>
								<a
									href='#'
									className='font-semibold text-indigo-400 hover:text-indigo-300'
								>
									Forgot password?
								</a>
							</div>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div>
						<button
                        onClick={handleSignin}
							// type=''
							className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
						>
							Sign up
						</button>
					</div>
				</div>
				<div className="text-white mt-8 flex flex-wrap gap-x-2">
					<p>Already have an account?</p>
					<button className="text-blue-500" onClick={() => navigate("/signin")}>Sign In</button>
				</div>
			</div>
		</div>
	)
}

export default SignUp
