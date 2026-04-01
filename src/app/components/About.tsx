import { Award, Factory, Leaf, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Legacy</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting traditional Indian sweets with modern hygiene standards since 2009
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1772985431409-c7c71c794a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBicml0dGxlfGVufDF8fHx8MTc3NTA1OTkyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chikki Manufacturing"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Tradition Meets Quality
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2009, we've grown from a small family business to India's trusted 
              wholesale chikki supplier. Our state-of-the-art facility in Maharashtra produces 
              over 50 tonnes of premium chikki monthly, serving retailers across the country.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use only the finest ingredients - premium nuts, organic jaggery, and traditional 
              recipes passed down through generations. Every batch is crafted with care and tested 
              for quality to ensure consistency.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence has made us the preferred choice for major retailers, 
              distributors, and sweet shops nationwide. We pride ourselves on competitive wholesale 
              pricing, reliable delivery, and exceptional customer service.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-orange-50 rounded-xl">
            <div className="inline-flex items-center justify-center size-16 bg-orange-600 text-white rounded-full mb-4">
              <Factory className="size-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Modern Facility</h4>
            <p className="text-gray-600 text-sm">
              15,000 sq ft automated production unit with strict quality controls
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-xl">
            <div className="inline-flex items-center justify-center size-16 bg-green-600 text-white rounded-full mb-4">
              <Leaf className="size-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Natural Ingredients</h4>
            <p className="text-gray-600 text-sm">
              100% natural, no preservatives, artificial colors or flavors
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <div className="inline-flex items-center justify-center size-16 bg-blue-600 text-white rounded-full mb-4">
              <Shield className="size-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">FSSAI Certified</h4>
            <p className="text-gray-600 text-sm">
              Fully licensed and compliant with food safety standards
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <div className="inline-flex items-center justify-center size-16 bg-purple-600 text-white rounded-full mb-4">
              <Award className="size-8" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Award Winning</h4>
            <p className="text-gray-600 text-sm">
              Recognized for quality and innovation in traditional sweets
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
