"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
import aboutimg from "../../public/img/about/1.jpg";
import aboutimg2 from "../../public/img/about/2.jpg";

const AboutData = {
  bigtitle:
    'Mit einem speziell <span class="text-[#d8c49f]">modifizierten Bagger</span> werden große <span class="text-[#d8c49f]">Projekte</span> auf kleinstem Raum <span class="text-[#d8c49f]">realisiert.</span> ',
  title: "BAGGERMANN",
  title2: "Erfahrung",
  year: "Durchfahrtshöhe",
  count: "100",
  aboutimg: aboutimg,
  aboutimg2: aboutimg2,
  brief:
    " Eine geringe Durchfahrtshöhe von 150cm und ein schmales Tor von 100cm sind kein Problem für meinen Bagger.",
  btntext: "Mehr erfahren",
  btnlink: "services",
};

const About = () => {
  return (
    <>
      <div className="khalif-about-wrape mb-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-7 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div className="about-left-img-wrape flex items-center gap-[26px] sm:flex-col-reverse">
                <div
                  className="about-img2"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <Image src={AboutData.aboutimg2} alt="about-img" />
                </div>
              </div>
            </div>
            <div className="xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <Parallax translateY={["-70px", "0px"]}>
                <div className="about-short-brief ml-[60px]">
                  <h2
                    className="uppercase font-semibold text-[58px] xl:-ml-[50px] mb-[70px] md:mx-0 md:mt-0 md:mb-[30px] sm:mx-0 sm:mt-28 sm:mb-[30px] sm:text-[40px]"
                    dangerouslySetInnerHTML={{ __html: AboutData.bigtitle }}
                  ></h2>
                  <p className="mb-[50px]">{AboutData.brief}</p>

                  <Tilt className="inline-block" scale={1.1}>
                    <Link
                      href={AboutData.btnlink}
                      className="btn-2 bgc-2 text-center uppercase"
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
                      {AboutData.btntext}
                    </Link>
                  </Tilt>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
