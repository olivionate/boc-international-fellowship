import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Heart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import sundaySchoolHero from "@/assets/sunday-school-hero.jpg";
import sundaySchoolNursery from "@/assets/sunday-school-nursery.jpg";
import sundaySchoolToddlers from "@/assets/sunday-school-toddlers.jpg";
import sundaySchoolElementary from "@/assets/sunday-school-elementary.jpg";

const SundaySchool = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sundaySchoolHero})` }}>
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sunday School</h1>
          <p className="text-xl md:text-2xl mb-8">Building Strong Foundations in Faith</p>
          <p className="text-lg">Learn • Play • Grow • Discover</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Sunday School is dedicated to providing age-appropriate, engaging, and meaningful 
              Christian education for children from infancy through elementary school. We believe 
              that these early years are crucial for laying a strong foundation of faith, character, 
              and biblical knowledge.
            </p>
            <p className="text-lg text-muted-foreground">
              Through creative storytelling, interactive activities, music, and play, we make 
              learning about God's love fun and memorable. Our caring teachers create a safe, 
              nurturing environment where children can ask questions, explore their faith, 
              and develop a personal relationship with Jesus.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Age-appropriate Bible stories and Christian principles</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Love</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Caring teachers who genuinely love each child</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Fun</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Engaging activities that make learning enjoyable</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-xl">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Building friendships and belonging in God's family</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Age Groups Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Age Groups</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sundaySchoolNursery} 
                  alt="African babies and toddlers in church nursery with caring teacher"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Nursery (0-2 years)</CardTitle>
                <CardDescription>Safe care for our littlest ones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional childcare in a secure, loving environment with gentle introduction 
                  to Christian songs, prayer, and God's love through caring interactions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sundaySchoolToddlers} 
                  alt="African toddlers in Sunday School learning about Jesus"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Toddlers (2-4 years)</CardTitle>
                <CardDescription>First steps in faith</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simple Bible stories, Christian songs, basic prayers, and activities designed 
                  for short attention spans. Focus on God's love and Jesus as their friend.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sundaySchoolElementary} 
                  alt="African elementary children engaged in Bible study class"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Elementary (5-12 years)</CardTitle>
                <CardDescription>Building biblical foundations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive Bible curriculum covering Old and New Testament stories, 
                  character building, memory verses, and practical Christian living.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Curriculum Features */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Our Curriculum Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Bible Stories</h3>
                  <p className="text-muted-foreground">Engaging storytelling with visual aids, props, and participation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Creative Activities</h3>
                  <p className="text-muted-foreground">Arts and crafts that reinforce biblical lessons</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Worship & Music</h3>
                  <p className="text-muted-foreground">Age-appropriate Christian songs and worship experiences</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Memory Verses</h3>
                  <p className="text-muted-foreground">Scripture memorization made fun and rewarding</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Character Building</h3>
                  <p className="text-muted-foreground">Teaching Christian values and godly character traits</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Prayer Time</h3>
                  <p className="text-muted-foreground">Teaching children to communicate with God</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Events */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Special Events & Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Vacation Bible School</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Week-long summer program with themes, games, and activities</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Christmas Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Annual Christmas pageant celebrating Jesus' birth</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Easter Celebration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Resurrection celebration with egg hunts and activities</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Family Fun Days</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Events that bring families together for fellowship</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Our Sunday School */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Our Sunday School?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qualified Teachers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Background-checked volunteers with training in child development 
                  and age-appropriate teaching methods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Safe Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Secure check-in system, clean facilities, and strict safety 
                  protocols to ensure your child's wellbeing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Biblical Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Solid biblical curriculum that teaches core Christian beliefs 
                  and helps children develop a personal faith.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Parent Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Take-home materials and communication to help parents 
                  continue spiritual development at home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Individual Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Small class sizes ensure each child receives personal 
                  attention and care from dedicated teachers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Holistic Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Programs that develop not just biblical knowledge but also 
                  social skills, creativity, and emotional intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Give Your Child the Best Foundation</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            There's no better gift you can give your child than a strong foundation in faith. 
            Join our Sunday School family and watch your child grow in knowledge, character, 
            and love for Jesus in a fun, safe, and nurturing environment.
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

export default SundaySchool;