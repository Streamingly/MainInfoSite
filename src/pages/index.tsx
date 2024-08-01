import { memo } from "react";

// hero slider
import OttHeroSlider from "@/components/slider/OttHeroSlider";

// sections
import StreamHero from "@/components/sections/StreamHero";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CustomizerSection from "@/components/sections/CustomizerSection";
import PluginsSection from "@/components/sections/PluginsSection";
import InvestmentSection from "@/components/sections/InvestmentSection";

import ContinueWatching from "@/components/sections/ContinueWatching";
import TopTenMoviesToWatch from "@/components/sections/TopTenMoviesToWatch";
import VerticalSectionSlider from "@/components/slider/VerticalSectionSlider";
import OnlyOnStreamit from "@/components/sections/OnlyOnStreamit";
import YourFavouritePersonality from "@/components/sections/YourFavouritePersonality";
import PopularMovies from "@/components/sections/PopularMovies";
import TabSlider from "@/components/sections/TabSlider";
import RecommendedForYou from "@/components/sections/RecommendedForYou";
import TopPicsForYou from "@/components/sections/TopPicsForYou";
import GenreSlider from "@/components/sections/GenreSlider";

import { ottVerticleLatestMovies } from "@/StaticData/data";
import InnerPages from "@/components/slider/InnerPagesSlider";
import LiveCustomizerSection from "@/components/sections/LiveCustomizerSection";
import MainFeaturesSection from "@/components/sections/MainFeaturesSection";
import PricingSection from "@/components/slider/PricingSection";
import ResponsiveSection from "@/components/slider/ResponsiveSection";

const OTT = memo(() => {

  return (
    <>
      <StreamHero />
      <FeaturesSection />
      <CustomizerSection />
      <PluginsSection />
      <InvestmentSection />
      <InnerPages />
      <LiveCustomizerSection />
      <MainFeaturesSection />
      <PricingSection />
      <ResponsiveSection />

      {/* <ContinueWatching />
      <TopTenMoviesToWatch />
      <OnlyOnStreamit />
      <VerticalSectionSlider sliderData={ottVerticleLatestMovies} />
      <YourFavouritePersonality />
      <PopularMovies />
      <TabSlider />
      <GenreSlider />
      <RecommendedForYou />
      <TopPicsForYou /> */}
    </>
  );
});

OTT.displayName = "OTT";
export default OTT;
