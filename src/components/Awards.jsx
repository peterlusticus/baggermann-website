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
    </>
  );
};

export default Awards;
