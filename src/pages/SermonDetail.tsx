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

Before the foundation of the world, God had you in mind. He designed you with specific gifts, talents, and calling that would serve His eternal purposes. Your divine assignment is not a random occurrence, but a carefully orchestrated plan that flows from the heart of your Creator.

**Understanding God's Eternal Plan**

"According to the eternal purpose which He accomplished in Christ Jesus our Lord." - Ephesians 3:11 (NKJV)

God's purposes are eternal, transcending time and circumstances. Your assignment fits perfectly into His master plan for humanity's redemption and restoration.

"But we speak the wisdom of God in a mystery, the hidden wisdom which God ordained before the ages for our glory." - 1 Corinthians 2:7 (NKJV)

The wisdom of God includes His perfect plan for your life, ordained before time began yet revealed progressively as you mature in faith.

**The Foundation of Divine Purpose**

Every believer was created with a unique purpose that aligns with God's eternal plan. This purpose is not arbitrary or random, but carefully designed by our Heavenly Father who knows us intimately.

"Before I formed you in the womb I knew you; Before you were born I sanctified you; I ordained you a prophet to the nations." - Jeremiah 1:5 (NKJV)

Just as God knew Jeremiah before his birth, He knew you and set you apart for His purposes. Your identity and calling were established before you took your first breath.

"But seek first the kingdom of God and His righteousness, and all these things shall be added to you." - Matthew 6:33 (NKJV)

When we align our lives with God's purposes, we find true fulfillment and effectiveness in ministry and life. The key is to seek first His kingdom, allowing His priorities to become our priorities.

"And we know that all things work together for good to those who love God, to those who are the called according to His purpose." - Romans 8:28 (NKJV)

Even our past mistakes, failures, and painful experiences become part of God's perfect plan when we surrender to His purposes.

**The Process of Divine Revelation**

**1. Progressive Revelation**
God doesn't typically reveal your entire assignment at once. Like the dawn that gradually brightens into full daylight, divine purpose unfolds progressively.

"But the path of the just is like the shining sun, That shines ever brighter unto the perfect day." - Proverbs 4:18 (NKJV)

**2. Confirmation Through Multiple Witnesses**
"By the mouth of two or three witnesses every word shall be established." - 2 Corinthians 13:1 (NKJV)

God confirms His purposes through multiple means: Scripture, prayer, circumstances, and mature believers.

**3. Peace in Your Heart**
"And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful." - Colossians 3:15 (NKJV)

True divine assignment brings supernatural peace, even when the calling seems challenging.

**Five Keys to Discovering Your Assignment**

**1. Prayer and Intimacy with God**
"Call to Me, and I will answer you, and show you great and mighty things, which you do not know." - Jeremiah 33:3 (NKJV)

Our divine assignment is revealed through intimate relationship with God. As we spend time in His presence, He reveals His heart and purposes for our lives.

"Draw near to God and He will draw near to you. Cleanse your hands, you sinners; and purify your hearts, you double-minded." - James 4:8 (NKJV)

Intimacy requires purity of heart and singleness of purpose. As we draw near to God, He draws near to us and reveals His secrets.

**Practical Steps for Deeper Prayer:**
- Set aside daily time for prayer without distractions
- Fast periodically to increase spiritual sensitivity
- Keep a prayer journal to record God's responses
- Practice listening prayer, not just petition
- Worship before making requests

**2. Scripture Study and Meditation**
"Your word is a lamp to my feet And a light to my path." - Psalm 119:105 (NKJV)

God's Word illuminates His will for our lives. Through consistent study and meditation on Scripture, we gain understanding of His character and calling.

"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work." - 2 Timothy 3:16-17 (NKJV)

Scripture equips us completely for our divine assignment, providing both character formation and practical guidance.

"This Book of the Law shall not depart from your mouth, but you shall meditate in it day and night, that you may observe to do according to all that is written in it. For then you will make your way prosperous, and then you will have good success." - Joshua 1:8 (NKJV)

**Methods for Effective Scripture Study:**
- Read systematically through entire books
- Memorize key verses related to your calling
- Study the lives of biblical characters
- Use concordances to study specific themes
- Apply hermeneutical principles for proper interpretation

**3. Spiritual Discernment**
"But when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come." - John 16:13 (NKJV)

The Holy Spirit guides us into understanding our purpose and calling. Through spiritual discernment, we can distinguish God's voice from other influences.

"However, when He, the Spirit of truth, has come, He will guide you into all truth; for He will not speak on His own authority, but whatever He hears He will speak; and He will tell you things to come." - John 16:13 (NKJV)

"But the natural man does not receive the things of the Spirit of God, for they are foolishness to him; nor can he know them, because they are spiritually discerned." - 1 Corinthians 2:14 (NKJV)

**4. Recognizing Your Spiritual Gifts**
"But the manifestation of the Spirit is given to each one for the profit of all." - 1 Corinthians 12:7 (NKJV)

Every believer has been given spiritual gifts that point toward their divine assignment.

"As each one has received a gift, minister it to one another, as good stewards of the manifold grace of God." - 1 Peter 4:10 (NKJV)

**Categories of Spiritual Gifts:**
- **Motivational Gifts** (Romans 12:6-8): Prophecy, Ministry, Teaching, Exhortation, Giving, Leadership, Mercy
- **Ministry Gifts** (Ephesians 4:11): Apostle, Prophet, Evangelist, Pastor, Teacher
- **Manifestation Gifts** (1 Corinthians 12:8-10): Word of Wisdom, Word of Knowledge, Faith, Healing, Miracles, Prophecy, Discerning of Spirits, Tongues, Interpretation

**5. Burden and Passion**
"For it is God who works in you both to will and to do for His good pleasure." - Philippians 2:13 (NKJV)

God places specific burdens and passions in your heart that align with your calling.

"The steps of a good man are ordered by the Lord, And He delights in his way." - Psalm 37:23 (NKJV)

**Walking in Your Assignment**

Once we discover our divine assignment, we must walk in it with faith and obedience. This requires several essential elements:

**1. Courage to Step Out**
"Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." - Joshua 1:9 (NKJV)

Divine assignments often require stepping beyond our comfort zones and natural abilities.

**2. Faith in God's Timing**
"To everything there is a season, A time for every purpose under heaven." - Ecclesiastes 3:1 (NKJV)

God's timing is perfect, even when it seems delayed to us.

**3. Perseverance Through Challenges**
"And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart." - Galatians 6:9 (NKJV)

Every divine assignment will face opposition and challenges.

**4. Humility and Dependence**
"I can do all things through Christ who strengthens me." - Philippians 4:13 (NKJV)

Success in our assignment depends on Christ's strength, not our natural abilities.

**5. Preparation and Development**
"Study to show yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth." - 2 Timothy 2:15 (NKJV)

God expects us to prepare diligently for our assignments.

**Common Obstacles to Discovering Purpose**

**1. Fear and Insecurity**
"For God has not given us a spirit of fear, but of power and of love and of sound mind." - 2 Timothy 1:7 (NKJV)

**2. Past Failures**
"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new." - 2 Corinthians 5:17 (NKJV)

**3. Comparing with Others**
"But let each one examine his own work, and then he will have rejoicing in himself alone, and not in another." - Galatians 6:4 (NKJV)

**4. Impatience**
"But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint." - Isaiah 40:31 (NKJV)

**The Results of Walking in Divine Purpose**

**1. Supernatural Fulfillment**
When you operate in your divine assignment, you experience deep satisfaction and joy that transcends circumstances.

**2. Fruitfulness**
"You did not choose Me, but I chose you and appointed you that you should go and bear fruit, and that your fruit should remain, that whatever you ask the Father in My name He may give you." - John 15:16 (NKJV)

**3. Kingdom Impact**
Your assignment contributes to God's eternal purposes and the advancement of His kingdom.

**4. Divine Provision**
"And my God shall supply all your need according to His riches in glory by Christ Jesus." - Philippians 4:19 (NKJV)

**Conclusion**

Your divine assignment is not just about what you do; it's about who you become in the process. As you seek God with all your heart, study His Word diligently, and remain sensitive to His Spirit, He will reveal the specific ways He wants to use your life for His glory.

Remember, you are not an accident or afterthought. You are a masterpiece created by God for good works that He prepared beforehand for you to walk in. Your assignment is unique, essential, and perfectly designed for you.

"For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them." - Ephesians 2:10 (NKJV)

Trust God to guide you into the fullness of your divine assignment. He who began a good work in you will complete it until the day of Jesus Christ.`,
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

Faith is the bridge between God's promises and their manifestation in our lives. It transcends the limitations of our natural senses and connects us to the supernatural realm where God operates. Walking by faith is not optional for believers; it is the fundamental way we navigate our spiritual journey and fulfill our divine purpose.

**The Essence of Biblical Faith**

Faith is not merely believing that God exists, but trusting in His character and promises even when circumstances seem contrary to His word. It is a confident assurance that God is who He says He is and will do what He has promised.

"Now faith is the substance of things hoped for, the evidence of things not seen." - Hebrews 11:1 (NKJV)

Faith gives substance to our hopes and provides evidence for things we cannot yet see with our natural eyes. It makes the invisible kingdom of God real and tangible in our daily experience.

"But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him." - Hebrews 11:6 (NKJV)

Faith is not just beneficial; it is essential for pleasing God and experiencing His rewards.

**Understanding God's Higher Perspective**

"For My thoughts are not your thoughts, Nor are your ways My ways," says the Lord. "For as the heavens are higher than the earth, So are My ways higher than your ways, And My thoughts than your thoughts." - Isaiah 55:8-9 (NKJV)

God's perspective is infinitely higher than ours. What may seem like delays, obstacles, or even impossibilities to us are often part of His perfect plan for our good and His glory.

"Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths." - Proverbs 3:5-6 (NKJV)

When we surrender our limited perspective and trust God's infinite wisdom, we position ourselves to walk in our divine purpose with confidence and peace.

"The secret things belong to the Lord our God, but those things which are revealed belong to us and to our children forever, that we may do all the words of this law." - Deuteronomy 29:29 (NKJV)

While we may not understand all of God's ways, we can trust His revealed character and promises.

**The Nature of Sight vs. Faith**

**Walking by Sight Limitations:**
- **Limited to present circumstances** - Cannot see beyond current situations
- **Influenced by emotions** - Feelings fluctuate with circumstances  
- **Bound by natural laws** - Restricted to what seems humanly possible
- **Temporary perspective** - Focused on immediate rather than eternal
- **Self-dependent** - Relies on personal strength and wisdom

**Walking by Faith Advantages:**
- **Eternal perspective** - Sees from God's viewpoint
- **Supernatural possibilities** - Accesses God's limitless power
- **Stable foundation** - Based on unchanging God and His Word
- **Hope in impossibilities** - Believes God can do the impossible
- **Divine partnership** - Cooperates with God's purposes and power

**Biblical Examples of Walking by Faith**

**Abraham's Journey of Faith**
"By faith Abraham obeyed when he was called to go out to the place which he would receive as an inheritance. And he went out, not knowing where he was going." - Hebrews 11:8 (NKJV)

Abraham's willingness to leave his comfort zone without knowing his destination demonstrates the essence of walking by faith. He trusted God's promise more than his natural security.

"By faith Abraham, when he was tested, offered up Isaac, and he who had received the promises offered up his only begotten son." - Hebrews 11:17 (NKJV)

Abraham's ultimate test came when God asked him to sacrifice Isaac, the son of promise. His faith enabled him to believe that God could raise Isaac from the dead if necessary.

**Moses' Choice of Faith**
"By faith Moses, when he became of age, refused to be called the son of Pharaoh's daughter, choosing rather to suffer affliction with the people of God than to enjoy the passing pleasures of sin, esteeming the reproach of Christ greater riches than the treasures in Egypt; for he looked to the reward." - Hebrews 11:24-26 (NKJV)

Moses chose God's purposes over worldly comfort and position, trusting in eternal rewards rather than temporary pleasures.

**Noah's Obedient Faith**
"By faith Noah, being divinely warned of things not yet seen, moved with godly fear, prepared an ark for the saving of his household, by which he condemned the world and became heir of the righteousness which is according to faith." - Hebrews 11:7 (NKJV)

Noah built an ark when there was no sign of rain, demonstrating faith in God's warning about future judgment.

**The Substance of Things Hoped For**

Faith is not wishful thinking or positive mental attitude. It is based on the solid foundation of God's character and promises revealed in Scripture.

"So then faith comes by hearing, and hearing by the word of God." - Romans 10:17 (NKJV)

True faith is built on God's Word, not on human optimism or circumstances.

"Forever, O Lord, Your word is settled in heaven." - Psalm 119:89 (NKJV)

God's Word is eternally established and provides the unchanging foundation for our faith.

**Practical Steps for Walking by Faith**

**1. Study God's Character and Attributes**
Understanding who God is builds confidence in His faithfulness, power, and love.

"The Lord is merciful and gracious, Slow to anger, and abounding in mercy." - Psalm 103:8 (NKJV)

"Jesus Christ is the same yesterday, today, and forever." - Hebrews 13:8 (NKJV)

**2. Remember God's Past Faithfulness**
"I will remember the works of the Lord; Surely I will remember Your wonders of old." - Psalm 77:11 (NKJV)

Keep a record of how God has been faithful in your life and in the lives of others.

**3. Declare God's Promises**
"Let us hold fast the confession of our hope without wavering, for He who promised is faithful." - Hebrews 10:23 (NKJV)

Speak God's promises over your circumstances rather than focusing on problems.

**4. Take Faith-Based Action**
"But someone will say, 'You have faith, and I have works.' Show me your faith without your works, and I will show you my faith by my works." - James 2:18 (NKJV)

Faith without corresponding action is dead. Take steps that demonstrate your trust in God.

**5. Surround Yourself with Faith**
"And let us consider one another in order to stir up love and good works, not forsaking the assembling of ourselves together, as is the manner of some, but exhorting one another, and so much the more as you see the Day approaching." - Hebrews 10:24-25 (NKJV)

Fellowship with other believers who encourage and strengthen your faith.

**Overcoming Doubt and Unbelief**

Doubt is a natural human response but doesn't have to be permanent or destructive when handled properly.

**Understanding Doubt:**
- Doubt often comes during times of testing
- It can be a stepping stone to stronger faith
- God is patient with our honest questions
- Doubt becomes destructive only when we stop seeking truth

**Biblical Responses to Doubt:**

**Return to God's Promises**
"Has God said, and will He not do? Or has He spoken, and will He not make it good?" - Numbers 23:19 (NKJV)

**Pray for Increased Faith**
"Immediately the father of the child cried out and said with tears, 'Lord, I believe; help my unbelief!'" - Mark 9:24 (NKJV)

This father's honest prayer shows that we can bring our doubts to Jesus and ask for help.

**Seek Wise Counsel**
"Where there is no counsel, the people fall; But in the multitude of counselors there is safety." - Proverbs 11:14 (NKJV)

**Focus on God's Character**
"Let us therefore come boldly to the throne of grace, that we may obtain mercy and find grace to help in time of need." - Hebrews 4:16 (NKJV)

**The Rewards of Walking by Faith**

**1. Divine Approval**
"But the just shall live by faith; but if anyone draws back, My soul has no pleasure in him." - Hebrews 10:38 (NKJV)

**2. Supernatural Peace**
"And the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus." - Philippians 4:7 (NKJV)

**3. Miraculous Provision**
"But my God shall supply all your need according to His riches in glory by Christ Jesus." - Philippians 4:19 (NKJV)

**4. Spiritual Victory**
"For whatever is born of God overcomes the world. And this is the victory that has overcome the world—our faith." - 1 John 5:4 (NKJV)

**5. Eternal Rewards**
"For our light affliction, which is but for a moment, is working for us a far more exceeding and eternal weight of glory." - 2 Corinthians 4:17 (NKJV)

**Faith in Times of Crisis**

Crisis often reveals the true depth of our faith and provides opportunities for spiritual growth.

"Count it all joy when you fall into various trials, knowing that the testing of your faith produces patience." - James 1:2-3 (NKJV)

**Crisis Faith Principles:**
- God uses crisis to develop character
- Our response to crisis determines our spiritual growth
- Faith in crisis brings glory to God
- Victory in crisis encourages others

**The Progressive Nature of Faith**

Faith grows through exercise and testing. Like physical muscles, faith becomes stronger through use.

"The righteous shall live by faith." - Romans 1:17 (NKJV)

This is not just initial faith for salvation, but ongoing faith for daily living.

**Stages of Faith Growth:**
1. **Saving Faith** - Initial trust in Christ for salvation
2. **Living Faith** - Daily dependence on God for guidance
3. **Growing Faith** - Increasing trust through experience
4. **Mature Faith** - Unwavering confidence in God's goodness
5. **Overcoming Faith** - Victory in the midst of trials

**Conclusion**

Walking by faith, not sight, is essential for fulfilling our divine purpose and experiencing God's best for our lives. As we learn to trust God's perspective above our own understanding, we position ourselves to experience His miraculous provision and guidance.

Faith is not the absence of questions or challenges; it is trust in God despite questions and challenges. It is choosing to believe God's promises when circumstances suggest otherwise.

"Now the just shall live by faith; But if anyone draws back, My soul has no pleasure in him. But we are not of those who draw back to perdition, but of those who believe to the saving of the soul." - Hebrews 10:38-39 (NKJV)

Choose today to walk by faith, trusting that God's ways are higher than your ways, and His thoughts higher than your thoughts. Your faith may be tested, but it will never be in vain when placed in the faithful God who cannot lie.

Remember: Faith sees the invisible, believes the incredible, and receives the impossible. Step out in faith today and watch God work miracles in your life.`,
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

Fear and doubt are among the most powerful weapons in Satan's arsenal against believers. These internal enemies can paralyze us, steal our joy, and prevent us from stepping into the fullness of God's calling on our lives. Yet God has not left us defenseless against these spiritual adversaries. He has provided everything we need to overcome fear and doubt and walk in supernatural courage and faith.

**Understanding the Nature of Fear and Doubt**

**Fear Defined:**
Fear is an emotional response to perceived danger or threat. While natural fear can protect us from physical harm, spiritual fear becomes destructive when it prevents us from obeying God and fulfilling our purpose.

**Doubt Defined:**
Doubt is uncertainty or lack of conviction about truth. While honest questions can lead to stronger faith, persistent doubt can undermine our relationship with God and hinder our spiritual progress.

"For God has not given us a spirit of fear, but of power and of love and of sound mind." - 2 Timothy 1:7 (NKJV)

Fear is not from God. It is a tool the enemy uses to paralyze us and prevent us from walking in our divine calling. God has given us power, love, and sound mind to overcome every fear.

**The Biblical Response to Fear**

**God's Presence is Our Strength**
"When you pass through the waters, I will be with you; And through the rivers, they shall not overflow you. When you walk through the fire, you shall not be burned, Nor shall the flame scorch you." - Isaiah 43:2 (NKJV)

God promises His presence in every trial. We are never alone in our struggles, no matter how overwhelming they may seem.

"The Lord your God in your midst, The Mighty One, will save; He will rejoice over you with gladness, He will quiet you with His love, He will rejoice over you with singing." - Zephaniah 3:17 (NKJV)

**God's Perfect Love Casts Out Fear**
"There is no fear in love; but perfect love casts out fear, because fear involves torment. But he who fears has not been made perfect in love." - 1 John 4:18 (NKJV)

God's perfect love eliminates fear. As we grow in understanding His love for us, fear loses its power over our lives.

"The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing." - Zephaniah 3:17 (NIV)

**Sources of Fear and Doubt**

**1. Past Experiences and Trauma**
Negative experiences can create fear patterns that affect our present faith and future expectations.

"Therefore, if anyone is in Christ, he is a new creation; old things have passed away; behold, all things have become new." - 2 Corinthians 5:17 (NKJV)

**2. Future Uncertainties**
Anxiety about tomorrow can rob us of peace today.

"Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble." - Matthew 6:34 (NKJV)

**3. Lies from the Enemy**
Satan is called the father of lies and seeks to deceive us about our identity and God's character.

"You are of your father the devil, and the desires of your father you want to do. He was a murderer from the beginning, and does not stand in the truth, because there is no truth in him. When he speaks a lie, he speaks from his own resources, for he is a liar and the father of it." - John 8:44 (NKJV)

**4. Lack of Understanding About God's Character**
Misconceptions about God can create fear instead of faith.

"And those who know Your name will put their trust in You; For You, Lord, have not forsaken those who seek You." - Psalm 9:10 (NKJV)

**Biblical Examples of Overcoming Fear**

**David and Goliath**
"Then David said to the Philistine, 'You come to me with a sword, with a spear, and with a javelin. But I come to you in the name of the Lord of hosts, the God of the armies of Israel, whom you have defied.'" - 1 Samuel 17:45 (NKJV)

David faced a giant that terrified an entire army, but his faith in God was greater than his fear of circumstances.

**Daniel in the Lion's Den**
"My God sent His angel and shut the lions' mouths, so that they have not hurt me, because I was found innocent before Him; and also, O king, I have done no wrong before you." - Daniel 6:22 (NKJV)

Daniel chose obedience to God despite the threat of death, and God miraculously protected him.

**Esther's Courage**
"Go, gather all the Jews who are present in Shushan, and fast for me; neither eat nor drink for three days, night or day. My maids and I will fast likewise. And so I will go to the king, which is against the law; and if I perish, I perish!" - Esther 4:16 (NKJV)

Esther overcame fear to save her people, trusting God with the outcome.

**Peter Walking on Water**
"So He said, 'Come.' And when Peter had come down out of the boat, he walked on the water to go to Jesus." - Matthew 14:29 (NKJV)

Peter overcame natural fear to do the supernatural by keeping his eyes on Jesus.

**God's Antidotes to Fear and Doubt**

**1. His Promises**
"Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go." - Joshua 1:9 (NKJV)

God's promises are our anchor in times of fear and uncertainty.

**2. His Peace**
"Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid." - John 14:27 (NKJV)

**3. His Power**
"But you shall receive power when the Holy Spirit has come upon you; and you shall be witnesses to Me in Jerusalem, and in all Judea and Samaria, and to the end of the earth." - Acts 1:8 (NKJV)

**4. His Protection**
"The angel of the Lord encamps all around those who fear Him, And delivers them." - Psalm 34:7 (NKJV)

**Practical Steps to Overcome Fear and Doubt**

**1. Renew Your Mind with Scripture**
"And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God." - Romans 12:2 (NKJV)

Replace fearful thoughts with God's truth.

**2. Practice Praise and Worship**
"But You are holy, Enthroned in the praises of Israel." - Psalm 22:3 (NKJV)

God's presence is manifested in our praise, displacing fear.

**3. Seek Godly Counsel**
"Where there is no counsel, the people fall; But in the multitude of counselors there is safety." - Proverbs 11:14 (NKJV)

**4. Take Faith Steps**
"But someone will say, 'You have faith, and I have works.' Show me your faith without your works, and I will show you my faith by my works." - James 2:18 (NKJV)

Acting in obedience despite fear builds courage.

**5. Develop a Prayer Life**
"Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God." - Philippians 4:6 (NKJV)

**The Armor of God Against Fear**

"Finally, my brethren, be strong in the Lord and in the power of His might. Put on the whole armor of God, that you may be able to stand against the wiles of the devil." - Ephesians 6:10-11 (NKJV)

**Each Piece of Armor:**
- **Belt of Truth** - Knowing God's truth dispels lies
- **Breastplate of Righteousness** - Our right standing with God gives confidence
- **Feet Shod with Gospel Peace** - Peace enables us to stand firm
- **Shield of Faith** - Faith extinguishes fear's fiery darts
- **Helmet of Salvation** - Knowing our security in Christ protects our minds
- **Sword of the Spirit** - God's Word defeats fear with truth

**Walking in Victory Over Fear**

"The Lord is my light and my salvation; Whom shall I fear? The Lord is the strength of my life; Of whom shall I be afraid?" - Psalm 27:1 (NKJV)

Victory over fear comes through understanding our identity in Christ and His faithfulness to complete the work He begins in us.

"Yet in all these things we are more than conquerors through Him who loved us." - Romans 8:37 (NKJV)

**Characteristics of Those Who Overcome Fear:**
- They focus on God's character rather than circumstances
- They remember God's past faithfulness
- They surround themselves with faith-filled believers
- They practice spiritual disciplines consistently
- They choose obedience despite feelings

**Conclusion**

Fear and doubt do not have to define your spiritual journey or limit your potential in God's kingdom. Through God's presence, promises, and perfect love, you can overcome every obstacle and walk confidently in your divine calling.

Remember, courage is not the absence of fear; it is faith in action despite fear. You are more than a conqueror through Christ who loves you. The same God who parted the Red Sea, shut the lions' mouths, and raised Jesus from the dead lives in you and will empower you to overcome every fear and doubt.

"The Lord will fight for you, and you shall hold your peace." - Exodus 14:14 (NKJV)

Stand strong, walk in faith, and watch God turn your greatest fears into opportunities for His greatest victories in your life.`,
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

Divine timing is one of the most challenging yet essential aspects of walking in God's purposes. Understanding and submitting to God's perfect timing transforms anxiety into peace, frustration into faith, and delay into preparation. Learning to wait on the Lord while remaining actively faithful is a mark of spiritual maturity.

**The Nature of Divine Timing**

God operates from an eternal perspective where time serves His purposes rather than limiting them. His timing is always perfect, though it rarely aligns with our natural expectations or desires.

"For My thoughts are not your thoughts, Nor are your ways My ways," says the Lord. "For as the heavens are higher than the earth, So are My ways higher than your ways, And My thoughts than your thoughts." - Isaiah 55:8-9 (NKJV)

God's timing considers factors we cannot see: character development needed, circumstances requiring alignment, other people's preparation, and eternal purposes that transcend immediate fulfillment.

"He has made everything beautiful in its time. Also He has put eternity in their hearts, except that no one can find out the work that God does from beginning to end." - Ecclesiastes 3:11 (NKJV)

**Biblical Principles of Divine Timing**

**1. God's Timing is Always Perfect**
"The Lord is not slack concerning His promise, as some count slackness, but is longsuffering toward us, not willing that any should perish but that all should come to repentance." - 2 Peter 3:9 (NKJV)

What appears as delay to us is often divine patience, allowing time for preparation, positioning, and perfection of circumstances.

**Examples of Perfect Timing:**
- **Abraham's son** - Isaac came when Abraham learned total dependence on God
- **Joseph's promotion** - Occurred when Egypt needed his leadership
- **David's kingship** - Began when Israel needed his particular gifting
- **Jesus' coming** - "In the fullness of time" when conditions were perfect
- **Paul's conversion** - At the moment Christianity needed a missionary apostle

**2. Waiting Develops Character**
"But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint." - Isaiah 40:31 (NKJV)

Waiting is not passive inactivity but active trust that develops essential character qualities:

**Character Qualities Developed Through Waiting:**
- **Faith** - Trusting God when circumstances seem contrary
- **Patience** - Learning to endure without anxiety
- **Humility** - Acknowledging dependence on God's sovereignty
- **Perseverance** - Continuing faithfully despite delays
- **Hope** - Maintaining expectation of God's faithfulness
- **Wisdom** - Understanding God's ways and purposes

**3. Preparation Occurs During Delays**
"And let us not grow weary while doing good, for in due season we shall reap if we do not lose heart." - Galatians 6:9 (NKJV)

God uses waiting seasons to prepare us for what He's preparing for us:

**Types of Preparation During Waiting:**
- **Skill development** - Learning necessary competencies
- **Character formation** - Building integrity and maturity
- **Relationship building** - Forming essential connections
- **Platform construction** - Creating opportunity structures
- **Resource accumulation** - Gathering needed provisions
- **Vision clarification** - Understanding divine purposes

**Biblical Examples of Divine Timing**

**Abraham's Promise**
"And he believed in the Lord, and He accounted it to him for righteousness." - Genesis 15:6 (NKJV)

Abraham waited 25 years for Isaac's birth, learning faith, dependence, and the nature of God's faithfulness.

**Abraham's Waiting Process:**
- **Initial promise** - God's covenant and promise given
- **Human effort** - Attempting to fulfill through Ishmael
- **Divine correction** - Learning God's ways differ from human ways
- **Character development** - Growing in faith and trust
- **Perfect fulfillment** - Isaac born at the appointed time

**Lessons from Abraham's Wait:**
- God's promises are certain but His timing is sovereign
- Human effort cannot accelerate divine timing
- Waiting develops faith and character
- God's fulfillment exceeds human expectations
- Delay is not denial

**Joseph's Journey**
"But the Lord was with Joseph and showed him mercy, and He gave him favor in the sight of the keeper of the prison." - Genesis 39:21 (NKJV)

Joseph waited 13 years from his dreams to their fulfillment, being prepared through slavery and imprisonment.

**Joseph's Timeline:**
- **Age 17** - Receives prophetic dreams
- **Age 17-28** - Slavery in Potiphar's house
- **Age 28-30** - Imprisonment for false accusations
- **Age 30** - Promotion to Prime Minister of Egypt

**Lessons from Joseph's Wait:**
- Dreams reveal destiny but don't determine timing
- Faithfulness during delay prepares for promotion
- Character development occurs through adversity
- God's favor operates even in difficult circumstances
- Perfect timing serves larger purposes than personal fulfillment

**David's Kingship**
"So all the elders of Israel came to the king at Hebron, and King David made a covenant with them at Hebron before the Lord. And they anointed David king over Israel." - 2 Samuel 5:3 (NKJV)

David waited approximately 15 years from his anointing by Samuel to becoming king over all Israel.

**David's Preparation Period:**
- **Shepherd boy** - Learning to protect and lead
- **Giant killer** - Developing faith in impossible situations
- **Court musician** - Understanding leadership and palace dynamics
- **Fugitive** - Learning dependence and gathering followers
- **King in Hebron** - Proving leadership capabilities

**Lessons from David's Wait:**
- Anointing precedes but doesn't guarantee immediate positioning
- Wilderness seasons prepare for palace responsibilities
- Character testing occurs before platform expansion
- God protects His purposes even through opposition
- Promotion comes when preparation is complete

**Moses' Calling**
"Now Moses was eighty years old and Aaron eighty-three years old when they spoke to Pharaoh." - Exodus 7:7 (NKJV)

Moses waited 40 years from his first attempt to deliver Israel to his divine commissioning.

**Moses' Timeline:**
- **Age 40** - First attempt to deliver Israel through human strength
- **Age 40-80** - Wilderness preparation in Midian
- **Age 80** - Divine commissioning at the burning bush
- **Age 80-120** - Leading Israel through wilderness to Promised Land

**Lessons from Moses' Wait:**
- Human timing often precedes divine timing
- Wilderness seasons are preparation, not punishment
- God's methods differ from human approaches
- Divine commissioning comes with divine enablement
- Character development is essential for leadership effectiveness

**The Challenge of Human Impatience**

**Natural Tendencies During Waiting:**
- **Anxiety** - Worrying about delayed fulfillment
- **Doubt** - Questioning God's faithfulness
- **Manipulation** - Attempting to force timing
- **Comparison** - Measuring against others' progress
- **Discouragement** - Losing hope in God's promises

**Biblical Response to Impatience:**
"Wait on the Lord; Be of good courage, And He shall strengthen your heart; Wait, I say, on the Lord!" - Psalm 27:14 (NKJV)

**Practical Steps for Patient Waiting**

**1. Maintain Perspective**
"For our light affliction, which is but for a moment, is working for us a far more exceeding and eternal weight of glory, while we do not look at the things which are seen, but at the things which are not seen. For the things which are seen are temporary, but the things which are not seen are eternal." - 2 Corinthians 4:17-18 (NKJV)

**Perspective Maintainers:**
- **Eternal focus** - Remember this life is preparation for eternity
- **God's faithfulness** - Recall His past faithfulness in your life
- **Bigger picture** - Understand your role in God's larger purposes
- **Character value** - Appreciate the worth of character development
- **Future hope** - Maintain expectation of God's promises

**2. Continue Faithful Service**
"His lord said to him, 'Well done, good and faithful servant; you were faithful over a few things, I will make you ruler over many things. Enter into the joy of your lord.'" - Matthew 25:21 (NKJV)

**Active Waiting Includes:**
- **Current responsibilities** - Excellence in present assignments
- **Skill development** - Preparing for future opportunities
- **Character building** - Growing in integrity and maturity
- **Relationship investment** - Building meaningful connections
- **Community service** - Contributing to others' success

**3. Cultivate Intimacy with God**
"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth!" - Psalm 46:10 (NKJV)

**Intimacy Builders:**
- **Prayer and worship** - Regular communication with God
- **Scripture meditation** - Feeding on God's Word
- **Journaling** - Recording God's faithfulness and communications
- **Fasting** - Increasing spiritual sensitivity
- **Community** - Fellowship with other believers

**4. Practice Gratitude**
"In everything give thanks; for this is the will of God in Christ Jesus for you." - 1 Thessalonians 5:18 (NKJV)

**Gratitude Practices:**
- **Daily thanksgiving** - Acknowledging God's current blessings
- **Testimony sharing** - Declaring God's goodness to others
- **Blessing others** - Using current resources to serve
- **Hope declaration** - Speaking faith about future promises
- **Worship expression** - Praising God for His character

**Signs of Approaching Breakthrough**

**1. Increased Faith**
Peace and confidence replace anxiety and doubt about God's timing.

**2. Character Stability**
Consistent godly responses regardless of circumstances.

**3. Clear Direction**
Specific guidance about next steps begins emerging.

**4. Open Doors**
Opportunities and connections begin appearing naturally.

**5. Favor Increase**
Supernatural favor becomes evident in relationships and circumstances.

**6. Platform Preparation**
Circumstances align to create opportunity for your calling.

**The Promise of Perfect Timing**

"And we know that all things work together for good to those who love God, to those who are the called according to His purpose." - Romans 8:28 (NKJV)

God's timing is perfect because it considers all factors:

**Factors in Divine Timing:**
- **Your preparation** - Readiness for the assignment
- **Others' preparation** - People involved in your purpose
- **Circumstantial alignment** - External conditions and opportunities
- **Kingdom purposes** - How your assignment serves larger purposes
- **Eternal significance** - Impact that transcends temporary concerns

**Conclusion**

Divine timing and patience are not about passive waiting but active trust in God's perfect plan. As we learn to align our expectations with His timing, we experience peace, growth, and perfect preparation for our divine assignments.

"For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope." - Jeremiah 29:11 (NKJV)

Trust God's timing. It is perfect. His delays are not denials but divine orchestration of circumstances, people, and purposes for maximum impact and effectiveness.

"He has made everything beautiful in its time." - Ecclesiastes 3:11 (NKJV)

Your time is coming. Your breakthrough is approaching. Your assignment awaits. Rest in His perfect timing and continue preparing for what He's preparing for you.

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