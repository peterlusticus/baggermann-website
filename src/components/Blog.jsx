"use client";
import React from "react";
import Link from "next/link";
import img1 from "../../public/img/blog/1.jpg";
import img2 from "../../public/img/blog/2.jpg";
import img3 from "../../public/img/blog/3.jpg";
import img4 from "../../public/img/blog/4.jpg";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const BlogData = {
  title: "blog",
  title2: "latest news",
  BlogList: [
    {
      blogimg: img1,
      title: "Lorem ipsum dolor sit consectetur, adipisicing elit.",
      date: "02 jan 2080",
      auth: "by admin",
      link: "#",
    },
    {
      blogimg: img2,
      title: "Leverage agile frameworks to provide a robust",
      date: "16 mar 2048",
      auth: "by admin",
      link: "#",
    },
    {
      blogimg: img3,
      title:
        "culpa dolore accusamus itaque mollitia, qui consequuntur excepturi",
      date: "02 jan 2080",
      auth: "by admin",
      link: "#",
    },
    {
      blogimg: img4,
      title: "deleniti velit ea sequi impedit illum nemo autem natus. Alias",
      date: "14 nov 2024",
      auth: "by admin",
      link: "#",
    },
  ],
};
const Blog = () => {
  return (
    <>
      
    </>
  );
};

export default Blog;
