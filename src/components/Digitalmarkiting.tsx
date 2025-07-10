import { Globe, Users, Star } from 'lucide-react';
import VideoPlayer from './VideoGallery';

const Digitalmarkiting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-fade-in">
         
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Find Your 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
               bliss 
              </span>
              with us
            </h1>
            
            <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
              Not that you really need an excuse to fly to a far-off country 
              in order to gain a world-class Tourism,
            </p>
            
            <p className="text-lg opacity-80">
              And for those of you who have already studied abroad, let us 
              know in the comments if you can think of any more good 
              reasons to  abroad and whether you agree with the list 
              so far!
            </p>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">50+</span>
                </div>
                <p className="opacity-80">Countries</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">10k+</span>
                </div>
                <p className="opacity-80">Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="opacity-80">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="animate-fade-in animation-delay-300">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digitalmarkiting;
