import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Heart, 
  Send, 
  Shield, 
  Users, 
  Clock, 
  Phone,
  CheckCircle,
  HandHeart
} from 'lucide-react';

const PrayerRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const prayerCategories = [
    'Healing & Health',
    'Family & Relationships',
    'Financial Provision',
    'Spiritual Growth',
    'Work & Career',
    'Ministry & Calling',
    'Salvation of Loved Ones',
    'Guidance & Direction',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="card-divine max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <CardTitle className="text-3xl text-divine">Prayer Request Submitted</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Thank you for sharing your prayer request with us. Our prayer team will be 
                interceding for you, and we believe God will answer according to His perfect will.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card-ministry">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">Prayer Schedule</p>
                  <p className="text-xs text-muted-foreground">Every Friday 7:00 PM</p>
                </div>
                <div className="card-ministry">
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-sm font-medium">Prayer Team</p>
                  <p className="text-xs text-muted-foreground">Dedicated intercessors</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button className="btn-divine w-full" onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Prayer Team
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Prayer Requests</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Share your prayer needs with our caring church family. We believe in the power 
            of united prayer and stand ready to intercede on your behalf.
          </p>
        </div>
      </section>

      {/* Prayer Promise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-divine bg-gradient-subtle p-8">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-medium text-foreground mb-6 italic">
                "And pray in the Spirit on all occasions with all kinds of prayers and requests. 
                With this in mind, be alert and always keep on praying for all the Lord's people."
              </blockquote>
              <p className="text-lg text-primary font-semibold">Ephesians 6:18</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Submit Your Prayer Request</h2>
              <p className="text-xl text-muted-foreground">
                Let us join you in prayer. Share your needs, concerns, and praises with our prayer team.
              </p>
            </div>

            <Card className="card-divine">
              <CardHeader>
                <CardTitle className="text-center text-divine flex items-center justify-center">
                  <HandHeart className="h-6 w-6 mr-2" />
                  Prayer Request Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Enter your first name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Enter your last name" required />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input type="email" placeholder="Enter your email address" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number (Optional)
                      </label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  {/* Prayer Request Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Prayer Request Details</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Category
                      </label>
                      <select className="w-full p-3 border border-border rounded-md bg-background">
                        <option value="">Select a category</option>
                        {prayerCategories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prayer Request *
                      </label>
                      <Textarea 
                        placeholder="Please share your prayer request in detail. We want to pray specifically for your needs."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        How urgent is this request?
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="urgency" value="low" className="text-primary" />
                          <span>Low - Please pray when convenient</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="urgency" value="medium" className="text-primary" defaultChecked />
                          <span>Medium - Please pray within the week</span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input type="radio" name="urgency" value="high" className="text-primary" />
                          <span>High - Please pray immediately</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Options */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Privacy & Communication</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox id="confidential" />
                        <label htmlFor="confidential" className="text-sm text-foreground leading-relaxed">
                          Keep this request confidential (only pastoral team will pray)
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox id="updates" defaultChecked />
                        <label htmlFor="updates" className="text-sm text-foreground leading-relaxed">
                          I would like to receive updates and encouragement via email
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox id="contact" />
                        <label htmlFor="contact" className="text-sm text-foreground leading-relaxed">
                          I would like someone from the pastoral team to contact me
                        </label>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Checkbox id="visitor" />
                        <label htmlFor="visitor" className="text-sm text-foreground leading-relaxed">
                          I am interested in visiting BCIF
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="space-y-4">
                    <Button type="submit" size="lg" className="btn-divine w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Submit Prayer Request
                    </Button>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Your information is kept confidential and secure</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prayer Ministry Info */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Our Prayer Ministry</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn more about how we intercede and support our church family through prayer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">Prayer Team</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated intercessors who commit to praying regularly for submitted requests
              </p>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">Weekly Prayer</h3>
              <p className="text-sm text-muted-foreground">
                Every Friday at 7:00 PM, we gather for corporate prayer and intercession
              </p>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">Confidential Care</h3>
              <p className="text-sm text-muted-foreground">
                All prayer requests are handled with complete confidentiality and pastoral care
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerRequest;