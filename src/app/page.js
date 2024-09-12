"use client";
import { useEffect } from "react";
import About from "@/components/About";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import Brand from "@/components/Brand";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Preloader from "@/components/Preloader";
import Progress from "@/components/Progress";
import ProgressScroll from "@/components/ProgressScroll";
import Services from "@/components/Services";
import Switcher from "@/components/Switcher";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
const Home = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return (
    <>
      <ParallaxProvider>
        <Switcher />
        <Preloader />
        <Header />
        <Hero />
        <Brand />
        <About />
        <Services />
        <Progress />
        <Video />
        <Portfolio isHidden={false} />
        <Testimonial />
        <Awards />
        <Blog />
        <Footer />
        <ProgressScroll />
      </ParallaxProvider>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        outerStyle={{
          border: "1px solid #ffffff",
        }}
        innerStyle={{
          backgroundColor: "#ffffff",
        }}
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
    </>
  );
};
export default Home;
