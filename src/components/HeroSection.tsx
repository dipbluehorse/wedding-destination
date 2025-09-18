import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Names */}
          <h1 className="font-script text-6xl sm:text-7xl lg:text-8xl text-white mb-4 drop-shadow-lg">
            Sofia & Miguel
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-6 font-serif drop-shadow-md">
            Two hearts, one destiny
          </p>
          
          {/* Wedding Date */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <p className="text-lg text-white/80 mb-2">Save the Date</p>
            <p className="text-3xl sm:text-4xl font-script text-white font-medium">
              December 15, 2024
            </p>
            <p className="text-lg text-white/80 mt-2">Santorini, Greece</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('story')}
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-glow"
            >
              Our Story
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('rsvp')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300"
            >
              RSVP Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('story')}>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse hidden lg:block" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-white/20 rounded-full animate-pulse hidden lg:block" />
    </section>
  );
};

export default HeroSection;