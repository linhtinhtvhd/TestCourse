import { useState, createContext } from 'react';

const ActiveContext = createContext();


function ActiveSideBarProvider ({children}){
    const [isActive,setIsActive] = useState(false)
    const value = {isActive,setIsActive}

    return <ActiveContext.Provider value={value}>{children}</ActiveContext.Provider>;
}
export default ActiveSideBarProvider
export {ActiveContext}