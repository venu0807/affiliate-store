import Image from "next/image";
import products from "@/products.json";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              ✨ My Curated Finds
            </h1>
            <p className="mt-1 text-sm text-gray-400">
              Hand-picked trending products — all in one place
            </p>
          </div>
        </div>
      </header>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-600 shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image_url}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white text-gray-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h2 className="text-base font-bold text-gray-900 leading-snug">
                    {product.title}
                  </h2>
                  <span className="text-base font-bold text-gray-900 whitespace-nowrap">
                    ₹{(product.price * 83).toFixed(0)}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mb-5 flex-grow leading-relaxed">
                  {product.description}
                </p>

                <a
                  href={product.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#e60023] hover:bg-[#c0001d] text-white font-semibold py-3 px-4 rounded-xl text-center text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>View on Amazon</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-400">
        <p>As an Amazon Associate I earn from qualifying purchases.</p>
      </footer>
    </div>
  );
}
