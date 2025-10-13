import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, Users, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";
import womensMinistryHero from "@/assets/womens-ministry-hero.jpg";
import womensBibleStudy from "@/assets/womens-bible-study.jpg";
import womensMentorship from "@/assets/womens-mentorship.jpg";
import womensRetreat from "@/assets/womens-retreat.jpg";

const WomensMinistry = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${womensMinistryHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Women's Ministry</h1>
          <p className="text-xl md:text-2xl mb-8">Empowering Women to Walk in Purpose</p>
          <p className="text-lg">Unite • Support • Grow • Flourish</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Heart & Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Women's Ministry exists to create a nurturing environment where women can unite, 
              support one another, and grow collectively in their faith journey. We believe every woman 
              has a unique calling and purpose in God's Kingdom.
            </p>
            <p className="text-lg text-muted-foreground">
              Through Bible studies, workshops, prayer groups, retreats, and fellowship activities, 
              we provide a safe space for women to explore their faith, address life's challenges, 
              and discover the strength that comes from sisterhood in Christ.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Sisterhood</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building meaningful relationships and support networks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Crown className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Discovering your worth and purpose in Christ</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Spiritual development and personal transformation</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Serving together and impacting our world</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Ministry Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={womensBibleStudy} 
                  alt="African women studying the Bible together in fellowship"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Women of Faith Bible Study</CardTitle>
                <CardDescription>Weekly in-depth Scripture exploration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join us for transformative Bible studies that dive deep into God's Word, 
                  exploring themes relevant to women's lives and spiritual growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={womensMentorship} 
                  alt="African women in mentorship conversation sharing wisdom"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mentorship Program</CardTitle>
                <CardDescription>Connecting generations of women</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A structured program pairing seasoned women with younger women for 
                  guidance, wisdom sharing, and spiritual development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={womensRetreat} 
                  alt="African women in worship during spiritual retreat outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Women's Retreats</CardTitle>
                <CardDescription>Spiritual renewal and refreshing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Annual and seasonal retreats designed for rest, reflection, and 
                  spiritual renewal in beautiful, peaceful settings.
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
                  <h3 className="text-xl font-semibold mb-2">Monthly Fellowship Gatherings</h3>
                  <p className="text-muted-foreground">Worship, teaching, and connecting with sisters in faith</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prayer Circles</h3>
                  <p className="text-muted-foreground">Dedicated times of intercession and prayer support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Life Skills Workshops</h3>
                  <p className="text-muted-foreground">Practical training for personal and professional development</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Outreach</h3>
                  <p className="text-muted-foreground">Serving our community through acts of love and compassion</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mother's Heart Ministry</h3>
                  <p className="text-muted-foreground">Supporting mothers in their journey of raising godly children</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Arts Ministry</h3>
                  <p className="text-muted-foreground">Expressing faith through arts, crafts, and creative worship</p>
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
                <CardTitle className="text-lg">Women's Conference</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual empowerment conference with inspiring speakers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Mother's Day Celebration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Honoring mothers and their invaluable contributions</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Tea & Testimony</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Monthly intimate sharing of God's goodness</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Young Women's Summit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Empowering the next generation of godly women</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Sisterhood</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every woman has a story, a purpose, and a calling. Join our Women's Ministry family 
            and discover the joy of walking in community with sisters who will encourage, 
            support, and celebrate your journey with Christ.
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

export default WomensMinistry;