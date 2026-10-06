export const categories = [
  { id: 'wellness', name: 'Wellness & Drinks', icon: '✿' },
  { id: 'sweeteners', name: 'Natural Sweeteners', icon: '◌' },
  { id: 'staples', name: 'Organic Staples', icon: '⌁' },
  { id: 'bodycare', name: 'Natural Body Care', icon: '❋' },
  { id: 'home', name: 'Eco Home', icon: '⌂' },
  { id: 'gifts', name: 'Conscious Gifts', icon: '♡' }
];

export const products = [
  { id: 'po-chia', name: 'Organic Chia Seeds', category: 'staples', price: 230, oldPrice: 260, badge: 'Bestseller', size: '200 g', tone: 'sand', description: 'Pure, unroasted chia seeds with no additives.', tags: ['Organic', 'No additives', 'Plant-based'] },
  { id: 'po-jaggery', name: 'Organic Jaggery Powder', category: 'sweeteners', price: 215, oldPrice: 255, badge: 'Popular', size: '800 g', tone: 'amber', description: 'Naturally sweet jaggery powder, free from additives and preservatives.', tags: ['Natural', 'No preservatives'] },
  { id: 'po-cacao', name: 'Organic Cacao Powder', category: 'wellness', price: 336, oldPrice: 375, badge: 'Pure', size: '100 g', tone: 'cocoa', description: 'Unsweetened, non-alkalised cacao for drinks, baking and desserts.', tags: ['Unsweetened', 'Vegan'] },
  { id: 'po-oats', name: 'Old-Fashioned Rolled Oats', category: 'staples', price: 260, oldPrice: 290, badge: '', size: '600 g', tone: 'oat', description: 'Wholesome rolled oats for simple, nourishing breakfasts.', tags: ['Whole grain', 'Gluten-free'] },
  { id: 'po-moringa', name: 'Moringa Leaf Powder', category: 'wellness', price: 235, oldPrice: 260, badge: 'New', size: '100 g', tone: 'leaf', description: 'Naturally dried moringa leaf powder for everyday recipes.', tags: ['Organic', 'Plant-based'] },
  { id: 'po-neemsoap', name: 'Neem & Tulsi Soap', category: 'bodycare', price: 235, oldPrice: 250, badge: '', size: '120 g', tone: 'sage', description: 'A gentle handcrafted soap made with botanical ingredients.', tags: ['Handcrafted', 'Cruelty-free'] },
  { id: 'po-biofloor', name: 'Bio-Enzyme Floor Cleaner', category: 'home', price: 399, oldPrice: 450, badge: 'Eco', size: '1.9 L', tone: 'mint', description: 'Plant-based cleaning concentrate for a fresher home.', tags: ['Biodegradable', 'Plant-based'] },
  { id: 'po-gift', name: 'Natural Wellness Gift Box', category: 'gifts', price: 875, oldPrice: 990, badge: 'Gift', size: '1 box', tone: 'rose', description: 'A thoughtful collection of everyday natural essentials.', tags: ['Gift-ready', 'Eco packaging'] }
];

export function getProduct(id) { return products.find(p => p.id === id); }
