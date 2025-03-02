import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function Contact() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Ready to transform your product strategy? We're here to help.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-indigo-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-indigo-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">hello@testlooplabs.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-indigo-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}