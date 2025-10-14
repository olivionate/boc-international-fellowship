import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import visionPhoto from '@/assets/vision-photo.jpg';

const WelcomeSection = () => {
  return (
    <section className="section-gradient py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-divine mb-4 md:mb-6">
              A Beacon of Faith and Global Revival
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded on the unshakable pillars of biblical truth, spiritual empowerment, and global outreach, 
              BCIF serves as a lighthouse of faith, guiding believers toward spiritual maturity and igniting 
              transformation across nations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 md:mb-16">
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Our Divine Mission
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  At its core, BCIF is driven by a mission to glorify God by equipping faithful servants 
                  of Jesus Christ to edify the Body of Christ, make disciples of all nations, and spark 
                  spiritual revival worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <div className="card-ministry">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-spirit-foreground mb-2">Edify</h4>
                  <p className="text-sm text-muted-foreground">Building up the Body of Christ</p>
                </div>

                <div className="card-ministry">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-spirit-foreground mb-2">Equip</h4>
                  <p className="text-sm text-muted-foreground">Training faithful servants</p>
                </div>

                <div className="card-ministry">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-spirit-foreground mb-2">Evangelize</h4>
                  <p className="text-sm text-muted-foreground">Making disciples of all nations</p>
                </div>
              </div>

              <Button asChild size="lg" className="btn-divine w-full sm:w-auto touch-manipulation min-h-[48px]">
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="card-divine overflow-hidden bg-gradient-subtle">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={visionPhoto} 
                    alt="African church leaders and ministers united in faith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <blockquote className="text-xl font-medium text-foreground mb-6 italic">
                    "BCIF envisions a world where ministers are spiritually mature, theologically grounded, 
                    and practically equipped to lead vibrant, impactful ministries that transform communities and nations."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold">BCIF</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Our Vision</p>
                      <p className="text-sm text-muted-foreground">Global Revival & Transformation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Core Values Preview */}
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-divine mb-6 md:mb-8">Built on Solid Foundation</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                'Biblical Authority',
                'Christ-Centered Worship', 
                'Servant Leadership',
                'Global Mission',
                'Holistic Ministry',
                'Excellence in Ministry'
              ].map((value, index) => (
                <div key={value} className="card-divine text-center p-3 md:p-4">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary-foreground text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;