// import React from 'react'
import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";

export const Login = () => {
  const [state, setState] = useState("Admin");
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const {setAToken, backendUrl}= useContext(AdminContext)

  const onSubmitHandler=async(event)=>{
        event.preventDefault();

        console.log({email,password});

        try {

            if(state==='Admin')
            {
                const {data}= await axios.post(backendUrl+'/api/admin/login',{
                    email,password
                })

                if(data.success)
                {
                    // console.log(data.token);
                    localStorage.setItem('aToken',data.token)
                    setAToken(data.token);
                    // toast.success()
                }
                else{
                  toast.error(data.message)
                }
            }else{
                
                console.log("api is not working")
            }

        } catch (error) {
            console.log(error)
        }
  }




  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto ">
          {" "}
          <span className="text-[#5F6FFF]" >{state}</span> Login{" "}
        </p>
        <div className="w-full">
          <p>Email</p>
          <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required className="border border-[#DADADA] rounded w-full p-2 mt-1 " />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required className="border border-[#DADADA] rounded w-full p-2 mt-1 " />
        </div>
        <button className="bg-[#5F6FFF] text-white w-full py-2 rounded-md text-base cursor-pointer" >login</button>

        {
            state==='Admin'
            ? <p>Doctor Login <span onClick={()=>setState('Doctor')} className="text-[#5F6FFF] cursor-pointer underline" > Click here</span> </p>
            : <p>Admin Login <span onClick={()=>setState('Admin')}  className="text-[#5F6FFF] cursor-pointer underline " > Click here</span>  </p>
        }
      </div>
    </form>
  );
};
