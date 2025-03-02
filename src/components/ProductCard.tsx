import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Product } from '../types';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.tagline}</p>
      <p className="text-gray-500 text-sm mb-6">{product.description}</p>
      <a 
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        <Button variant="secondary" className="gap-2">
          Visit Site
          <ExternalLink size={16} />
        </Button>
      </a>
    </div>
  );
}