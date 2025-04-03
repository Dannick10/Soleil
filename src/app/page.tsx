import DesignPartnership from "@/components/DesignPartnership";
import EbookDownload from "@/components/EbookDowlonad";
import FloorPlans from "@/components/Foorplants";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import NeighborhoodAdvantages from "@/components/NeighborhoodAdvantages";
import Perspectives from "@/components/Perspectives";
import PropertyDetails from "@/components/PropertyDetails";
import RelatedProjects from "@/components/RelatedProject";
import VideoShowcase from "@/components/VideoShowCase";
import VirtualTour from "@/components/VirtualTour";
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
        <Location />
        <VirtualTour/>
        <RelatedProjects/>
        <EbookDownload/>
    </div>
  );
}
