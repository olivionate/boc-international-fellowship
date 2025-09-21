import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Coffee, Heart, HandHeart, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import hospitalityHero from "@/assets/hospitality-department-hero.jpg";

const HospitalityDepartment = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hospitalityHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Hospitality Department</h1>
          <p className="text-xl md:text-2xl mb-8">Creating a Welcoming Environment of Love</p>
          <p className="text-lg">Welcome • Serve • Care • Connect</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              The mission of our Hospitality Department is to provide a welcoming environment of love, 
              acceptance, comfort, support, care, and unity for visitors, members, guests, and friends. 
              We aim to enhance their worship experience, encourage fellowship, and help build a community of believers.
            </p>
            <p className="text-lg text-muted-foreground">
              We serve to reflect the love of Christ through expressions of gratitude, excitement, and enthusiasm, 
              creating an inviting atmosphere that makes everyone feel at home in God's house.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Smile className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Welcome</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Creating warm first impressions for all who enter</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Coffee className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Providing refreshments and comfortable spaces</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <HandHeart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Serving with joy and excellence in all we do</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Connection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Helping people connect and build relationships</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Guest Services</CardTitle>
                <CardDescription>First impressions that last</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our trained greeters welcome everyone with warm smiles, helpful information, 
                  and assistance to ensure every visitor feels valued and at home.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Refreshment Ministry</CardTitle>
                <CardDescription>Fellowship through food and drink</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide quality refreshments before and after services, creating opportunities 
                  for fellowship and meaningful conversations among members and visitors.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Event Coordination</CardTitle>
                <CardDescription>Excellence in every detail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From special services to community events, we coordinate logistics, decorations, 
                  and hospitality services to ensure memorable experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Functions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Key Functions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visitor Welcome</h3>
                  <p className="text-muted-foreground">Greeting and orienting first-time visitors and guests</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Information Services</h3>
                  <p className="text-muted-foreground">Providing church information, directions, and assistance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibrel mb-2">Fellowship Enhancement</h3>
                  <p className="text-muted-foreground">Creating opportunities for meaningful connections</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Special Events Support</h3>
                  <p className="text-muted-foreground">Coordinating hospitality for church events and functions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Care & Comfort</h3>
                  <p className="text-muted-foreground">Ensuring physical comfort and emotional warmth</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow-up Ministry</h3>
                  <p className="text-muted-foreground">Connecting with visitors after their initial visit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Greeter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Welcome people with warmth and smiles at the door</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Usher</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Assist with seating and service coordination</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Refreshment Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Prepare and serve coffee, tea, and snacks</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Event Coordinator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Help plan and execute special church events</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Hospitality Team</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Do you have a heart for serving others and creating welcoming environments? 
            Join our Hospitality Department and be part of making everyone who enters 
            our church feel the love of Christ through excellent service and warm hospitality.
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

export default HospitalityDepartment;