import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function HomeFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Contact Information - Full width on top */}
          <div className="lg:col-span-5 border-b border-gray-700 pb-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              We're here to help you plan your perfect stay
            </p>
            
          </div>

          {/* Bottom section with 4 columns */}
          {/* RP Hotel Description */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">RP Hotel</h3>
            <p className="text-gray-300">
              Experience luxury and comfort at its finest.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/guest" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className='text-center md:text-left'>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cancellation" className="hover:text-white transition-colors">Cancellation</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className='text-center md:text-left'>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Github</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright with line */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-gray-400">
            © 2025 RP Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

