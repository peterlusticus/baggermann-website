"use client";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import React from "react";
import bgimg from "../../public/img/contact/1.png";
const ContactData = {
  title: "contact",
  title2: "contact area",
  btntext: "learn more",
  ContactinfoList: [
    {
      img: bgimg,
      icon: '<svg class="w-10 h-10 inline-block my-0 mx-auto duration-[0.3s] fill-[#595959]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 473.806 473.806" xmlSpace="preserve"><path d="M374.456 293.506c-9.7-10.1-21.4-15.5-33.8-15.5-12.3 0-24.1 5.3-34.2 15.4l-31.6 31.5c-2.6-1.4-5.2-2.7-7.7-4-3.6-1.8-7-3.5-9.9-5.3-29.6-18.8-56.5-43.3-82.3-75-12.5-15.8-20.9-29.1-27-42.6 8.2-7.5 15.8-15.3 23.2-22.8 2.8-2.8 5.6-5.7 8.4-8.5 21-21 21-48.2 0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5-6-6.2-12.3-12.6-18.8-18.6-9.7-9.6-21.3-14.7-33.5-14.7s-24 5.1-34 14.7l-.2.2-34 34.3c-12.8 12.8-20.1 28.4-21.7 46.5-2.4 29.2 6.2 56.4 12.8 74.2 16.2 43.7 40.4 84.2 76.5 127.6 43.8 52.3 96.5 93.6 156.7 122.7 23 10.9 53.7 23.8 88 26 2.1.1 4.3.2 6.3.2 23.1 0 42.5-8.3 57.7-24.8.1-.2.3-.3.4-.5 5.2-6.3 11.2-12 17.5-18.1 4.3-4.1 8.7-8.4 13-12.9 9.9-10.3 15.1-22.3 15.1-34.6 0-12.4-5.3-24.3-15.4-34.3l-54.9-55.1zm35.8 105.3c-.1 0-.1.1 0 0-3.9 4.2-7.9 8-12.2 12.2-6.5 6.2-13.1 12.7-19.3 20-10.1 10.8-22 15.9-37.6 15.9-1.5 0-3.1 0-4.6-.1-29.7-1.9-57.3-13.5-78-23.4-56.6-27.4-106.3-66.3-147.6-115.6-34.1-41.1-56.9-79.1-72-119.9-9.3-24.9-12.7-44.3-11.2-62.6 1-11.7 5.5-21.4 13.8-29.7l34.1-34.1c4.9-4.6 10.1-7.1 15.2-7.1 6.3 0 11.4 3.8 14.6 7l.3.3c6.1 5.7 11.9 11.6 18 17.9 3.1 3.2 6.3 6.4 9.5 9.7l27.3 27.3c10.6 10.6 10.6 20.4 0 31-2.9 2.9-5.7 5.8-8.6 8.6-8.4 8.6-16.4 16.6-25.1 24.4-.2.2-.4.3-.5.5-8.6 8.6-7 17-5.2 22.7l.3.9c7.1 17.2 17.1 33.4 32.3 52.7l.1.1c27.6 34 56.7 60.5 88.8 80.8 4.1 2.6 8.3 4.7 12.3 6.7 3.6 1.8 7 3.5 9.9 5.3.4.2.8.5 1.2.7 3.4 1.7 6.6 2.5 9.9 2.5 8.3 0 13.5-5.2 15.2-6.9l34.2-34.2c3.4-3.4 8.8-7.5 15.1-7.5 6.2 0 11.3 3.9 14.4 7.3l.2.2 55.1 55.1c10.3 10.2 10.3 20.7.1 31.3zM256.056 112.706c26.2 4.4 50 16.8 69 35.8s31.3 42.8 35.8 69c1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.4-1.2 12.3-8.2 11.1-15.6-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3 3.7-15.6 11s3.5 14.4 10.9 15.6zM473.256 209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2 3.7-15.5 11-1.2 7.4 3.7 14.3 11.1 15.6 46.6 7.9 89.1 30 122.9 63.7 33.8 33.8 55.8 76.3 63.7 122.9 1.1 6.6 6.8 11.2 13.3 11.2.8 0 1.5-.1 2.3-.2 7.3-1.1 12.3-8.1 11-15.4z" /></svg>',
      info: '<li class="text-xl text-white font-medium">+4915731797137</li>',
      delay: "500",
    },
    {
      img: bgimg,
      icon: '<svg class="w-10 h-10 inline-block my-0 mx-auto duration-[0.3s] fill-[#595959]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 511.999 511.999" xmlSpace="preserve"><path d="M256.98 40.005c-5.53-.04-10.04 4.41-10.08 9.93-.04 5.52 4.4 10.03 9.93 10.07 5.52.04 10.03-4.4 10.07-9.92.04-5.52-4.4-10.03-9.92-10.08zM256.525 100.004c-38.611-.274-70.232 30.875-70.524 69.474-.291 38.597 30.875 70.233 69.474 70.524l.536.002c38.353 0 69.698-31.056 69.988-69.476.291-38.595-30.874-70.233-69.474-70.524zm-.516 120.001l-.384-.002c-27.571-.208-49.833-22.806-49.625-50.375.207-27.445 22.595-49.627 49.991-49.627l.384.002c27.571.208 49.833 22.806 49.625 50.375-.208 27.445-22.595 49.627-49.991 49.627zM299.631 47.589c-5.202-1.846-10.921.879-12.767 6.085-1.845 5.206.88 10.921 6.085 12.767 44.047 15.611 73.402 57.562 73.05 104.389-.041 5.522 4.402 10.033 9.925 10.075h.077c5.486 0 9.956-4.428 9.998-9.925.416-55.347-34.293-104.934-86.368-123.391z" /><path d="M317.357 376.442c66.513-85.615 108.08-130.26 108.641-205.164C426.702 77.035 350.22 0 255.984 0 162.848 0 86.71 75.428 86.002 168.728c-.572 76.935 41.767 121.519 108.739 207.7C128.116 386.384 86.002 411.401 86.002 442c0 20.497 18.946 38.89 53.349 51.79 31.313 11.742 72.74 18.209 116.649 18.209s85.336-6.467 116.649-18.209c34.403-12.901 53.349-31.294 53.349-51.791 0-30.582-42.075-55.593-108.641-65.557zM106.001 168.879C106.625 86.55 173.8 20 255.986 20c83.159 0 150.633 67.988 150.013 151.129-.532 71.134-44.614 114.971-114.991 206.714-12.553 16.356-24.081 31.82-34.993 46.947-10.88-15.136-22.178-30.323-34.919-46.953-73.286-95.584-115.637-136.108-115.095-208.958zM256 492c-85.851 0-149.999-26.397-149.999-50 0-17.504 38.348-39.616 102.826-47.273 14.253 18.701 26.749 35.691 39.005 53.043a9.998 9.998 0 008.159 4.23H256a10 10 0 008.158-4.217c12.14-17.126 24.978-34.535 39.109-53.045 64.418 7.665 102.732 29.77 102.732 47.263C405.998 465.603 341.851 492 256 492z" /></svg>',
      info: '<li class="text-xl text-white font-medium">Anton Lucius Straße 20</li><li class="text-xl text-white font-medium">99085 Erfurt</li>',
      delay: "300",
    },
    {
      img: bgimg,
      icon: '<svg class="w-10 h-10 inline-block my-0 mx-auto duration-[0.3s] fill-[#595959]"height={512} viewBox="0 0 2000 2000"width={512} xmlns=http://www.w3.org/2000/svg><path d="M1971.796 794.255c.206-2.012.234-4.038.111-6.062.707-11.664-4.048-23.479-13.865-31.335l-232.37-185.973v-91.792c0-86.281-70.193-156.474-156.474-156.474h-153.726l-385.645-308.64c-.013-.017-.023-.035-.036-.053-7.51-9.383-18.637-14.13-29.792-13.917-11.154-.213-22.281 4.533-29.79 13.917-.014.017-.024.035-.037.053l-385.641 308.64H430.802c-86.281 0-156.474 70.193-156.474 156.474v91.793L41.958 756.857c-9.818 7.856-14.572 19.671-13.865 31.335a37.287 37.287 0 00.11 6.062 37.886 37.886 0 00-.205 3.891v1025.649c0 97.16 83.422 176.204 185.96 176.204h1572.083c102.538 0 185.96-79.045 185.96-176.204V798.146a37.057 37.057 0 00-.205-3.891zm-246.123-128.04l152.408 121.977-152.408 121.978zM1000 85.435l296.357 237.182H703.645zM348.757 479.091c0-45.238 36.807-82.045 82.045-82.045h1138.396c45.238 0 82.045 36.807 82.045 82.045v490.647L1000 1490.951 348.757 969.739zm-74.429 187.124V910.17L121.919 788.192zm-171.9 1157.581V867.924l605.701 484.764-594.932 514.698c-6.897-13.221-10.769-27.999-10.769-43.59zm1683.614 101.775H213.959c-15.802 0-30.836-3.032-44.469-8.464l597.735-517.123 202.948 162.427c.013.016.023.034.037.051 7.349 9.182 18.163 13.959 29.078 13.959.237 0 .474-.024.712-.028.238.004.476.028.714.028 10.915 0 21.729-4.777 29.078-13.959.013-.016.023-.034.036-.051l202.948-162.427 597.734 517.123c-13.633 5.431-28.667 8.464-44.468 8.464zm111.53-101.775c0 15.591-3.874 30.369-10.77 43.591l-594.932-514.698 605.702-484.764zM617.001 749.173h769.927c20.553 0 37.215-16.661 37.215-37.215s-16.661-37.215-37.215-37.215H617.001c-20.554 0-37.215 16.661-37.215 37.215 0 20.553 16.661 37.215 37.215 37.215zm807.142 186.691c0-20.554-16.661-37.215-37.215-37.215H617.001c-20.554 0-37.215 16.661-37.215 37.215s16.661 37.215 37.215 37.215h769.927c20.554 0 37.215-16.661 37.215-37.215z"/></svg>',
      info: '<li class="text-xl text-white font-medium"><Link class="text-xl text-white font-medium" href="mailto:paul@baggermann-erfurt.de">paul@baggermann-erfurt.de</Li></li><li class="text-xl text-white font-medium"></li>',
      delay: "100",
    },
  ],
};
const Contacts = () => {
  return (
    <>
      <div id="khalif-contact-area" className="khalif-contact-area my-[110px]">
        <div id="contact-info-area" className="contact-info-area">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <div className="section-title-wrape text-center uppercase relative mb-20">
                  <h3 className="my-stroke2">{ContactData.title}</h3>
                  <h4>{ContactData.title2}</h4>
                </div>
              </div>
              {ContactData.ContactinfoList.map((item, i) => (
                <div
                  className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12"
                  data-aos="fade-right"
                  data-aos-delay={item.delay}
                  key={i}
                >
                  <div className="contact-info-box group text-center py-[50px] px-0 !bg-[#070707] rounded-[15px] relative overflow-hidden my-[30px] mx-0 transition-all duration-[0.3s] after:absolute after:content-[''] after:left-0 after:right-0 after:bottom-0 after:w-0 after:h-0 after:my-0 after:mx-auto after:border-l-[30px] after:border-r-[30px] after:border-b-[30px] after:border-solid after:border-x-transparent after:border-b-[#111111] hover:!bg-[#d8c49f]">
                    <div className="contact-style-img absolute -top-[50px] -right-[50px]">
                      <Image src={item.img} alt="img" />
                    </div>
                    <div
                      className="contact-info-icon inline-block text-center bg-[#111111] rounded-[50%] w-[100px] h-[100px] leading-[100px] relative z-[1] transition-all duration-[0.3s]  after:content-[''] after:absolute after:-left-[15px] after:-right-[15px] after:-bottom-[15px] after:-top-[15px] after:rounded-[50%] after:-z-[1] after:transition-all after:duration-[0.3s] after:border-[1px] after:border-solid after:border-[#111111] group-hover:bg-white group-hover:after:border-white"
                      dangerouslySetInnerHTML={{ __html: item.icon }}
                    ></div>
                    <ul
                      className="contact-info mt-[35px]"
                      dangerouslySetInnerHTML={{ __html: item.info }}
                    ></ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="contact-map-area"
          className="contact-map-area"
          data-aos="fade-up"
        >
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <iframe
                  id="khalif-map"
                  className="my-20 w-full h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.092502916864!2d11.059162076436575!3d50.977480771697685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a40d4d0325b4ed%3A0x25754c22cec273ae!2sAnton-Lucius-Stra%C3%9Fe%2020%2C%2099085%20Erfurt!5e0!3m2!1sde!2sde!4v1726139962323!5m2!1sde!2sde"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          id="khalif-contact-form-area"
          className="khalif-contact-form-area"
          data-aos="fade-up"
        >
          <form className="khalif-contact-form">
            <div className="container">
              <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                  <input
                    className="form-control  rounded-none shadow-none text-white h-[70px] mb-[30px] bg-[#070707] border-[1px] border-solid border-[#595959] w-full focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                    type="text"
                    name="name"
                    placeholder="Name *"
                  />
                </div>
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                  <input
                    className="form-control  rounded-none shadow-none text-white h-[70px] mb-[30px] bg-[#070707] border-[1px] border-solid border-[#595959] w-full focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                    type="email"
                    name="email"
                    placeholder="E-mail *"
                  />
                </div>

                <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                  <input
                    className="form-control  rounded-none shadow-none text-white h-[70px] mb-[30px] bg-[#070707] border-[1px] border-solid border-[#595959] w-full focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <textarea
                    className="form-control rounded-none shadow-none text-white h-[200px] mb-[30px] bg-[#070707] p-[15px] border-[1px] border-solid border-[#595959] w-full focus:!ring-[none] focus:!border-[#595959] focus:border-solid focus:!outline-offset-0  focus:outline-0"
                    name="message"
                    cols="30"
                    rows="8"
                    placeholder="Request"
                  ></textarea>
                  <Tilt className="inline-block" scale={1.1}>
                    <button
                      type="submit"
                      className="btn-2 bgc-2 text-center text-uppercase btn-tilt mt-[30px]"
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
                      {ContactData.btntext}
                    </button>
                  </Tilt>
                </div>
              </div>
              <p className="form-message float-left mt-[15px]"></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacts;
