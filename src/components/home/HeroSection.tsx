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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Welcome to the 
            <span className="block text-secondary text-glow mt-2">
              Body of Christ International Fellowship
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 px-4 leading-relaxed">
            A vibrant, Christ-centered church with a profound calling to impact the world 
            through spiritual empowerment, global outreach, and transformative worship.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-stretch sm:items-center mb-8 md:mb-12 px-4">
            <Button asChild size="lg" className="btn-worship w-full sm:w-auto touch-manipulation min-h-[48px]">
              <Link to="/contact">
                <Users className="h-5 w-5 mr-2" />
                Plan Your Visit
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto touch-manipulation min-h-[48px]">
              <a href="https://boctv.co.ke/" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-5 w-5 mr-2" />
                Watch Live Stream
              </a>
            </Button>
          </div>

          {/* Service Times */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Sunday Main Worship Services</h3>
              <p className="text-white/80 text-xs md:text-sm">8:00 AM & 10:30 AM</p>
            </div>

            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Wednesday Healing & Restoration Service</h3>
              <p className="text-white/80 text-xs md:text-sm">Wednesday 6:30 PM</p>
            </div>

            <div className="card-divine text-center bg-white/10 backdrop-blur-md border-white/20 p-4 md:p-6 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">Friday Holy Spirit Outpouring Night</h3>
              <p className="text-white/80 text-xs md:text-sm">Friday 9:00 PM - 5:00 AM</p>
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