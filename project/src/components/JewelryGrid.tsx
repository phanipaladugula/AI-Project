import React from 'react';
import { JewelryItem } from '../types';

const FEATURED_ITEMS: JewelryItem[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Ring',
    description: 'Classic 1-carat diamond engagement ring in 18k white gold',
    price: 5000,
    material: '18k White Gold',
    category: 'Rings',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Pearl Necklace',
    description: 'Elegant freshwater pearl necklace with sterling silver clasp',
    price: 300,
    material: 'Sterling Silver',
    category: 'Necklaces',
    imageUrl: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Sapphire Earrings',
    description: 'Beautiful blue sapphire and diamond drop earrings',
    price: 2500,
    material: '18k White Gold',
    category: 'Earrings',
    imageUrl: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800'
  }
];

export function JewelryGrid() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Featured Jewelry</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_ITEMS.map((item) => (
          <div key={item.id} className="group">
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-4 space-y-2">
              <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="text-sm font-medium text-gray-900">${item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}