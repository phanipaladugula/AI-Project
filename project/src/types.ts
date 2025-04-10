export interface JewelryItem {
  id: string;
  name: string;
  description: string;
  price: number;
  material: string;
  category: string;
  imageUrl: string;
}

export interface UserPreferences {
  style: string;
  material: string;
  minBudget: number;
  maxBudget: number;
  occasion: string;
}

export interface Recommendation {
  jewelryItem: JewelryItem;
  reason: string;
  confidence: number;
}