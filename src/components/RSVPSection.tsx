import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const RSVPSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guestCount: '',
    dietaryRestrictions: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "RSVP Submitted! 💕",
      description: "Thank you for your response. We're so excited to celebrate with you!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      attendance: '',
      guestCount: '',
      dietaryRestrictions: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="rsvp" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-script text-5xl sm:text-6xl text-primary mb-4">
            RSVP
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please let us know if you'll be joining us for our special day
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Kindly respond by November 15, 2024
          </p>
        </div>

        <Card className="bg-card shadow-romantic border-border/50">
          <CardHeader className="text-center">
            <CardTitle className="font-script text-3xl text-primary">
              We Can't Wait to Celebrate With You!
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                {/* Attendance */}
                <div className="space-y-2">
                  <Label htmlFor="attendance" className="text-foreground">
                    Will you attend? *
                  </Label>
                  <Select
                    value={formData.attendance}
                    onValueChange={(value) => handleInputChange('attendance', value)}
                    required
                  >
                    <SelectTrigger className="bg-background border-border focus:border-primary">
                      <SelectValue placeholder="Select your response" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, I'll be there! 💕</SelectItem>
                      <SelectItem value="no">Sorry, can't make it 😔</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {formData.attendance === 'yes' && (
                <div className="space-y-6 p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="text-foreground">
                      Number of Guests (including yourself)
                    </Label>
                    <Select
                      value={formData.guestCount}
                      onValueChange={(value) => handleInputChange('guestCount', value)}
                    >
                      <SelectTrigger className="bg-background border-border focus:border-primary">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary" className="text-foreground">
                      Dietary Restrictions or Allergies
                    </Label>
                    <Input
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                      placeholder="Please specify any dietary needs"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Special Message for the Couple
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Share your wishes, excitement, or any special requests..."
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-romantic px-12"
                >
                  Send RSVP
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <Card className="bg-card/50 backdrop-blur-sm shadow-soft border-border/50">
            <CardContent className="pt-6">
              <h3 className="font-script text-2xl text-primary mb-4">
                Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Feel free to reach out to us directly
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <a
                  href="mailto:sofia.miguel@wedding.com"
                  className="text-primary hover:text-accent transition-colors"
                >
                  sofia.miguel@wedding.com
                </a>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <a
                  href="tel:+1234567890"
                  className="text-primary hover:text-accent transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RSVPSection;