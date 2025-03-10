import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

export default function AddDoctors() {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, SetAbout] = useState("");
  const [specialiy, setSepeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image not Selected ");
      }

      const formData = new FormData();

      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", specialiy);
      formData.append("degree", degree);
      formData.append("address", JSON.stringify({ line1: address1, line2: address2 }));

    //   console log formData

   formData.forEach((value,key)=>{
    console.log(`${key} : ${value}`)
   })


   const {data}= await axios.post(backendUrl + '/api/admin/add-doctor',formData,{
        headers:{ aToken}
   })

    if(data.success)
    {
        toast.success(data.message)
        setDocImg(false);
        setName('');
        setAddress1('');
        setAddress2('')
        setEmail('');
        SetAbout('');
        setExperience('')
        setFees('')
        setSepeciality('')
        setPassword('')
        setDegree('');
    }else{
        toast.error(data.message)
    }


    } catch (error) {
        toast.error(error.message);
        console.log(error)
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full ">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll ">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="bg-gray-100 w-16 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600 ">
          {/*  parent start  */}

          {/*  first div  */}
          <div className="w-full flex flex-col lg:flex-1  gap-4 ">
            <div className="flex flex-1 gap-1 flex-col ">
              <p>Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Doctor email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Password"
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year ">1 Year </option>
                <option value="2 Year ">2 Year </option>
                <option value="3 Year ">3 Year </option>
                <option value="4 Year ">4 Year </option>
                <option value="5 Year ">5 Year </option>
                <option value="6 Year ">6 Year </option>
                <option value="7 Year ">7 Year </option>
                <option value="8 Year ">8 Year </option>
                <option value="9 Year ">9 Year </option>
                <option value="10 Year ">10 Year </option>
              </select>
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          {/* end of first div  */}

          {/* second div */}
          <div className="w-full flex lg:flex-1 gap-4 flex-col ">
            <div className="flex flex-1 gap-1 flex-col ">
              <p>Speciality</p>
              <select
                onChange={(e) => setSepeciality(e.target.value)}
                value={specialiy}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col ">
              <p>Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
          {/*  end of second  */}
        </div>

        {/*  end of parent   */}

        <div>
          <p className="mt-4 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => SetAbout(e.target.value)}
            value={about}
            className="w-full px-4 pt-2 border rounded "
            type="text"
            rows={5}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#5F6FFF] px-10 py-3 mt-4 text-white rounded-full cursor-pointer hover:bg-[#5f7fff]"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
}
