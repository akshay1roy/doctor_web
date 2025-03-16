import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

// import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const currencySymbol = "₹";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  const [userData,setUserData]=useState(null);




  const getDoctorData = async () => {
    try {
      // const doctor_data= await axios.get(backendUrl + '/api/doctor/list')
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      // console.log(doctor_data)

      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      // res.json({success:false, message :error.message})
    }
  };


  //  get user profile data 

  const loadUserProfileData=async()=>{
      try {
        const {data}= await axios.get(backendUrl +'/api/user/get-profile',{headers:{token}})

        // console.log(data.success);
        // setUserData(data?.userData)
        // console.log(userData)

        if(data.success)
        {
          setUserData(data.userData)
          // console.log(data);
        }
        else{
          toast.error(data.message)
        }


      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  }

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    getDoctorData,
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  useEffect(()=>{
    if(token)
    {
      loadUserProfileData()
      // console.log(userData)
    }else{
      setUserData(false)
    }
  },[token])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
