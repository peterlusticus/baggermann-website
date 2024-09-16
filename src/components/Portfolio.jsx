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
     
    </>
  );
};

export default Portfolio;
