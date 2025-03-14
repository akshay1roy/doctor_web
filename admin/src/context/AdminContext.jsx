import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AdminContext=createContext()


const AdminContextProvider=(props)=>{
    const storedToken = localStorage.getItem("aToken") || "";
    const [aToken, setAToken] = useState(storedToken);
    const [doctors,setDoctors]=useState([])
    // const [aToken,setAToken]= useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):' ')
    const backendUrl= import.meta.env.VITE_BACKEND_URL 

    const getAllDoctors=async()=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{aToken}}) 
            // console.log(data);

            // const doctors_data = await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{aToken}}) 
            // console.log(doctors_data);
            if(data.success)
            {
                console.log(data.doctors);
                setDoctors(data.doctors);
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const changeAvailability=async(docId)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/admin/change-availability',{docId},{headers:{aToken}})

            // const doc_DATA = await axios.post(backendUrl+'/api/admin/change-availability',{docId},{headers:{aToken}})
            // console.log("doc_DATA",doc_DATA)

            if(data.success)
            {
                toast.success(data.message);
                getAllDoctors();

            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

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
        getAllDoctors,
        doctors,
        changeAvailability

    }

    return (

        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export  {AdminContextProvider,AdminContext};