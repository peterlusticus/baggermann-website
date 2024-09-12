"use client";
import Image from "next/image";
import { Accordion } from "flowbite-react";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import img1 from "../../public/img/accordion/1.png";
import img2 from "../../public/img/accordion/2.png";

const AccordianData = {
  img1: img1,
  img2: img2,
  title: '<span class="text-[#ff5100]">some</span> q&a section here',
  AccordionList: [
    {
      title: "how to buy this?",
      brief:
        "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      title: "it is refundable?",
      brief:
        "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
    {
      title: "can i use free",
      brief:
        "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    },
  ],
};
const Accordians = () => {
  return (
    <>
      <div class="khalif-accordian-wrape2 bgc-2 py-[100px]">
        <div class="container">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="xl:col-start-1 xl:col-span-5 lg:col-start-1 lg:col-span-5 md:col-span-12 sm:col-span-12">
              <div class="accordian-left-content relative">
                <Image
                  class="relative z-[1]"
                  src={AccordianData.img1}
                  alt="img"
                />
                <Parallax
                  class="accordian-style-img absolute top-[20%] -left-[84px]"
                  translateX={["-20px", "0px"]}
                >
                  <Image
                    class="relative z-[1]"
                    src={AccordianData.img2}
                    alt="img"
                  />
                </Parallax>
              </div>
            </div>
            <div class="xl:col-span-5 lg:col-span-5 md:col-span-12 sm:col-span-12">
              <div class="about2-short-brief z-[1] relative sm:ml-0">
                <Parallax translateX={["-70px", "0px"]}>
                  <h2
                    class="text-uppercase text-[50px] font-semibold mb-0 xl:w-full xl:-ml-[150px] md:w-[85%] md:ml-0 sm:ml-[8px] sm:w-[80%] sm:text-[32px] sm:leading-[48px]"
                    dangerouslySetInnerHTML={{ __html: AccordianData.title }}
                  ></h2>
                </Parallax>
                <div class="khalif-accordion-wrapper mt-10 xl:ml-[60px] lg:ml-[60px]">
                  <Accordion>
                    {AccordianData.AccordionList.map((item, i) => (
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

export default Accordians;
