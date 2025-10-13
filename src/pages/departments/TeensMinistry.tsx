import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Gamepad2, Users, BookOpen, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import teensMinistryHero from "@/assets/teens-ministry-hero.jpg";
import teensConnect from "@/assets/teens-connect.jpg";
import teensSmallGroups from "@/assets/teens-small-groups.jpg";
import teensLeadership from "@/assets/teens-leadership.jpg";

const TeensMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${teensMinistryHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Teens Ministry</h1>
          <p className="text-xl md:text-2xl mb-8">Building Tomorrow's Leaders Today</p>
          <p className="text-lg">Learn • Grow • Connect • Lead</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Teens Ministry is designed specifically for young people ages 13-17, providing a safe, 
              fun, and engaging environment where teenagers can explore their faith, build meaningful friendships, 
              and discover their unique identity in Christ during these crucial formative years.
            </p>
            <p className="text-lg text-muted-foreground">
              We understand that the teenage years are filled with questions, changes, and challenges. 
              Our ministry provides guidance, support, and biblical truth in a way that's relevant and 
              accessible to today's teens, helping them navigate adolescence with confidence and faith.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Friendship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building lasting friendships with like-minded peers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Interactive Bible study and spiritual growth</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gamepad2 className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Engaging activities and creative programming</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Personal development and leadership training</p>
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
                  src={teensConnect} 
                  alt="African teenagers enjoying youth gathering with games and worship"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Teen Connect</CardTitle>
                <CardDescription>Weekly teen gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our main weekly program featuring games, worship, relevant Bible teaching, 
                  and plenty of time for teens to connect and build friendships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={teensSmallGroups} 
                  alt="African teenagers in intimate small group Bible study"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Small Groups</CardTitle>
                <CardDescription>Intimate discipleship circles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gender-specific small groups that provide a safe space for deeper conversations, 
                  accountability, and mentorship with caring adult leaders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={teensLeadership} 
                  alt="African teenagers developing leadership skills together"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Teen Leadership Team</CardTitle>
                <CardDescription>Developing young leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A select group of teens who show leadership potential receive additional training 
                  and opportunities to lead and serve in various ministry capacities.
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
                  <h3 className="text-xl font-semibold mb-2">Friday Night Live</h3>
                  <p className="text-muted-foreground">Weekly gatherings with games, worship, and Bible study</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Game Tournaments</h3>
                  <p className="text-muted-foreground">Video games, board games, and sports competitions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Service Projects</h3>
                  <p className="text-muted-foreground">Community service and mission opportunities</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Teen Camps & Retreats</h3>
                  <p className="text-muted-foreground">Annual camps and weekend retreats for spiritual growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Arts</h3>
                  <p className="text-muted-foreground">Drama, music, and creative expression opportunities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Life Skills Training</h3>
                  <p className="text-muted-foreground">Practical workshops on relationships, decision-making, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Events */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Special Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Teen Conference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual conference with inspirational speakers and worship</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Battle of the Bands</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Musical competition showcasing teen talent</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Mission Trip</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual mission trips to serve communities in need</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Lock-In Night</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Overnight events filled with games, movies, and fellowship</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">What We Offer Teens</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A judgment-free zone where teens can ask questions, share struggles, 
                  and explore their faith without fear of condemnation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Caring Mentors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Dedicated adult leaders who genuinely care about each teen's 
                  spiritual growth and personal development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Real-World Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Teaching and activities that address real issues teens face: 
                  peer pressure, identity, relationships, and future decisions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Leadership Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Chances to lead worship, organize events, and serve in various 
                  ministry roles to develop leadership skills.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Fun & Engaging Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creative, fun activities that make learning about God enjoyable 
                  and memorable, not boring or preachy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Peer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A community of peers who share similar values and can provide 
                  encouragement and accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join the Teen Family</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Being a teenager doesn't have to be navigated alone. Join our Teens Ministry 
            and discover a community where you belong, grow in your faith, have fun, 
            and prepare for an amazing future with God.
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

export default TeensMinistry;