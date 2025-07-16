import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialData {
  name: string;
  role: string;
  message: string;
  rating: number;
  image?: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, role, message, rating } = testimonial;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Quote className="w-8 h-8 text-amber-500 mr-3" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic mb-6 flex-grow">
        "{message}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
          <span className="text-amber-600 font-semibold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const testimonials: TestimonialData[] = [
    {
      name: "Alice Rodriguez",
      role: "Executive Chef at Michelin Star Restaurant",
      message: "Francisco's culinary expertise is absolutely remarkable. His innovative approach to fusion cuisine and attention to detail make him one of the most talented chefs I've worked with. Every dish tells a story.",
      rating: 5
    },
    {
      name: "Bob Thompson",
      role: "Restaurant Owner",
      message: "Working with Francisco transformed our restaurant completely. His menu development skills and leadership in the kitchen increased our revenue by 40% in just six months. Very professional and creative.",
      rating: 5
    },
    {
      name: "Maria Gonzalez",
      role: "Food Critic",
      message: "Francisco's dishes are a perfect blend of traditional techniques and modern innovation. His presentation is artistic, and the flavors are unforgettable. A true culinary artist.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Culinary Institute Instructor",
      message: "As Francisco's former instructor, I can say he was one of our most dedicated students. His passion for cooking and continuous learning makes him an exceptional chef and mentor.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Event Coordinator",
      message: "Francisco catered our corporate events multiple times, and each experience was flawless. His team's professionalism and the quality of food always exceed expectations. Highly recommended!",
      rating: 5
    },
    {
      name: "James Mitchell",
      role: "Food & Beverage Director",
      message: "Francisco's expertise in menu planning and cost management helped us optimize our operations significantly. His knowledge of food safety and kitchen management is outstanding.",
      rating: 4
    },
    {
      name: "Elena Vasquez",
      role: "Private Client",
      message: "Francisco prepared a private dinner for our anniversary, and it was absolutely magical. Every course was perfectly executed, and his attention to dietary restrictions was impressive.",
      rating: 5
    },
    {
      name: "Michael Brown",
      role: "Sous Chef",
      message: "Learning under Francisco's guidance was an incredible experience. His teaching style and patience helped me develop skills I never thought possible. A true mentor and leader.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What People Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from colleagues, clients, and industry professionals about their experiences 
            working with Francisco Sahagun Castillo.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 mb-6">
            Join the list of satisfied clients and experience exceptional culinary services.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

