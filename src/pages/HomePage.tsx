import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { MethodSection } from "@/components/home/MethodSection";

export function HomePage() {
    return (
       <>
         <HeroSection/>
         <FeaturesSection/>
         <MethodSection/>
       </>
    )
}