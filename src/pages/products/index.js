import { useState } from 'react';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ProductCard';

export default function Products({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Layout title="Products - ShopHub">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6">Our Products</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No products found in this category.
        </div>
      )}
    </Layout>
  );
}

// Server-Side Rendering - fetches data on every request
export async function getServerSideProps() {
  const [productsRes, categoriesRes] = await Promise.all([
    fetch('https://fakestoreapi.com/products'),
    fetch('https://fakestoreapi.com/products/categories'),
  ]);

  const products = await productsRes.json();
  const categories = await categoriesRes.json();

  return {
    props: {
      products,
      categories,
    },
  };
}