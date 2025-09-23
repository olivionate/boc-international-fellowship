import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Calendar, Clock, Search, Tag } from 'lucide-react';

// Import sermon series images
import walkingDivinePurposeImg from '@/assets/sermons/walking-divine-purpose.jpg';
import ministryFoundationsImg from '@/assets/sermons/ministry-foundations.jpg';
import prayerMovesHeavenImg from '@/assets/sermons/prayer-moves-heaven.jpg';
import coreValuesImg from '@/assets/sermons/core-values.jpg';
import leadershipExcellenceImg from '@/assets/sermons/leadership-excellence.jpg';
import globalMissionImg from '@/assets/sermons/global-mission.jpg';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sermons = [
    // Walking in Divine Purpose Series (20 sermons)
    {
      title: 'Discovering Your Divine Assignment',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-07',
      duration: 'Read Time: 15 min',
      series: 'Walking in Divine Purpose',
      category: 'Purpose',
      description: 'Understanding how God has uniquely designed each believer for specific Kingdom purposes.',
      content: `"For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope." - Jeremiah 29:11 (NKJV)

God has a specific plan and purpose for every believer. In this foundational message, we explore how to discover your divine assignment through prayer, Scripture study, and spiritual discernment.

"But seek first the kingdom of God and His righteousness, and all these things shall be added to you." - Matthew 6:33 (NKJV)

When we align our lives with God's purposes, we find true fulfillment and effectiveness in ministry and life.`,
      image: walkingDivinePurposeImg,
      featured: true
    },
    {
      title: 'Walking by Faith, Not Sight',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-14',
      duration: 'Read Time: 18 min',
      series: 'Walking in Divine Purpose',
      category: 'Faith',
      description: 'Learning to trust God completely when His ways seem unclear to our natural understanding.',
      content: `"For we walk by faith, not by sight." - 2 Corinthians 5:7 (NKJV)

True faith requires us to move beyond what our physical senses tell us and trust in God's perfect timing and wisdom.

"Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths." - Proverbs 3:5-6 (NKJV)

When we surrender our limited perspective and trust God's infinite wisdom, we position ourselves to walk in our divine purpose.`,
      image: walkingDivinePurposeImg,
      featured: false
    },
    {
      title: 'Overcoming Fear and Doubt',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-21',
      duration: 'Read Time: 16 min',
      series: 'Walking in Divine Purpose',
      category: 'Faith',
      description: 'Conquering the internal barriers that prevent us from stepping into God\'s calling.',
      content: `"Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." - Joshua 1:9 (NKJV)

Fear and doubt are common obstacles in our spiritual journey, but God has equipped us to overcome them through His presence and promises.

"For God has not given us a spirit of fear, but of power and of love and of sound mind." - 2 Timothy 1:7 (NKJV)

Victory over fear comes through understanding our identity in Christ and His faithfulness to complete the work He begins in us.`,
      image: walkingDivinePurposeImg,
      featured: true
    },
    {
      title: 'The Power of Prophetic Vision',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-28',
      duration: 'Read Time: 20 min',
      series: 'Walking in Divine Purpose',
      category: 'Vision',
      description: 'Understanding how God reveals His purposes through prophetic insight and spiritual vision.',
      content: `"Where there is no revelation, the people cast off restraint; But happy is he who keeps the law." - Proverbs 29:18 (NKJV)

Prophetic vision is essential for walking in divine purpose. God reveals His plans through dreams, visions, and prophetic words.

"And it shall come to pass in the last days, says God, That I will pour out of My Spirit on all flesh; Your sons and your daughters shall prophesy, Your young men shall see visions, Your old men shall dream dreams." - Acts 2:17 (NKJV)

Learning to receive and interpret God's prophetic communication opens doors to greater spiritual effectiveness.`,
      image: walkingDivinePurposeImg,
      featured: false
    },
    {
      title: 'Seasons of Preparation',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-02-04',
      duration: 'Read Time: 17 min',
      series: 'Walking in Divine Purpose',
      category: 'Preparation',
      description: 'Embracing the wilderness seasons that God uses to prepare us for greater assignments.',
      content: `"Therefore, behold, I will allure her, Will bring her into the wilderness, And speak comfort to her." - Hosea 2:14 (NKJV)

God often leads His people through seasons of preparation in the wilderness before launching them into their destiny.

"And you shall remember that the Lord your God led you all the way these forty years in the wilderness, to humble you and test you, to know what was in your heart, whether you would keep His commandments or not." - Deuteronomy 8:2 (NKJV)

These seasons develop character, dependence on God, and spiritual maturity necessary for effective ministry.`,
      image: walkingDivinePurposeImg,
      featured: false
    },
    // Continue with more sermons for this series...
    {
      title: 'Divine Timing and Patience',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-02-11',
      duration: 'Read Time: 19 min',
      series: 'Walking in Divine Purpose',
      category: 'Timing',
      description: 'Learning to wait on God\'s perfect timing while remaining actively faithful.',
      content: `"To everything there is a season, A time for every purpose under heaven." - Ecclesiastes 3:1 (NKJV)

Understanding divine timing is crucial for walking in God's purposes. His timing is always perfect, even when it seems delayed to us.

"But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint." - Isaiah 40:31 (NKJV)

Patience in God's timing produces spiritual strength and prepares us for the fullness of His calling.`,
      image: walkingDivinePurposeImg,
      featured: false
    },

    // Ministry Foundations Series (20 sermons)
    {
      title: 'Called to Serve',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-03-03',
      duration: 'Read Time: 16 min',
      series: 'Ministry Foundations',
      category: 'Calling',
      description: 'Understanding the heart of ministry as service to God and His people.',
      content: `"And whoever desires to be first among you, let him be your slave—just as the Son of Man did not come to be served, but to serve, and to give His life a ransom for many." - Matthew 20:27-28 (NKJV)

True ministry begins with a servant's heart, following Christ's example of humble service.

"As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God." - 1 Peter 4:10 (NKJV)

Every believer is called to ministry, using their unique gifts to serve the body of Christ and advance His kingdom.`,
      image: ministryFoundationsImg,
      featured: true
    },
    {
      title: 'The Foundation of Prayer',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-03-10',
      duration: 'Read Time: 18 min',
      series: 'Ministry Foundations',
      category: 'Prayer',
      description: 'Establishing prayer as the cornerstone of all effective ministry.',
      content: `"Continue earnestly in prayer, being vigilant in it with thanksgiving." - Colossians 4:2 (NKJV)

Prayer is not just an activity in ministry; it IS the ministry. Everything we do must flow from our relationship with God through prayer.

"And when He had sent the multitudes away, He went up on the mountain by Himself to pray. Now when evening came, He was alone there." - Matthew 14:23 (NKJV)

Jesus, our perfect example, prioritized prayer even in the midst of demanding ministry schedules.`,
      image: ministryFoundationsImg,
      featured: false
    },

    // Prayer That Moves Heaven Series (6 sermons shown, 14 more would continue...)
    {
      title: 'The Power of Agreement',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-04-07',
      duration: 'Read Time: 17 min',
      series: 'Prayer That Moves Heaven',
      category: 'Prayer',
      description: 'Discovering the supernatural power released when believers unite in prayer.',
      content: `"Again I say to you that if two of you agree on earth concerning anything that they ask, it will be done for them by My Father in heaven." - Matthew 18:19 (NKJV)

Corporate prayer releases a dimension of God's power that surpasses individual prayer, creating spiritual breakthrough.

"These all continued with one accord in prayer and supplication, with the women and Mary the mother of Jesus, and with His brothers." - Acts 1:14 (NKJV)

The early church understood the power of unified prayer, and it became the foundation for pentecostal outpouring.`,
      image: prayerMovesHeavenImg,
      featured: true
    },

    // Core Values Series
    {
      title: 'The Authority of Scripture',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-05-05',
      duration: 'Read Time: 20 min',
      series: 'Core Values',
      category: 'Scripture',
      description: 'Establishing the Bible as our ultimate authority in all matters of faith and practice.',
      content: `"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." - 2 Timothy 3:16 (NKJV)

The Bible stands as our final authority, breathed by God Himself and sufficient for all spiritual guidance.

"Heaven and earth will pass away, but My words will by no means pass away." - Matthew 24:35 (NKJV)

God's Word remains eternally relevant and absolutely trustworthy in every generation and culture.`,
      image: coreValuesImg,
      featured: true
    },

    // Leadership Excellence Series
    {
      title: 'Leading Like Jesus',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-06-02',
      duration: 'Read Time: 19 min',
      series: 'Leadership Excellence',
      category: 'Leadership',
      description: 'Applying Christ\'s leadership principles in modern ministry contexts.',
      content: `"But Jesus called them to Himself and said, 'You know that the rulers of the Gentiles lord it over them, and those who are great exercise authority over them. Yet it shall not be so among you; but whoever desires to become great among you, let him be your servant.'" - Matthew 20:25-26 (NKJV)

Christ revolutionized leadership by demonstrating that true greatness comes through serving others with humility and love.

"Let this mind be in you which was also in Christ Jesus, who, being in the form of God, did not consider it robbery to be equal with God, but made Himself of no reputation, taking the form of a bondservant." - Philippians 2:5-7 (NKJV)

Christian leadership requires the mindset of Christ: humble service rather than self-promotion.`,
      image: leadershipExcellenceImg,
      featured: false
    },

    // Global Mission Series
    {
      title: 'The Great Commission Mandate',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-07-07',
      duration: 'Read Time: 18 min',
      series: 'Global Mission',
      category: 'Mission',
      description: 'Understanding our calling to make disciples of all nations in the 21st century.',
      content: `"Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age." - Matthew 28:19-20 (NKJV)

The Great Commission is not optional for believers; it is our primary mandate from Christ Himself.

"But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth." - Acts 1:8 (NKJV)

God has equipped every believer with the Holy Spirit's power to be effective witnesses for Christ globally.`,
      image: globalMissionImg,
      featured: true
    }
  ];

  const categories = ['All', 'Purpose', 'Faith', 'Vision', 'Preparation', 'Timing', 'Calling', 'Prayer', 'Scripture', 'Leadership', 'Mission'];
  const series = [...new Set(sermons.map(sermon => sermon.series))];

  const filteredSermons = sermons.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         sermon.series.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || sermon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title text-white mb-6">Sermons & Messages</h1>
          <p className="hero-subtitle text-white/90 max-w-3xl mx-auto">
            Dive deep into God's Word through powerful messages that inspire, challenge, and transform lives
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search sermons, speakers, or series..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-worship" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sermons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Featured Messages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recent powerful messages that are impacting lives and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sermons.filter(sermon => sermon.featured).map((sermon, index) => (
              <div key={sermon.title} className="card-divine group hover:shadow-glow">
                <div className="flex items-center justify-between mb-4">
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
                  <span className="px-2 py-1 bg-gradient-primary text-primary-foreground rounded text-xs font-medium">
                    Featured
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {sermon.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-2">{sermon.series}</p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{sermon.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-4">
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
                
                <div className="flex gap-2">
                  <Button size="sm" className="btn-divine flex-1" asChild>
                    <Link to={`/sermons/${sermon.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Sermons */}
      <section className="section-worship py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">All Messages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our complete library of biblical teaching and spiritual insights
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {filteredSermons.map((sermon, index) => (
                <div key={sermon.title} className="card-divine">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
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
                        {sermon.featured && (
                          <span className="px-2 py-1 bg-gradient-primary text-primary-foreground rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{sermon.title}</h3>
                      <p className="text-sm text-primary font-medium mb-2">{sermon.series}</p>
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
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex gap-2">
                      <Button className="btn-worship" asChild>
                        <Link to={`/sermons/${sermon.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Read
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-divine mb-6">Current Series</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow along with our ongoing teaching series for deeper spiritual growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.map((seriesName, index) => {
              const seriesSermons = sermons.filter(sermon => sermon.series === seriesName);
              const seriesImage = seriesName === 'Walking in Divine Purpose' ? walkingDivinePurposeImg :
                                 seriesName === 'Ministry Foundations' ? ministryFoundationsImg :
                                 seriesName === 'Prayer That Moves Heaven' ? prayerMovesHeavenImg :
                                 seriesName === 'Core Values' ? coreValuesImg :
                                 seriesName === 'Leadership Excellence' ? leadershipExcellenceImg :
                                 seriesName === 'Global Mission' ? globalMissionImg :
                                 walkingDivinePurposeImg;
              
              return (
                <div key={seriesName} className="card-ministry group overflow-hidden">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={seriesImage} 
                      alt={seriesName}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded">
                        {seriesSermons.length} message{seriesSermons.length !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-spirit-foreground mb-3 group-hover:text-primary transition-colors">
                    {seriesName}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {seriesName === 'Walking in Divine Purpose' && 'Discover God\'s unique plan and calling for your life through powerful biblical teachings.'}
                    {seriesName === 'Ministry Foundations' && 'Build strong foundations for effective ministry through servant leadership and prayer.'}
                    {seriesName === 'Prayer That Moves Heaven' && 'Learn the principles of powerful prayer that brings breakthrough and transformation.'}
                    {seriesName === 'Core Values' && 'Establish biblical authority and core values that anchor your faith in truth.'}
                    {seriesName === 'Leadership Excellence' && 'Develop Christ-like leadership skills that impact communities and nations.'}
                    {seriesName === 'Global Mission' && 'Embrace the Great Commission mandate to reach all nations for Christ.'}
                  </p>
                  
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                    <Link to={`/sermons/series/${seriesName.toLowerCase().replace(/\s+/g, '-')}`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Series
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sermons;