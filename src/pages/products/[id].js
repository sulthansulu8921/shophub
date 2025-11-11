import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { useCart } from '../../context/CartContext';

export default function ProductDetail({ product }) {
  const router = useRouter();
  const { addToCart } = useCart();

  if (router.isFallback) {
    return (
      <Layout>
        <div className="text-center py-12">Loading...</div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="text-center py-12">Product not found</div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert('Added to cart successfully!');
  };

  return (
    <Layout title={`${product.title} - ShopHub`}>
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 font-semibold"
        >
          ← Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8">
            <div className="relative h-96">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block mb-4 capitalize">
              {product.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

            <div className="flex items-center mb-6">
              <span className="text-yellow-500 text-xl mr-2">
                ★ {product.rating?.rate ?? 'N/A'}
              </span>
              <span className="text-gray-600">
                ({product.rating?.count ?? 0} reviews)
              </span>
            </div>

            <p className="text-5xl font-bold text-blue-600 mb-6">
              ${product.price}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
              <button
                onClick={() => router.push('/products')}
                className="w-full bg-gray-200 text-gray-800 py-4 rounded-lg text-lg font-semibold hover:bg-gray-300 transition"
              >
                Continue Shopping
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 border-t pt-6 space-y-3">
              <div className="flex items-center text-gray-700">
                <span className="mr-3">✓</span>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-3">✓</span>
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="mr-3">✓</span>
                <span>Secure payment processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// ✅ Static Paths (build-time pre-rendering)
export async function getStaticPaths() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    const paths = products.map((product) => ({
      params: { id: product.id.toString() },
    }));

    return { paths, fallback: true };
  } catch (error) {
    console.error('Error fetching product paths:', error);
    return { paths: [], fallback: true };
  }
}

// ✅ Safe Static Props with HTML/JSON detection
export async function getStaticProps({ params }) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

    if (!res.ok) {
      console.error(`Failed to fetch product ${params.id}: ${res.status}`);
      return { notFound: true };
    }

    const text = await res.text();
    let product;

    try {
      product = JSON.parse(text);
    } catch {
      console.error(`Invalid JSON for product ${params.id}`);
      return { notFound: true };
    }

    return {
      props: { product },
      revalidate: 3600, // 1 hour revalidation
    };
  } catch (error) {
    console.error(`Fetch error for product ${params.id}:`, error);
    return { notFound: true };
  }
}
