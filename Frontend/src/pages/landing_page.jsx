import React from "react";
import { Link } from "react-router-dom"; 
const LandingPage = () => {
  return (
    <div className="landingContainer  h-screen w-screen bg-[url(/background.png)] bg-no-repeat bg-cover  ">
      <nav className="flex justify-between items-center  px-[2rem] py-[1.6rem]">
        <div className="navhead  ">
          <p
            className="text-[1.5rem] 
            text-white font-medium  "
          >
            Apna Video Call
          </p>
        </div>

        <div className="navlist  text-white flex justify-between gap-[1.6rem] cursor-pointer ">
          <p>Join as Guest </p>
          <p>Register</p>
          <div role="button"  className="text-white bg-orange-500 w-fit px-2 py-1  rounded-l   ">
            <Link to="/AuthsignIN" className="text-[1.3rem]" >Login  </Link> 
          </div>
        </div>
      </nav>


        <div className="landingmMainContainor  flex justify-between px-[3rem] h-[80vh] items-center  mx-[4rem] ">
            <div className="w-[45%]">
                <h2 className="text-white text-[4rem]  font-semibold   " > <samp className = "text-orange-500">Connect</samp> with your Loved Ones</h2>
                <p className="  text-gray-400 text-[1.3rem]" > Cover a distance by apna video call</p>
                <div role="button" className="text-white bg-orange-500 w-fit px-4 py-2  rounded-xl mt-8 "> <Link to="/AuthsignUp" className="text-[1.3rem]" >Get stated </Link> 
                </div>

            </div>
            <div > 
                <img className=" h-[75vh] object-contain" src="/mobile.png" alt="mobile image " />
            </div>
        </div>

    </div>
  );
};

export default LandingPage;
