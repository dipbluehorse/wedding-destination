import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import venueImage from '@/assets/wedding-venue.jpg';

const WeddingDetails = () => {
  const timeline = [
    { time: '4:00 PM', event: 'Guest Arrival & Welcome Drinks', location: 'Terrace Overlooking the Caldera' },
    { time: '4:30 PM', event: 'Wedding Ceremony', location: 'Sunset Point Chapel' },
    { time: '5:30 PM', event: 'Cocktail Hour & Photos', location: 'Garden Terrace' },
    { time: '7:00 PM', event: 'Reception Dinner', location: 'Main Dining Hall' },
    { time: '9:00 PM', event: 'First Dance & Dancing', location: 'Open-Air Dance Floor' },
    { time: '11:00 PM', event: 'Late Night Celebration', location: 'Private Lounge' }
  ];

  return (
    <section id="details" className="py-20 bg-gradient-romantic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl sm:text-6xl text-primary mb-4">
            Wedding Details
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our special day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Venue & Date Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-border/50">
              <CardHeader>
                <CardTitle className="font-script text-3xl text-primary">
                  Venue & Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={venueImage}
                    alt="Wedding Venue"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Santo Winery</h3>
                  <p className="text-muted-foreground mb-4">
                    Pyrgos Kallistis, Santorini 84700, Greece
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Perched on the dramatic cliffs of Santorini, Santo Winery offers breathtaking 
                    views of the Aegean Sea and the most spectacular sunsets in the world. 
                    The perfect backdrop for our dream wedding.
                  </p>
                </div>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    View on Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-border/50">
              <CardHeader>
                <CardTitle className="font-script text-3xl text-primary">
                  Travel & Accommodations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-serif font-semibold mb-2">Getting There</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fly into Santorini Airport (JTR). We recommend arriving on December 14th 
                    and departing December 16th to fully enjoy the celebration.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-semibold mb-2">Recommended Hotels</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Canaves Oia Suites - Luxury option in Oia</li>
                    <li>• Grace Hotel Santorini - Boutique hotel in Imerovigli</li>
                    <li>• Hotel Atlantis - Mid-range option in Fira</li>
                  </ul>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    Contact us for group discounts and recommendations!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline */}
          <div>
            <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-border/50">
              <CardHeader>
                <CardTitle className="font-script text-3xl text-primary">
                  Wedding Timeline
                </CardTitle>
                <p className="text-muted-foreground">December 15, 2024</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-20 text-right">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {item.time}
                        </span>
                      </div>
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif font-semibold text-foreground">
                          {item.event}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm shadow-romantic border-border/50 mt-6">
              <CardHeader>
                <CardTitle className="font-script text-2xl text-primary">
                  Dress Code
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cocktail Attire - Semi-formal dress suggested
                </p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Light, breathable fabrics recommended</p>
                  <p>• Avoid stiletto heels for outdoor areas</p>
                  <p>• Colors: Soft pastels, earth tones welcome</p>
                  <p>• Please avoid pure white or black</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;