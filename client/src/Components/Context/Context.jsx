import React from 'react'
const LoginContext = React.createContext();
const LoginContextProvider = ({children}) => {
    const [user,setUser] = React.useState(null)
    return (
    <LoginContext.Provider value={{user,setUser}}>{children}</LoginContext.Provider>
  )
}

export {LoginContext,LoginContextProvider}