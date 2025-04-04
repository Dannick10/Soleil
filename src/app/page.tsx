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

export default function Home() {
  return (
    <div>
   <div className="mx-auto max-w-[1600px] lg:px-[160px]">
        <Hero />
        <PropertyDetails />
      </div>
      <VideoShowcase />
      <div className="mx-auto max-w-[1600px] lg:px-[160px]">
        <DesignPartnership />
        <NeighborhoodAdvantages />
        <Perspectives />
        <FloorPlans />
        <Location />
        <VirtualTour />
        <RelatedProjects />
        <EbookDownload />
      </div>
    </div>
  );
}
