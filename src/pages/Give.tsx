import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  CreditCard, 
  Smartphone, 
  Building, 
  Globe, 
  Users,
  ArrowRight,
  Shield,
  CheckCircle,
  DollarSign
} from 'lucide-react';

const Give = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const quickAmounts = ['50', '100', '250', '500', '1000', '2500'];

  const givingOptions = [
    {
      title: 'Tithe & Offerings',
      description: 'Support the ongoing ministry and operations of BCIF through faithful tithing and generous offerings.',
      icon: Heart,
      impact: 'Funds pastoral care, worship services, and daily church operations'
    },
    {
      title: 'Global Missions',
      description: 'Partner with us in reaching all nations through evangelistic campaigns and church planting initiatives.',
      icon: Globe,
      impact: 'Supports missionaries, crusades, and international outreach programs'
    },
    {
      title: 'School of Ministry',
      description: 'Invest in training the next generation of church leaders through theological education and development.',
      icon: Users,
      impact: 'Provides scholarships, resources, and faculty support for students'
    },
    {
      title: 'Community Outreach',
      description: 'Help us serve our local community through humanitarian aid and development projects.',
      icon: Building,
      impact: 'Funds food programs, healthcare initiatives, and community development'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Give to BCIF</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Partner with us in advancing God's Kingdom through your generous giving. 
            Every gift makes a difference in lives and communities around the world.
          </p>
        </div>
      </section>

      {/* Giving Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Why We Give</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "Each of you should give what you have decided in your heart to give, not reluctantly 
              or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-ministry">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-spirit-foreground mb-3">Worship Through Giving</h3>
                <p className="text-sm text-muted-foreground">Giving is an act of worship that honors God with our resources</p>
              </div>
              
              <div className="card-ministry">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-bold text-spirit-foreground mb-3">Kingdom Impact</h3>
                <p className="text-sm text-muted-foreground">Every gift advances God's Kingdom and transforms lives</p>
              </div>
              
              <div className="card-ministry">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-spirit-foreground mb-3">Community Building</h3>
                <p className="text-sm text-muted-foreground">Generous giving builds stronger communities and churches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Giving Form */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Give Online</h2>
              <p className="text-xl text-muted-foreground">
                Secure, convenient, and easy way to support BCIF ministries
              </p>
            </div>

            <Card className="card-divine">
              <CardHeader>
                <CardTitle className="text-center text-divine">Make Your Donation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Choose Amount (USD)
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? "default" : "outline"}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={selectedAmount === amount ? "btn-worship" : ""}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount('');
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Giving Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Giving Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="givingType" value="tithe" className="text-primary" defaultChecked />
                      <span>Tithe & Offerings</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="givingType" value="missions" className="text-primary" />
                      <span>Global Missions</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="givingType" value="school" className="text-primary" />
                      <span>School of Ministry</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="givingType" value="outreach" className="text-primary" />
                      <span>Community Outreach</span>
                    </label>
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Frequency
                  </label>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">One Time</Button>
                    <Button variant="outline" className="flex-1">Monthly</Button>
                    <Button variant="outline" className="flex-1">Weekly</Button>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Button variant="outline" className="flex items-center justify-center p-4">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Card
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center p-4">
                      <Smartphone className="h-5 w-5 mr-2" />
                      M-Pesa
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center p-4">
                      <Building className="h-5 w-5 mr-2" />
                      Bank
                    </Button>
                  </div>
                </div>

                <Button size="lg" className="btn-divine w-full">
                  <Heart className="h-5 w-5 mr-2" />
                  Continue to Payment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>

                {/* Security Note */}
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>Secure & encrypted payment processing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Where Your Gifts Go</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your generous giving supports various ministry areas that impact lives locally and globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {givingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div key={option.title} className="card-divine group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {option.description}
                      </p>
                      
                      <div className="flex items-start space-x-2 mb-4">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">
                          <strong>Impact:</strong> {option.impact}
                        </p>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        Give to {option.title}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Other Ways to Give</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the giving method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Building className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">Bank Transfer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Direct bank transfer for larger donations or regular giving
              </p>
              <Button variant="outline" size="sm">Get Bank Details</Button>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">Mobile Money</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Quick and convenient giving through M-Pesa and other mobile platforms
              </p>
              <Button variant="outline" size="sm">Get M-Pesa Details</Button>
            </div>

            <div className="card-ministry text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-spirit-foreground mb-3">In-Person</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Give during worship services or visit our church office
              </p>
              <Button variant="outline" size="sm">Visit Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
