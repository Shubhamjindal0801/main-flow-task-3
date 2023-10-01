import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Header from "./Header";

function LoginPage() {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    const user = localStorage.getItem('userDetails');
    if(user)window.location.href = '/landing'
    document.documentElement.setAttribute("data-theme", "form");
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    if(!userDetails){
      return toast.error('Please create account first.')
    }
    if(userData.email === userDetails.email && userData.pass === userDetails.pass){
        toast.success('Login successfully')
        setTimeout(()=>{
            window.location.href='/landing'
        },1500)
    }else{
        toast.error('Invalid username or password')
    }
  };
  return (
    <div className="login-container">
      <Header porp={false} />
      <form onSubmit={handleSubmit} className="signup-form-container">
        <div>
          <label>
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            value={userData.email}
            required
            type="email"
            placeholder="Enter Your Email here"
          />
        </div>
        <div>
          <label>
            Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                pass: e.target.value,
              })
            }
            value={userData.pass}
            required
            type="password"
            placeholder="Enter Your Password here"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
