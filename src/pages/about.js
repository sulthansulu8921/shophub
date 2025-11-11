import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About Us - ShopHub">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center">About ShopHub</h1>

        <div className="prose prose-lg max-w-none">
          {/* Our Story Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4 bg-white margin-left-10px">
              Founded in 2025, ShopHub has become one of the leading online shopping
              destinations, offering a wide variety of products at competitive prices.
              We believe that shopping should be easy, enjoyable, and accessible to everyone.
            </p>
            <p className="text-gray-700 leading-relaxed bg-white border-radius-lg p-4">
              Our mission is to provide customers with the best shopping experience by
              offering quality products, exceptional customer service, and fast delivery.
              We work directly with manufacturers and suppliers to ensure you get the
              best value for your money.
            </p>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Wide Selection</h3>
                <p className="text-gray-700">
                  Browse thousands of products across multiple categories including
                  electronics, fashion, beauty, home essentials, and more — all in one place.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Affordable Prices</h3>
                <p className="text-gray-700">
                  We collaborate with trusted suppliers to offer products at the most
                  competitive prices without compromising quality.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-700">
                  Enjoy quick and reliable delivery services that ensure your purchases
                  reach you on time, wherever you are.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
                <p className="text-gray-700">
                  Our dedicated customer service team is always here to assist you with
                  any queries or concerns — because your satisfaction is our priority.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              At ShopHub, we envision a world where online shopping is effortless,
              trustworthy, and delightful. We’re constantly innovating to improve our
              platform and bring you a seamless, personalized shopping experience.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
