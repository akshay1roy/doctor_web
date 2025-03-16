import { useContext } from "react"
import {AppContext} from '../context/AppContext'
import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"

const MyAppointment = () => {
  const {backendUrl , token}= useContext(AppContext)

  const [appointments, setAppointments]= useState([])

  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const slotDateFormat=(slotDate)=>{
    const dateArray= slotDate.split('_')

    return dateArray[0]+" "+months[Number(dateArray[1])]+" "+dateArray[2]

  }

  const getUserAppointments=async()=>{
    try {
      const {data}= await axios.get(backendUrl +'/api/user/appointments',{headers:{token}})

      // console.log(data);

      if(data.success)
      {
          setAppointments(data.appointments.reverse())
      }else{
        toast.error(data.message)
      }

      // console.log(data.appointments[0].docData)


    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  useState(()=>{
    if(token)
    {
      getUserAppointments()
    }
  },[token])


  return (
    <div>
      <p className="font-medium pb-3 text-zinc-700 border-b">My Appointments</p>
      <div>

        {

          appointments.map((item,index)=>(
            <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
              <div>
                <img className="bg-indigo-50 w-32 " src={item.docData.image} alt="" />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p className="text-zinc-700 font-medium mt-1">Address: </p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p className="text-xs mt-1 "><span className="text-sm text-neutral-700 font-medium" >Date & Time :</span > {slotDateFormat(item.slotDate)} |  {item.slotTime} </p>
              </div>
              <div>

              </div>
              <div className="flex flex-col gap-2 justify-end">
                <button className=" bg-[#666ef8] text-sm text-white  text-center sm:min-w-48 border py-2 hover:bg-[#323adf] hover:text-white transition-all duration-300 " >Pay Online</button>
                <button className=" text-sm text-stone-500   mt-1 text-center sm:min-w-48 border py-2 hover:bg-red-600 hover:text-white transition-all duration-300 ">Cancle Appointment</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointment
