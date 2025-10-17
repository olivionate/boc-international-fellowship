import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  GraduationCap, 
  Globe, 
  Music, 
  Tv, 
  ArrowRight,
  Heart,
  BookOpen,
  Mic,
  Calendar,
  Hand
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import ministry photos
import joinGlobalAssembly from '@/assets/join-global-assembly.jpg';
import joinSchoolMinistry from '@/assets/join-school-ministry.jpg';
import joinOutreachMinistry from '@/assets/join-outreach-ministry.jpg';
import joinMusicAcademy from '@/assets/join-music-academy.jpg';
import joinTvMinistry from '@/assets/join-tv-ministry.jpg';
import joinPrayerMinistry from '@/assets/join-prayer-ministry.jpg';

const Ministries = () => {
  const mainMinistries = [
    {
      title: 'BCIF Global Ministers Assembly',
      subtitle: 'Empowering Gospel Ministers Worldwide',
      description: 'A global ministry committed to the holistic development of Gospel Ministers through comprehensive support, training, and fellowship. Our monthly gatherings across various countries create dynamic platforms for ministers to connect, learn, and grow.',
      icon: Users,
      color: 'bg-primary',
      photo: joinGlobalAssembly,
      link: '/ministries/global-ministers-assembly',
      features: [
        'Monthly global gatherings',
        'Fellowship and networking',
        'Inspirational teaching',
        'Prayer and spiritual impartation',
        'Cultural celebration'
      ]
    },
    {
      title: 'BCIF School of Ministry',
      subtitle: 'Premier Theological Education',
      description: 'A premier institution dedicated to theological education and leadership development, offering comprehensive curriculum tailored to equip pastors, evangelists, missionaries, and lay leaders for impactful service.',
      icon: GraduationCap,
      color: 'bg-accent',
      photo: joinSchoolMinistry,
      link: '/ministries/school-of-ministry',
      features: [
        'Biblical exegesis courses',
        'Systematic theology',
        'Pastoral care training',
        'Leadership principles',
        'Online learning platforms'
      ]
    },
    {
      title: 'BCIF Global Outreach Ministry',
      subtitle: 'Making Disciples of All Nations',
      description: 'Embodying our commitment to fulfilling the Great Commission through evangelistic campaigns, church planting, and community development projects that address both spiritual and material needs.',
      icon: Globe,
      color: 'bg-secondary',
      photo: joinOutreachMinistry,
      link: '/ministries/global-outreach',
      features: [
        'Evangelistic crusades',
        'Church planting initiatives',
        'Community development',
        'Cross-cultural missions',
        'Humanitarian aid'
      ]
    },
    {
      title: 'BCIF Music Academy',
      subtitle: 'Transformative Worship Training',
      description: 'Training worship leaders, musicians, and vocalists to lead Spirit-filled worship experiences that draw people into God\'s presence, blending technical excellence with spiritual sensitivity.',
      icon: Music,
      color: 'bg-primary',
      photo: joinMusicAcademy,
      link: '/ministries/music-academy',
      features: [
        'Music theory and performance',
        'Worship leadership training',
        'Instrumental proficiency',
        'African musical traditions',
        'Creative worship development'
      ]
    },
    {
      title: 'The Body of Christ TV [BOC TV]',
      subtitle: 'Media Ministry for Global Impact',
      description: 'Our media arm impacting the Body of Christ for growth and development in unity, doctrine, knowledge of scriptures, and a firm relationship with Jesus Christ through television broadcasting.',
      icon: Tv,
      color: 'bg-accent',
      photo: joinTvMinistry,
      link: '/ministries/boc-tv',
      features: [
        'Bible exposition programs',
        'Spirit concert broadcasts',
        'Christian documentaries',
        'Global partnerships',
        'Online streaming'
      ]
    },
    {
      title: 'Prayer and Intercessory Ministry',
      subtitle: 'Fostering a Culture of Prayer',
      description: 'Fostering a deep culture of prayer and spiritual dependence on the Holy Spirit through corporate prayer meetings, intercession groups, and 24/7 prayer chains that strengthen the Body of Christ.',
      icon: Hand,
      color: 'bg-secondary',
      photo: joinPrayerMinistry,
      link: '/ministries/prayer-ministry',
      features: [
        'Corporate prayer meetings',
        'Intercession groups',
        '24/7 prayer chains',
        'Spiritual warfare training',
        'Revival prayer initiatives'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Our Ministries</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Strategic ministry initiatives designed to equip leaders, reach the lost, 
            and glorify God while fulfilling our divine mandate
          </p>
        </div>
      </section>

      {/* Main Ministries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainMinistries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={ministry.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-16 h-16 ${ministry.color} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-divine">{ministry.title}</h2>
                        <p className="text-lg text-primary font-medium">{ministry.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {ministry.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {ministry.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild className="btn-divine">
                      <Link to={ministry.link}>
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="card-divine bg-gradient-subtle overflow-hidden">
                      {/* Photo Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={ministry.photo} 
                          alt={`Join ${ministry.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className={`absolute top-4 left-4 w-12 h-12 ${ministry.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 text-center">
                        <h3 className="text-xl font-bold text-foreground mb-4">Join This Ministry</h3>
                        <p className="text-muted-foreground mb-6">
                          Be part of this transformative ministry and help us impact lives globally.
                        </p>
                        <div className="space-y-3">
                          <Button asChild variant="outline" className="w-full">
                            <Link to="/give">
                              <Heart className="h-4 w-4 mr-2" />
                              Get Involved
                            </Link>
                          </Button>
                          <Button asChild variant="ghost" className="w-full">
                            <Link to="/contact">
                              <Calendar className="h-4 w-4 mr-2" />
                              Schedule Info Session
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ministry Objectives */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Our Ministry Objectives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five foundational pillars that guide our efforts to support and develop believers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'Edify', description: 'Building up ministers through sound biblical teaching and spiritual mentorship', icon: BookOpen },
              { title: 'Equip', description: 'Providing practical tools and training to enhance ministry effectiveness', icon: GraduationCap },
              { title: 'Encourage', description: 'Creating supportive environments where ministers find encouragement and camaraderie', icon: Heart },
              { title: 'Strengthen', description: 'Building resilience and spiritual fortitude to navigate ministry challenges', icon: Users },
              { title: 'Develop', description: 'Fostering leadership growth and personal development for greater impact', icon: Globe }
            ].map((objective, index) => {
              const IconComponent = objective.icon;
              return (
                <div key={objective.title} className="card-ministry text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-spirit-foreground mb-3">{objective.title}</h3>
                  <p className="text-sm text-muted-foreground">{objective.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="card-divine max-w-4xl mx-auto bg-gradient-subtle p-12">
            <h2 className="text-4xl font-bold text-divine mb-6">
              Discover Your Ministry Calling
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're called to leadership, worship, outreach, education, or media ministry, 
              there's a place for you in our global ministry family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-divine">
                <Link to="/contact">
                  <Heart className="h-5 w-5 mr-2" />
                  Find Your Place
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/events">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ministries;