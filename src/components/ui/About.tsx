'use client'
import { motion } from "motion/react"
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* About Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">ABOUT US</h2>
            <h3 className="text-xl text-gray-600 mb-6">Better Travel Packages like any other</h3>
            <div className="w-12 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-600 leading-relaxed mb-8">
            Blissful Travels and Tours Agency is a private retailer or public service that provides travel and tourism 
              related services to the public on behalf of suppliers such as activities  airlines car rentals cruise lines, 
              hotels &#39 railways  travel insurance  and package tours.
            </p>
            <Button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
              JOIN ADVENTURE
            </Button>
          </div>
          
          {/* Center Image */}
          <div className="relative">
            <div className="world-globe">
              <div className="absolute inset-0 rounded-full  p-4">
                <div className="w-full h-full rounded-full flex items-center justify-center relative">
                  {/* Landmarks around globe */}
                   <motion.img src="https://bmtandt.com/wp-content/uploads/2019/03/world-img.png" animate={{rotate: 360}} 
                         transition={{duration: 10, repeat: Infinity, ease: "linear"}} className="absolute"/>
                </div>
              </div>
            </div>
            <div className="text-center pb-80 gap-y-10 sm:mt-0">
              <h3 className="text-2xl font-bold text-blue-600">Travel through the Amazing</h3>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                BLISSFUL TRAVEL
              </h2>
              <p className="text-gray-500 tracking-widest">GREATER TOURISM</p>
            </div>
          </div>
          
          {/* Our Mission */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">OUR MISSION</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              To serve our clients with enhanced travel experience by providing quality service that address their Travel 
              needs, through the most efficient arrangements so that customer loyalty, superior financial results and 
              excellent customer satisfaction can be achieved.
            </p>
            
            {/* Awards */}
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-xs text-gray-500">WINGSTONE<br />AWARDS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-xs text-gray-500">BEST<br />HOTEL</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏅</div>
                <div className="text-xs text-gray-500">2018<br />People Choice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


