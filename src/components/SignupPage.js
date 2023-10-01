import React, { useEffect, useState } from "react";
import "./signupPage.css";
import { toast } from 'react-toastify';
import Header from "./Header";

function SignupPage() {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    const user = localStorage.getItem('userDetails');
    if(user)window.location.href = '/landing'
    document.documentElement.setAttribute("data-theme", "form");
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userData.phone.length !==10){
        return toast.error('Phone Number must be of length 10')
    }
    if(userData.pass !== userData.conPass){
        return toast.error('Password must be same')
    }
    if(userData.pass.length < 6){
        toast.error('Pass must be of length 6')
    }
    let userDetails = {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
        pass: userData.pass
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    setUserData({
        name:'',
        email:'',
        phone:'',
        pass:'',
        conPass:''
    });
    toast.success('Account Created successfully')
    window.location.reload();
  };

  return (
    <div className="signup-container">
      <Header prop={false} />
      <form onSubmit={handleSubmit} className="signup-form-container">
        <div>
          <label>
            Name<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
            value={userData.name}
            required
            type="text"
            placeholder="Enter Your name here"
          />
        </div>
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
            Phone Number<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) =>
              setUserData({
                ...userData,
                phone: e.target.value,
              })
            }
            value={userData.phone}
            required
            type="number"
            placeholder="Enter Your Number here"
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
        <div>
          <label>
            Confirm Password<span style={{ color: "red" }}>*</span>
          </label>
          <input
            onChange={(e) =>
                setUserData({
                  ...userData,
                  conPass: e.target.value,
                })
              }
            value={userData.conPass}
            required
            type="password"
            placeholder="Confirm Your Password"
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupPage;
