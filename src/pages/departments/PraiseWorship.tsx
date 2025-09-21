import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Music, Mic, Guitar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import praiseWorshipHero from "@/assets/praise-worship-hero.jpg";

const PraiseWorship = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${praiseWorshipHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Praise & Worship Ministry</h1>
          <p className="text-xl md:text-2xl mb-8">Leading Hearts into God's Presence</p>
          <p className="text-lg">Worship • Lead • Inspire • Transform</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Heart for Worship</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Praise & Worship Ministry is dedicated to creating transformative worship experiences 
              that draw people into the presence of God. We believe worship is more than just music—it's 
              a lifestyle of honoring God through song, prayer, and authentic spiritual expression.
            </p>
            <p className="text-lg text-muted-foreground">
              Our team of talented musicians, vocalists, and worship leaders are committed to excellence 
              in ministry, blending technical skill with spiritual sensitivity to create an atmosphere 
              where hearts are touched, lives are changed, and God is glorified.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Music className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Pursuing musical and spiritual excellence in worship</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Heart</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Worshipping with authentic hearts and pure motives</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Mic className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Leading congregations into meaningful worship</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Guitar className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Creativity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Fresh expressions and creative worship experiences</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ministry Teams */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Ministry Teams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vocal Team</CardTitle>
                <CardDescription>Leading through song and harmony</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our skilled vocalists lead congregational singing, perform special music, 
                  and create beautiful harmonies that enhance the worship experience.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Instrumental Team</CardTitle>
                <CardDescription>Musical excellence in worship</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Talented musicians playing guitar, bass, drums, keyboards, and other instruments 
                  to provide the musical foundation for inspiring worship.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Worship Leaders</CardTitle>
                <CardDescription>Guiding hearts to God</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experienced worship leaders who not only lead music but facilitate 
                  authentic encounters with God through spirit-led worship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Ministry Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sunday Worship Services</h3>
                  <p className="text-muted-foreground">Leading worship for all Sunday services and special events</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Special Events</h3>
                  <p className="text-muted-foreground">Providing worship for conferences, revivals, and church celebrations</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Worship Training</h3>
                  <p className="text-muted-foreground">Developing and mentoring new worship leaders and musicians</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recording Ministry</h3>
                  <p className="text-muted-foreground">Creating original worship music and recording church services</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Worship Nights</h3>
                  <p className="text-muted-foreground">Special worship gatherings focused on extended times of praise</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seasonal Celebrations</h3>
                  <p className="text-muted-foreground">Christmas, Easter, and other holiday worship experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Join Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Vocalists</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lead vocals, background harmonies, and special solos</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Musicians</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Guitar, bass, drums, keyboard, and other instruments</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Audio Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Sound engineering and technical support</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Visual Arts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Lighting design and visual worship elements</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Worship Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spirit-Led Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We prioritize being sensitive to the Holy Spirit's leading, 
                  allowing for spontaneous worship moments and divine encounters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contemporary & Traditional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Blending contemporary worship songs with classic hymns to 
                  honor both tradition and innovation in worship.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Congregational Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our goal is to facilitate congregational worship, not just 
                  performance, ensuring everyone can participate meaningfully.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cultural Diversity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Incorporating music and worship styles from various cultures 
                  to reflect the diversity of God's kingdom.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Continuous training and development opportunities for all 
                  team members to grow in both skill and spiritual maturity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Heart Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Emphasis on personal worship and spiritual preparation, 
                  not just musical practice, before leading others.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Become a Worship Leader</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Do you have a heart for worship and a desire to lead others into God's presence? 
            Whether you're a seasoned musician or just starting your worship journey, 
            there's a place for you on our Praise & Worship Ministry team.
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

export default PraiseWorship;