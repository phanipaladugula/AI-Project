import React, { useState } from 'react';
import { Gem, Sparkles } from 'lucide-react';
import { PreferencesForm } from './components/PreferencesForm';
import { JewelryGrid } from './components/JewelryGrid';
import { RecommendationsList } from './components/RecommendationsList';
import { UserPreferences, Recommendation } from './types';
import { Toaster } from 'react-hot-toast';

function App() {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePreferencesSubmit = async (preferences: UserPreferences) => {
    setLoading(true);
    try {
      // TODO: Implement AI recommendations logic
      // For now, we'll use mock data
      const mockRecommendations: Recommendation[] = [
        {
          jewelryItem: {
            id: '1',
            name: 'Diamond Solitaire Ring',
            description: 'Classic 1-carat diamond engagement ring in 18k white gold',
            price: 5000,
            material: '18k White Gold',
            category: 'Rings',
            imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800'
          },
          reason: 'Based on your preference for classic styles and specified budget range.',
          confidence: 0.95
        }
      ];
      setRecommendations(mockRecommendations);
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Toaster position="top-center" />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Gem className="h-8 w-8 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">AI Jewelry Advisor</h1>
            </div>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <PreferencesForm onSubmit={handlePreferencesSubmit} isLoading={loading} />
          </div>
          <div className="lg:col-span-8">
            {recommendations.length > 0 ? (
              <RecommendationsList recommendations={recommendations} />
            ) : (
              <JewelryGrid />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;