import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, BookOpen, Tag } from 'lucide-react';

// Import sermon series images
import walkingDivinePurposeImg from '@/assets/sermons/walking-divine-purpose.jpg';
import ministryFoundationsImg from '@/assets/sermons/ministry-foundations.jpg';
import prayerMovesHeavenImg from '@/assets/sermons/prayer-moves-heaven.jpg';
import coreValuesImg from '@/assets/sermons/core-values.jpg';
import leadershipExcellenceImg from '@/assets/sermons/leadership-excellence.jpg';
import globalMissionImg from '@/assets/sermons/global-mission.jpg';

const SeriesList = () => {
  const { seriesSlug } = useParams();
  
  // Convert slug back to series name
  const seriesName = seriesSlug?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  // Complete sermon data for all series
  const allSermons = [
    // Walking in Divine Purpose Series (20 sermons)
    {
      slug: 'discovering-your-divine-assignment',
      title: 'Discovering Your Divine Assignment',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-07',
      duration: 'Read Time: 15 min',
      series: 'Walking in Divine Purpose',
      category: 'Purpose',
      description: 'Understanding how God has uniquely designed each believer for specific Kingdom purposes.',
      image: walkingDivinePurposeImg
    },
    {
      slug: 'walking-by-faith-not-sight',
      title: 'Walking by Faith, Not Sight',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-14',
      duration: 'Read Time: 18 min',
      series: 'Walking in Divine Purpose',
      category: 'Faith',
      description: 'Learning to trust God completely when His ways seem unclear to our natural understanding.',
      image: walkingDivinePurposeImg
    },
    {
      slug: 'overcoming-fear-and-doubt',
      title: 'Overcoming Fear and Doubt',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-21',
      duration: 'Read Time: 16 min',
      series: 'Walking in Divine Purpose',
      category: 'Faith',
      description: 'Conquering the internal barriers that prevent us from stepping into God\'s calling.',
      image: walkingDivinePurposeImg
    },
    {
      slug: 'the-power-of-prophetic-vision',
      title: 'The Power of Prophetic Vision',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-28',
      duration: 'Read Time: 20 min',
      series: 'Walking in Divine Purpose',
      category: 'Vision',
      description: 'Understanding how God reveals His purposes through prophetic insight and spiritual vision.',
      image: walkingDivinePurposeImg
    },
    {
      slug: 'seasons-of-preparation',
      title: 'Seasons of Preparation',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-02-04',
      duration: 'Read Time: 17 min',
      series: 'Walking in Divine Purpose',
      category: 'Preparation',
      description: 'Embracing the wilderness seasons that God uses to prepare us for greater assignments.',
      image: walkingDivinePurposeImg
    },
    {
      slug: 'divine-timing-and-patience',
      title: 'Divine Timing and Patience',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-02-11',
      duration: 'Read Time: 19 min',
      series: 'Walking in Divine Purpose',
      category: 'Timing',
      description: 'Learning to wait on God\'s perfect timing while remaining actively faithful.',
      image: walkingDivinePurposeImg
    },

    // Ministry Foundations Series
    {
      slug: 'called-to-serve',
      title: 'Called to Serve',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-03-03',
      duration: 'Read Time: 16 min',
      series: 'Ministry Foundations',
      category: 'Calling',
      description: 'Understanding the heart of ministry as service to God and His people.',
      image: ministryFoundationsImg
    },
    {
      slug: 'the-foundation-of-prayer',
      title: 'The Foundation of Prayer',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-03-10',
      duration: 'Read Time: 18 min',
      series: 'Ministry Foundations',
      category: 'Prayer',
      description: 'Establishing prayer as the cornerstone of all effective ministry.',
      image: ministryFoundationsImg
    },

    // Prayer That Moves Heaven Series
    {
      slug: 'the-power-of-agreement',
      title: 'The Power of Agreement',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-04-07',
      duration: 'Read Time: 17 min',
      series: 'Prayer That Moves Heaven',
      category: 'Prayer',
      description: 'Discovering the supernatural power released when believers unite in prayer.',
      image: prayerMovesHeavenImg
    },

    // Core Values Series
    {
      slug: 'the-authority-of-scripture',
      title: 'The Authority of Scripture',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-05-05',
      duration: 'Read Time: 20 min',
      series: 'Core Values',
      category: 'Scripture',
      description: 'Establishing the Bible as our ultimate authority in all matters of faith and practice.',
      image: coreValuesImg
    },

    // Leadership Excellence Series
    {
      slug: 'leading-like-jesus',
      title: 'Leading Like Jesus',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-06-02',
      duration: 'Read Time: 19 min',
      series: 'Leadership Excellence',
      category: 'Leadership',
      description: 'Applying Christ\'s leadership principles in modern ministry contexts.',
      image: leadershipExcellenceImg
    },

    // Global Mission Series
    {
      slug: 'the-great-commission-mandate',
      title: 'The Great Commission Mandate',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-07-07',
      duration: 'Read Time: 18 min',
      series: 'Global Mission',
      category: 'Mission',
      description: 'Understanding our calling to make disciples of all nations in the 21st century.',
      image: globalMissionImg
    }
  ];

  const seriesSermons = allSermons.filter(sermon => 
    sermon.series.toLowerCase().replace(/\s+/g, '-') === seriesSlug
  );

  const seriesImage = seriesName === 'Walking In Divine Purpose' ? walkingDivinePurposeImg :
                     seriesName === 'Ministry Foundations' ? ministryFoundationsImg :
                     seriesName === 'Prayer That Moves Heaven' ? prayerMovesHeavenImg :
                     seriesName === 'Core Values' ? coreValuesImg :
                     seriesName === 'Leadership Excellence' ? leadershipExcellenceImg :
                     seriesName === 'Global Mission' ? globalMissionImg :
                     walkingDivinePurposeImg;

  if (seriesSermons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Series Not Found</h1>
          <Link to="/sermons">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sermons
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const seriesDescriptions = {
    'Walking In Divine Purpose': 'Discover God\'s unique plan and calling for your life through powerful biblical teachings that will transform your understanding of divine purpose.',
    'Ministry Foundations': 'Build strong foundations for effective ministry through servant leadership, prayer, and biblical principles that create lasting impact.',
    'Prayer That Moves Heaven': 'Learn the principles of powerful prayer that brings breakthrough and transformation in your personal life and community.',
    'Core Values': 'Establish biblical authority and core values that anchor your faith in truth and provide unwavering foundation in changing times.',
    'Leadership Excellence': 'Develop Christ-like leadership skills that impact communities and nations through servant leadership and godly character.',
    'Global Mission': 'Embrace the Great Commission mandate to reach all nations for Christ through strategic evangelism and discipleship.'
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={seriesImage} 
            alt={seriesName}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/sermons" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sermons
            </Link>
            
            <h1 className="hero-title text-white mb-4">{seriesName}</h1>
            <p className="text-xl text-white/90 mb-6">
              {seriesDescriptions[seriesName as keyof typeof seriesDescriptions]}
            </p>
            
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
              <Tag className="h-4 w-4 mr-2" />
              {seriesSermons.length} message{seriesSermons.length !== 1 ? 's' : ''} in this series
            </div>
          </div>
        </div>
      </section>

      {/* Series Messages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-divine mb-6">Messages in This Series</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Follow the complete {seriesName} series for comprehensive spiritual growth and understanding
              </p>
            </div>

            <div className="space-y-6">
              {seriesSermons.map((sermon, index) => (
                <div key={sermon.slug} className="card-divine hover:shadow-glow transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold text-lg">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            sermon.category === 'Purpose' ? 'bg-primary/20 text-primary' :
                            sermon.category === 'Faith' ? 'bg-accent/20 text-accent' :
                            sermon.category === 'Vision' ? 'bg-secondary/20 text-secondary' :
                            sermon.category === 'Preparation' ? 'bg-primary/20 text-primary' :
                            sermon.category === 'Timing' ? 'bg-accent/20 text-accent' :
                            sermon.category === 'Calling' ? 'bg-primary/20 text-primary' :
                            sermon.category === 'Prayer' ? 'bg-secondary/20 text-secondary' :
                            sermon.category === 'Scripture' ? 'bg-primary/20 text-primary' :
                            sermon.category === 'Leadership' ? 'bg-accent/20 text-accent' :
                            sermon.category === 'Mission' ? 'bg-primary/20 text-primary' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {sermon.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2 hover:text-primary transition-colors">
                          {sermon.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">{sermon.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span>By {sermon.speaker}</span>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(sermon.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {sermon.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex gap-2">
                      <Link to={`/sermons/${sermon.slug}`}>
                        <Button className="btn-worship">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read Message
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-subtle rounded-lg text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Continue Your Spiritual Journey</h3>
              <p className="text-muted-foreground mb-6">
                Explore other sermon series and deepen your understanding of God's Word through our comprehensive message library.
              </p>
              <Link to="/sermons">
                <Button className="btn-divine">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Explore All Sermons
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeriesList;