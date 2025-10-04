import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Pottery & Ceramics',
    image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=400&fit=crop',
    itemCount: 120,
  },
  {
    id: 2,
    name: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=400&fit=crop',
    itemCount: 85,
  },
  {
    id: 3,
    name: 'Textiles & Weaving',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea966c51?w=500&h=400&fit=crop',
    itemCount: 95,
  },
  {
    id: 4,
    name: 'Woodwork',
    image: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?w=500&h=400&fit=crop',
    itemCount: 67,
  },
  {
    id: 5,
    name: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&h=400&fit=crop',
    itemCount: 142,
  },
  {
    id: 6,
    name: 'Candles & Soaps',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=500&h=400&fit=crop',
    itemCount: 78,
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of handcrafted items, organized by craft type
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/90 mb-4">{category.itemCount} items available</p>
                <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Browse Collection
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            We're constantly adding new artisans and products. Contact us with your custom requests!
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-opacity-90 transition-opacity font-semibold">
            Request Custom Order
          </button>
        </div>
      </div>
    </section>
  );
}
