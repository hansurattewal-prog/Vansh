/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import TechBlog from './components/TechBlog';
import Footer from './components/Footer';
import ChatbaseBot from './components/ChatbaseBot';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <TechBlog />
      </main>
      <Footer />
      
      {/* Bot Integration */}
      <ChatbaseBot />
    </div>
  );
}
