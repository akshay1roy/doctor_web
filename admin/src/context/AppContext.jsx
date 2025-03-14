import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import {doctors} from '../assets/assets'

export const AppContext= createContext()

const AppContextProvider=(props)=>{
    const currencySymbol='$'
    const backendUrl= import.meta.env.VITE_BACKEND_URL

    const [doctors,setDoctors]=useState([])

    const value={
        doctors,
        currencySymbol,
        backendUrl
    }

   

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContextProvider