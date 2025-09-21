import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, Target, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import mensEmpowermentHero from "@/assets/mens-empowerment-hero.jpg";

const MensEmpowerment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${mensEmpowermentHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Men's Empowerment Fellowship</h1>
          <p className="text-xl md:text-2xl mb-8">Real Men. Real Needs. Real Answers.</p>
          <p className="text-lg">Engage • Equip • Empower</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              To magnify manhood worldwide through concepts of male identity, purpose, and responsibility. 
              We empower men to become the leaders, fathers, husbands, and community builders God has called them to be.
            </p>
            <p className="text-lg text-muted-foreground">
              Our fellowship provides a safe space where men can unite, support one another, and grow collectively 
              in their spiritual journey while addressing the unique challenges facing men in today's world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Brotherhood</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building strong male friendships and accountability</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Discovering and fulfilling God's calling on your life</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Developing Christ-centered leadership skills</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Family</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Strengthening roles as husbands and fathers</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Men's Bible Study</CardTitle>
                <CardDescription>Weekly deep dives into God's Word</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engage with Scripture through practical, relevant Bible studies that address real-life challenges 
                  men face in their careers, relationships, and spiritual walk.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Leadership Development</CardTitle>
                <CardDescription>Equipping men to lead with integrity</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive training in servant leadership, conflict resolution, and team building 
                  to help men excel in their professional and ministry roles.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Men's Retreats</CardTitle>
                <CardDescription>Spiritual renewal and brotherhood</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annual retreats focused on spiritual renewal, building deeper friendships, 
                  and receiving fresh vision for life and ministry.
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
                  <h3 className="text-xl font-semibold mb-2">Monthly Fellowship Meetings</h3>
                  <p className="text-muted-foreground">Regular gatherings for worship, teaching, and fellowship</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accountability Groups</h3>
                  <p className="text-muted-foreground">Small groups focused on personal growth and mutual support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Service Projects</h3>
                  <p className="text-muted-foreground">Serving our community through practical acts of love</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Skills Development Workshops</h3>
                  <p className="text-muted-foreground">Practical training in career development and life skills</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Marriage & Family Seminars</h3>
                  <p className="text-muted-foreground">Strengthening relationships and family dynamics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prayer & Intercession</h3>
                  <p className="text-muted-foreground">Regular prayer sessions for personal and community needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join the Brotherhood</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to step into your full potential as a man of God? Join our men's empowerment fellowship 
            and become part of a community that will challenge, support, and equip you for greatness.
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

export default MensEmpowerment;