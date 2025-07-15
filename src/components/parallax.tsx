"use client"


import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './ui/button';

interface CarouselSlide {
  id: number;
  backgroundImage: string;
  foregroundImage: string;
}

const ParallaxCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: CarouselSlide[] = [
  {
    id: 1 ,
       backgroundImage: 'https://bmtandt.com/wp-content/uploads/2019/03/1318238.jpg',
     foregroundImage: 'https://bmtandt.com/wp-content/uploads/2019/03/1318238.jpg',
  },
  {
    id: 2 ,
       backgroundImage: 'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/36c86371742902c8924cf8b9c361e92bceaa229acb3b78fde946849f612b26e2.jpg',
     foregroundImage: 'https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/36c86371742902c8924cf8b9c361e92bceaa229acb3b78fde946849f612b26e2.jpg',
  },


   {
     id:3,
      backgroundImage: 'https://bmtandt.com/wp-content/uploads/2019/03/408006.webp',
       foregroundImage: 'https://bmtandt.com/wp-content/uploads/2019/03/408006.webp',
   },
   {
    id: 4,
    backgroundImage: "https://bmtandt.com/wp-content/uploads/2019/03/thailand-3840x2160-5k-4k-wallpaper-8k-beach-shore-boat-rocks-travel-6487-scaled.jpg",
    foregroundImage: "https://bmtandt.com/wp-content/uploads/2019/03/thailand-3840x2160-5k-4k-wallpaper-8k-beach-shore-boat-rocks-travel-6487-scaled.jpg"
   },

 



  {
    id: 5,
    backgroundImage: 'https://www.blissfulholidays.com/images/banner/cordelia-cruises-1627888938-1_crop.jpg',
    foregroundImage: 'https://www.blissfulholidays.com/images/banner/cordelia-cruises-1627888938-1_crop.jpg',
  }
  
  

  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background Layer with Dolly Zoom */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={`bg-${slide.id}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-out ${
                index === currentSlide 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out ${
                  index === currentSlide ? 'animate-collapsible-up' : ''
                }`}
                style={{
                  backgroundImage: `url(${slide.backgroundImage})`,
                  filter: 'blur(1px) brightness(0.7)',
                  transform: index === currentSlide ? 'scale(1)' : 'scale(1.5)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Foreground Layer with Parallax Dolly Zoom */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={`fg-${slide.id}`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-out ${
                index === currentSlide 
                  ? 'opacity-95' 
                  : 'opacity-0'
              }`}
            >
                
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out ${
                  index === currentSlide ? 'animate-dolly-zoom-fg' : ''
                }`}
                style={{
                  backgroundImage: `url(${slide.foregroundImage})`,
                  mixBlendMode: 'overlay',
                  transform: index === currentSlide ? 'scale(1)' : 'scale(1.3)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlay for better visual depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-10 sm:mb-6 tracking-wider animate-fade-in">
          Find Your Bliss With Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 animate-fade-in px-4">
         Book Flights • Hotels • Holiday Packages
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in px-4">
          <Button
           size="lg" 
            className="bg-blue-900/80 hover:bg-blue-800 text-white border-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"   >
           🏨 HOTELS
          </Button>
          <Button 
            size="lg" 
            className="bg-blue-600/80 hover:bg-blue-500 text-white border-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"  >
            📦 PACKAGES
          </Button>
        </div>
          </div>

      {/* Custom CSS for Dolly Zoom Animation */}
      <style>{`
        @keyframes dolly-zoom-bg {
          0% { transform: scale(1.5); }
          100% { transform: scale(1); }
        }
        
        @keyframes dolly-zoom-fg {
          0% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        
        .animate-dolly-zoom-bg {
          animation: dolly-zoom-bg 8s ease-out;
        }
        
        .animate-dolly-zoom-fg {
          animation: dolly-zoom-fg 8s ease-out;
        }
      `}
      </style>
      </div>
 </>
    );
}


export default ParallaxCarousel



  
   
  
    
    
 
 

    // 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1467348733814-f93fc480bec6?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop',
    // 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1920&h=1080&fit=crop'

