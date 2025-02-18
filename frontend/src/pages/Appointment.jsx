import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
// import { assets } from "../assets/assets";

const Appointment = () => {
  const { docId } = useParams();

  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots,setDocSlots]=useState([])
  const [slotIndex, setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('')

  const fetchDocInfo = async () => {
    const docInfo = await doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);
  };

  const getAvailableSlot= async()=>{
    setDocSlots([]);

    // GETTTING CURRENT DATE
    let today= new Date();
    for(let i=0;i<7;i++)
    {
      // getting data with index
      let currentData=new Date(today);
      currentData.setDate(today.getDate()+i);

      // setting end time of the date with index

      let endTime= new Date()
      endTime.setDate(today.getDate()+1);
      endTime.setHours(21,0,0,0)


      // setting hours

      if(today.getDate()=== currentData.getDate())
      {
        currentData.setHours(currentData.getHours() > 10 ? currentData.getHours()+1: 10)
      }

    }
  }

  useEffect(()=>{
    getAvailableSlot();
  },[docInfo])

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  return (
    <div>
      {/* --------------doctor details---------------- */}
      <div className="flex flex-col sm:flex-row gap-4 ">
        <div>
          <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo?.image} alt="" />
        </div>

        <div className="flex-1 border border-gray-400 p-8 py-7 bg-white mx-2 sm:mx-0 sm:mt-0 rounded-[12px] sm:rounded-[5px]">
          {/* -----------Doc info : name  , degree, experience  */}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {docInfo?.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo?.degree} -{docInfo?.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo?.experience}</button>
          </div>

          {/* -------------Doctor About ----------- */}
          <div >
            <p className="flex items-center gap-1 text-sm font-medium text-gray-400 mt-3">About <img src={assets.info_icon} alt="" /> </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-2 mb-2">{docInfo?.about}</p>
          </div>
          <p className=" font-medium ">Appointment fee: <span className="text-green-600 font-semibold sm:text-xl">{docInfo?.fees} <span>{currencySymbol}</span></span></p>

        </div>
      </div>
    </div>
  );
};

export default Appointment;
