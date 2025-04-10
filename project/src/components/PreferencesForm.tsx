import React from 'react';
import { UserPreferences } from '../types';
import { Send } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: UserPreferences) => void;
  isLoading: boolean;
}

export function PreferencesForm({ onSubmit, isLoading }: PreferencesFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const preferences: UserPreferences = {
      style: formData.get('style') as string,
      material: formData.get('material') as string,
      minBudget: Number(formData.get('minBudget')),
      maxBudget: Number(formData.get('maxBudget')),
      occasion: formData.get('occasion') as string
    };

    onSubmit(preferences);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Preferences</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="style" className="block text-sm font-medium text-gray-700">
            Style
          </label>
          <select
            id="style"
            name="style"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          >
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
            <option value="vintage">Vintage</option>
            <option value="minimalist">Minimalist</option>
          </select>
        </div>

        <div>
          <label htmlFor="material" className="block text-sm font-medium text-gray-700">
            Preferred Material
          </label>
          <select
            id="material"
            name="material"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          >
            <option value="gold">Gold</option>
            <option value="white-gold">White Gold</option>
            <option value="rose-gold">Rose Gold</option>
            <option value="platinum">Platinum</option>
            <option value="silver">Silver</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="minBudget" className="block text-sm font-medium text-gray-700">
              Min Budget ($)
            </label>
            <input
              type="number"
              id="minBudget"
              name="minBudget"
              min="0"
              step="100"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700">
              Max Budget ($)
            </label>
            <input
              type="number"
              id="maxBudget"
              name="maxBudget"
              min="0"
              step="100"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">
            Occasion
          </label>
          <select
            id="occasion"
            name="occasion"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            required
          >
            <option value="engagement">Engagement</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            'Getting Recommendations...'
          ) : (
            <>
              Get Recommendations
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}