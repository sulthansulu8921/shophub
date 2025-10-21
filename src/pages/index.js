import Layout from '../components/Layout';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Home({ featuredProducts }) {
  return (
    <Layout title="ShopHub - Home">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-12 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to ShopHub</h1>
          <p className="text-xl mb-6">
            Discover amazing products at unbeatable prices. Shop from thousands of items
            and get fast, free delivery.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure transactions</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🎁</div>
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy</p>
        </div>
      </section>
    </Layout>
  );
}

// Static Site Generation - fetches data at build time
export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products?limit=4');
  const featuredProducts = await res.json();

  return {
    props: {
      featuredProducts,
    },
    revalidate: 3600, // Revalidate every hour
  };
}