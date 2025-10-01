import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Music, Heart, Calendar, ArrowRight, Mic, Users, Globe } from 'lucide-react';
import heroImage from '@/assets/music-academy-hero.jpg';
import missionImage from '@/assets/ministries/music-mission.jpg';
import visionImage from '@/assets/ministries/music-vision.jpg';

const MusicAcademy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Body of Christ Music Academy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              Body of Christ Music Academy
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Transformative Worship Training for Spirit-Filled Musical Excellence
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

      {/* Academy Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={missionImage} alt="African worship leaders in training" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Worship is at the heart of BCIF's identity, and the Body of Christ Music Academy is a vibrant expression 
                  of this commitment. The academy exists to train worship leaders, musicians, and vocalists to lead 
                  transformative, Spirit-filled worship experiences that draw people into God's presence.
                </p>
              </div>
            </div>

            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={visionImage} alt="Creative worship environment" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To raise a generation of anointed worship leaders who blend technical excellence with spiritual sensitivity, 
                  creating authentic worship experiences that transform lives and glorify God. We envision a global movement 
                  of worship that celebrates African musical heritage while reaching diverse audiences worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Course Offerings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Music Theory',
                description: 'Comprehensive foundation in musical principles, notation, and harmonic structure',
                icon: Music,
                color: 'bg-primary'
              },
              {
                title: 'Vocal Performance',
                description: 'Professional voice training with emphasis on worship leading and spiritual expression',
                icon: Mic,
                color: 'bg-secondary'
              },
              {
                title: 'Instrumental Training',
                description: 'Proficiency development in guitar, piano, drums, and other worship instruments',
                icon: Users,
                color: 'bg-accent'
              },
              {
                title: 'Worship Leadership',
                description: 'Practical training in leading congregational worship and creating spiritual atmosphere',
                icon: Heart,
                color: 'bg-primary'
              },
              {
                title: 'African Musical Traditions',
                description: 'Integration of cultural heritage into contemporary worship expressions',
                icon: Globe,
                color: 'bg-secondary'
              },
              {
                title: 'Creative Development',
                description: 'Original composition and arrangement skills for innovative worship experiences',
                icon: ArrowRight,
                color: 'bg-accent'
              }
            ].map((course) => {
              const IconComponent = course.icon;
              return (
                <div key={course.title} className="card-ministry">
                  <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-spirit-foreground mb-3">{course.title}</h3>
                  <p className="text-muted-foreground">{course.description}</p>
                </div>
              );
            })}
          </div>

          {/* Training Philosophy */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Our Training Philosophy</h2>
              <p className="text-xl text-muted-foreground">
                Blending technical excellence with spiritual sensitivity for authentic, anointed worship
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Technical Excellence</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Professional Standards</h4>
                      <p className="text-muted-foreground">High-quality musical training that meets industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skill Development</h4>
                      <p className="text-muted-foreground">Progressive training programs for all skill levels and instruments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Performance Practice</h4>
                      <p className="text-muted-foreground">Regular opportunities to apply learning in real worship settings</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Spiritual Sensitivity</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Anointed Leadership</h4>
                      <p className="text-muted-foreground">Training in Spirit-led worship and creating atmospheres of encounter</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Lifestyle of Worship</h4>
                      <p className="text-muted-foreground">Cultivating personal devotion that extends beyond the stage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Spiritual Growth</h4>
                      <p className="text-muted-foreground">Character development and spiritual maturity alongside musical training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">African Musical Heritage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The curriculum incorporates African musical traditions, allowing students to create worship music that 
                reflects their cultural heritage while appealing to a global audience. This unique approach celebrates 
                diversity while maintaining the universal language of worship that transcends cultural boundaries.
              </p>
              <div className="space-y-4">
                {[
                  'Traditional rhythms and percussion styles',
                  'Indigenous vocal techniques and harmonies',
                  'Cultural instruments and their applications',
                  'Contemporary fusion approaches',
                  'Cross-cultural worship expressions',
                  'Global music appreciation'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-4 text-center">Academy Highlights</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Key features that make our music academy a center of excellence for worship training.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Students Trained</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Original Songs Created</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Course Offerings</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Hub */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Creative Hub & Production</h2>
              <p className="text-xl text-muted-foreground">
                Beyond training, the academy serves as a creative center for original music production
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Original Compositions',
                  description: 'Creating inspiring worship songs that touch hearts and glorify God',
                  icon: Music
                },
                {
                  title: 'Album Production',
                  description: 'Professional recording and distribution of worship music and albums',
                  icon: Mic
                },
                {
                  title: 'Live Recordings',
                  description: 'Capturing powerful worship moments for global sharing and inspiration',
                  icon: Users
                },
                {
                  title: 'Digital Platforms',
                  description: 'Sharing music through online platforms and international conferences',
                  icon: Globe
                }
              ].map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div key={feature.title} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-divine bg-gradient-subtle p-12 text-center">
            <h2 className="text-4xl font-bold text-divine mb-6">Transform Lives Through Worship</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              By training worship leaders who lead with authenticity and passion, the academy plays a pivotal role 
              in BCIF's vision to transform lives through Spirit-led worship. Join us in creating music that draws 
              people into God's presence.
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

export default MusicAcademy;