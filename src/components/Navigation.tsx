import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-script text-2xl text-primary">
            Sofia & Miguel
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'Our Story', id: 'story' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Details', id: 'details' },
              { name: 'RSVP', id: 'rsvp' }
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block h-0.5 w-6 bg-current transition-transform ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-romantic">
            <div className="flex flex-col space-y-2">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Our Story', id: 'story' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'Details', id: 'details' },
                { name: 'RSVP', id: 'rsvp' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className="text-left justify-start text-foreground hover:text-primary"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;