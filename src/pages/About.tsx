import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Heart, Globe, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">About BCIF</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Discover our story, mission, and the divine calling that drives our global ministry
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-divine mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                The Body of Christ International Fellowship (BCIF), headquartered in the bustling capital city of Nairobi, Kenya, 
                stands as a vibrant, Christ-centered Christian church with a profound calling to impact the world. Rooted in the 
                heart of East Africa, BCIF is not merely a local congregation but a global movement with a divine mandate to edify, 
                equip, build, and mentor church ministers to fulfill their sacred calling within the Body of Christ.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Founded on the unshakable pillars of biblical truth, spiritual empowerment, and global outreach, BCIF serves as 
                a lighthouse of faith, guiding believers toward spiritual maturity and igniting transformation across nations. 
                Through its dynamic ministries and unwavering commitment to holistic ministry, BCIF is a catalyst for global revival, 
                fostering a renewed passion for Christ and His Kingdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card-divine">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-divine mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To glorify God by equipping faithful servants of Jesus Christ to edify the Body of Christ, 
                make disciples of all nations, and spark spiritual revival worldwide. This mission extends 
                to every corner of the globe, reflecting the Great Commission to go and make disciples of all nations.
              </p>
            </div>

            <div className="card-divine">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-divine mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where ministers—pastors, evangelists, teachers, and worship leaders—are spiritually mature, 
                theologically grounded, and practically equipped to lead vibrant, impactful ministries that transform 
                communities and nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The foundation of our identity and the principles that guide our ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Biblical Authority',
                description: 'We believe the Bible is the inspired, infallible Word of God, serving as our ultimate authority for faith and practice.',
                icon: BookOpen
              },
              {
                title: 'Christ-Centered Worship',
                description: 'Creating an environment where believers encounter God through dynamic, Spirit-led worship and fervent prayer.',
                icon: Heart
              },
              {
                title: 'Servant Leadership',
                description: 'Developing leaders who emulate the humility and service of Jesus Christ, leading with integrity and love.',
                icon: Users
              },
              {
                title: 'Global Mission',
                description: 'Fulfilling the Great Commission by reaching all nations with the Gospel through cross-cultural partnerships.',
                icon: Globe
              },
              {
                title: 'Holistic Ministry',
                description: 'Addressing spiritual, emotional, and practical needs, empowering individuals to thrive in all areas of life.',
                icon: Heart
              },
              {
                title: 'Excellence in Ministry',
                description: 'Pursuing high standards in all endeavors to honor God and reflect His glory through quality and intentionality.',
                icon: BookOpen
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="card-ministry">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-spirit-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-divine mb-6">Join Our Global Family</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be part of a movement that's transforming lives and communities across the globe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-divine">
              <Link to="/contact">
                <Users className="h-5 w-5 mr-2" />
                Get Connected
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/ministries">
                Explore Ministries
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;