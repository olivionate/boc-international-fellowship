import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Hand, Heart, Calendar, ArrowRight, Users, Globe, Zap, Shield } from 'lucide-react';
import heroImage from '@/assets/prayer-ministry-hero.jpg';

const PrayerMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Prayer and Intercessory Ministry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              Prayer & Intercessory Ministry
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Fostering a Culture of Prayer and Spiritual Dependence on the Holy Spirit
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

      {/* Ministry Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">The Power of Prayer</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The Prayer and Intercessory Ministry is dedicated to fostering a deep culture of prayer and spiritual 
              dependence on the Holy Spirit through corporate prayer meetings, intercession groups, and 24/7 prayer 
              chains that strengthen the Body of Christ and advance God's Kingdom purposes.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Corporate Prayer Meetings',
                description: 'Regular gatherings where believers unite in powerful, Spirit-led prayer for local and global needs',
                icon: Users,
                color: 'bg-primary'
              },
              {
                title: 'Intercession Groups',
                description: 'Specialized teams focused on specific prayer assignments and strategic spiritual warfare',
                icon: Shield,
                color: 'bg-secondary'
              },
              {
                title: '24/7 Prayer Chains',
                description: 'Continuous prayer coverage ensuring constant spiritual support and divine intervention',
                icon: Globe,
                color: 'bg-accent'
              },
              {
                title: 'Spiritual Warfare Training',
                description: 'Equipping believers with biblical principles and practical strategies for spiritual combat',
                icon: Zap,
                color: 'bg-primary'
              },
              {
                title: 'Revival Prayer Initiatives',
                description: 'Focused prayer movements seeking God\'s presence for personal and corporate transformation',
                icon: Hand,
                color: 'bg-secondary'
              },
              {
                title: 'Prayer Leadership Development',
                description: 'Training and mentoring prayer warriors to lead effective intercession in their communities',
                icon: ArrowRight,
                color: 'bg-accent'
              }
            ].map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="card-ministry">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-spirit-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Prayer Culture */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Cultivating a Prayer Culture</h2>
              <p className="text-xl text-muted-foreground">
                Building a community where prayer is not just an activity but a way of life
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Prayer Meeting Structure</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Weekly Corporate Gatherings</h4>
                      <p className="text-muted-foreground">Regular meetings bringing the church family together for unified prayer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Monthly Night Vigils</h4>
                      <p className="text-muted-foreground">Extended prayer sessions for breakthrough and spiritual advancement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Special Prayer Focus</h4>
                      <p className="text-muted-foreground">Targeted intercession for missions, healing, and revival initiatives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Intercession Training</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Biblical Foundations</h4>
                      <p className="text-muted-foreground">Teaching the scriptural basis and principles of effective intercession</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Spiritual Discernment</h4>
                      <p className="text-muted-foreground">Developing sensitivity to the Holy Spirit's leading in prayer</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Practical Application</h4>
                      <p className="text-muted-foreground">Hands-on experience in various forms of prayer and intercession</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 24/7 Prayer Chain */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Continuous Prayer Coverage</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our 24/7 prayer chain ensures that intercession never ceases, creating a spiritual atmosphere of 
                constant divine connection and supernatural breakthrough. This continuous coverage provides ongoing 
                support for urgent prayer requests, global missions, and the spiritual protection of our community.
              </p>
              <div className="space-y-4">
                {[
                  'Round-the-clock prayer shifts and coverage',
                  'Urgent prayer request rapid response system',
                  'Global time zone coordination for continuous prayer',
                  'Digital prayer platforms and communication tools',
                  'Prayer request tracking and testimony sharing',
                  'Emergency intercession mobilization protocols'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-4 text-center">Prayer Impact</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Testimonies and measurable outcomes from our dedicated prayer ministry.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">365</div>
                  <div className="text-sm text-muted-foreground">Days of Coverage</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Intercessors</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">Answered Prayers</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">50</div>
                  <div className="text-sm text-muted-foreground">Countries Praying</div>
                </div>
              </div>
            </div>
          </div>

          {/* Spiritual Warfare Training */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Spiritual Warfare Equipping</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive training in biblical spiritual warfare principles and practical application
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Biblical Foundations',
                  description: 'Understanding our identity and authority in Christ for spiritual combat',
                  icon: Shield
                },
                {
                  title: 'Prayer Strategies',
                  description: 'Effective methods for territorial and personal breakthrough prayer',
                  icon: Zap
                },
                {
                  title: 'Discernment Training',
                  description: 'Developing spiritual sensitivity to recognize and address demonic activity',
                  icon: Globe
                },
                {
                  title: 'Protective Intercession',
                  description: 'Covering families, communities, and ministries through strategic prayer',
                  icon: Users
                }
              ].map((training) => {
                const IconComponent = training.icon;
                return (
                  <div key={training.title} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{training.title}</h3>
                    <p className="text-sm text-muted-foreground">{training.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Prayer Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-6 text-center">Weekly Prayer Schedule</h3>
              <div className="space-y-4">
                {[
                  { day: 'Monday', time: '6:00 AM', focus: 'Morning Glory Prayer' },
                  { day: 'Wednesday', time: '6:30 PM', focus: 'Healing & Restoration Service' },
                  { day: 'Friday', time: '9:00 PM', focus: 'Holy Spirit Outpouring Night' },
                  { day: 'Saturday', time: '7:00 AM', focus: 'Intercession Training' },
                  { day: 'Sunday', time: '7:00 AM', focus: 'Pre-Service Prayer' }
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                    <div className="font-semibold text-foreground">{schedule.day}</div>
                    <div className="text-sm text-muted-foreground">{schedule.time}</div>
                    <div className="text-sm text-primary font-medium">{schedule.focus}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Join Our Prayer Army</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every believer is called to be a prayer warrior. Whether you're new to intercession or an experienced 
                prayer leader, there's a place for you in our ministry. Join us in creating an atmosphere where 
                miracles happen, hearts are transformed, and God's Kingdom advances.
              </p>
              <div className="space-y-4">
                {[
                  'Beginner-friendly prayer groups',
                  'Advanced intercession teams',
                  'Online prayer platform access',
                  'Personal prayer coaching available',
                  'Global prayer network participation',
                  'Revival initiative involvement'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-divine bg-gradient-subtle p-12 text-center">
            <h2 className="text-4xl font-bold text-divine mb-6">Answer the Call to Prayer</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Prayer changes everything - circumstances, hearts, nations, and destinies. Join our prayer ministry 
              and become part of a movement that's touching heaven and transforming earth through the power of 
              Spirit-led intercession.
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
                  Join Prayer Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerMinistry;