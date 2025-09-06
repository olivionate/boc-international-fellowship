import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import leadershipImage from '@/assets/leadership-team.jpg';

const Leadership = () => {
  const leaders = [
    {
      name: "Pastors Oliver Dennis & Pastor Veronicah Dennis",
      title: "Lead Pastors",
      description: "Visionary leaders with a heart for global revival and spiritual transformation",
      image: leadershipImage,
      email: "pastor@bcif.org",
      phone: "+254 700 000 001"
    },
    {
      name: "Pastors Daniel & Shalet Murage",
      title: "General Overseers",
      description: "The spiritual covering of the ministry, providing guidance and oversight",
      image: leadershipImage,
      email: "overseers@bcif.org",
      phone: "+254 700 000 002"
    },
    {
      name: "Worship Pastor",
      title: "Director of Worship",
      description: "Leading our community in spirit-filled worship and praise",
      image: leadershipImage,
      email: "worship@bcif.org",
      phone: "+254 700 000 003"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Our Leadership Team</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Meet the faithful servants called to shepherd and guide our global fellowship
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Servant Leadership</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our leadership team embodies the humility and service of Jesus Christ, 
              committed to developing leaders who prioritize the needs of others, 
              practice integrity, and make decisions with love and wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={leader.name} className="card-divine text-center group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
                <p className="text-primary font-medium mb-3">{leader.title}</p>
                <p className="text-muted-foreground mb-6">{leader.description}</p>
                
                <div className="flex justify-center space-x-3">
                  <Button size="sm" variant="outline">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Principles */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Leadership Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The biblical principles that guide our leadership approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Servant's Heart",
                description: "Following Christ's example of serving others before self, our leaders prioritize the needs of the congregation and community."
              },
              {
                title: "Biblical Integrity",
                description: "All decisions and actions are grounded in Scripture, ensuring our leadership remains faithful to God's Word."
              },
              {
                title: "Spiritual Accountability",
                description: "Our leaders operate under mutual accountability, fostering transparency and continued spiritual growth."
              },
              {
                title: "Empowering Others",
                description: "We develop and empower emerging leaders, creating a pipeline of faithful servants for future ministry."
              }
            ].map((principle, index) => (
              <div key={principle.title} className="card-divine">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{principle.title}</h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Leadership */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="card-divine max-w-2xl mx-auto bg-gradient-subtle p-12">
            <h2 className="text-3xl font-bold text-divine mb-6">Connect with Our Leaders</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our pastoral team is here to serve you. Reach out for prayer, guidance, or pastoral care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-divine">
                <Mail className="h-5 w-5 mr-2" />
                Contact Leadership
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;