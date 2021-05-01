import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroImage from "../components/carousel";
import Header from "../components/header/header";
import MainCarousel from "../components/carousel";
import About from "../components/about/about";
import Portfolio from "../components/Portfolio/portfolio";
import Contact from "../components/contact/contact";
import Footer from "../components/footer/footer";
import Social from "../components/social/social";
import dynamic from "next/dynamic";

//const MainCarousel = dynamic(() => import("../components/carousel"));

export default function Home() {
  return (
    <>
      <Header />
      <MainCarousel />
      <div id="about">
        <About />
      </div>
      <Portfolio />
      <div id="contact">
        <Contact />
        <Social />
      </div>

      <Footer />
    </>
  );
}
