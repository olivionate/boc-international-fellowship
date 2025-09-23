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

const SermonDetail = () => {
  const { sermonSlug } = useParams();
  
  // Complete sermon data
  const sermons = [
    // Walking in Divine Purpose Series
    {
      slug: 'discovering-your-divine-assignment',
      title: 'Discovering Your Divine Assignment',
      speaker: 'Pastor Oliver Dennis, Senior Pastor - BCIF',
      date: '2024-01-07',
      duration: 'Read Time: 15 min',
      series: 'Walking in Divine Purpose',
      category: 'Purpose',
      description: 'Understanding how God has uniquely designed each believer for specific Kingdom purposes.',
      content: `"For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope." - Jeremiah 29:11 (NKJV)

God has a specific plan and purpose for every believer. In this foundational message, we explore how to discover your divine assignment through prayer, Scripture study, and spiritual discernment.

# The Foundation of Divine Purpose

Every believer was created with a unique purpose that aligns with God's eternal plan. This purpose is not arbitrary or random, but carefully designed by our Heavenly Father who knows us intimately.

"But seek first the kingdom of God and His righteousness, and all these things shall be added to you." - Matthew 6:33 (NKJV)

When we align our lives with God's purposes, we find true fulfillment and effectiveness in ministry and life. The key is to seek first His kingdom, allowing His priorities to become our priorities.

# Three Keys to Discovering Your Assignment

## 1. Prayer and Intimacy with God
"Call to Me, and I will answer you, and show you great and mighty things, which you do not know." - Jeremiah 33:3 (NKJV)

Our divine assignment is revealed through intimate relationship with God. As we spend time in His presence, He reveals His heart and purposes for our lives.

## 2. Scripture Study and Meditation
"Your word is a lamp to my feet And a light to my path." - Psalm 119:105 (NKJV)

God's Word illuminates His will for our lives. Through consistent study and meditation on Scripture, we gain understanding of His character and calling.

## 3. Spiritual Discernment
"But when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come." - John 16:13 (NKJV)

The Holy Spirit guides us into understanding our purpose and calling. Through spiritual discernment, we can distinguish God's voice from other influences.

# Walking in Your Assignment

Once we discover our divine assignment, we must walk in it with faith and obedience. This requires:

- **Courage** to step out of our comfort zones
- **Faith** to trust God's timing and methods  
- **Perseverance** to continue when challenges arise
- **Humility** to depend on God's strength rather than our own

"I can do all things through Christ who strengthens me." - Philippians 4:13 (NKJV)

# Conclusion

Your divine assignment is unique and essential to God's kingdom purposes. As you seek Him through prayer, study His Word, and listen to His Spirit, He will reveal the specific ways He wants to use your life for His glory.

Remember, God's thoughts toward you are thoughts of peace and hope. Trust Him to guide you into the fullness of your divine assignment.`,
      image: walkingDivinePurposeImg,
      featured: true
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
      content: `"For we walk by faith, not by sight." - 2 Corinthians 5:7 (NKJV)

True faith requires us to move beyond what our physical senses tell us and trust in God's perfect timing and wisdom.

# The Nature of Faith

Faith is not merely believing that God exists, but trusting in His character and promises even when circumstances seem contrary to His word.

"Now faith is the substance of things hoped for, the evidence of things not seen." - Hebrews 11:1 (NKJV)

Faith gives substance to our hopes and provides evidence for things we cannot yet see with our natural eyes.

# Trusting God's Perspective

"For My thoughts are not your thoughts, Nor are your ways My ways," says the Lord. "For as the heavens are higher than the earth, So are My ways higher than your ways, And My thoughts than your thoughts." - Isaiah 55:8-9 (NKJV)

God's perspective is infinitely higher than ours. What may seem like delays or obstacles to us are often part of His perfect plan for our good and His glory.

"Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths." - Proverbs 3:5-6 (NKJV)

When we surrender our limited perspective and trust God's infinite wisdom, we position ourselves to walk in our divine purpose.

# Examples of Faith from Scripture

## Abraham's Faith
"By faith Abraham obeyed when he was called to go out to the place which he would receive as an inheritance. And he went out, not knowing where he was going." - Hebrews 11:8 (NKJV)

Abraham's willingness to leave his comfort zone without knowing his destination demonstrates the essence of walking by faith.

## Moses' Faith
"By faith Moses, when he became of age, refused to be called the son of Pharaoh's daughter, choosing rather to suffer affliction with the people of God than to enjoy the passing pleasures of sin." - Hebrews 11:24-25 (NKJV)

Moses chose God's purposes over worldly comfort and position, trusting in eternal rewards rather than temporary pleasures.

# Practical Steps for Walking by Faith

1. **Study God's Character** - Understanding who God is builds confidence in His faithfulness
2. **Remember Past Faithfulness** - Recall how God has been faithful in previous situations
3. **Speak God's Promises** - Declare His word over your circumstances
4. **Take Action Steps** - Faith without works is dead; act on what God has shown you
5. **Surround Yourself with Faith** - Fellowship with other believers who encourage faith

# Overcoming Doubt

Doubt is natural but doesn't have to be permanent. When doubt arises:

- Return to God's promises in Scripture
- Pray for increased faith
- Seek counsel from mature believers
- Focus on God's character rather than circumstances

"Immediately the father of the child cried out and said with tears, 'Lord, I believe; help my unbelief!'" - Mark 9:24 (NKJV)

# Conclusion

Walking by faith, not sight, is essential for fulfilling our divine purpose. As we learn to trust God's perspective above our own understanding, we position ourselves to experience His miraculous provision and guidance.

Choose today to walk by faith, trusting that God's ways are higher than your ways, and His thoughts higher than your thoughts.`,
      image: walkingDivinePurposeImg,
      featured: false
    }
    // Add more sermons as needed...
  ];

  const sermon = sermons.find(s => s.slug === sermonSlug);

  if (!sermon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Sermon Not Found</h1>
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={sermon.image} 
            alt={sermon.series}
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
            
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                sermon.category === 'Purpose' ? 'bg-primary/20 text-primary' :
                sermon.category === 'Faith' ? 'bg-accent/20 text-accent' :
                'bg-muted text-muted-foreground'
              }`}>
                {sermon.category}
              </span>
            </div>
            
            <h1 className="hero-title text-white mb-4">{sermon.title}</h1>
            <p className="text-xl text-white/90 mb-6">{sermon.description}</p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(sermon.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {sermon.duration}
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                {sermon.series}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Author Info */}
            <div className="mb-12 p-6 card-divine">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Message by</h3>
                  <p className="text-primary font-medium">{sermon.speaker}</p>
                </div>
              </div>
            </div>

            {/* Sermon Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">
                {sermon.content}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-subtle rounded-lg text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Continue Your Spiritual Journey</h3>
              <p className="text-muted-foreground mb-6">
                Explore more messages from the {sermon.series} series and deepen your understanding of God's Word.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/sermons/series/${sermon.series.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button className="btn-divine">
                    <Tag className="h-4 w-4 mr-2" />
                    View Full Series
                  </Button>
                </Link>
                <Link to="/sermons">
                  <Button variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    All Sermons
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SermonDetail;