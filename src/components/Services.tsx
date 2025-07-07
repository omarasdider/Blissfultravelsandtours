"use client"

import Image from 'next/image';
import React from 'react';




const Services = () => {
  return (
    <section className="py-1 bg-gradient-to-r from-cyan-400 to-teal-400 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div>
            <h2 className="text-4xl font-bold mb-8">SERVICES</h2>
            <p className="text-lg mb-8 opacity-90">
              Cheap Air Ticket of All Airlines Domestic & International<br />
              Package Tour (Inbound & Outbound)
            </p>
            
            <div className="space-y-8">
              {/* Service 1 */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Cheap Air Ticket of All Airlines Domestic & International
                  </h3>
                </div>
              </div>
              
              {/* Service 2 */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎒</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Private & Customized Tours</h3>
                  <p className="opacity-80">
                    Dummy text ever since the 1500s, when an unknown printer took. A galley of type and scrambled it to make a type
                  </p>
                </div>
              </div>
              
              {/* Service 3 */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">🕌</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hajj & Omrah Services</h3>
                  <p className="opacity-80">
                    Offers best Hajj & Umrah packages for family, groups, colleagues from Dhaka, Bangladesh. Fulfill your noble desire to perform holy Hajj & Umrah
                  </p>
                </div>
              </div>
              
              {/* Service 4 */}
              <div className="flex items-start gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">All Kinds of Visa Processing</h3>
                </div>
              </div>
            </div>
          </div>
          
          {/* CEO Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Proprietor & CEO</h3>
            <div className="inline-block border-4 border-white rounded-lg p-2 mb-6">
              <Image 
                src="/web.jpg" 
                alt="CEO" 
                className="w-64 h-80 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>
  
    </section>
  );
};

export default Services;
