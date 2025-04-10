import React from 'react';
import { Recommendation } from '../types';
import { Star } from 'lucide-react';

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

export function RecommendationsList({ recommendations }: RecommendationsListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">AI Recommendations</h2>
      <div className="space-y-8">
        {recommendations.map((recommendation) => (
          <div key={recommendation.jewelryItem.id} className="flex space-x-6">
            <div className="flex-shrink-0 w-48 h-48">
              <img
                src={recommendation.jewelryItem.imageUrl}
                alt={recommendation.jewelryItem.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">
                {recommendation.jewelryItem.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {recommendation.jewelryItem.description}
              </p>
              <div className="mt-2 flex items-center">
                <Star
                  className="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                />
                <span className="ml-1 text-sm text-gray-600">
                  {Math.round(recommendation.confidence * 100)}% match
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-700">{recommendation.reason}</p>
              <p className="mt-2 text-lg font-medium text-gray-900">
                ${recommendation.jewelryItem.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}