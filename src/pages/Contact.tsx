import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Navigation,
  Heart
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Contact Us</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our church family and pastoral team
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-divine text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-divine">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Body of Christ International Fellowship<br />
                  Nairobi, Kenya<br />
                  East Africa Headquarters
                </p>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="card-divine text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-divine">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Main Office:</p>
                <p className="font-semibold mb-2">+254 721 658 788</p>
                <p className="text-muted-foreground mb-2">Prayer Line:</p>
                <p className="font-semibold mb-4">+254 736 325 788</p>
                <Button variant="outline" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="card-divine text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-divine">Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">General Inquiries:</p>
                <p className="font-semibold mb-2">info@thebocfellowship.org</p>
                <p className="text-muted-foreground mb-2">Prayer Requests:</p>
                <p className="font-semibold mb-4">prayer@thebocfellowship.org</p>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="card-divine text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-divine">Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">7:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Have a question, need prayer, or want to learn more about our church? 
                We'd love to hear from you and will respond as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input placeholder="What's this about?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={6}
                  />
                </div>
                
                <Button size="lg" className="btn-divine w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-divine mb-6">Find Us</h2>
                
                {/* Map Placeholder */}
                <div className="card-divine bg-muted/50 h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Getting Here</h3>
                    <p className="text-muted-foreground text-sm">
                      We're conveniently located in Nairobi, Kenya. Public transportation 
                      and parking are available. Contact us for specific directions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">First Time Visitors</h3>
                    <p className="text-muted-foreground text-sm">
                      New to BCIF? We'd love to welcome you! Arrive 15 minutes early 
                      to get settled and meet our friendly welcome team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card-divine bg-gradient-subtle">
                <h3 className="text-xl font-bold text-divine mb-4">Connect Online</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for updates, inspiration, and community connection.
                </p>
                
                <div className="flex space-x-4">
                  <Button size="icon" variant="outline">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Youtube className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Join Us for Worship</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Come as you are and experience the presence of God with our church family
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-spirit-foreground mb-3">Sunday Main Worship Services</h3>
              <p className="text-muted-foreground mb-2">Join us for powerful worship and biblical teaching</p>
              <p className="font-semibold">8:00 AM & 10:30 AM</p>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold text-spirit-foreground mb-3">Wednesday Healing & Restoration Service</h3>
              <p className="text-muted-foreground mb-2">Experience divine healing and restoration</p>
              <p className="font-semibold">6:30 PM</p>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-spirit-foreground mb-3">Friday Holy Spirit Outpouring Night</h3>
              <p className="text-muted-foreground mb-2">Experience the power of the Holy Spirit</p>
              <p className="font-semibold">7:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;