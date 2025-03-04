import React from "react";
import bgimg from "../../public/img/breadcrumb/1.png";
import Link from "next/link";

const BreadcrumbData = {
  home: "home",
  brief: "Tel: 017172827"
};
const BreadcrumbImprint = ({ title, pgtitle, brief }) => {
  const position1 = title === "About" ? "-mt-[200px]" : ""
  const position2 = title === "About" ? "pt-[350px]" : ""

  return (
    <>
      <div
        id="khalif-breadcrumb-wrape"
        className={"khalif-breadcrumb-wrape breadcrumb-bg text-center flex items-center bg-center bg-cover min-h-[758px] bg-[#111111] bg-no-repeat z-[1] " + position1}
        style={{ backgroundImage: `url(${bgimg.src})` }}
      >
        <div className={"container " + position2}>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-start-3 xl:col-end-11 lg:col-start-3 lg:col-span-12 md:col-span-12 sm:col-span-12">
              <div className="khalif-breadcrumb-content">
                <h2 className="text-white text-[80px] font-medium mb-5 uppercase">
                  {pgtitle}
                </h2>
                <ul className="breadcrumb bg-inherit flex items-center justify-center">
                  <li className="breadcrumb-item text-2xl font-antonio">
                    <Link href="/" className="capitalize">
                      {BreadcrumbData.home}
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item capitalize text-2xl font-antonio ml-2 active relative
									  text-white inline-block before:mr-2 before:content-['/']"
                  >
                    {title}
                  </li>
                </ul>
                {brief && <p className="text-xl font-semibold leading-10 mt-[70px] mx-0 mb-0">
                  {BreadcrumbData.brief}
                </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BreadcrumbImprint;
