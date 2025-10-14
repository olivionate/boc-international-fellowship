import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Phone, Mail, MapPin, Heart, Users, Calendar, Headphones, ChevronDown } from 'lucide-react';
import bocLogo from '@/assets/boc-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/leadership', label: 'Leadership' },
    { href: '/ministries', label: 'Ministries' },
    { href: '/departments', label: 'Departments' },
    { href: '/sermons', label: 'Sermons' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-primary-foreground py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">+254 721 658 788</span>
                <span className="lg:hidden">Call Us</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="hidden lg:inline">info@thebocfellowship.org</span>
                <span className="lg:hidden">Email</span>
              </div>
              <div className="hidden lg:flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                asChild
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20 text-xs sm:text-sm"
              >
                <Link to="/prayer-request">
                  <Heart className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Prayer Request</span>
                </Link>
              </Button>
              <Button 
                asChild
                variant="ghost" 
                size="sm" 
                className="text-primary-foreground hover:bg-white/20 text-xs sm:text-sm"
              >
                <a href="https://boctv.co.ke/" target="_blank" rel="noopener noreferrer">
                  <Headphones className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Live Stream</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 flex-1 min-w-0">
              <img 
                src={bocLogo} 
                alt="Body of Christ International Fellowship Logo" 
                className="w-12 h-12 md:w-16 md:h-16 object-contain flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base md:text-xl font-bold text-divine truncate">
                  Body of Christ International Fellowship
                </h1>
                <p className="text-xs md:text-sm text-muted-foreground hidden sm:block truncate">
                  A Beacon of Faith and Global Revival
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                if (item.label === 'Ministries') {
                  return (
                    <DropdownMenu key={item.href}>
                      <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                        <span>Ministries</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-background border z-50">
                        <DropdownMenuItem asChild>
                          <Link to="/ministries" className="w-full">All Ministries</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/global-ministers-assembly" className="w-full">Global Ministers Assembly</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/school-of-ministry" className="w-full">School of Ministry</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/global-outreach" className="w-full">Global Outreach</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/music-academy" className="w-full">Music Academy</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/boc-tv" className="w-full">BOC TV</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/ministries/prayer-ministry" className="w-full">Prayer Ministry</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                if (item.label === 'Departments') {
                  return (
                    <DropdownMenu key={item.href}>
                      <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-foreground">
                        <span>Departments</span>
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-background border z-50">
                        <DropdownMenuItem asChild>
                          <Link to="/departments/mens-empowerment" className="w-full">Men's Empowerment Fellowship</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/womens-ministry" className="w-full">Women's Ministry</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/hospitality" className="w-full">Hospitality Department</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/youth-ministry" className="w-full">Youth Ministry</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/teens-ministry" className="w-full">Teens Ministry</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/sunday-school" className="w-full">Sunday School</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/praise-worship" className="w-full">Praise & Worship Ministry</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/departments/compassion-mercy" className="w-full">Compassion & Mercy Ministry</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }
                return (
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
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <Button asChild className="btn-divine">
                <Link to="/give">
                  <Heart className="h-4 w-4 mr-2" />
                  Give Now
                </Link>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden flex-shrink-0">
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] overflow-y-auto">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    // Ministries dropdown
                    if (item.label === 'Ministries') {
                      return (
                        <div key={item.href} className="space-y-2">
                          <Link
                            to={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-base sm:text-lg font-medium transition-colors hover:text-primary py-2 block ${
                              location.pathname === item.href
                                ? 'text-primary'
                                : 'text-foreground'
                            }`}
                          >
                            {item.label}
                          </Link>
                          <div className="pl-4 space-y-2 border-l-2 border-border">
                            <Link
                              to="/ministries/global-ministers-assembly"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Global Ministers Assembly
                            </Link>
                            <Link
                              to="/ministries/school-of-ministry"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              School of Ministry
                            </Link>
                            <Link
                              to="/ministries/global-outreach"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Global Outreach
                            </Link>
                            <Link
                              to="/ministries/music-academy"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Music Academy
                            </Link>
                            <Link
                              to="/ministries/boc-tv"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              BOC TV
                            </Link>
                            <Link
                              to="/ministries/prayer-ministry"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Prayer Ministry
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    
                    // Departments dropdown
                    if (item.label === 'Departments') {
                      return (
                        <div key={item.href} className="space-y-2">
                          <span className="text-base sm:text-lg font-medium text-foreground py-2 block">
                            {item.label}
                          </span>
                          <div className="pl-4 space-y-2 border-l-2 border-border">
                            <Link
                              to="/departments/mens-empowerment"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Men's Empowerment Fellowship
                            </Link>
                            <Link
                              to="/departments/womens-ministry"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Women's Ministry
                            </Link>
                            <Link
                              to="/departments/hospitality"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Hospitality Department
                            </Link>
                            <Link
                              to="/departments/youth-ministry"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Youth Ministry
                            </Link>
                            <Link
                              to="/departments/teens-ministry"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Teens Ministry
                            </Link>
                            <Link
                              to="/departments/sunday-school"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Sunday School
                            </Link>
                            <Link
                              to="/departments/praise-worship"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Praise & Worship Ministry
                            </Link>
                            <Link
                              to="/departments/compassion-mercy"
                              onClick={() => setIsOpen(false)}
                              className="block text-sm py-1.5 text-muted-foreground hover:text-primary transition-colors"
                            >
                              Compassion & Mercy Ministry
                            </Link>
                          </div>
                        </div>
                      );
                    }
                    
                    // Regular nav items
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base sm:text-lg font-medium transition-colors hover:text-primary py-2 ${
                          location.pathname === item.href
                            ? 'text-primary'
                            : 'text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t border-border space-y-3">
                    <Button asChild className="btn-divine w-full touch-manipulation">
                      <Link to="/give" onClick={() => setIsOpen(false)}>
                        <Heart className="h-4 w-4 mr-2" />
                        Give Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full touch-manipulation">
                      <Link to="/prayer-request" onClick={() => setIsOpen(false)}>
                        <Heart className="h-4 w-4 mr-2" />
                        Prayer Request
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