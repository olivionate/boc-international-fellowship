import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Play, Download, Calendar, Clock, Search, Filter, Tag } from 'lucide-react';

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sermons = [
    {
      title: 'The Call to Global Revival',
      speaker: 'Senior Pastor',
      date: '2024-01-21',
      duration: '45:30',
      series: 'Walking in Divine Purpose',
      category: 'Revival',
      description: 'Understanding our role in sparking spiritual awakening across nations and communities.',
      featured: true
    },
    {
      title: 'Equipped for Ministry',
      speaker: 'Pastor John',
      date: '2024-01-14',
      duration: '38:15',
      series: 'Ministry Foundations',
      category: 'Leadership',
      description: 'How God prepares and equips His servants for effective ministry in the Body of Christ.',
      featured: true
    },
    {
      title: 'The Power of United Prayer',
      speaker: 'Pastor Mary',
      date: '2024-01-07',
      duration: '42:20',
      series: 'Prayer That Moves Heaven',
      category: 'Prayer',
      description: 'Discovering the transformative power when believers unite in fervent prayer.',
      featured: false
    },
    {
      title: 'Biblical Authority in Modern Times',
      speaker: 'Senior Pastor',
      date: '2023-12-31',
      duration: '40:45',
      series: 'Core Values',
      category: 'Teaching',
      description: 'Why Scripture remains our ultimate authority in an ever-changing world.',
      featured: false
    },
    {
      title: 'Servant Leadership Principles',
      speaker: 'Pastor David',
      date: '2023-12-24',
      duration: '35:10',
      series: 'Leadership Excellence',
      category: 'Leadership',
      description: 'Learning to lead like Jesus through humility, service, and sacrificial love.',
      featured: false
    },
    {
      title: 'The Great Commission Today',
      speaker: 'Missionary Sarah',
      date: '2023-12-17',
      duration: '44:25',
      series: 'Global Mission',
      category: 'Evangelism',
      description: 'Making disciples in the 21st century through innovative ministry approaches.',
      featured: true
    }
  ];

  const categories = ['All', 'Revival', 'Leadership', 'Prayer', 'Teaching', 'Evangelism'];
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
                    sermon.category === 'Revival' ? 'bg-primary/20 text-primary' :
                    sermon.category === 'Leadership' ? 'bg-accent/20 text-accent' :
                    sermon.category === 'Prayer' ? 'bg-secondary/20 text-secondary' :
                    sermon.category === 'Teaching' ? 'bg-primary/20 text-primary' :
                    sermon.category === 'Evangelism' ? 'bg-accent/20 text-accent' :
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
                  <Button size="sm" className="btn-divine flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Play
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
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
                          sermon.category === 'Revival' ? 'bg-primary/20 text-primary' :
                          sermon.category === 'Leadership' ? 'bg-accent/20 text-accent' :
                          sermon.category === 'Prayer' ? 'bg-secondary/20 text-secondary' :
                          sermon.category === 'Teaching' ? 'bg-primary/20 text-primary' :
                          sermon.category === 'Evangelism' ? 'bg-accent/20 text-accent' :
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
                      <Button className="btn-worship">
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </Button>
                      <Button variant="outline">
                        <Download className="h-4 w-4" />
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
              return (
                <div key={seriesName} className="card-ministry">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Tag className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-spirit-foreground mb-3">{seriesName}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {seriesSermons.length} message{seriesSermons.length !== 1 ? 's' : ''}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Series
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