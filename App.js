import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="flex justify-between items-center p-6 shadow">
        <img src="/logo.png" alt="Pinnacle Logo" className="h-10" />
        <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Login
        </a>
      </header>
      <main className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4">Login to Trade Online with Pinnacle Financial Services</h1>
        <p className="text-lg mb-6">Experience a seamless online trading journey with our platform.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
          <div>Retail Investors</div>
          <div>HNIs</div>
          <div>HUFs</div>
          <div>Traders</div>
        </div>
        <form className="mt-8 max-w-md mx-auto">
          <input type="text" placeholder="Your Name" className="border p-2 w-full mb-2" />
          <input type="email" placeholder="Email Address" className="border p-2 w-full mb-2" />
          <button type="submit" className="bg-orange-500 text-white px-4 py-2 w-full rounded">
            Get Started
          </button>
        </form>
      </main>
      <footer className="text-center text-xs text-gray-500 mt-10 py-4 border-t">
        &copy; {new Date().getFullYear()} Pinnacle Financial Services. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
