import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Heart, HandHeart, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import compassionMercyHero from "@/assets/compassion-mercy-hero.jpg";

const CompassionMercy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${compassionMercyHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Compassion & Mercy Ministry</h1>
          <p className="text-xl md:text-2xl mb-8">Extending Christ's Love to Those in Need</p>
          <p className="text-lg">Care • Serve • Heal • Transform</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Compassion & Mercy Ministry embodies Christ's heart for the marginalized, forgotten, 
              and hurting in our community and beyond. We are committed to demonstrating God's love 
              through practical acts of service, care, and support for those facing various challenges and hardships.
            </p>
            <p className="text-lg text-muted-foreground">
              Rooted in the Gospel and following Jesus' example of compassionate ministry, we serve 
              as His hands and feet, bringing hope, healing, and transformation to individuals and 
              families in need, while sharing the message of God's redeeming love.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Heart-driven care for those who are suffering</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <HandHeart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Practical help and support for physical needs</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building bridges and restoring relationships</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Justice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Advocating for the marginalized and oppressed</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ministry Areas */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Ministry Areas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Community Outreach</CardTitle>
                <CardDescription>Serving our local neighborhood</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular outreach programs including food distribution, clothing drives, 
                  and community events that demonstrate Christ's love to our neighbors.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Crisis Response</CardTitle>
                <CardDescription>Emergency assistance and support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Rapid response to natural disasters, family emergencies, and community crises 
                  with both immediate relief and long-term recovery support.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Social Welfare</CardTitle>
                <CardDescription>Addressing systemic needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Programs focused on breaking cycles of poverty through education, job training, 
                  healthcare access, and sustainable community development initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs & Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Programs & Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Food Assistance Program</h3>
                  <p className="text-muted-foreground">Food pantry, soup kitchen, and nutritional support for families</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Clothing & Essential Items</h3>
                  <p className="text-muted-foreground">Clothing closet and distribution of household necessities</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Healthcare Outreach</h3>
                  <p className="text-muted-foreground">Medical camps, health screenings, and wellness education</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Educational Support</h3>
                  <p className="text-muted-foreground">School supplies, tutoring, and scholarship programs</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Job Training & Employment</h3>
                  <p className="text-muted-foreground">Vocational training and job placement assistance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Housing Assistance</h3>
                  <p className="text-muted-foreground">Temporary shelter and housing stability support</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">7</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Elderly Care Ministry</h3>
                  <p className="text-muted-foreground">Companionship, assistance, and care for senior citizens</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">8</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Addiction Recovery Support</h3>
                  <p className="text-muted-foreground">Programs for those struggling with substance abuse</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Ways to Get Involved</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Food Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Help prepare and serve meals to those in need</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Outreach Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Visit communities and distribute aid and support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Administrative Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Help with coordination, logistics, and planning</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Fundraising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Help raise resources for ministry programs</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Impact & Partnerships */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Impact & Partnerships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Local Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collaborating with local organizations, schools, and government agencies 
                  to maximize our community impact and avoid duplication of services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">International Missions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Supporting compassion ministries globally through partnerships 
                  with international organizations and mission agencies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sustainable Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Focusing on long-term solutions that empower communities and 
                  individuals to break cycles of poverty and dependency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Holistic Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Addressing not just physical needs but also emotional, spiritual, 
                  and psychological aspects of human flourishing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Advocacy & Justice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Speaking up for the voiceless and working toward systemic changes 
                  that address root causes of poverty and injustice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Community Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating opportunities for relationship building and community 
                  connections that go beyond just meeting immediate needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join Us in Making a Difference</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jesus said, "Whatever you did for one of the least of these brothers and sisters of mine, 
            you did for me." Join our Compassion & Mercy Ministry and be part of transforming lives 
            and communities through the love and power of Christ.
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

export default CompassionMercy;