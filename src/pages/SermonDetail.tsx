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
  
  // Complete sermon data with all series
  const sermons = [
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
      content: `"For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope." - Jeremiah 29:11 (NKJV)

God has a specific plan and purpose for every believer. In this foundational message, we explore how to discover your divine assignment through prayer, Scripture study, and spiritual discernment.

**The Foundation of Divine Purpose**

Every believer was created with a unique purpose that aligns with God's eternal plan. This purpose is not arbitrary or random, but carefully designed by our Heavenly Father who knows us intimately.

"But seek first the kingdom of God and His righteousness, and all these things shall be added to you." - Matthew 6:33 (NKJV)

When we align our lives with God's purposes, we find true fulfillment and effectiveness in ministry and life. The key is to seek first His kingdom, allowing His priorities to become our priorities.

**Three Keys to Discovering Your Assignment**

**1. Prayer and Intimacy with God**
"Call to Me, and I will answer you, and show you great and mighty things, which you do not know." - Jeremiah 33:3 (NKJV)

Our divine assignment is revealed through intimate relationship with God. As we spend time in His presence, He reveals His heart and purposes for our lives.

**2. Scripture Study and Meditation**
"Your word is a lamp to my feet And a light to my path." - Psalm 119:105 (NKJV)

God's Word illuminates His will for our lives. Through consistent study and meditation on Scripture, we gain understanding of His character and calling.

**3. Spiritual Discernment**
"But when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come." - John 16:13 (NKJV)

The Holy Spirit guides us into understanding our purpose and calling. Through spiritual discernment, we can distinguish God's voice from other influences.

**Walking in Your Assignment**

Once we discover our divine assignment, we must walk in it with faith and obedience. This requires:

- **Courage** to step out of our comfort zones
- **Faith** to trust God's timing and methods  
- **Perseverance** to continue when challenges arise
- **Humility** to depend on God's strength rather than our own

"I can do all things through Christ who strengthens me." - Philippians 4:13 (NKJV)

**Conclusion**

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

**The Nature of Faith**

Faith is not merely believing that God exists, but trusting in His character and promises even when circumstances seem contrary to His word.

"Now faith is the substance of things hoped for, the evidence of things not seen." - Hebrews 11:1 (NKJV)

Faith gives substance to our hopes and provides evidence for things we cannot yet see with our natural eyes.

**Trusting God's Perspective**

"For My thoughts are not your thoughts, Nor are your ways My ways," says the Lord. "For as the heavens are higher than the earth, So are My ways higher than your ways, And My thoughts than your thoughts." - Isaiah 55:8-9 (NKJV)

God's perspective is infinitely higher than ours. What may seem like delays or obstacles to us are often part of His perfect plan for our good and His glory.

"Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths." - Proverbs 3:5-6 (NKJV)

When we surrender our limited perspective and trust God's infinite wisdom, we position ourselves to walk in our divine purpose.

**Examples of Faith from Scripture**

**Abraham's Faith**
"By faith Abraham obeyed when he was called to go out to the place which he would receive as an inheritance. And he went out, not knowing where he was going." - Hebrews 11:8 (NKJV)

Abraham's willingness to leave his comfort zone without knowing his destination demonstrates the essence of walking by faith.

**Moses' Faith**
"By faith Moses, when he became of age, refused to be called the son of Pharaoh's daughter, choosing rather to suffer affliction with the people of God than to enjoy the passing pleasures of sin." - Hebrews 11:24-25 (NKJV)

Moses chose God's purposes over worldly comfort and position, trusting in eternal rewards rather than temporary pleasures.

**Practical Steps for Walking by Faith**

1. **Study God's Character** - Understanding who God is builds confidence in His faithfulness
2. **Remember Past Faithfulness** - Recall how God has been faithful in previous situations
3. **Speak God's Promises** - Declare His word over your circumstances
4. **Take Action Steps** - Faith without works is dead; act on what God has shown you
5. **Surround Yourself with Faith** - Fellowship with other believers who encourage faith

**Overcoming Doubt**

Doubt is natural but doesn't have to be permanent. When doubt arises:

- Return to God's promises in Scripture
- Pray for increased faith
- Seek counsel from mature believers
- Focus on God's character rather than circumstances

"Immediately the father of the child cried out and said with tears, 'Lord, I believe; help my unbelief!'" - Mark 9:24 (NKJV)

**Conclusion**

Walking by faith, not sight, is essential for fulfilling our divine purpose. As we learn to trust God's perspective above our own understanding, we position ourselves to experience His miraculous provision and guidance.

Choose today to walk by faith, trusting that God's ways are higher than your ways, and His thoughts higher than your thoughts.`,
      image: walkingDivinePurposeImg,
      featured: false
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
      content: `"Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." - Joshua 1:9 (NKJV)

Fear and doubt are common obstacles in our spiritual journey, but God has equipped us to overcome them through His presence and promises.

**Understanding Fear and Doubt**

"For God has not given us a spirit of fear, but of power and of love and of sound mind." - 2 Timothy 1:7 (NKJV)

Fear is not from God. It is a tool the enemy uses to paralyze us and prevent us from walking in our divine calling. God has given us power, love, and sound mind to overcome every fear.

**The Source of Fear**

Fear often comes from:
- **Past experiences** that have wounded us
- **Future uncertainties** that we cannot control
- **Lies from the enemy** about our identity and calling
- **Lack of understanding** about God's character

**God's Solution to Fear**

**1. His Presence**
"When you pass through the waters, I will be with you; And through the rivers, they shall not overflow you. When you walk through the fire, you shall not be burned, Nor shall the flame scorch you." - Isaiah 43:2 (NKJV)

God promises His presence in every trial. We are never alone in our struggles.

**2. His Promises**
"Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." - Joshua 1:9 (NKJV)

God's promises are our anchor in times of fear and uncertainty.

**3. His Perfect Love**
"There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love." - 1 John 4:18 (NKJV)

God's perfect love eliminates fear. As we grow in understanding His love, fear loses its power over us.

**Overcoming Doubt**

Doubt attacks our faith and confidence in God's goodness. To overcome doubt:

- **Remember God's faithfulness** in your past
- **Study His promises** in Scripture
- **Surround yourself** with faith-filled believers
- **Take steps of obedience** despite feelings

**Walking in Victory**

"The Lord is my light and my salvation; Whom shall I fear? The Lord is the strength of my life; Of whom shall I be afraid?" - Psalm 27:1 (NKJV)

Victory over fear comes through understanding our identity in Christ and His faithfulness to complete the work He begins in us.

**Conclusion**

Fear and doubt do not have to define your spiritual journey. Through God's presence, promises, and perfect love, you can overcome every obstacle and walk confidently in your divine calling.

Remember, you are more than a conqueror through Him who loves you.`,
      image: walkingDivinePurposeImg,
      featured: true
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
      content: `"Where there is no revelation, the people cast off restraint; But happy is he who keeps the law." - Proverbs 29:18 (NKJV)

Prophetic vision is essential for walking in divine purpose. God reveals His plans through dreams, visions, and prophetic words that guide our steps.

**The Nature of Prophetic Vision**

"And it shall come to pass in the last days, says God, That I will pour out of My Spirit on all flesh; Your sons and your daughters shall prophesy, Your young men shall see visions, Your old men shall dream dreams." - Acts 2:17 (NKJV)

God speaks to His people through various forms of revelation, including dreams, visions, and prophetic words.

**Types of Prophetic Communication**

**1. Dreams**
"For God may speak in one way, or in another, Yet man does not perceive it. In a dream, in a vision of the night, When deep sleep falls upon men, While slumbering on their beds." - Job 33:14-15 (NKJV)

God often speaks through dreams, revealing His purposes and plans for our lives.

**2. Visions**
"After these things the word of the Lord came to Abram in a vision, saying, 'Do not be afraid, Abram. I am your shield, your exceedingly great reward.'" - Genesis 15:1 (NKJV)

Visions provide clear direction and encouragement from God for specific situations.

**3. Prophetic Words**
"Surely the Lord God does nothing, Unless He reveals His secret to His servants the prophets." - Amos 3:7 (NKJV)

God reveals His plans through prophetic words spoken by His servants.

**Receiving Prophetic Vision**

**Prerequisites for receiving vision:**
- **A pure heart** - Sin blocks spiritual reception
- **Prayer and fasting** - Creates spiritual sensitivity
- **Scripture study** - Aligns our minds with God's thoughts
- **Spiritual discernment** - Distinguishes God's voice from others

**Testing Prophetic Vision**

"Beloved, do not believe every spirit, but test the spirits, whether they are of God; because many false prophets have gone out into the world." - 1 John 4:1 (NKJV)

All prophetic vision must be tested against Scripture and confirmed by mature believers.

**Acting on Prophetic Vision**

Once we receive confirmed prophetic vision, we must:
- **Write it down** for future reference
- **Pray over it** for understanding and timing
- **Seek counsel** from spiritual leaders
- **Take action** in faith and obedience

**Conclusion**

Prophetic vision opens doors to greater spiritual effectiveness and helps us walk confidently in our divine purpose. As you cultivate spiritual sensitivity through prayer and Scripture study, God will reveal His plans for your life.

Remember, without vision, people perish, but with God's revelation, we flourish in His purposes.`,
      image: walkingDivinePurposeImg,
      featured: false
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
      content: `"Therefore, behold, I will allure her, Will bring her into the wilderness, And speak comfort to her." - Hosea 2:14 (NKJV)

God often leads His people through seasons of preparation in the wilderness before launching them into their destiny.

**The Purpose of Wilderness Seasons**

"And you shall remember that the Lord your God led you all the way these forty years in the wilderness, to humble you and test you, to know what was in your heart, whether you would keep His commandments or not." - Deuteronomy 8:2 (NKJV)

Wilderness seasons serve specific purposes:
- **Character development** - Building spiritual maturity
- **Dependence on God** - Learning to trust completely
- **Testing faith** - Proving our commitment
- **Spiritual preparation** - Equipping for greater assignments

**Lessons from Biblical Examples**

**Moses in the Wilderness**
Moses spent 40 years in the wilderness before God called him to deliver Israel. This season developed humility and dependence on God.

**Jesus in the Wilderness**
"Then Jesus was led up by the Spirit into the wilderness to be tempted by the devil." - Matthew 4:1 (NKJV)

Even Jesus needed wilderness preparation before beginning His ministry.

**David's Preparation**
David was anointed as king but spent years in caves and wilderness before taking the throne. This season developed his heart after God.

**Embracing the Process**

**How to respond in preparation seasons:**
- **Maintain worship** - Keep praising God regardless of circumstances
- **Study Scripture** - Let God's Word transform your thinking
- **Develop relationships** - Build community with other believers
- **Practice obedience** - Be faithful in small things
- **Trust God's timing** - Don't rush the process

**The Promise of Promotion**

"For promotion cometh neither from the east, nor from the west, nor from the south. But God is the judge: he putteth down one, and setteth up another." - Psalm 75:6-7 (NKJV)

God promotes in His perfect timing. Our responsibility is to remain faithful in the preparation season.

**Growing Through Challenges**

Wilderness seasons often include:
- **Financial pressures** - Teaching dependence on God's provision
- **Relationship tests** - Developing love and forgiveness
- **Health challenges** - Building faith and perseverance
- **Ministry obstacles** - Proving calling and commitment

**Conclusion**

Embrace your seasons of preparation as gifts from God. He is developing character, building faith, and preparing you for greater assignments than you can imagine.

Remember, every wilderness has an end, and every preparation season leads to promotion in God's perfect timing.`,
      image: walkingDivinePurposeImg,
      featured: false
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
      content: `"To everything there is a season, A time for every purpose under heaven." - Ecclesiastes 3:1 (NKJV)

Understanding divine timing is crucial for walking in God's purposes. His timing is always perfect, even when it seems delayed to us.

**The Nature of Divine Timing**

"But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint." - Isaiah 40:31 (NKJV)

God's timing operates differently than human timing. He sees the end from the beginning and orchestrates events for maximum impact.

**Why God's Delays are Not Denials**

**Reasons for divine delays:**
- **Character preparation** - We need more development
- **Circumstantial alignment** - External factors must align
- **Kingdom purposes** - Greater glory for God
- **Protection** - Shielding us from premature exposure

**Learning to Wait**

**Active waiting involves:**
- **Continued preparation** - Keep developing skills and character
- **Faithful service** - Serve where you are now
- **Persistent prayer** - Maintain communication with God
- **Study and growth** - Expand your knowledge and wisdom

**Biblical Examples of Divine Timing**

**Abraham and Isaac**
Abraham waited 25 years for the promise of Isaac. God's timing ensured maximum glory and demonstrated His faithfulness.

**Joseph's Journey**
From the pit to the palace took 13 years. Every delay served to prepare Joseph for his destiny as second-in-command of Egypt.

**Jesus' Ministry**
Jesus waited 30 years before beginning public ministry. This preparation was essential for His three-year ministry impact.

**Developing Patience**

"My brethren, count it all joy when you fall into various trials, knowing that the testing of your faith produces patience. But let patience have its perfect work, that you may be perfect and complete, lacking nothing." - James 1:2-4 (NKJV)

Patience is developed through trials and waiting seasons. It produces spiritual maturity and completeness.

**Trusting God's Schedule**

"For My thoughts are not your thoughts, Nor are your ways My ways," says the Lord." - Isaiah 55:8 (NKJV)

God's schedule is perfect. Trust His timing even when it doesn't make sense to you.

**Conclusion**

Divine timing teaches us patience, develops our character, and ensures maximum impact when our season arrives. Trust God's perfect timing for your life and calling.

Remember, those who wait on the Lord will renew their strength and soar like eagles.`,
      image: walkingDivinePurposeImg,
      featured: false
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
      content: `"And whoever desires to be first among you, let him be your slave—just as the Son of Man did not come to be served, but to serve, and to give His life a ransom for many." - Matthew 20:27-28 (NKJV)

True ministry begins with a servant's heart, following Christ's example of humble service.

**The Heart of Ministry**

"As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God." - 1 Peter 4:10 (NKJV)

Every believer is called to ministry, using their unique gifts to serve the body of Christ and advance His kingdom.

**Characteristics of a Servant**

**1. Humility**
"Let nothing be done through selfish ambition or conceit, but in lowliness of mind let each esteem others better than himself." - Philippians 2:3 (NKJV)

True servants approach ministry with humility, esteeming others above themselves.

**2. Faithfulness**
"Moreover it is required in stewards that one be found faithful." - 1 Corinthians 4:2 (NKJV)

Faithfulness in small assignments prepares us for greater responsibilities.

**3. Love**
"And though I bestow all my goods to feed the poor, and though I give my body to be burned, but have not love, it profits me nothing." - 1 Corinthians 13:3 (NKJV)

Love is the motivation and measure of all effective ministry.

**Areas of Service**

**Ministry opportunities include:**
- **Worship and music** - Leading others in praise
- **Teaching and discipleship** - Sharing God's Word
- **Evangelism and outreach** - Reaching the lost
- **Administration and organization** - Supporting ministry operations
- **Compassion and mercy** - Caring for those in need

**Discovering Your Ministry**

**Steps to find your calling:**
1. **Assess your gifts** - What has God equipped you to do?
2. **Consider your passion** - What burdens your heart?
3. **Evaluate opportunities** - Where can you serve?
4. **Seek confirmation** - What do mature believers see in you?
5. **Start serving** - Begin where you are with what you have

**Conclusion**

Ministry is not about position or recognition; it's about serving God and His people with excellence and love. Every believer has a unique calling to serve in God's kingdom.

Answer the call to serve and watch God use your life to impact others for His glory.`,
      image: ministryFoundationsImg,
      featured: true
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
      content: `"Continue earnestly in prayer, being vigilant in it with thanksgiving." - Colossians 4:2 (NKJV)

Prayer is not just an activity in ministry; it IS the ministry. Everything we do must flow from our relationship with God through prayer.

**Jesus' Example of Prayer**

"And when He had sent the multitudes away, He went up on the mountain by Himself to pray. Now when evening came, He was alone there." - Matthew 14:23 (NKJV)

Jesus, our perfect example, prioritized prayer even in the midst of demanding ministry schedules.

**The Priority of Prayer**

**Prayer must be first in:**
- **Time** - Beginning each day with prayer
- **Energy** - Giving God our best, not leftovers
- **Attention** - Focused communication with God
- **Decision-making** - Seeking God's will in all matters

**Types of Prayer**

**1. Worship and Adoration**
"Oh come, let us worship and bow down; Let us kneel before the Lord our Maker." - Psalm 95:6 (NKJV)

Beginning prayer with worship establishes proper perspective and honors God.

**2. Confession and Repentance**
"If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." - 1 John 1:9 (NKJV)

Confession keeps our relationship with God clear and our hearts pure.

**3. Thanksgiving**
"In everything give thanks; for this is the will of God in Christ Jesus for you." - 1 Thessalonians 5:18 (NKJV)

Gratitude acknowledges God's goodness and builds faith.

**4. Petition and Intercession**
"Therefore I exhort first of all that supplications, prayers, intercessions, and giving of thanks be made for all men." - 1 Timothy 2:1 (NKJV)

We bring our needs and the needs of others before God in prayer.

**Building a Prayer Life**

**Essential elements:**
- **Consistency** - Regular prayer times
- **Scripture** - Praying God's Word
- **Community** - Joining with others in prayer
- **Silence** - Listening for God's voice
- **Faith** - Believing God hears and answers

**Conclusion**

Prayer is the foundation of all effective ministry. Without it, we work in our own strength and miss God's best. With it, we partner with heaven to accomplish His purposes.

Make prayer the cornerstone of your ministry and watch God work powerfully through your life.`,
      image: ministryFoundationsImg,
      featured: false
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
      content: `"Again I say to you that if two of you agree on earth concerning anything that they ask, it will be done for them by My Father in heaven." - Matthew 18:19 (NKJV)

Corporate prayer releases a dimension of God's power that surpasses individual prayer, creating spiritual breakthrough.

**The Principle of Agreement**

"These all continued with one accord in prayer and supplication, with the women and Mary the mother of Jesus, and with His brothers." - Acts 1:14 (NKJV)

The early church understood the power of unified prayer, and it became the foundation for pentecostal outpouring.

**Elements of Powerful Agreement**

**1. Unity of Heart**
Agreement goes beyond words; it requires unity of heart and purpose.

**2. Biblical Foundation**
True agreement is based on God's Word and His revealed will.

**3. Faith**
Agreement requires faith that God will answer according to His promises.

**4. Persistence**
Continued prayer demonstrates commitment to the agreement.

**Benefits of Corporate Prayer**

**Spiritual benefits include:**
- **Increased faith** - Others' faith strengthens ours
- **Shared burden** - Difficulties become lighter when shared
- **Greater power** - Collective prayer releases heaven's power
- **Encouragement** - Community support strengthens perseverance

**Biblical Examples**

**The Upper Room**
120 believers prayed in agreement for 10 days, resulting in the outpouring of the Holy Spirit.

**Peter's Release**
The church prayed earnestly for Peter's release from prison, and God sent an angel to free him.

**Paul and Silas**
Their midnight prayer in prison resulted in an earthquake that opened all doors.

**Creating Agreement**

**Steps to effective agreement:**
1. **Gather believers** with common burden
2. **Seek God's will** through Scripture and prayer
3. **Pray together** regularly and consistently
4. **Maintain unity** despite different perspectives
5. **Persist in faith** until breakthrough comes

**Conclusion**

The power of agreement in prayer is one of God's greatest gifts to the church. When believers unite in prayer, heaven responds with supernatural intervention.

Find others who share your burden and begin praying in agreement. Watch God move in ways that exceed your expectations.`,
      image: prayerMovesHeavenImg,
      featured: true
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
      content: `"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." - 2 Timothy 3:16 (NKJV)

The Bible stands as our final authority, breathed by God Himself and sufficient for all spiritual guidance.

**The Nature of Scripture**

"Heaven and earth will pass away, but My words will by no means pass away." - Matthew 24:35 (NKJV)

God's Word remains eternally relevant and absolutely trustworthy in every generation and culture.

**Characteristics of God's Word**

**1. Inspired**
"For prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit." - 2 Peter 1:21 (NKJV)

Scripture is God-breathed, not merely human wisdom.

**2. Complete**
"The law of the Lord is perfect, converting the soul; The testimony of the Lord is sure, making wise the simple." - Psalm 19:7 (NKJV)

Scripture contains everything we need for life and godliness.

**3. Powerful**
"For the word of God is living and powerful, and sharper than any two-edged sword, piercing even to the division of soul and spirit, and of joints and marrow, and is a discerner of the thoughts and intents of the heart." - Hebrews 4:12 (NKJV)

God's Word has power to transform lives and circumstances.

**4. Eternal**
"Forever, O Lord, Your word is settled in heaven." - Psalm 119:89 (NKJV)

Scripture's truths are unchanging and eternal.

**Practical Application**

**How to apply Scripture's authority:**
- **Study regularly** - Daily reading and meditation
- **Memorize key verses** - Hide God's Word in your heart
- **Apply truth** - Let Scripture change your behavior
- **Share with others** - Teach and encourage through God's Word
- **Make decisions** - Use Scripture as your guide

**Defending Scripture's Authority**

In a world that questions absolute truth, we must:
- **Know what we believe** - Study Scripture thoroughly
- **Give reasons** - Be ready to defend our faith
- **Live consistently** - Let our lives validate our beliefs
- **Speak with love** - Share truth in humility and grace

**Conclusion**

The authority of Scripture provides stability in an unstable world. When we build our lives on God's Word, we have an unshakeable foundation.

Make Scripture your final authority in all matters of faith and practice. Let God's Word guide your decisions and shape your life.`,
      image: coreValuesImg,
      featured: true
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
      content: `"But Jesus called them to Himself and said, 'You know that the rulers of the Gentiles lord it over them, and those who are great exercise authority over them. Yet it shall not be so among you; but whoever desires to become great among you, let him be your servant.'" - Matthew 20:25-26 (NKJV)

Christ revolutionized leadership by demonstrating that true greatness comes through serving others with humility and love.

**The Mind of Christ**

"Let this mind be in you which was also in Christ Jesus, who, being in the form of God, did not consider it robbery to be equal with God, but made Himself of no reputation, taking the form of a bondservant." - Philippians 2:5-7 (NKJV)

Christian leadership requires the mindset of Christ: humble service rather than self-promotion.

**Jesus' Leadership Principles**

**1. Servant Leadership**
Jesus washed His disciples' feet, demonstrating that leaders serve those they lead.

**2. Sacrificial Love**
"Greater love has no one than this, than to lay down one's life for his friends." - John 15:13 (NKJV)

True leaders sacrifice for the benefit of others.

**3. Empowerment**
Jesus invested in His disciples, preparing them to continue His work.

**4. Integrity**
Jesus' words and actions were perfectly aligned, providing trustworthy leadership.

**Characteristics of Christ-like Leaders**

**Essential qualities:**
- **Humility** - Putting others before self
- **Compassion** - Caring for people's needs
- **Vision** - Seeing God's purposes clearly
- **Courage** - Taking stands for truth
- **Wisdom** - Making decisions based on God's principles

**Leading in Different Contexts**

**Family Leadership**
"But as for me and my house, we will serve the Lord." - Joshua 24:15 (NKJV)

Leading your family toward God with love and consistency.

**Church Leadership**
"Shepherd the flock of God which is among you, serving as overseers, not by compulsion but willingly, not for dishonest gain but eagerly." - 1 Peter 5:2 (NKJV)

Leading the church with pastoral care and spiritual oversight.

**Workplace Leadership**
Leading with integrity and excellence in secular environments.

**Community Leadership**
Being salt and light in your community through servant leadership.

**Developing Leadership Skills**

**Steps to growth:**
1. **Study Jesus' example** - Learn from His methods
2. **Serve where you are** - Start with current opportunities
3. **Seek mentorship** - Learn from mature leaders
4. **Accept responsibility** - Take on leadership roles
5. **Continue learning** - Never stop growing

**Conclusion**

Leading like Jesus transforms organizations, communities, and nations. When we embrace servant leadership, we create environments where people flourish and God is glorified.

Commit to leading like Jesus in every sphere of your influence. Let His example shape your leadership style.`,
      image: leadershipExcellenceImg,
      featured: false
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
      content: `"Go therefore and make disciples of all the nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all things that I have commanded you; and lo, I am with you always, even to the end of the age." - Matthew 28:19-20 (NKJV)

The Great Commission is not optional for believers; it is our primary mandate from Christ Himself.

**The Scope of the Commission**

"But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth." - Acts 1:8 (NKJV)

God has equipped every believer with the Holy Spirit's power to be effective witnesses for Christ globally.

**Elements of the Great Commission**

**1. Going**
The command implies both local and international outreach. Every believer is sent.

**2. Making Disciples**
Not just converts, but committed followers who reproduce themselves.

**3. Baptizing**
Public declaration of faith and identification with Christ.

**4. Teaching**
Comprehensive instruction in Christian living and doctrine.

**Modern Missions Strategy**

**Effective approaches include:**
- **Church planting** - Establishing reproducing congregations
- **Leadership development** - Training national leaders
- **Community development** - Meeting physical and spiritual needs
- **Technology utilization** - Using media and digital platforms
- **Strategic partnerships** - Collaborating with local churches

**Every Believer's Role**

**Ways to participate:**
- **Pray** - Intercede for missionaries and unreached peoples
- **Give** - Support missions financially
- **Go** - Participate in missions trips
- **Send** - Support and encourage missionaries
- **Welcome** - Minister to internationals in your community

**Overcoming Obstacles**

**Common barriers:**
- **Language** - God provides interpretation and translation
- **Culture** - Cross-cultural sensitivity can be learned
- **Resources** - God provides for His purposes
- **Fear** - God's presence goes with us

**The Promise of His Presence**

"And lo, I am with you always, even to the end of the age." - Matthew 28:20 (NKJV)

Christ promises His presence to those who obey the Great Commission.

**Conclusion**

The Great Commission remains our primary mandate until Christ returns. Every believer has a role in reaching the nations for Christ.

Find your place in God's global mission and experience the joy of participating in His eternal purposes.`,
      image: globalMissionImg,
      featured: true
    }
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
              <div 
                className="whitespace-pre-line text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: sermon.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
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