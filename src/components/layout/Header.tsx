import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail, MapPin, Heart, Users, Calendar, Headphones } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/events', label: 'Events' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 721 658 788</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@thebocfellowship.org</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                asChild
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20"
              >
                <Link to="/prayer-request">
                  <Heart className="h-4 w-4 mr-2" />
                  Prayer Request
                </Link>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20"
              >
                <Link to="/live">
                  <Headphones className="h-4 w-4 mr-2" />
                  Live Stream
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/981dc698-340d-4400-aa57-c58c5a9a9bee.png" 
                alt="Body of Christ International Fellowship Logo" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-divine">
                  Body of Christ International Fellowship
                </h1>
                <p className="text-sm text-muted-foreground">
                  A Beacon of Faith and Global Revival
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/contact">
                  <Users className="h-4 w-4 mr-2" />
                  Plan a Visit
                </Link>
              </Button>
              <Button asChild className="btn-divine">
                <Link to="/give">
                  <Heart className="h-4 w-4 mr-2" />
                  Give Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location.pathname === item.href
                          ? 'text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <Button asChild variant="outline" className="w-full mb-3">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <Users className="h-4 w-4 mr-2" />
                        Plan a Visit
                      </Link>
                    </Button>
                    <Button asChild className="btn-divine w-full">
                      <Link to="/give" onClick={() => setIsOpen(false)}>
                        <Heart className="h-4 w-4 mr-2" />
                        Give Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;