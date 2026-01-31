import React, { useState } from 'react';
import { BookOpen, Users, Award, ArrowRight, Menu, X, GraduationCap, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-slate-800 backdrop-blur border-b border-slate-900 z-60">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white tracking-tight">LMS</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <Link to="/courses" className="text-slate-300 hover:text-white transition-colors font-medium">
                Courses
              </Link>
              <Link to="/login" className="text-slate-300 hover:text-white transition-colors font-medium">
                Login
              </Link>
              <Link to="/signup" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <br />

      {/* Hero Section */}
      <div className="pt-50 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                  Empowering Learning Anytime, Anywhere                  
                </h1>
                <p className="text-lg text-slate-400 max-w-lg">
                    A smart learning management system designed to support students, teachers, and institutions with seamless online education.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup" className="group bg-teal-500 hover:bg-teal   -600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/login" className="bg-teal-500 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                  Login Now
                </Link>
              </div>
            </div>

            {/* Right Content - Student Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl overflow-hidden shadow-2xl ">
                <div
                style={{
                  backgroundImage:
                  "url('https://npr.brightspotcdn.com/dims4/default/850189d/2147483647/strip/true/crop/1392x926+0+0/resize/880x585!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F15%2F70%2Fbafd99fa4cb6a51248cde7070bf7%2Fgraduate.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'right',
                  width: '100%',
                  height: '100%',
                  minHeight: '400px',
                }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    

      {/* Footer */}
      <footer className="fixed inset-x-0 bottom-0 bg-slate-800 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">     
            <p className="text-center text-slate-400 text-sm">
              © 2026 LMS. All rights reserved.
            </p>
          </div>
      </footer>
    </div>
  );
}