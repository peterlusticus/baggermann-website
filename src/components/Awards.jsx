"use client";
import { useEffect, useRef } from "react";
import { TweenMax, TimelineMax, Sine } from "gsap";
import img1 from "../../public/img/awards/1.png";
import img2 from "../../public/img/awards/2.png";
import img3 from "../../public/img/awards/3.png";
import Link from "next/link";
const AwardsData = {
  title: "awards",
  title2: "our awards",
  AwardsList: [
    {
      number: "01",
      web: "php.net",
      title: "Best Performer Award",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      icon: '<svg class="inline-block w-5 h-5 mt-0 mx-auto mb-[15px] duration-[0.3s] fill-[#595959] group-hover:-rotate-45 group-hover:fill-white"data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z"transform="translate(-131.88 -418.11)"/></svg>',
      link: "#",
      awrdimg: img1,
      anidelay: "100",
    },
    {
      number: "02",
      web: "behance.net",
      title: "Star Of The Week Award",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      icon: '<svg class="inline-block w-5 h-5 mt-0 mx-auto mb-[15px] duration-[0.3s] fill-[#595959] group-hover:-rotate-45 group-hover:fill-white"data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z"transform="translate(-131.88 -418.11)"/></svg>',
      link: "#",
      awrdimg: img2,
      anidelay: "300",
    },
    {
      number: "03",
      web: "themeforest.net",
      title: "Nice WP Dev Award",
      brief:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
      icon: '<svg class="inline-block w-5 h-5 mt-0 mx-auto mb-[15px] duration-[0.3s] fill-[#595959] group-hover:-rotate-45 group-hover:fill-white"data-name="Layer 1"viewBox="0 0 128 95.91"xmlns=http://www.w3.org/2000/svg><path d="M259.88 468.09l-52 45.93-5.1-5.52 43.33-38.41H131.88v-8h114.21l-43.25-38.36 5-5.62 52.06 46z"transform="translate(-131.88 -418.11)"/></svg>',
      link: "#",
      awrdimg: img3,
      anidelay: "500",
    },
  ],
};
//awards function
const getMousePos = (e) => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx =
      e.clientX +
      document.body.scrollLeft +
      document.documentElement.scrollLeft;
    posy =
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
};

//xxxxxxxx
const HoverImgFx1 = ({ imgSrc, children }) => {
  const elRef = useRef(null);
  const revealRef = useRef(null);
  const revealInnerRef = useRef(null);
  const revealImgRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    const reveal = revealRef.current;
    const revealInner = revealInnerRef.current;
    const revealImg = revealImgRef.current;

    const positionElement = (ev) => {
      const mousePos = getMousePos(ev);
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop,
      };
      reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
      reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
    };

    const mouseenterFn = (ev) => {
      positionElement(ev);
      showImage();
    };

    const mousemoveFn = (ev) =>
      requestAnimationFrame(() => {
        positionElement(ev);
      });

    const mouseleaveFn = () => {
      hideImage();
    };

    const showImage = () => {
      TweenMax.killTweensOf(revealInner);
      TweenMax.killTweensOf(revealImg);

      new TimelineMax({
        onStart: () => {
          reveal.style.opacity = 1;
          TweenMax.set(el, { zIndex: 1000 });
        },
      })
        .add("begin")
        .add(
          new TweenMax(revealInner, 0.2, {
            ease: Sine.easeOut,
            startAt: { x: "-100%" },
            x: "0%",
          }),
          "begin"
        )
        .add(
          new TweenMax(revealImg, 0.2, {
            ease: Sine.easeOut,
            startAt: { x: "100%" },
            x: "0%",
          }),
          "begin"
        );
    };

    const hideImage = () => {
      TweenMax.killTweensOf(revealInner);
      TweenMax.killTweensOf(revealImg);

      new TimelineMax({
        onStart: () => {
          TweenMax.set(el, { zIndex: 999 });
        },
        onComplete: () => {
          TweenMax.set(el, { zIndex: "" });
          TweenMax.set(reveal, { opacity: 0 });
        },
      })
        .add("begin")
        .add(
          new TweenMax(revealInner, 0.2, { ease: Sine.easeOut, x: "100%" }),
          "begin"
        )
        .add(
          new TweenMax(revealImg, 0.2, { ease: Sine.easeOut, x: "-100%" }),
          "begin"
        );
    };

    el.addEventListener("mouseenter", mouseenterFn);
    el.addEventListener("mousemove", mousemoveFn);
    el.addEventListener("mouseleave", mouseleaveFn);

    return () => {
      el.removeEventListener("mouseenter", mouseenterFn);
      el.removeEventListener("mousemove", mousemoveFn);
      el.removeEventListener("mouseleave", mouseleaveFn);
    };
  }, []);

  return (
    <div ref={elRef}>
      {children}
      <div ref={revealRef} className="hover-reveal">
        <div ref={revealInnerRef} className="hover-reveal__inner">
          <div
            ref={revealImgRef}
            className="hover-reveal__img"
            style={{ backgroundImage: `url(${imgSrc})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
const Awards = () => {
  return (
    <>
      <div className="khalif-awards-wrape py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <div className="section-title-wrape uppercase text-center relative mb-20">
                <h3 className="my-stroke2 font-bold uppercase leading-[49px] text-[40px]">
                  {AwardsData.title}
                </h3>
                <h4 className="uppercase font-medium text-xl mb-0">
                  {AwardsData.title2}
                </h4>
              </div>
              <div className="all-awards-content">
                {AwardsData.AwardsList.map((item, i) => (
                  <HoverImgFx1
                    data-fx="1"
                    data-aos="fade-up"
                    data-aos-delay={item.anidelay}
                    key={i}
                    imgSrc={item.awrdimg.src}
                  >
                    <div className="single-awards-list group block__link bg-[#070707] border-[1px] border-solid border-[#595959] flex items-center gap-[26px] transition-all duration-[0.3s] mb-[30px] pr-5 py-0 pl-0 h-[115px] sm:gap-[30px] sm:flex sm:flex-col sm:p-5 sm:h-auto hover:border-[#ff5100]">
                      <div className="awards-number mr-[15px] bg-white text-center relative font-antonio transition-all duration-[0.3s] text-[#111111] text-[75px] font-semibold w-[8%] h-full leading-[93px] xl:w-[8%] lg:w-[8%] md:w-fit sm:w-[50%] after:content-[''] after:absolute after:w-0 after:h-0 after:bottom-0 after:top-0 after:duration-[0.3s] after:left-full after:border-l-0 after:border-r-[10px] after:border-t-[114px] after:border-solid after:border-t-white after:border-x-transparent after:sm:border-t-[98px] group-hover:bg-[#ff5100] group-hover:text-white group-hover:after:border-t-[#ff5100] group-hover:after:border-r-[24px] group-hover:after:border-solid group-hover:after:border-r-transparent">
                        {item.number}
                      </div>
                      <div className="awards-web text-xl font-semibold font-jost text-[#595959] w-[15%] transition-all duration-[0.3s] group-hover:text-[#ff5100] sm:w-[85%] sm:text-center">
                        {item.web}
                      </div>
                      <div className="awards-title font-semibold font-antonio capitalize text-white xl:text-4xl xl:w-[36%] lg:text-4xl lg:w-[36%] md:text-[22px] md:w-[30%] sm:text-[22px] sm:w-[85%] sm:text-center">
                        {item.title}
                      </div>
                      <div className="awards-para w-[40%] sm:w-[85%] xl:text-left lg:text-left md:text-left sm:text-center">
                        <p className="m-0 xl:text-[18px] xl:leading-10 lg:text-[18px] lg:leading-10 md:text-base md:leading-5 sm:text-xl sm:leading-[30px]">
                          {item.brief}
                        </p>
                      </div>
                      <div className="awards-link">
                        <Link
                          className="w-[70px] h-[70px] leading-[80px] text-center border-[1px] border-solid border-[#595959] rounded-[50%] inline-block group-hover:bg-[#ff5100] group-hover:text-white"
                          href={item.link}
                          target="_blank"
                          dangerouslySetInnerHTML={{ __html: item.icon }}
                        ></Link>
                      </div>
                    </div>
                  </HoverImgFx1>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
