"use client"

import { Globe, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const StudyAbroadStats = () => {
  const stats = [
    {
      icon: Globe,
      number: "195+",
      label: "Countries Available",
      color: "text-blue-600"
    },
    {
      icon: Users,
      number: "500K+",
      label: "Students Helped",
      color: "text-emerald-600"
    },
    {
      icon: Award,
      number: "1,200+",
      label: "University Partners",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-lg text-gray-600">
            Join the global community of successful international students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-0 space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${
                  stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' :
                  stat.color === 'text-emerald-600' ? 'from-emerald-100 to-emerald-200' :
                  stat.color === 'text-purple-600' ? 'from-purple-100 to-purple-200' :
                  'from-orange-100 to-orange-200'
                }`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadStats;