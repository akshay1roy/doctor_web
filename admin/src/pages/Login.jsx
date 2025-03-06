// import React from 'react'
import { useState } from "react";
import { assets } from "../assets/assets";
export const Login = () => {
  const [state, setState] = useState("Admin");

  return (
    <form>
      <div>
        <p>
          {" "}
          <span>{state}</span> Login{" "}
        </p>
        <div>
          <p>Email</p>
          <input type="email" required />
        </div>

        <div>
          <p>Password</p>
          <input type="password" required />
        </div>
        <button>login</button>
      </div>
    </form>
  );
};
