import React, { useEffect, useState } from "react";
import Header from "./Header";
import ShoopingPage from "./ShoopingPage";

function LandingPage() {
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", "landing");
  },[])
  return (
    <div>
      <Header prop={true}/>
      <ShoopingPage />
    </div>
  );
}

export default LandingPage;
