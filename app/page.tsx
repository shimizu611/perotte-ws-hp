import IntroAnimation from "../components/IntroAnimation";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import Solution from "@/components/sections/Solution";
import Works from "@/components/sections/Works";
import Features from "@/components/sections/Features";
import Price from "@/components/sections/Price";
import Flow from "@/components/sections/Flow";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

export default function Home() {
  return (
    <>
      <main className="bg-[#f8f5ef] text-[#222]">
        <Hero />
        <Problems />
        <Solution />
        <Works />
        <Features />
        <Price />
        <Flow />
        <Contact />
        <Footer />
      </main>
      <FloatingContactButton/>
    </>
  );
}