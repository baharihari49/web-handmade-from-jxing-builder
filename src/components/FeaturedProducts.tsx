import { Heart, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Handwoven Macramé Wall Hanging',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
    category: 'Home Decor',
  },
  {
    id: 2,
    name: 'Ceramic Coffee Mug Set',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop',
    category: 'Pottery',
  },
  {
    id: 3,
    name: 'Hand-knitted Wool Throw Blanket',
    price: 125.00,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop',
    category: 'Textiles',
  },
  {
    id: 4,
    name: 'Sterling Silver Pendant Necklace',
    price: 78.50,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    category: 'Jewelry',
  },
  {
    id: 5,
    name: 'Wooden Cutting Board',
    price: 55.00,
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=500&h=500&fit=crop',
    category: 'Woodwork',
  },
  {
    id: 6,
    name: 'Artisan Scented Candle Set',
    price: 38.00,
    image: 'https://images.unsplash.com/photo-1602874801006-e24246df3b90?w=500&h=500&fit=crop',
    category: 'Home Fragrance',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="shop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Crafts</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of handmade treasures, each crafted with passion and attention to detail
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  <Heart className="h-5 w-5" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    4.9
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-lg font-semibold">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
