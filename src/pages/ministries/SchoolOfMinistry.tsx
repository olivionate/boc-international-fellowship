import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, Calendar, ArrowRight, BookOpen, Globe, Users } from 'lucide-react';
import heroImage from '@/assets/school-ministry-hero.jpg';
import missionImage from '@/assets/ministries/school-mission.jpg';
import visionImage from '@/assets/ministries/school-vision.jpg';

const SchoolOfMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Body of Christ School of Ministry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="hero-title text-white mb-6">
              BCIF School of Ministry
            </h1>
            <p className="hero-subtitle text-white/90 mb-8">
              Premier Theological Education for Transformational Leadership Development
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

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={missionImage} alt="African theological students" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The BCIF School of Ministry is a premier institution dedicated to theological education and leadership 
                  development. Recognizing that effective ministry requires a deep understanding of Scripture and practical skills, 
                  the school offers a comprehensive curriculum tailored to equip pastors, evangelists, missionaries, and lay leaders 
                  for impactful service.
                </p>
              </div>
            </div>

            <div className="card-divine overflow-hidden">
              <div className="relative h-64 mb-6">
                <img src={visionImage} alt="Ministry graduates ready for leadership" className="w-full h-full object-cover rounded-t-lg" />
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold text-divine mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To raise a generation of theologically sound, spiritually mature, and practically equipped ministry leaders who 
                  will transform their churches and communities. We envision graduates who combine deep biblical knowledge with 
                  Spirit-led ministry, making lasting impact across nations.
                </p>
              </div>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Biblical Exegesis',
                description: 'Deep study of Scripture with proper interpretation methods and contextual understanding',
                icon: BookOpen,
                color: 'bg-primary'
              },
              {
                title: 'Systematic Theology',
                description: 'Comprehensive study of Christian doctrines and theological frameworks',
                icon: GraduationCap,
                color: 'bg-secondary'
              },
              {
                title: 'Pastoral Care',
                description: 'Practical training in counseling, mentorship, and spiritual guidance',
                icon: Heart,
                color: 'bg-accent'
              },
              {
                title: 'Homiletics',
                description: 'Art and science of preaching with effective communication techniques',
                icon: Users,
                color: 'bg-primary'
              },
              {
                title: 'Leadership Principles',
                description: 'Strategic leadership development for modern ministry challenges',
                icon: Globe,
                color: 'bg-secondary'
              },
              {
                title: 'Contemporary Issues',
                description: 'Applying biblical truths to current social and cultural challenges',
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

          {/* Programs Overview */}
          <div className="card-divine bg-gradient-subtle p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-divine mb-6">Academic Programs</h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive programs designed to accommodate diverse backgrounds and ministry goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Program Offerings</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Foundation Certificate Courses</h4>
                      <p className="text-muted-foreground">Designed for new believers seeking basic theological understanding</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Advanced Diplomas</h4>
                      <p className="text-muted-foreground">Comprehensive programs for those pursuing full-time ministry</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Specialized Training</h4>
                      <p className="text-muted-foreground">Focused courses on specific ministry areas and leadership roles</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-divine mb-6">Learning Approach</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Flexible Format</h4>
                      <p className="text-muted-foreground">Blending in-person classes in Nairobi with online learning platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Multicultural Environment</h4>
                      <p className="text-muted-foreground">Diverse student body including local Kenyans and international students</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Personalized Mentorship</h4>
                      <p className="text-muted-foreground">Experienced faculty providing individual guidance and spiritual formation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Spiritual Formation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-divine mb-6">Spiritual Formation Focus</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Beyond academic rigor, the school prioritizes spiritual formation, encouraging students to deepen their 
                relationship with God through prayer, worship, and mentorship. Faculty members, many of whom are seasoned 
                ministers, provide personalized guidance, ensuring that graduates are not only knowledgeable but also 
                spiritually mature and practically equipped to lead with confidence.
              </p>
              <div className="space-y-4">
                {[
                  'Daily prayer and worship sessions',
                  'Spiritual mentorship programs',
                  'Character development focus',
                  'Practical ministry experience',
                  'Leadership accountability groups'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-divine bg-gradient-subtle p-8">
              <h3 className="text-2xl font-bold text-divine mb-4 text-center">Faculty Excellence</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Learn from seasoned ministers and theological scholars who combine academic excellence with practical ministry experience.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">25+</div>
                  <div className="text-sm text-muted-foreground">Years Combined Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Expert Faculty Members</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Graduates Serving</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Countries Reached</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="card-divine bg-gradient-subtle p-12 text-center">
            <h2 className="text-4xl font-bold text-divine mb-6">Transform Your Ministry</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join a community of passionate learners and experienced mentors. Develop the theological foundation and 
              practical skills needed to make a lasting impact in your ministry calling.
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

export default SchoolOfMinistry;