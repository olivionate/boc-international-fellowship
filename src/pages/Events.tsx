import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Global Ministers Assembly - Nairobi',
      date: '2024-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'BCIF Headquarters, Nairobi',
      description: 'Monthly gathering for Gospel Ministers featuring fellowship, inspirational teaching, workshops, and prayer.',
      category: 'Ministry',
      featured: true
    },
    {
      title: 'Sunday Worship Service',
      date: '2024-01-28',
      time: '8:00 AM & 10:30 AM',
      location: 'BCIF Main Sanctuary',
      description: 'Join us for transformative worship, biblical teaching, and community fellowship.',
      category: 'Worship',
      featured: false
    },
    {
      title: 'Wednesday Bible Study',
      date: '2024-01-31',
      time: '6:30 PM - 8:00 PM',
      location: 'Fellowship Hall',
      description: 'Deep dive into God\'s Word with interactive discussion and practical application.',
      category: 'Education',
      featured: false
    },
    {
      title: 'Friday Night Prayer',
      date: '2024-02-02',
      time: '7:00 PM - 9:00 PM',
      location: 'Prayer Room',
      description: 'Powerful intercession for revival, healing, and global missions.',
      category: 'Prayer',
      featured: false
    },
    {
      title: 'Music Academy Recital',
      date: '2024-02-10',
      time: '6:00 PM - 8:00 PM',
      location: 'BCIF Auditorium',
      description: 'Showcase of our Music Academy students\' talents and worship leadership skills.',
      category: 'Worship',
      featured: true
    },
    {
      title: 'Global Outreach Mission Trip',
      date: '2024-03-15',
      time: 'All Day',
      location: 'Uganda',
      description: 'Join our mission team for evangelistic outreach and community service in Uganda.',
      category: 'Outreach',
      featured: true
    }
  ];

  const regularSchedule = [
    { day: 'Sunday', event: 'Worship Service', time: '8:00 AM & 10:30 AM' },
    { day: 'Monday', event: 'School of Ministry Classes', time: '6:00 PM - 9:00 PM' },
    { day: 'Tuesday', event: 'Youth Ministry', time: '7:00 PM - 9:00 PM' },
    { day: 'Wednesday', event: 'Bible Study', time: '6:30 PM - 8:00 PM' },
    { day: 'Thursday', event: 'Music Academy', time: '6:00 PM - 8:00 PM' },
    { day: 'Friday', event: 'Prayer Night', time: '7:00 PM - 9:00 PM' },
    { day: 'Saturday', event: 'Community Outreach', time: '9:00 AM - 2:00 PM' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Events & Calendar</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Join us for worship, learning, fellowship, and life-changing encounters with God
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Featured Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't miss these special gatherings and ministry opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.filter(event => event.featured).map((event, index) => (
              <div key={event.title} className="card-divine group hover:shadow-glow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.category === 'Ministry' ? 'bg-primary/20 text-primary' :
                    event.category === 'Worship' ? 'bg-accent/20 text-accent' :
                    event.category === 'Outreach' ? 'bg-secondary/20 text-secondary' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {event.category}
                  </span>
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Learn More & Register
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Schedule */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Weekly Schedule</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our regular programs and services throughout the week
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {regularSchedule.map((item, index) => (
                <div key={item.day} className="card-ministry text-center">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <span className="text-primary-foreground text-xs font-bold">{item.day.substring(0, 3)}</span>
                  </div>
                  <h3 className="font-semibold text-spirit-foreground mb-2 text-sm">{item.event}</h3>
                  <p className="text-xs text-muted-foreground">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">All Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete list of our upcoming gatherings and activities
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="card-divine">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.category === 'Ministry' ? 'bg-primary/20 text-primary' :
                        event.category === 'Worship' ? 'bg-accent/20 text-accent' :
                        event.category === 'Education' ? 'bg-secondary/20 text-secondary' :
                        event.category === 'Prayer' ? 'bg-primary/20 text-primary' :
                        event.category === 'Outreach' ? 'bg-secondary/20 text-secondary' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {event.category}
                      </span>
                      {event.featured && (
                        <span className="px-2 py-1 bg-gradient-primary text-primary-foreground rounded text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button className="btn-worship">
                      Register Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-gradient py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-divine mb-6">Never Miss an Event</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stay connected with our community and be the first to know about upcoming events and special gatherings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-divine">
                <Link to="/contact">
                  <Heart className="h-5 w-5 mr-2" />
                  Join Our Community
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/live">
                  <Users className="h-5 w-5 mr-2" />
                  Watch Live Stream
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;