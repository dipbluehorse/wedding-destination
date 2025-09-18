import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import GallerySection from '@/components/GallerySection';
import WeddingDetails from '@/components/WeddingDetails';
import RSVPSection from '@/components/RSVPSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <GallerySection />
        <WeddingDetails />
        <RSVPSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;