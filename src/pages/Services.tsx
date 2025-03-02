import React from 'react';
import { services } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';

export function Services() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to help your business grow through data-driven experimentation
            and AI innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => window.location.href = '/contact'}>
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}