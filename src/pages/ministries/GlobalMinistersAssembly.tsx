import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Calendar, ArrowRight, Globe, BookOpen, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/ministers-assembly-hero.jpg';
import missionImage from '@/assets/ministries/gma-mission.jpg';
import visionImage from '@/assets/ministries/gma-vision.jpg';
import edifyImage from '@/assets/ministries/gma-edify.jpg';
import equipImage from '@/assets/ministries/gma-equip.jpg';
import encourageImage from '@/assets/ministries/gma-encourage.jpg';
import strengthenImage from '@/assets/ministries/gma-strengthen.jpg';
import developImage from '@/assets/ministries/gma-develop.jpg';

const GlobalMinistersAssembly = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="BCIF Global Ministers Assembly"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              BCIF Global Ministers Assembly
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Empowering Gospel Ministers Worldwide Through Holistic Development and Global Fellowship
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

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={missionImage} alt="African ministers in fellowship" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-divine mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to empower Gospel Ministers by providing comprehensive support that nurtures their spiritual, 
                  emotional, and practical capacities. We aim to equip ministers with the tools, knowledge, and encouragement 
                  needed to excel in their unique callings, ensuring they are prepared to lead, teach, and serve with confidence 
                  and clarity. Through intentional programs and gatherings, we foster an environment where ministers can grow, 
                  connect, and thrive in their service to the Body of Christ.
                </p>
              </div>
            </div>

            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={visionImage} alt="Global network of African ministers" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-divine mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The BCIF Global Ministers Assembly envisions a global network of Spirit-led ministers who are fully 
                  equipped, deeply inspired, and united in their pursuit of God's purpose. We strive to see ministers who are 
                  not only effective in their local contexts but also globally influential, carrying the Gospel with boldness 
                  and compassion. Our vision is to create a vibrant, interconnected community where ministers are continually 
                  strengthened to impact their churches, communities, and nations for Christ.
                </p>
              </div>
            </div>
          </div>

          {/* Core Objectives */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Core Objectives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Assembly is built on five foundational pillars that guide our efforts to support Gospel Ministers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
            {[
              { 
                title: 'Edify', 
                description: 'Building up ministers through sound biblical teaching, spiritual mentorship, and opportunities for personal renewal.',
                icon: BookOpen,
                image: edifyImage
              },
              { 
                title: 'Equip', 
                description: 'Providing practical tools and training to enhance ministry effectiveness including workshops and resources.',
                icon: GraduationCap,
                image: equipImage
              },
              { 
                title: 'Encourage', 
                description: 'Creating supportive environments where ministers find encouragement through peer mentoring and prayer networks.',
                icon: Heart,
                image: encourageImage
              },
              { 
                title: 'Strengthen', 
                description: 'Building resilience and spiritual fortitude, enabling ministers to navigate challenges and opposition.',
                icon: Users,
                image: strengthenImage
              },
              { 
                title: 'Develop', 
                description: 'Fostering leadership growth and personal development through targeted programs and strategic planning.',
                icon: Globe,
                image: developImage
              }
            ].map((objective) => {
              const IconComponent = objective.icon;
              return (
                <div key={objective.title} className="card-ministry text-center overflow-hidden">
                  <div className="relative h-48 mb-4">
                    <img src={objective.image} alt={objective.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-spirit-foreground mb-3">{objective.title}</h3>
                    <p className="text-sm text-muted-foreground">{objective.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Global Gatherings */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Global Gatherings</h2>
              <p className="text-xl text-muted-foreground">
                Monthly assemblies creating dynamic platforms for ministers to connect, learn, and grow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Fellowship & Networking',
                  description: 'Ministers build meaningful relationships, share experiences, and form partnerships that strengthen their ministries.'
                },
                {
                  title: 'Inspirational Teaching',
                  description: 'Renowned speakers deliver powerful messages that inspire and challenge attendees to deepen their commitment.'
                },
                {
                  title: 'Workshops & Training',
                  description: 'Tailored workshops address critical ministry topics, led by experts and experienced practitioners.'
                },
                {
                  title: 'Prayer & Spiritual Impartation',
                  description: 'Dedicated times of prayer, worship, and intercession for spiritual renewal and fresh anointing.'
                },
                {
                  title: 'Cultural Celebration',
                  description: 'Each gathering incorporates local cultural elements, fostering mutual respect and appreciation.'
                },
                {
                  title: 'Global Impact',
                  description: 'Recent assemblies held in Nigeria, Brazil, India, and the United States with plans for new regions.'
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Headquarters */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Global Headquarters - Nairobi, Kenya</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our global headquarters is strategically located in Nairobi, Kenya, a vibrant Christian hub for East Africa and beyond. 
                From this central location, our dedicated team coordinates global initiatives and provides comprehensive support services.
              </p>
              <div className="space-y-4">
                {[
                  'Planning and execution of monthly global assemblies',
                  'Development and distribution of ministry resources',
                  'Support services including mentorship and counseling',
                  'Partnerships with local churches across Africa'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-divine bg-gradient-subtle p-8 text-center">
              <h3 className="text-2xl font-bold text-divine mb-4">Join the Assembly</h3>
              <p className="text-muted-foreground mb-6">
                Become part of a transformative global movement of empowered ministers making an impact worldwide.
              </p>
              <div className="space-y-3">
                <Button asChild className="btn-divine w-full">
                  <Link to="/give">
                    <Heart className="h-4 w-4 mr-2" />
                    Get Involved
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Info Session
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalMinistersAssembly;