import React, { createContext, Provider, useEffect, useState } from "react"

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
	const [deviceWidth, setDeviceWidth] = useState(400)
    const [openModal, setOpenModal] = useState(false)

	useEffect(() => {
		const width = window.innerWidth
		setDeviceWidth(width)
	}, [])

	const store = {
		deviceWidth,
        openModal,
        setOpenModal
	}

	return <Context.Provider value={store}>{children}</Context.Provider>
}

export default ContextProvider
