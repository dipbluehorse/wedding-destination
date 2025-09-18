import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import coupleImage from '@/assets/couple-portrait.jpg';
import venueImage from '@/assets/wedding-venue.jpg';
import receptionImage from '@/assets/reception-setup.jpg';
import heroImage from '@/assets/hero-wedding.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: coupleImage,
      alt: 'Sofia and Miguel Portrait',
      title: 'Our Engagement'
    },
    {
      src: venueImage,
      alt: 'Wedding Venue',
      title: 'The Venue'
    },
    {
      src: receptionImage,
      alt: 'Reception Setup',
      title: 'Reception Details'
    },
    {
      src: heroImage,
      alt: 'Wedding Destination',
      title: 'Santorini Views'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl sm:text-6xl text-primary mb-4">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured, memories treasured
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-soft hover:shadow-romantic transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View More Photos
          </Button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;