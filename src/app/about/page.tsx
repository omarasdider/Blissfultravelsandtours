import React from 'react';
import { Plane, Globe, Car, Hotel, Shield, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-sky-400 via-cyan-500 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Travel imagery and company info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <Plane className="w-16 h-16 text-white" />
                <Globe className="w-12 h-12 text-blue-100" />
                <Car className="w-10 h-10 text-blue-200" />
              </div>
              
              <div className="bg-cyan-600 p-6 rounded-lg">
                <h1 className="text-3xl font-bold mb-2">Abdul Awal</h1>
                <p className="text-xl text-cyan-100">Proprietor & CEO</p>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The company diversified business its interests around the world. Over the years the 
                  company has endeavored to maintain its pioneering traditions in the field of travel and 
                  tourism and is continuing in its efforts to provide an impeccable range of quality services. 
                 Blissful Travels and Tours is not only a travel agency but also arranges inbound services to 
                  tourists hotel rooms, apartments limousine services car rental and a variety of services 
                  inclusive of various assistances in local market for outbound enquiries.
                </p>
                
                <p>
                  We also provide travel services for individuals families as well as groups We are well known 
                  in the international market and tourism industry due to our excellent reputation. The 
                  officers are specialized and are famous for their services for trade fairs & exhibitions 
                  worldwide. I would like to thank our dedicated management staff and valued customers
                  without whom these achievements would not have been possible.
                </p>
                
                <p className="font-semibold">Find Your Bliss With Us</p>
              </div>
            </div>
            
            {/* Right side - CEO Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-4 rounded-lg shadow-2xl">
                <Image
                  
                  src="/Trade-Licence.jpg"
                  alt="Abdul Awal"
                  className="w-80 h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-cyan-600 mb-4">ABOUT US</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Blissful Travels and Tours Agency is a private retailer or public service that provides travel and 
                tourism related services to the public on behalf of suppliers such as activities airlines car 
                rentals cruise lines hotels railways travel insurance and package tours.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Plane className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flight Booking</h3>
                <p className="text-gray-600">International and domestic flight reservations with best prices</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Hotel className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hotel Booking</h3>
                <p className="text-gray-600">Luxury hotels apartments and limousine services worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Car className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Car Rental</h3>
                <p className="text-gray-600">Professional car rental services for all your travel needs</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Travel Insurance</h3>
                <p className="text-gray-600">Comprehensive travel insurance for peace of mind</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Package Tours</h3>
                <p className="text-gray-600">Customized tour packages for individuals and groups</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trade Fairs</h3>
                <p className="text-gray-600">Specialized services for trade fairs and exhibitions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">OUR VISION</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <p className="text-white text-lg leading-relaxed text-center">
                The Average Employee Is Wasting Between 50%-80% Of Their Day On Non Work Related 
                Distractions. Time Wasted Is Money Wasted Thats Money That Could Stay In Your Pocket 
                Simply By Changing The Way You Assign Your Tasks.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Blissful Travels and Tours</h3>
          <p className="text-gray-400">Your trusted partner for all travel and tourism needs</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
