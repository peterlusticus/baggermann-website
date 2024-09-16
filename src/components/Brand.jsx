"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo1 from "../../public/img/brand/1.png";
import logo2 from "../../public/img/brand/2.png";
import logo3 from "../../public/img/brand/3.png";
import logo4 from "../../public/img/brand/4.png";
import logo5 from "../../public/img/brand/5.png";

const BrandData = {
  title: "Baggerarbeiten",
  title2: "Spezialbagger",
  BrandList: [
    
  ],
};
const Brand = () => {
  return (
    <>
      <div className="khalif-brand-wrape pt-[50px] pb-[10px]">
        <div className="container">
          <div className="col-span-12">
            <div className="section-title-wrape text-center uppercase relative mb-20">
              <h3 className="my-stroke2 font-bold uppercase leading-[49px] text-[40px]">
                {BrandData.title}
              </h3>
              <h4 className="uppercase font-medium text-xl mb-0">
                {BrandData.title2}
              </h4>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
