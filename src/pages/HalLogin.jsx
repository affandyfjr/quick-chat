import React, { useState } from "react";
import Bglogin from "../components/bglogin";
import Login from "./Login";
import GambarBelakang from "../components/GambarBelakang";
import gambar from "../assets/orang_handphone-removebg-preview.webp";
import Register from "./Register";

const HalLogin = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false); // Status transisi

  const handleModeSwitch = () => {
    setIsTransitioning(true); // Mulai transisi
    setIsRegister((prev) => !prev); // Ubah mode
    // Hentikan transisi setelah animasi selesai
    setTimeout(() => setIsTransitioning(false), 700); // Sesuaikan durasi dengan `transition-all`
  };

  return (
    <div className="relative w-full h-screen overflow-y-hidden overflow-x-hidden ">
      <GambarBelakang className="absolute w-full h-full -z-10" />
      <div
        className={`bg-blue-100/50 hidden sm:block absolute inset-0  w-1/2 h-full transition-all duration-700 ease-in-out ${isRegister ? "translate-x-full" : "translate-x-0"} ${isTransitioning ? "scale-90" : "scale-100"}`}
      >
        <Bglogin
          isRegister={isRegister}
          setIsRegister={setIsRegister}
          handleModeSwitch={handleModeSwitch}
        />
      </div>
      <div
        className={`login bg-white absolute inset-0  w-full sm:w-1/2 h-screen flex justify-center items-center transition-all duration-700 ease-in-out ${
          isRegister ? "sm:translate-x-0 " : "sm:translate-x-full"
        } ${isTransitioning ? "scale-110 " : "scale-100"}`}
      >
        {isRegister ? (
          <Login
            isTransitioning={isTransitioning}
            handleModeSwitch={handleModeSwitch}
          />
        ) : (
          <Register
            isTransitioning={isTransitioning}
            handleModeSwitch={handleModeSwitch}
          />
        )}
      </div>
      <img
        src={gambar}
        alt=""
        className={`absolute bottom-0  z-10 w-[40%]  h-auto transition-all duration-700 ease-in-out ${isRegister ? " right-96" : "left-96"} ${isTransitioning ? "translate-x-full" : ""}`}
      />
    </div>
  );
};

export default HalLogin;