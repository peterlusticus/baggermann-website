"use client";
import Image from "next/image";
import React from "react";
import img5 from "../../public/img/blog/5.jpg";
import img6 from "../../public/img/blog/6.jpg";
import img7 from "../../public/img/blog/7.jpg";
import img8 from "../../public/img/blog/8.jpg";
import Link from "next/link";
import Sidewdg from "./Sidewdg";
const BloglistData = {
  BlogList: [
    {
      blogimg: img5,
      title:
        "Crafting a Creative Blog: A Step-by-Step Guide Lorem ipsum dolor sit consectetur, adipisicing elit.",
      postlink: "#",
      date: "24 Dec 2019",
      auth: "by admin",
      authlink: "#",
    },
    {
      blogimg: img6,
      title:
        "How to Leverage Social Media for Your Creative agile frameworks to provide a robust blog That Stands Out",
      postlink: "#",
      date: "16 Mar 2048",
      auth: "by admin",
      authlink: "#",
    },
    {
      blogimg: img7,
      title:
        "culpa dolore accusamus itaque mollitia, qui consequuntur excepturi Are the Benefits of Having a Creative Blog?",
      postlink: "#",
      date: "02 Jan 2080",
      auth: "by admin",
      authlink: "#",
    },
    {
      blogimg: img8,
      title: "Creative Branding Blogs: Unlocking the Power of your brand",
      postlink: "#",
      date: "14 Nov 2024",
      auth: "by admin",
      authlink: "#",
    },
  ],
};
const Bloglists = () => {
  return (
    <>
      <div
        id="khalif-latest-blog-area"
        class="khalif-latest-blog-area my-[110px]"
      >
        <div class="container">
          <div class="grid grid-cols-12 gap-6">
            <div class="xl:col-span-8 lg:col-span-8 md:col-span-7 sm:col-span-12 xl:pr-[30px] lg:pr-[30px] md:pr-[30px]">
              {BloglistData.BlogList.map((item, i) => (
                <div
                  class="khalif-single-blog-wrape mb-[30px] magic-hover magic-hover__square"
                  data-aos="fade-up"
                  key={i}
                >
                  <Image class="w-full" src={item.blogimg} alt="blog" />
                  <div class="single-blog-content bg-[#070707] p-5">
                    <h4>
                      <Link
                        href={item.postlink}
                        class="post-title group-hover:text-[#d8c49f] inline-block text-2xl font-semibold leading-10 capitalize"
                      >
                        {item.title}
                      </Link>
                    </h4>
                    <ul class="single-post-info list-none flex items-center justify-between border-t-[1px] border-solid border-t-[#585858] pt-5 mt-5">
                      <li class="blog-date text-lg font-semibold m-0 text-[#888888] capitalize transition-all duration-[0.3s] hover:text-[#d8c49f] hover:cursor-pointer group">
                        {item.date}
                      </li>
                      <li class="blog-admin text-lg font-semibold m-0 text-[#888888] capitalize transition-all duration-[0.3s] hover:cursor-pointer group">
                        <Link
                          class="group-hover:cursor-pointer"
                          href={item.authlink}
                        >
                          {item.auth}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}

              <div class="khalif-pagination my-[50px]">
                <ul class="pagination flex items-center text-center">
                  <li class="w-[60px] h-[60px] leading-[55px] rounded-[100%] border-[1px] border-solid border-[#eeeeee]  text-[#d8c49f] mr-4 hover:bg-[#d8c49f] hover:text-white transition-all duration-[0.3s] font-semibold font-antonio text-lg cursor-pointer">
                    <Link href="#">1</Link>
                  </li>
                  <li class="w-[60px] h-[60px] leading-[55px] rounded-[100%] border-[1px] border-solid border-[#eeeeee]  text-[#d8c49f] mr-4 hover:bg-[#d8c49f] hover:text-white transition-all duration-[0.3s] font-semibold font-antonio text-lg cursor-pointer">
                    <Link href="#">2</Link>
                  </li>
                  <li class="w-[60px] h-[60px] leading-[55px] rounded-[100%] border-[1px] border-solid border-[#eeeeee]  text-[#d8c49f] mr-4 hover:bg-[#d8c49f] hover:text-white transition-all duration-[0.3s] font-semibold font-antonio text-lg cursor-pointer">
                    <Link href="#">
                      <i class="fa fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Sidewdg />
          </div>
        </div>
      </div>
    </>
  );
};

export default Bloglists;
