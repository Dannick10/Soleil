import DesignPartnership from "@/components/DesignPartnership";
import FloorPlans from "@/components/Foorplants";
import Hero from "@/components/Hero";
import NeighborhoodAdvantages from "@/components/NeighborhoodAdvantages";
import Perspectives from "@/components/Perspectives";
import PropertyDetails from "@/components/PropertyDetails";
import VideoShowcase from "@/components/VideoShowCase";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <Hero/>
        <PropertyDetails/>
        <VideoShowcase/>
        <DesignPartnership/>
        <NeighborhoodAdvantages/>
        <Perspectives/>
        <FloorPlans/>
    </div>
  );
}
