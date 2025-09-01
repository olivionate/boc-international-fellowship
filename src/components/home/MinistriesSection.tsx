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

// Import ministry images
import outreachImg from '@/assets/ministry-outreach.jpg';
import musicImg from '@/assets/ministry-music.jpg';
import tvImg from '@/assets/ministry-tv.jpg';

const MinistriesSection = () => {
  const ministries = [
    {
      title: 'BOC Global Ministers Assembly',
      description: 'Empowering Gospel Ministers worldwide through comprehensive support, training, and fellowship that nurtures spiritual, emotional, and practical capacities.',
      icon: Users,
      color: 'bg-primary',
      image: '/lovable-uploads/391b9e36-116d-4102-b16b-5701261c7362.png',
      link: '/ministries/global-assembly'
    },
    {
      title: 'BOC School of Ministry',
      description: 'Premier theological education and leadership development institution offering comprehensive curriculum for pastors, evangelists, and ministry leaders.',
      icon: GraduationCap,
      color: 'bg-accent',
      image: '/lovable-uploads/67e8ca79-39ed-4fc5-b023-e65d1a4be63d.png',
      link: '/ministries/school'
    },
    {
      title: 'BOC Global Outreach Ministry',
      description: 'Fulfilling the Great Commission through evangelistic campaigns, church planting, and community development projects across nations.',
      icon: Globe,
      color: 'bg-secondary',
      image: outreachImg,
      link: '/ministries/outreach'
    },
    {
      title: 'BOC International Music Academy',
      description: 'Training worship leaders, musicians, and vocalists to lead transformative, Spirit-filled worship experiences that draw people into God\'s presence.',
      icon: Music,
      color: 'bg-primary',
      image: musicImg,
      link: '/ministries/music'
    },
    {
      title: 'BOC TV',
      description: 'Media ministry impacting the Body of Christ through biblical teaching, worship, and spiritual content for growth and development in unity.',
      icon: Tv,
      color: 'bg-accent',
      image: tvImg,
      link: '/ministries/tv'
    },
    {
      title: 'Prayer and Intercession Ministry',
      description: 'Fostering a deep culture of prayer and spiritual dependence on the Holy Spirit through corporate prayer meetings, intercession groups, and 24/7 prayer chains.',
      icon: Hand,
      color: 'bg-secondary',
      image: '/lovable-uploads/0aed0a5d-f745-4c37-aff8-5d98e2cb86cf.png',
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
              <div key={ministry.title} className="card-divine group hover:shadow-glow overflow-hidden">
                {/* Image */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                    src={ministry.image} 
                    alt={ministry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${ministry.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors px-6">
                  {ministry.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed px-6">
                  {ministry.description}
                </p>
                
                <div className="px-6 pb-6">
                  <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                    <Link to={ministry.link}>
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
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