"use client";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Lightbox from "react-18-image-lightbox";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bgimg from "../../public/img/team/bg.jpg";
import team1 from "../../public/img/team/1.jpg";
import team2 from "../../public/img/team/2.jpg";
import team3 from "../../public/img/team/3.jpg";
import Link from "next/link";
import Image from "next/image";

const TeamData = {
  title: "team",
  title2: "our team",
  bgimg: bgimg,
  btntext: "learn more",
  btnlink: "#",
  TeamList: [
    {
      img: team1,
      name: "hossain shamrat",
      position: "ui/ux designer",
      sociallist: [
        {
          icon: "fa fa-instagram",
          link: "https://www.instagram.com/baggermann_erfurt/",
        }
      ],
    },
    {
      img: team2,
      name: "rahat hasan jhon",
      position: "artical writer",
      sociallist: [
        {
          icon: "fa fa-instagram",
          link: "https://www.instagram.com/baggermann_erfurt/",
        }
      ],
    },
    {
      img: team3,
      name: "oliver henry zimma",
      position: "product manager",
      sociallist: [
        {
          icon: "fa fa-instagram",
          link: "https://www.instagram.com/baggermann_erfurt/",
        }
      ],
    },
    {
      img: team1,
      name: "hossain shamrat",
      position: "ui/ux designer",
      sociallist: [
        {
          icon: "fa fa-instagram",
          link: "https://www.instagram.com/baggermann_erfurt/",
        }
      ],
    },
  ],
};
const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);

  const handleOpenLightbox = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  const handleCloseLightbox = () => setIsOpen(false);

  const handleMovePrev = () => {
    const newIndex = (photoIndex + images.length - 1) % images.length;
    setPhotoIndex(newIndex);
  };

  const handleMoveNext = () => {
    const newIndex = (photoIndex + 1) % images.length;
    setPhotoIndex(newIndex);
  };
  const images = TeamData.TeamList.map((item) => item.img.src);
  return (
    <>
      <div
        class="khalif-team-wrape team-bg py-[100px] bg-center bg-cover relative h-full bg-[#1a2b3c] bg-no-repeat before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgb(0,0,0/5%)] mb-[100px]"
        style={{ backgroundImage: `url(${TeamData.bgimg.src})` }}
      >
        <div class="container">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="col-span-12">
              <div class="section-title-wrape uppercase text-center relative mb-20">
                <h3 class="my-stroke2 font-bold uppercase leading-[49px] text-[40px]">
                  {TeamData.title}
                </h3>
                <h4 class="uppercase font-medium text-xl mb-0">
                  {TeamData.title2}
                </h4>
              </div>
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                loop={true}
                speed={1000}
                autoplay={true}
                centeredSlides={true}
                className="khalif-all-team-area text-center"
              >
                {TeamData.TeamList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div class="single-team-wrape p-[15px] relative mt-[70px]">
                      <div class="team-img-wrape relative before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:transition-all before:duration-[0.3s] before:bg-gradient-to-b before:from-[rgba(0,0,0,0)0%] before:to-[rgba(2,2,0,0)1%,#000_100%]">
                        <Image
                          class="rounded-[10px]"
                          src={item.img}
                          alt="team"
                        />
                        <div class="team-title-desig-wrape absolute left-0 right-0 bottom-[25px] transition-all duration-[0.3s]">
                          <div class="team-popup-wrape opacity-0 invisible transition-all duration-[0.5s]">
                            <div
                              class="popup-team hover:bg-[#edb350] hover:border-white w-[70px] h-[70px] leading-[80px] text-center border-[1px] border-solid border-[#595959] rounded-[50%] inline-block cursor-pointer"
                              onClick={() => handleOpenLightbox(i)}
                            >
                              <svg
                                class="inline-block w-5 h-5 mt-0 mx-auto mb-[10px] duration-[0.3s] fill-white -rotate-45"
                                id="Layer_4"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 128 95.91"
                              >
                                <path
                                  d="M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z"
                                  transform="translate(-131.88 -418.11)"
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <h3 class="team-title font-semibold capitalize text-[28px] mx-0 mt-0 mb-5">
                            {item.name}
                          </h3>
                          <h4 class="team-desig text-xl font-normal font-jost capitalize">
                            {item.position}
                          </h4>
                        </div>
                      </div>
                      <ul class="team-social-wrape opacity-0 invisible transition-all duration-[0.3s] -mt-[10px] mx-0 mb-0">
                        {item.sociallist.map((items, i) => (
                          <li
                            class=" inline-block transition-all duration-[0.3s] ml-[15px] my-0 mr-0 group"
                            key={i}
                          >
                            <Link
                              class="group-hover:bg-[#edb350] group-hover:border-[#edb350] text-lg w-[50px] h-[50px] text-center leading-[45px] border-[1px] border-solid border-[#595959] rounded-[50%] text-white block transition-all duration-[0.3s]"
                              href={items.link}
                            >
                              <i class={items.icon}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div class="khalif-more-team-member text-center -mb-[200px]">
          <Tilt className="inline-block" scale={1.1}>
            <Link
              href={TeamData.btnlink}
              class="btn-2 text-uppercase mt-[70px] bgc-1 btn-tilt"
            >
              <span>
                <svg
                  id="Layer_7"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 95.91"
                >
                  <path
                    d="M259.88,468.09l-52,45.93-5.1-5.52,43.33-38.41H131.88v-8H246.09l-43.25-38.36,5-5.62,52.06,46Z"
                    transform="translate(-131.88 -418.11)"
                  />
                </svg>
              </span>
              {TeamData.btntext}
            </Link>
          </Tilt>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={handleCloseLightbox}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </>
  );
};

export default Team;
