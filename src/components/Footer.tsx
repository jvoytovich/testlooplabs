import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TestLoop Labs</h3>
            <p className="text-gray-400">
              Empowering businesses with AI-driven solutions and data-backed growth strategies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-400 hover:text-white">Services</a>
              <a href="/products" className="block text-gray-400 hover:text-white">Products</a>
              <a href="/about" className="block text-gray-400 hover:text-white">About</a>
              <a href="/contact" className="block text-gray-400 hover:text-white">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TestLoop Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}