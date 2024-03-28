export const metadata = {
  title: "IntellicaNet - AI Powered Tools!",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Header from "@/components/ui/header";
import { Hero2 } from "@/components/hero2";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
    </>
  );
}
