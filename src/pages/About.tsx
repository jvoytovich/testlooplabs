import React from 'react';
import { Brain, LineChart, Users } from 'lucide-react';

export function About() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About TestLoop Labs</h1>
          <p className="text-xl text-gray-600">
            We're a team of product experts and AI enthusiasts dedicated to helping businesses 
            achieve sustainable growth through data-driven experimentation and innovation.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Innovation First</h3>
            <p className="text-gray-600">
              We leverage cutting-edge AI and technology to solve complex business challenges.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <LineChart className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Data-Driven</h3>
            <p className="text-gray-600">
              Every decision and recommendation is backed by solid data and analytics.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-indigo-600" size={24} />
            </div>
            <h3 className="font-semibold mb-2">Client Success</h3>
            <p className="text-gray-600">
              Your growth and success are our top priorities. We succeed when you do.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-xl mb-2">John Smith</h3>
              <p className="text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in product management and AI, John leads our 
                mission to transform how businesses approach growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}