import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Globe, Heart, Calendar, ArrowRight, Users, MapPin, Zap } from 'lucide-react';
import heroImage from '@/assets/outreach-ministry-hero.jpg';
import missionImage from '@/assets/ministries/outreach-mission.jpg';
import visionImage from '@/assets/ministries/outreach-vision.jpg';

const GlobalOutreachMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Body of Christ Global Outreach Ministry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              Global Outreach Ministry
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Making Disciples of All Nations Through Evangelistic Campaigns and Community Development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-worship">
                <Link to="/give">
                  <Heart className="h-5 w-5 mr-2" />
                  Get Involved
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Info Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={missionImage} alt="African missionaries in outreach" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The Body of Christ Global Outreach Ministry embodies BCIF's commitment to fulfilling the Great Commission 
                  by making disciples of all nations. This ministry serves as the church's evangelistic and missional arm, 
                  spearheading initiatives that extend the Gospel's reach to diverse regions and people groups.
                </p>
              </div>
            </div>

            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={visionImage} alt="Global outreach vision" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To see the Gospel reach every nation and people group, establishing vibrant Christian communities that 
                  transform lives and societies. We envision a world where the love of Christ is demonstrated through both 
                  word and deed, bringing holistic transformation to communities across the globe.
                </p>
              </div>
            </div>
          </div>

          {/* Outreach Activities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Evangelistic Crusades',
                description: 'Large-scale campaigns that draw thousands to hear the Gospel message with power and demonstration',
                icon: Zap,
                color: 'bg-primary'
              },
              {
                title: 'Church Planting',
                description: 'Strategic initiatives to establish new churches in unreached communities and regions',
                icon: MapPin,
                color: 'bg-secondary'
              },
              {
                title: 'Community Development',
                description: 'Holistic projects addressing both spiritual and material needs of underserved populations',
                icon: Users,
                color: 'bg-accent'
              },
              {
                title: 'Targeted Outreach',
                description: 'Focused ministry to specific communities, including urban centers and remote villages',
                icon: Globe,
                color: 'bg-primary'
              },
              {
                title: 'Cross-Cultural Missions',
                description: 'International mission trips building bridges between cultures and spreading the Gospel',
                icon: Heart,
                color: 'bg-secondary'
              },
              {
                title: 'Leadership Training',
                description: 'Equipping local leaders and supporting indigenous church growth and development',
                icon: ArrowRight,
                color: 'bg-accent'
              }
            ].map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.title} className="card-ministry">
                  <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-spirit-foreground mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground">{activity.description}</p>
                </div>
              );
            })}
          </div>

          {/* Regional Impact */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Global Reach</h2>
              <p className="text-xl text-muted-foreground">
                From urban centers in Kenya to remote villages across Africa and beyond
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">African Outreach</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">East Africa</h4>
                      <p className="text-muted-foreground">Uganda, Tanzania, and surrounding regions with established church partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Southern Africa</h4>
                      <p className="text-muted-foreground">South Africa and neighboring countries through strategic mission partnerships</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">West Africa</h4>
                      <p className="text-muted-foreground">Nigeria and expanding reach through local church collaborations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">International Missions</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Europe</h4>
                      <p className="text-muted-foreground">Mission trips and partnerships with European churches and organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">North America</h4>
                      <p className="text-muted-foreground">Cross-cultural exchanges and collaborative ministry initiatives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Asia</h4>
                      <p className="text-muted-foreground">Emerging partnerships and mission opportunities in Asian nations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community Development */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Holistic Ministry Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                By addressing practical needs—such as providing medical care, food relief, or economic empowerment—BCIF 
                demonstrates Christ's love in tangible ways, earning trust and opening hearts to the Gospel. Our community 
                development initiatives create lasting change while sharing the transformative message of Jesus Christ.
              </p>
              <div className="space-y-4">
                {[
                  'Clean water projects and sanitation',
                  'Medical care and health education',
                  'Vocational training programs',
                  'Educational scholarships and schools',
                  'Food relief and nutrition programs',
                  'Trauma healing workshops',
                  'Economic empowerment initiatives'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-4 text-center">Impact Statistics</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Measurable results from our global outreach initiatives and community development projects.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Churches Planted</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Leaders Trained</div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Partnership Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Join us in extending God's Kingdom through strategic partnerships and collaborative ministry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Mission Teams',
                  description: 'Join short-term mission trips to serve and share the Gospel',
                  icon: Users
                },
                {
                  title: 'Financial Support',
                  description: 'Partner with us through generous giving to fund outreach initiatives',
                  icon: Heart
                },
                {
                  title: 'Prayer Warriors',
                  description: 'Commit to interceding for our missionaries and outreach efforts',
                  icon: Globe
                },
                {
                  title: 'Local Partnerships',
                  description: 'Connect your church or organization with our global network',
                  icon: MapPin
                }
              ].map((opportunity) => {
                const IconComponent = opportunity.icon;
                return (
                  <div key={opportunity.title} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{opportunity.title}</h3>
                    <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-divine bg-gradient-subtle p-12 text-center">
            <h2 className="text-4xl font-bold text-divine mb-6">Be Part of the Great Commission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Through our outreach efforts, BCIF has planted churches, trained local leaders, and sparked spiritual 
              awakenings in numerous communities. Join us in contributing to our vision of global revival.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-divine">
                <Link to="/give">
                  <Heart className="h-5 w-5 mr-2" />
                  Get Involved
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Info Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalOutreachMinistry;