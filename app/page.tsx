

import { Hero } from "@/components/Hero";
import CallToAction from "../components/CallToAction";
import  CategoryGrid from "../components/CategoryGrid";
import { HowItWorks } from "@/components/HowItWorks";



export default function Home() {
  return (
    <>
    <div className=" text-white ">
      <main>
        <Hero />
       <CategoryGrid/>
        <HowItWorks />
        <CallToAction />
      </main>
     
    </div>
      
    </>
  );
}
