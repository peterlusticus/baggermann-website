"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../public/img/wdg/wdg-img-1.jpg";
import img2 from "../../public/img/wdg/wdg-img-2.jpg";
import img3 from "../../public/img/wdg/wdg-img-3.jpg";
import Link from "next/link";
const SidewdgData = {
  title: "Post Archive",
  title2: "Latest Post",
  title3: "Post Tags",
  title4: "Meta",
  Postarchive: [
    {
      date: "Jun 2016",
      postcout: "(11)",
      postlink: "#",
    },
    {
      date: "Aug 2017",
      postcout: "(02)",
      postlink: "#",
    },
    {
      date: "Sep 2018",
      postcout: "(13)",
      postlink: "#",
    },
    {
      date: "Dec 2019",
      postcout: "(444)",
      postlink: "#",
    },
  ],
  Postlist: [
    {
      img: img1,
      title: "Leverage agile frameworks to provide a robust",
      date: "May 03, 2019",
      link: "#",
    },
    {
      img: img2,
      title: "Coding bridges the universal divide. It is the one",
      date: "Jun 08, 2019",
      link: "#",
    },
    {
      img: img3,
      title: "Connects different and countries trying times natio",
      date: "Aug 11, 2022",
      link: "#",
    },
  ],
  TagsList: [
    {
      title: "awesome",
      link: "#",
    },
    {
      title: "template",
      link: "#",
    },
    {
      title: "ui/ux",
      link: "#",
    },
    {
      title: "software",
      link: "#",
    },
    {
      title: "develop",
      link: "#",
    },
  ],
  MetaList: [
    {
      title: "Log In",
      link: "#",
    },
    {
      title: "Entries Feed",
      link: "#",
    },
    {
      title: "Comments Feed",
      link: "#",
    },
    {
      title: "Wordpress.Org",
      link: "#",
    },
  ],
};
const Sidewdg = () => {
  return (
    <>
      <div class="xl:col-span-4 lg:col-span-4 md:col-span-5 sm:col-span-12">
        <div
          class="single-sid-wdg mb-[50px] border-[1px] border-solid border-[#595959] p-[30px] transition-all duration-[0.3s] hover:border-[#edb350] sm:mt-[30px]"
          data-aos="fade-up"
        >
          <form class="wdg-search-form relative">
            <input
              type="text"
              placeholder="type to search here..."
              class="h-[70px] rounded-none shadow-none bg-transparent border-[1px] border-solid border-[#595959] w-full p-5 font-antonio text-[15px] capitalize text-[#1a2b3c] focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
            />
            <button
              class="submit-btn font-normal w-[70px] h-[70px] inline-block rounded-none absolute right-0 top-0 border-[1px] border-solid border-[#595959] transition-all duration-[0.3s] text-white text-[15px] tracking-[1px] leading-[25px] bg-[#070707] hover:bg-[#edb350]"
              type="submit"
            >
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div
          class="single-sid-wdg mb-[50px] border-[1px] border-solid border-[#595959] p-[30px] transition-all duration-[0.3s] hover:border-[#edb350]"
          data-aos="fade-up"
        >
          <h3 class="sid-wdg-title font-bold text-white mb-[50px] capitalize text-2xl relative before:absolute before:left-0 before:content-[''] before:w-[70px] before:bg-white before:-bottom-7 before:h-[5px] after:absolute after:left-0 after:right-0 after:content-[''] after:h-[1px] after:bg-[#595959] after:-z-[1] after:-bottom-[26px]">
            {SidewdgData.title}
          </h3>
          <ul class="wdg-post-archive">
            {SidewdgData.Postarchive.map((item, i) => (
              <li class="mb-[25px] group" key={i}>
                <Link
                  class="text-[#757575] text-lg font-normal block capitalize font-jost group-hover:text-[#edb350]"
                  href={item.postlink}
                >
                  {item.date}
                  <span class="float-right">{item.postcout}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          class="single-sid-wdg mb-[50px] border-[1px] border-solid border-[#595959] p-[30px] transition-all duration-[0.3s] hover:border-[#edb350]"
          data-aos="fade-up"
        >
          <h3 class="sid-wdg-title font-bold text-white mb-[50px] capitalize text-2xl relative before:absolute before:left-0 before:content-[''] before:w-[70px] before:bg-white before:-bottom-7 before:h-[5px] after:absolute after:left-0 after:right-0 after:content-[''] after:h-[1px] after:bg-[#595959] after:-z-[1] after:-bottom-[26px]">
            {SidewdgData.title2}
          </h3>
          <div class="sid-wdg-post">
            {SidewdgData.Postlist.map((item, i) => (
              <div
                class="single-wdg-post group flex items-center mb-[30px] border-b-[1px] border-solid border-b-[#595959] pb-[30px] hover:border-[#edb350]"
                key={i}
              >
                <div class="wdg-post-img min-w-[100px] h-auto">
                  <Link href="#">
                    <Image
                      src={item.img}
                      alt="blog thumbnail"
                      class="img-fluid rounded-[50%] border-[2px] border-solid border-[#595959] w-[100px] h-[100px]"
                    />
                  </Link>
                </div>
                <div class="wdg-post-content pl-[15px]">
                  <h5 class="text-lg font-medium text-white leading-[22px]">
                    <Link class="group-hover:text-[#edb350]" href={item.link}>
                      {item.title}
                    </Link>
                  </h5>
                  <span class="block text-sm leading-6 font-normal text-white font-jost mt-[10px]">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          class="single-sid-wdg mb-[50px] border-[1px] border-solid border-[#595959] p-[30px] transition-all duration-[0.3s] hover:border-[#edb350]"
          data-aos="fade-up"
        >
          <h3 class="sid-wdg-title font-bold text-white mb-[50px] capitalize text-2xl relative before:absolute before:left-0 before:content-[''] before:w-[70px] before:bg-white before:-bottom-7 before:h-[5px] after:absolute after:left-0 after:right-0 after:content-[''] after:h-[1px] after:bg-[#595959] after:-z-[1] after:-bottom-[26px]">
            {SidewdgData.title3}
          </h3>
          <div class="widget_tag_cloud">
            <div class="tagcloud">
              {SidewdgData.TagsList.map((item, i) => (
                <a
                  class="text-base leading-6 text-white py-[15px] px-5 border-[1px] border-solid border-[#595959] inline-block transition-all duration-[0.2s] capitalize rounded-[5px] mr-[5px] mb-[10px] mt-0 ml-0 font-jost font-semibold hover:text-white hover:bg-[#edb350] hover:border-[#edb350] hover:rounded-[10px]"
                  href={item.link}
                  key={i}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          class="single-sid-wdg mb-[50px] border-[1px] border-solid border-[#595959] p-[30px] transition-all duration-[0.3s] hover:border-[#edb350]"
          data-aos="fade-up"
        >
          <h3 class="sid-wdg-title font-bold text-white mb-[50px] capitalize text-2xl relative before:absolute before:left-0 before:content-[''] before:w-[70px] before:bg-white before:-bottom-7 before:h-[5px] after:absolute after:left-0 after:right-0 after:content-[''] after:h-[1px] after:bg-[#595959] after:-z-[1] after:-bottom-[26px]">
            {SidewdgData.title4}
          </h3>
          <div class="widget_meta">
            <ul class="m-0 p-0 list-none">
              {SidewdgData.MetaList.map((item, i) => (
                <li class="group">
                  <a
                    class="capitalize text-lg text-white transition-all duration-[0.3s] font-jost font-semibold group-hover:text-[#edb350]"
                    href={item.link}
                    key={i}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidewdg;
