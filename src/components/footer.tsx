"use client"

import {  Mail, Phone} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="min-h-auto bg-white">
      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Newsletter Section */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">SUBSCRIBE TO NEWSLETTER</h3>
              <form onSubmit={handleNewsletterSubmit} className="mb-4">
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-r-none bg-gray-800 text-white placeholder:text-gray-400 border-gray-600"
                    required
                  />
                  <Button 
                    type="submit"
                    className="rounded-l-none bg-gray-600 hover:bg-gray-700 px-6"
                  >
                    SEND
                  </Button>
                </div>
              </form>
           
            </div>

            {/* Keranigorj Branch */}
        

            {/* Corporate Office */}
            <div>
              <h4 className="font-semibold mb-4 text-gray-800">Corporate Office:</h4>
              <div className="text-gray-600 space-y-2">
                <p>Jomidar Palace,(Room #C-8)Inner Circular Road,291,Fakirapool Motijheel,Dhaka-1000</p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Blissfultravels11@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Hotline: +880 1715-179825</span>
                </div>
              </div>
            </div>

            {/* Additional Links */}
          
          </div>

          {/* Bottom Footer */}
          <div className="border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2019 Developed By @ Blissful Travels and Tours 
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Help</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Send Feedback</a>
                <span className="text-gray-400">|</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer
