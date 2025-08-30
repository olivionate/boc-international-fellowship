import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter,
  Heart,
  Clock,
  Calendar
} from 'lucide-react';
import bcifLogo from '/lovable-uploads/c9fcc8f7-2aee-47bc-8e18-6df1669bd974.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-worship text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src={bcifLogo} 
                  alt="BCIF Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">BCIF</h3>
                <p className="text-sm opacity-90">Body of Christ International Fellowship</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A vibrant, Christ-centered Christian church with a profound calling to impact 
              the world through spiritual empowerment and global outreach.
            </p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/20">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/leadership" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Leadership Team
              </Link>
              <Link to="/ministries" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Our Ministries
              </Link>
              <Link to="/events" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Upcoming Events
              </Link>
              <Link to="/sermons" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Sermons & Messages
              </Link>
              <Link to="/give" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">
                Online Giving
              </Link>
            </div>
          </div>

          {/* Service Times */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">Service Times</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm font-medium">Sunday Worship</p>
                  <p className="text-xs opacity-80">8:00 AM & 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm font-medium">Wednesday Healing & Restoration Service</p>
                  <p className="text-xs opacity-80">6:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm font-medium">Friday Holy Spirit Outpouring Night</p>
                  <p className="text-xs opacity-80">9:00 PM - 5:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 opacity-80" />
                <div>
                  <p className="text-sm">Nairobi, Kenya</p>
                  <p className="text-xs opacity-80">Headquarters</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <p className="text-sm">+254721658788</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <p className="text-sm">info@thebocfellowship.org</p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-medium text-secondary mb-2">Stay Connected</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © 2024 Body of Christ International Fellowship. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;