import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import TrustStrip from '../components/sections/TrustStrip';
import AboutSection from '../components/sections/AboutSection';
import CompetitionSection from '../components/sections/CompetitionSection';
import GalleryCarousel from '../components/sections/GalleryCarousel';
import MediaSection from '../components/sections/MediaSection';
import GuidebookSection from '../components/sections/GuidebookSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import SponsorshipSection from '../components/sections/SponsorshipSection';
import CTASection from '../components/sections/CTASection';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <AboutSection />
        <GalleryCarousel />
        <CompetitionSection />
        <MediaSection />
        <GuidebookSection />
        <BenefitsSection />
        <SponsorshipSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
