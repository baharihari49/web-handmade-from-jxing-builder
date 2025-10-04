import { Heart, Users, Award, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-secondary/20 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connecting talented artisans with people who appreciate the beauty of handmade craftsmanship
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=700&h=600&fit=crop"
              alt="Artisan at work"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Crafted with Passion, Delivered with Care</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Artisan Haven, we believe in the power of handmade. Every piece in our collection
              is created by skilled artisans who pour their heart and soul into their craft. We're
              not just selling products – we're sharing stories, preserving traditions, and supporting
              creative communities around the world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2020, we've grown from a small marketplace to a thriving community of over
              100 artisans and 5,000+ satisfied customers. Our mission is to make authentic, handcrafted
              goods accessible to everyone who values quality, uniqueness, and sustainability.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Meet Our Artisans
            </button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Made with Love</h4>
            <p className="text-muted-foreground">
              Every item is handcrafted with care and attention to detail
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Support Artisans</h4>
            <p className="text-muted-foreground">
              Your purchase directly supports independent creators and their families
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Quality Guaranteed</h4>
            <p className="text-muted-foreground">
              We carefully curate and verify the quality of every product
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Sustainable</h4>
            <p className="text-muted-foreground">
              Eco-friendly materials and practices that care for our planet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
