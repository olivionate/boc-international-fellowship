import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Zap, Target, Music } from "lucide-react";
import { Link } from "react-router-dom";
import youthMinistryHero from "@/assets/youth-ministry-hero.jpg";
import youthYaConnect from "@/assets/youth-ya-connect.jpg";
import youthLifeGroups from "@/assets/youth-life-groups.jpg";
import youthLeadershipDevelopment from "@/assets/youth-leadership-development.jpg";

const YouthMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${youthMinistryHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Youth Ministry</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering Young Adults for Kingdom Impact</p>
          <p className="text-lg">Connect • Grow • Serve • Lead</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Youth Ministry is dedicated to helping young adults (ages 18-25) grow personally and spiritually 
              in their faith journey. We provide a dynamic, engaging environment where young people can discover 
              their identity in Christ, develop meaningful relationships, and find their purpose in God's Kingdom.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe young adults are not just the church of tomorrow—they are the church of today. 
              Our programs are designed to equip them with the tools, knowledge, and spiritual foundation 
              needed to impact their generation and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building authentic relationships and deep friendships</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Dynamic worship and engaging spiritual experiences</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Discovering God's calling and life direction</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Music className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Contemporary worship that touches hearts</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={youthYaConnect} 
                  alt="African young adults worshipping at contemporary church gathering"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>YA Connect</CardTitle>
                <CardDescription>Weekly young adult gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our main weekly program featuring contemporary worship, relevant Bible teaching, 
                  and plenty of opportunities for fellowship and connection with peers.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={youthLifeGroups} 
                  alt="African young adults in small group Bible study fellowship"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Life Groups</CardTitle>
                <CardDescription>Small group discipleship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intimate small groups focused on Bible study, accountability, prayer, 
                  and building deeper relationships in a safe, supportive environment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={youthLeadershipDevelopment} 
                  alt="African young adults in leadership training session"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Leadership Development</CardTitle>
                <CardDescription>Training tomorrow's leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive leadership training program that equips young adults with 
                  the skills and character needed to lead in ministry and their careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Regular Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sunday YA Service</h3>
                  <p className="text-muted-foreground">Dynamic worship service tailored for young adults</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Midweek Bible Study</h3>
                  <p className="text-muted-foreground">Deep dive into Scripture with practical application</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                  <p className="text-muted-foreground">Serving our local community through various projects</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">YA Conferences</h3>
                  <p className="text-muted-foreground">Annual conferences with inspiring speakers and worship</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Social Activities</h3>
                  <p className="text-muted-foreground">Fun events, game nights, and fellowship activities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career & Life Coaching</h3>
                  <p className="text-muted-foreground">Guidance for career decisions and life transitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Join Our Youth Ministry?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're not just about programs—we're about building authentic, lasting friendships 
                  that will support you through life's journey.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Relevant Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our teaching addresses real-life issues young adults face: career, relationships, 
                  identity, and finding your place in the world.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We believe in empowering young people to lead. You'll have opportunities to serve, 
                  lead, and make a real impact in ministry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mission Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Regular mission trips and outreach projects help you discover the joy of 
                  serving others and making a difference in the world.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Creative Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contemporary music, creative elements, and engaging worship experiences 
                  designed to connect you with God in meaningful ways.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safe Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A judgment-free zone where you can ask questions, work through doubts, 
                  and grow in your faith at your own pace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Connect?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're new to faith or have been walking with God for years, our Youth Ministry 
            is the perfect place to grow, connect, and discover your purpose. Join us and be part 
            of a generation that's passionate about making a difference for Christ.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-3">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default YouthMinistry;