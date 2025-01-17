import React from "react";
import gambar_1_a from "../assets/make-min.webp";
import gambar_1_b from "../assets/Easier and-min.webp";
import gambar_1_c from "../assets/free-min.webp";
import gambar_metahan from "../assets/make chatting-min.webp"

const Gambar_atas = () => {
  return (
    <>
      <section className="sm hidden sm:block">
        <div className="w-full ">
            <img src={gambar_metahan} alt="" className="" />
        </div>
      </section>
      <section className="block sm:hidden">
        <div className="gambar  h-[10px] w-[50px] flex flex-col items-center">
          <div className="gambar w-[60vw] h-[16vh] flex justify-center">
            <img src={gambar_1_a} alt="gambar" className="-1 bg-contain " />
          </div>
          <div className="gambar px-4 h-[7vh] w-[50vw] flex justify-center mb-6">
            <img src={gambar_1_b} alt="gambar" className="-1 " />
          </div>
          <div className="gambar px-5 h-[8vh] w-[40vw] flex justify-center">
            <img src={gambar_1_c} alt="gambar" className="-1 bg-contain " />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gambar_atas;
