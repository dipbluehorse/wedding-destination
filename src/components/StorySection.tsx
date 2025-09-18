import { Card, CardContent } from '@/components/ui/card';
import coupleImage from '@/assets/couple-portrait.jpg';

const StorySection = () => {
  return (
    <section id="story" className="py-20 bg-gradient-romantic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl sm:text-6xl text-primary mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-romantic">
              <img
                src={coupleImage}
                alt="Sofia and Miguel"
                className="w-full h-[600px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl" />
          </div>

          {/* Story Content */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-script text-xl">💕</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        How We Met
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our paths crossed at a cozy coffee shop in Barcelona, where Miguel was reading poetry 
                        and Sofia was sketching the morning light. A spilled latte led to shared laughter, 
                        and that laughter led to forever.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-script text-xl">💍</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        The Proposal
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Under the stars of Santorini, with the Aegean Sea as our witness, Miguel asked 
                        the question that changed everything. Sofia said yes through happy tears, 
                        and we knew we wanted to return to this magical place for our wedding.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-romantic transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-script text-xl">🌟</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        Our Journey
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Three years of adventures, countless sunsets, shared dreams, and building 
                        a life together have brought us to this moment. We can't wait to celebrate 
                        with all the people who have made our love story possible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;