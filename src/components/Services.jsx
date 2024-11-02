"use client";
import Link from "next/link";
import React from "react";
import bgimg from "../../public/img/services/bg.jpg";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";

const ServicesData = {
  title: "services",
  title2: "Mein Angebot",
  btntext: "Meine Services",
  btnlink: "services",
  serviceslist: [
   
  ],
};
const Services = () => {
  return (
    <>
      <div
        className="khalif-services-wrape services-bg py-[100px] bg-center bg-cover bg-fixed relative h-full bg-[#1a2b3c] bg-no-repeat before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#0707071a]"
        style={{ backgroundImage: `url(${bgimg.src})` }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <div className="section-title-wrape text-center uppercase relative mb-[100px]">
                <h3 className="my-stroke2 font-bold uppercase leading-[49px] text-[40px]">
                  {ServicesData.title}
                </h3>
                <h4 className="uppercase font-medium text-xl mb-0">
                  {ServicesData.title2}
                </h4>
              </div>
            </div>
            {ServicesData.serviceslist.map((item, i) => (
              <div
                className="xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-12"
                key={i}
              >
                <div
                  className="single-services-wrape bgc-2 p-[30px] ml-6 relative transition-all duration-[0.3s] mb-[60px] hover:before:border-[#d8c49f] group"
                  data-aos="fade-right"
                  data-aos-delay={item.delay}
                >
                  <Parallax
                    className="services-style-shape absolute top-[60px] right-[60px] transition-all duration-[0.3s] group"
                    translateY={["-20px", "0px"]}
                  >
                    <svg
                      className="w-6 h-auto fill-[#595959] group-hover:fill-[#d8c49f]"
                      height={512}
                      viewBox="0 0 32 32"
                      width={512}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6 10a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM18 10a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM30 10a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM30 22a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM17.646 22a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2zM6 22a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2z" />
                    </svg>
                  </Parallax>
                  <div className="single-services-icon w-[180px] h-[180px] bg-[#323232] text-center -ml-10 -mt-[50px] relative flex items-center -skew-x-[8deg] before:content-[''] before:absolute before:w-[180px] before:h-[180px] before:top-0 before:right-0 before:border-r-2 before:border-t-2 before:border-solid before:border-white after:content-[''] after:absolute after:top-full after:left-[1px] after:w-0 after:h-0 after:border-t-[24px] after:border-solid after:border-t-[#585858] after:border-l-[24px] after:border-l-transparent after:skew-x-[8deg]">
                    <span
                      className="w-full"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></span>
                  </div>
                  <h3>
                    <Link
                      className="block uppercase mt-[30px] mx-0 mb-5 text-[28px] group-hover:text-[#d8c49f]"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="khalif-more-services text-center -mb-[200px]">
          <Tilt className="inline-block" scale={1.1}>
            <Link
              href={ServicesData.btnlink}
              className="btn-2 uppercase mt-[70px] bgc-1 btn-tilt"
            >
              <span>
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 95.91"
                >
                  <path
                    d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z"
                    transform="translate(-131.88 -418.11)"
                  />
                </svg>
              </span>
              {ServicesData.btntext}
            </Link>
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default Services;
