import Image from "next/image";
import products from "@/products.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight text-center">
            My Curated Finds
          </h1>
          <p className="mt-2 text-center text-sm text-gray-500">
            Hand-picked products just for you.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900 leading-tight">
                    {product.title}
                  </h2>
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ml-4">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-8 flex-grow">
                  {product.description}
                </p>

                {/* Affiliate Link Button */}
                <a
                  href={product.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl text-center transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Get it on Amazon</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
