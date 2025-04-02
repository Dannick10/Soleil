import DesignPartnership from "@/components/DesignPartnership";
import Hero from "@/components/Hero";
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
    </div>
  );
}
