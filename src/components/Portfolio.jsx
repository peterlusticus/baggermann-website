"use client";
import Link from "next/link";
import React, { useState } from "react";
import Lightbox from "react-18-image-lightbox";
import Tilt from "react-parallax-tilt";
import folio1 from "../../public/img/folio/1.jpg";
import folio2 from "../../public/img/folio/2.jpg";
import folio3 from "../../public/img/folio/3.jpg";
import folio4 from "../../public/img/folio/4.jpg";
import folio5 from "../../public/img/folio/5.jpg";
import folio6 from "../../public/img/folio/6.jpg";
import Image from "next/image";

const PortfolioData = {
  title: "portfolio",
  title2: "latest portfolio",
  btntext: "more portfolio",
  btnlink: "#",
  portfoliolist: [
    {
      folioimg: folio1,
      category: "brand",
      title: "mobile photography",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">branding</a><a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">packing</a>',
    },
    {
      folioimg: folio2,
      category: "web design",
      title: "black chair",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">branding</a>',
    },
    {
      folioimg: folio3,
      category: "brand",
      title: "bonsai tree",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">tree</a>',
    },
    {
      folioimg: folio4,
      category: "development",
      title: "yellow single sofa",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">branding</a>',
    },
    {
      folioimg: folio5,
      category: "brand",
      title: "cactus tob tree",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">tree</a>',
    },
    {
      folioimg: folio6,
      category: "photography",
      title: "paper cup with soss",
      link: "#",
      ctg: '<a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">branding</a><a class="text-sm leading-[10px] p-[5px] capitalize font-normal bg-[#111111] !text-white -ml-[10px] opacity-0 invisible duration-[0.3s] group-hover:opacity-[1] group-hover:visible group-hover:ml-0" href="#">packing</a>',
    },
  ],
};
const Portfolio = ({ isHidden }) => {
  // data
  const categories = [
    "All",
    ...new Set(PortfolioData.portfoliolist.map((item) => item.category)),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(PortfolioData.portfoliolist);

  const filterItems = (cateItem) => {
    setActiveCategory(cateItem);

    if (cateItem === "All") {
      return setItems(PortfolioData.portfoliolist);
    } else {
      const findItems = PortfolioData.portfoliolist.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };

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
  const images = PortfolioData.portfoliolist.map((item) => item.folioimg.src);
  return (
    <>
      <div className="khalif-portfolio-wraper py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 text-center">
            <div className="col-span-12">
              <div className="section-title-wrape uppercase relative mb-20">
                <h3 className="my-stroke2 font-bold uppercase leading-[49px] text-[40px]">
                  {PortfolioData.title}
                </h3>
                <h4 className="uppercase font-medium text-xl mb-0">
                  {PortfolioData.title2}
                </h4>
              </div>
              <ul className="portfolio-menu-wrape mt-0 mx-0 mb-[70px] p-0">
                {categories.map((cate, i) => (
                  <li
                    onClick={() => filterItems(cate)}
                    key={i}
                    className={`list-none m-0 inline-block uppercase text-[30px] font-semibold cursor-pointer py-0 px-[22px] transition-all duration-[0.2s] text-white font-antonio relative md:my-2 sm:my-2 after:content-['/'] after:absolute after:right-0 after:left-[98%] after:top-0 after:bottom-0 last:pr-0 last:after:hidden hover:text-[#fa6501] active:text-[#fa6501] hover:after:!text-white active:after:!text-white ${
                      cate === activeCategory ? "active" : ""
                    }`}
                  >
                    {cate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap portfolio-all-items">
            {items.map((item, i) => (
              <div
                className="xl:w-1/3 lg:w-1/3 md:w-2/4 sm:w-full p-3 single-portfolio-item group brand"
                data-aos="zoom-in"
                key={i}
              >
                <Tilt scale={1.1}>
                  <div className="single-folio-wraper relative">
                    <div className="folio-img-hvr-wrape w-full">
                      <Image src={item.folioimg} alt="folioimg" />
                      <div className="portfolio-pop absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 transition-all duration-[0.3s]">
                        <button
                          className="w-[50px] inline-block text-center bg-[#111111] rounded-[50%] text-xl transition-all duration-[0.3s] invisible opacity-0 h-[50px] !leading-none scale-0  group-hover:visible group-hover:opacity-[1] group-hover:scale-[1]"
                          onClick={() => handleOpenLightbox(i)}
                        >
                          <i className="fa fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div className="folio-hvr-title absolute left-[30px] top-[30px]">
                      <a href="#">
                        <h3 className="group-hover:opacity-[1] group-hover:visible group-hover:ml-0 text-[18px] p-[10px] uppercase font-semibold bg-[#111111] inline-block duration-[0.3s] -ml-[10px] opacity-0 invisible">
                          {item.title}
                        </h3>
                      </a>
                      <div
                        className="folio-ctg"
                        dangerouslySetInnerHTML={{ __html: item.ctg }}
                      ></div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </div>
        {isHidden ? null : (
          <div className="khalif-more-portfolio text-center">
            <Tilt className="inline-block -mb-[180px]" scale={1.1}>
              <Link
                href={PortfolioData.btnlink}
                className="bgc-1 btn-2 uppercase mt-[70px] z-[1]"
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
                {PortfolioData.btntext}
              </Link>
            </Tilt>
          </div>
        )}
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

export default Portfolio;
