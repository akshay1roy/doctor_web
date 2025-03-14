import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const {token, backendUrl,setToken}= useContext(AppContext)

  const navigate=useNavigate()


  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // console.log({name,email,password}) 

    try {
      if(state==='Sign Up')
      {
          const {data}= await axios.post(backendUrl+ '/api/user/register',{name,password, email})

          if(data.success)
          {
            localStorage.setItem('token',data.token);
            setToken(data.token);
               toast.success("login Successfully")
          }
          else{
            toast.error(data.message);
          }
      }else{
        const {data}= await axios.post(backendUrl+ '/api/user/login',{password, email})

        if(data.success)
        {
          localStorage.setItem('token',data.token);
          setToken(data.token);
             toast.success("login Successfully")
        }
        else{
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message) 
    }

  };


  useEffect(()=>{
    if(token)
    {
        navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 shadow-lg ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Create Account" : "Login"} to book
          Appointemt
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email </p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            placeholder="enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type="submit" className="bg-primary text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account ?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primay underline cursor-pointer"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Create an new account ?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primay underline cursor-pointer"
            >
              click here
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
