import React, { createContext, useState } from 'react'


export const Context = createContext(null)

const AppContext = ({children}) => {
    const [user, setUser] = useState(null)
    const value = {
        user, setUser
    }
    console.log(value)
  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default AppContext