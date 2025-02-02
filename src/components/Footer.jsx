import Link from "next/link";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const FooterData = {
  newstitle:
    'Kontakt <span class="my-stroke2 text-transparent stroke-[1px] stroke-[#595959]">mail</span>',
  copyright: "© All Rights Reserved.",
  sociallist: [
    {
      icon: "fa fa-instagram",
      link: "https://www.instagram.com/baggermann_erfurt/",
    },
  ],
  footernavlist: [
    {
      title: "product design",
      link: "#",
    },
    {
      title: "development",
      link: "#",
    },
    {
      title: "uX/uI strategy",
      link: "#",
    },
    {
      title: "search engine",
      link: "#",
    },
    {
      title: "it consulting",
      link: "#",
    },
    {
      title: "business analysis",
      link: "#",
    },
  ],
  contactlist: [
    {
      title: "Email",
      info: "paul@baggermann-erfurt.de",
    },
    {
      title: "Telefon",
      info: "+4915731797137",
    },
    {
      title: "Adresse",
      info: "Eichendorffstraße 3, 99096 Erfurt",
    },
  ],
};

const Footer = () => {
  return (
    <>
      <div className="khalif-footer-wrape pt-[120px] bgc-2 relative">
        <div className="khalif-footer-style-shape">
          <Parallax
            translateY={["-50px", "0px"]}
            className="footer-shape-1 absolute h-[150px] rounded-[50%] bg-[#edb350] top-[18%] w-[150px] right-[10%] opacity-[0.10]"
          ></Parallax>
          <Parallax
            translateX={["-70px", "0px"]}
            className="footer-shape-2 absolute w-[220px] h-[220px] rounded-[50%] bg-[#edb350] top-[35%] right-[4%] opacity-[0.40]"
          ></Parallax>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-5 lg:col-span-5 md:col-span-6 sm:col-span-12">
              <div className="khalif-footer-single-widget mb-[50px]">
                <div className="khalif-subscribe-content">
                  <h2
                    className="text-[90px] font-bold uppercase mb-[30px] relative z-[1] md:text-[60px] after:content-[''] after:absolute after:right-0 after:bottom-0 after:bg-[#edb350] after:-z-[1] after:left-[26%] after:-top-[120px] after:w-[84px] after:h-[240px] after:skew-x-[-15deg] after:xl:h-[225px] after:lg:h-[225px] after:md:h-[225px] after:sm:h-[263px]"
                    dangerouslySetInnerHTML={{ __html: FooterData.newstitle }}
                  ></h2>
                  <form className="khalif-subscribe-form relative" action="#">
                    <input
                      className="w-full h-[70px] bg-transparent rounded-none text-[18px] border-[1px] border-solid border-[#595959] py-0 px-5 text-[#30323d] focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                      type="email"
                      name="email"
                      placeholder="Gib deine Mailadresse hier ein"
                    />
                    <button
                      type="submit"
                      className="btn-4 absolute right-0 top-0 bottom-0"
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
                    </button>
                    <p className="form-message float-left mt-15"></p>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="xl:col-start-11 xl:col-span-2 lg:col-start-10 lg:col-span-2 md:col-span-3 sm:col-span-12">
              <div className="khalif-footer-single-widget pb-50">
                <div className="widget-footer-contact-info">
                  <ul className="footer-contact-info custom-html-widget">
                    {FooterData.contactlist.map((item, i) => (
                      <li
                        className="mb-10 text-sm font-normal text-[#e1e1e1] font-jost"
                        key={i}
                      >
                        <span className="block font-semibold capitalize text-white relative mb-1 pl-2 before:content-['-'] before:absolute before:left-0 before:top-0 before:bottom-0 before:text-[#edb350]">
                          {item.title}
                        </span>
                        {item.info}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="khalif-copyright-wrape">
          <div className="container">
            <div className="grid grid-cols-12 gap-x-6">
              <div className="col-span-12">
                <div className="khalif-copyright-content py-10 border-t-[1px] border-solid border-[#595959]">
                  <div className="footer-copyright inline-block capitalize">
                    <p>{FooterData.copyright}</p>
                    <br />
                    <a className="font-jost text-white text-[18px] hover:text-[#edb350]" href="/imprint">Impressum</a>
                  </div>
                  <ul className="footer-social float-right list-none">
                    {FooterData.sociallist.map((item, i) => (
                      <li
                        className="inline-block ml-[15px] my-0 mr-0 transition-all duration-[0.3s] group"
                        key={i}
                      >
                        <Link
                          className="text-white text-[18px] hover:text-[#edb350]"
                          href={item.link}
                        >
                          <i
                            className={`${item.icon} group-hover:bg-[#111111] group-hover:text-[#edb350] text-[18px] w-[50px] h-[50px] text-center !leading-[50px] border-[1px] border-solid border-[#595959] rounded-[50%] text-white`}
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
