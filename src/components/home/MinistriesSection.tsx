import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Globe, 
  Music, 
  Tv, 
  Users, 
  ArrowRight,
  BookOpen,
  Heart,
  Mic,
  Hand
} from 'lucide-react';

const MinistriesSection = () => {
  const ministries = [
    {
      title: 'BOC Global Ministers Assembly',
      description: 'Empowering Gospel Ministers worldwide through comprehensive support, training, and fellowship that nurtures spiritual, emotional, and practical capacities.',
      icon: Users,
      color: 'bg-primary',
      link: '/ministries/global-assembly'
    },
    {
      title: 'School of Ministry',
      description: 'Premier theological education and leadership development institution offering comprehensive curriculum for pastors, evangelists, and ministry leaders.',
      icon: GraduationCap,
      color: 'bg-accent',
      link: '/ministries/school'
    },
    {
      title: 'Global Outreach Ministry',
      description: 'Fulfilling the Great Commission through evangelistic campaigns, church planting, and community development projects across nations.',
      icon: Globe,
      color: 'bg-secondary',
      link: '/ministries/outreach'
    },
    {
      title: 'Music Academy',
      description: 'Training worship leaders, musicians, and vocalists to lead transformative, Spirit-filled worship experiences that draw people into God\'s presence.',
      icon: Music,
      color: 'bg-primary',
      link: '/ministries/music'
    },
    {
      title: 'BOC TV',
      description: 'Media ministry impacting the Body of Christ through biblical teaching, worship, and spiritual content for growth and development in unity.',
      icon: Tv,
      color: 'bg-accent',
      link: '/ministries/tv'
    },
    {
      title: 'Prayer and Intercession Ministry',
      description: 'Fostering a deep culture of prayer and spiritual dependence on the Holy Spirit through corporate prayer meetings, intercession groups, and 24/7 prayer chains.',
      icon: Hand,
      color: 'bg-secondary',
      link: '/ministries/prayer-intercession'
    }
  ];

  return (
    <section className="section-worship py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-divine mb-6">
            Our Ministry Arms
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Through strategic ministry initiatives, we equip leaders, reach the lost, 
            and glorify God while fulfilling our divine mandate to impact the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon;
            return (
              <div key={ministry.title} className="card-divine group hover:shadow-glow">
                <div className={`w-14 h-14 ${ministry.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {ministry.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {ministry.description}
                </p>
                
                <Button asChild variant="outline" className="group-hover:border-primary group-hover:text-primary">
                  <Link to={ministry.link}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center card-divine bg-gradient-subtle p-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-divine mb-4">
              Join Our Ministry Family
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're called to leadership, worship, outreach, or education, 
              there's a place for you in our global ministry family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-divine">
                <Link to="/ministries">
                  <Heart className="h-5 w-5 mr-2" />
                  Explore All Ministries
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/volunteer">
                  <Users className="h-5 w-5 mr-2" />
                  Volunteer With Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;