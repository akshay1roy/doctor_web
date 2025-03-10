import { createContext, useEffect, useState } from "react";

const AdminContext=createContext()


const AdminContextProvider=(props)=>{
    const storedToken = localStorage.getItem("aToken") || "";
    const [aToken, setAToken] = useState(storedToken);
    // const [aToken,setAToken]= useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):' ')
    const backendUrl= import.meta.env.VITE_BACKEND_URL 

    useEffect(() => {
        if (aToken) {
            localStorage.setItem("aToken", aToken);
        } else {
            localStorage.removeItem("aToken");
        }
    }, [aToken]);


    const value={
        aToken,
        setAToken,
        backendUrl,
    }

    return (

        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export  {AdminContextProvider,AdminContext};