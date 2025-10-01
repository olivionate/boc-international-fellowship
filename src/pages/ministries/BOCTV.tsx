import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tv, Heart, Calendar, ArrowRight, Users, Globe, BookOpen, Music } from 'lucide-react';
import heroImage from '@/assets/tv-ministry-hero.jpg';
import missionImage from '@/assets/ministries/tv-mission.jpg';
import visionImage from '@/assets/ministries/tv-vision.jpg';

const BOCTV = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Body of Christ TV (BOC TV)" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              Body of Christ TV (BOC TV)
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Media Ministry for Global Impact and Spiritual Development
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
                <a href="https://boctv.co.ke/" target="_blank" rel="noopener noreferrer">
                  <Tv className="h-5 w-5 mr-2" />
                  Watch Live
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={missionImage} alt="African media team in production" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Body of Christ TV is the Ministry's media arm that aims to "impact the Body of Christ for growth 
                  and development in unity, doctrine, knowledge of scriptures, and a firm relationship with Jesus Christ 
                  who is our Lord and Savior."
                </p>
                <div className="bg-gradient-primary text-primary-foreground p-4 rounded-lg">
                  <p className="text-sm font-medium">
                    "Impact the Body of Christ for growth and development in unity, doctrine, 
                    knowledge of scriptures, and a firm relationship with Jesus Christ"
                  </p>
                </div>
              </div>
            </div>

            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={visionImage} alt="Global broadcast vision" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a leading Christian media platform that reaches every nation through compelling content that educates, 
                  inspires, and transforms lives. We envision a global audience united in sound doctrine, deep scriptural 
                  knowledge, and authentic relationship with Jesus Christ through the power of media ministry.
                </p>
              </div>
            </div>
          </div>

          {/* Four Pillars of Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                title: 'Unity',
                description: 'Fostering oneness in the global Body of Christ, transcending denominational and cultural barriers',
                icon: Users,
                color: 'bg-primary',
                details: 'Creating platforms where believers from different backgrounds can encounter shared truths and experiences through diverse programming that emphasizes shared Christian values.'
              },
              {
                title: 'Doctrine',
                description: 'Promoting sound biblical teaching and orthodox Christian beliefs through comprehensive programming',
                icon: BookOpen,
                color: 'bg-secondary',
                details: 'Providing clear, biblically grounded instruction through Bible Exposition and systematic teaching that counters misinformation and shallow interpretations.'
              },
              {
                title: 'Scripture Knowledge',
                description: 'Deepening understanding of God\'s Word through accessible and relevant biblical teaching',
                icon: Globe,
                color: 'bg-accent',
                details: 'Enhancing scriptural literacy through various teaching methods, historical context, and practical application that makes the Bible accessible and relevant.'
              },
              {
                title: 'Relationship with Jesus',
                description: 'Drawing viewers closer to Christ through worship, testimonies, and spiritual content',
                icon: Heart,
                color: 'bg-primary',
                details: 'Fostering intimate connection with Jesus through Spirit Concert, testimonies, and content that emphasizes Christ\'s love, grace, and lordship in daily life.'
              }
            ].map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div key={pillar.title} className="card-ministry">
                  <div className={`w-12 h-12 ${pillar.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-spirit-foreground mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-4">{pillar.description}</p>
                  <p className="text-sm text-muted-foreground">{pillar.details}</p>
                </div>
              );
            })}
          </div>

          {/* Programming */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Our Programming</h2>
              <p className="text-xl text-muted-foreground">
                Diverse content designed to edify, educate, and inspire believers worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Signature Shows</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Bible Exposition</h4>
                      <p className="text-muted-foreground">In-depth scriptural teaching featuring verse-by-verse analysis and thematic studies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Spirit Concert</h4>
                      <p className="text-muted-foreground">Powerful worship experiences showcasing the universal language of praise and music</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Bread of Life</h4>
                      <p className="text-muted-foreground">Teaching series emphasizing Jesus as our spiritual nourishment and daily guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Christian Documentaries</h4>
                      <p className="text-muted-foreground">Visual storytelling exploring biblical themes, Church history, and archaeological evidence</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Special Content</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Testimonies</h4>
                      <p className="text-muted-foreground">Real-life transformation stories showcasing God's power and grace in action</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Children's Programmes</h4>
                      <p className="text-muted-foreground">Age-appropriate biblical content laying spiritual foundations for the next generation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Christian Music</h4>
                      <p className="text-muted-foreground">Diverse musical content fostering worship, reflection, and spiritual connection</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Global Partnerships</h4>
                      <p className="text-muted-foreground">Collaborative content with international Christian organizations and ministries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Position */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Strategic Global Position</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Broadcasting from Nairobi, Kenya, BOC TV occupies a strategic position in a region where Christianity 
                is rapidly growing. As an independent station with global partnerships, we maintain balance between 
                contextual relevance and universal appeal, reaching diverse audiences worldwide.
              </p>
              <div className="space-y-4">
                {[
                  'English-language broadcasts for global accessibility',
                  'Strategic location in East Africa\'s Christian hub',
                  'Independence from denominational constraints',
                  'Partnerships with major Christian entities worldwide',
                  'Digital streaming and online platforms',
                  'Interactive viewer engagement opportunities'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-4 text-center">Broadcast Reach</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Our programming impacts believers across multiple continents and demographics.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Broadcasting Schedule</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">Regular Viewers</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Years Broadcasting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Connect With Us</h2>
              <p className="text-xl text-muted-foreground">
                Engage with our programming and become part of our growing global community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Watch Live',
                  description: 'Stream our content live at boctv.co.ke',
                  icon: Tv,
                  action: 'Watch Now'
                },
                {
                  title: 'Contact Us',
                  description: 'info@boctv.co.ke | +254 736 325 788',
                  icon: Globe,
                  action: 'Get in Touch'
                },
                {
                  title: 'Program Schedule',
                  description: 'Check our weekly programming lineup',
                  icon: Calendar,
                  action: 'View Schedule'
                },
                {
                  title: 'Partnership',
                  description: 'Join our mission through support and prayer',
                  icon: Users,
                  action: 'Partner With Us'
                }
              ].map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <div key={contact.title} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                    <Button variant="outline" size="sm">{contact.action}</Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-divine bg-gradient-subtle p-12 text-center">
            <h2 className="text-4xl font-bold text-divine mb-6">Join Our Media Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              BOC TV fulfills its calling as a beacon of light in the Christian broadcasting landscape. 
              By fostering unity, grounding viewers in sound doctrine, deepening their knowledge of Scripture, 
              and drawing them closer to Jesus, we serve the global Church's growth and mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-divine">
                <Link to="/give">
                  <Heart className="h-5 w-5 mr-2" />
                  Support Our Ministry
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://boctv.co.ke/" target="_blank" rel="noopener noreferrer">
                  <Tv className="h-5 w-5 mr-2" />
                  Watch Live Stream
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BOCTV;