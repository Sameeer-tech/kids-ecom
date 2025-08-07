

import MyButton from "@/components/MyButton"; // use @ only if using tsconfig path aliases
// import MyButton from "../components/MyButton";



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      {/* Header */}
      <header className="w-full py-6 px-4 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-800">KidsWear PK</h1>
          <nav className="hidden md:flex space-x-6 text-purple-700">
            <a href="#" className="hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Shop</a>
            <a href="#" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="text-center space-y-8 max-w-4xl">
          {/* Animated Hello World */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Hello World!
            </h1>
            <p className="text-2xl md:text-3xl text-purple-700 font-semibold">
              Welcome to KidsWear Pakistan
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your one-stop destination for the cutest and most comfortable kids clothing. 
              From playful everyday wear to special occasion outfits, we've got everything your little ones need!
            </p>
          </div>

          {/* Fun Elements */}
          <div className="flex justify-center space-x-4 text-4xl animate-bounce">
            <span className="inline-block animate-spin">👶</span>
            <span className="inline-block animate-pulse">👕</span>
            <span className="inline-block animate-bounce">👗</span>
            <span className="inline-block animate-spin">👖</span>
            <span className="inline-block animate-pulse">👟</span>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Shopping 🛍️
            </button>
            <button className="bg-white border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
              Learn More ✨
            </button>
          </div>

          {/* Custom Component Button */}
          <div className="mt-6">
            <MyButton />
          </div>



          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Quality First</h3>
              <p className="text-gray-600">Premium materials that are soft, safe, and durable for active kids.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Fun Designs</h3>
              <p className="text-gray-600">Colorful and playful designs that kids love and parents approve.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery across Pakistan for your convenience.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">KidsWear PK - Making Childhood Colorful</p>
          <p className="text-purple-200">© 2025 KidsWear Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}