"use client";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import { Parallax } from "react-scroll-parallax";
import aboutimg3 from "../../public/img/about/3.jpg";
import aboutimg4 from "../../public/img/about/4.jpg";
import aboutimg5 from "../../public/img/about/5.png";
const AboutData = {
  bigtitle:
    'Von den <span class="text-[#d8c49f]">Alpen</span> nach <span class="text-[#d8c49f]">Thüringen</span>. ',
  brief:
    "Mit jahrelanger Erfahrung im Bau und Unterhalt von Ski- und Mountainbike-Strecken in den Schweizer Alpen bringe ich mein Know-how in den nachhaltigen Wegebau in Thüringen ein. Als passionierter Baggerfahrer setze ich Ihre Projekte präzise und zuverlässig um.",
  title: "khalif",
  title2: "",
  year: "",
  count: "",
  aboutimg3: aboutimg3,
  aboutimg4: aboutimg4,
  aboutimg5: aboutimg5,
  btntext: "learn more",
  btnlink: "#",
  AccordionList: [
    {
      title: "Die Schweizer Jahre",
      brief:
        "Mehrjährige Erfahrung im Bau und Unterhalt von anspruchsvollen Ski- und Mountainbike-Strecken in den Schweizer Alpen.",
    },
    {
      title: "Spezialist für Erdarbeiten",
      brief:
        "Umfangreiche Kenntnisse im Umgang mit verschiedenen Erdmaterialien und Geländebeschaffenheiten.",
    },
    {
      title: "Leidenschaft für die Natur",
      brief:
        "Die Liebe zur Natur und zum Sport hat mich zu meinem Beruf geführt.",
    },
    {
      title: "Expertise im Wegebau",
      brief:
        "Jahrelange Erfahrung im Bau und der Pflege von anspruchsvollen Outdoor-Strecken.",
    },
  ],
};
const About2 = () => {
  return (
    <>
      <div class="khalif-about2-wrape pt-[100px] -mb-[300px]">
        <div class="container">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="xl:col-span-7 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div class="about2-left-img-wrape flex items-center sm:flex-col-reverse">

                <div class="about2-img2 position-relative -ml-[100px] -z-[1] sm:ml-0 sm:p-20">
                  <Image src={AboutData.aboutimg4} alt="about-img" />
                  <Parallax
                    class="about2-style-shape absolute top-0 -left-5 -z-[1]"
                    translateX={["-50px", "0px"]}
                  >
                    <Image src={AboutData.aboutimg5} alt="about-shape" />
                  </Parallax>
                  <div
                    class="about2-exprience text-[32px] text-white capitalize font-normal font-antonio leading-[62px] mt-[15px] mr-0 mb-0 ml-[150px]"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:col-span-5 lg:col-span-6 md:col-span-12 sm:col-span-12">
              <div class="about2-short-brief z-[1] relative sm:ml-0 xl:ml-[60px] lg:ml-[60px]">
                <Parallax translateX={["-50px", "0px"]}>
                  <h2
                    class="text-uppercase text-[50px] font-semibold mb-0 xl:w-full xl:-ml-[150px] md:w-[85%] md:ml-0 sm:ml-[8px] sm:w-[80%] sm:text-[32px] sm:leading-[48px]"
                    dangerouslySetInnerHTML={{ __html: AboutData.bigtitle }}
                  ></h2>
                </Parallax>
                <p class="my-[50px] mx-0">{AboutData.brief}</p>

                <div
                  class="khalif-accordion-wrapper sm:mt-10"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Accordion>
                    {AboutData.AccordionList.map((item, i) => (
                      <Accordion.Panel key={i}>
                        <Accordion.Title>{item.title}</Accordion.Title>
                        <Accordion.Content>
                          <p>{item.brief}</p>
                        </Accordion.Content>
                      </Accordion.Panel>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
