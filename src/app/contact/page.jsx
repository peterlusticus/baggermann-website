"use client";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import ProgressScroll from "@/components/ProgressScroll";
import Switcher from "@/components/Switcher";
import { ParallaxProvider } from "react-scroll-parallax";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import Breadcrumb from "@/components/Breadcrumb";
import Contacts from "@/components/Contacts";
const Index = () => {
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
        <Preloader />
        <Header />
        <Breadcrumb title={"Contact"} pgtitle={"Contact"} />
        <Contacts />
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
export default Index;
