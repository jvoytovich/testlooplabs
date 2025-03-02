import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';

export function Products() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">AI Product Portfolio</h1>
          <p className="text-xl text-gray-600">
            Cutting-edge AI solutions designed to optimize your product strategy and drive growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => window.location.href = '/contact'}>
            Get Custom Solution
          </Button>
        </div>
      </div>
    </div>
  );
}