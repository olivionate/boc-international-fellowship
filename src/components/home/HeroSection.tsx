import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Heart, Calendar, ArrowRight } from 'lucide-react';
import heroWorshipImage from '@/assets/hero-worship.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroWorshipImage} 
          alt="BCIF Worship Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="hero-title text-white mb-6">
            Welcome to the 
            <span className="block text-secondary text-glow">
              Body of Christ International Fellowship
            </span>
          </h1>
          
          <p className="hero-subtitle text-white/90 mb-8">
            A vibrant, Christ-centered church with a profound calling to impact the world 
            through spiritual empowerment, global outreach, and transformative worship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="btn-worship">
              <Link to="/visit">
                <Users className="h-5 w-5 mr-2" />
                Plan Your Visit
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/live">
                <Calendar className="h-5 w-5 mr-2" />
                Watch Live Stream
              </Link>
            </Button>
          </div>

          {/* Service Times */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-2">Sunday Worship</h3>
              <p className="text-white/80 text-sm">8:00 AM & 10:30 AM</p>
            </div>

            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-2">Bible Study</h3>
              <p className="text-white/80 text-sm">Wednesday 6:30 PM</p>
            </div>

            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-2">Prayer Night</h3>
              <p className="text-white/80 text-sm">Friday 7:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;