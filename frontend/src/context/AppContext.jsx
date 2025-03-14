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

  const value = {
    doctors,
    currencySymbol,
    token,
    setToken,
    backendUrl,
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
