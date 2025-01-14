import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import IngredientsSection from './components/IngredientsSection';
import LatestNewsSection from './components/LatestNewsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <IngredientsSection />
      <LatestNewsSection />
      <Footer />
    </>
  );
}
