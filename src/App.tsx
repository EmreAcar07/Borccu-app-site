import React, { useEffect, useState } from 'react';
import { Download, Users, Calculator, CreditCard, FolderSync as Sync, Twitter, Github, Linkedin, ChevronDown } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-gray-900"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Borccu
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Track shared expenses effortlessly.
            </p>

            {/* Phone Mockup */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-64 h-[520px] bg-gray-800 rounded-[3rem] border-8 border-gray-700 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-purple-900 to-gray-900 rounded-[2rem] p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white font-semibold">Borccu</div>
                      <div className="text-purple-400">
                        <Users size={20} />
                      </div>
                    </div>
                    
                    <div className="bg-gray-800 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Trip to Paris</span>
                        <span className="text-purple-400 font-semibold">$1,240</span>
                      </div>
                      <div className="text-xs text-gray-500">4 members • 12 expenses</div>
                    </div>

                    <div className="bg-gray-800 rounded-xl p-4 mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">Dinner Split</span>
                        <span className="text-green-400 font-semibold">$89</span>
                      </div>
                      <div className="text-xs text-gray-500">3 members • settled</div>
                    </div>

                    <div className="bg-purple-600 rounded-xl p-4 text-center mt-auto">
                      <div className="text-white font-semibold">Add Expense</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[4rem] opacity-20 blur-xl"></div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg flex items-center gap-3 text-white border border-gray-700">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-sm"></div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
              
              <button className="bg-black hover:bg-gray-800 transition-colors px-6 py-3 rounded-lg flex items-center gap-3 text-white border border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-gray-800 rounded-sm flex items-center justify-center">
                  <div className="text-white text-lg font-bold">⚏</div>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>

            <button 
              onClick={scrollToFeatures}
              className="animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Why Choose Borccu?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Simplify group expenses with powerful features designed for modern financial management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Expense Tracking</h3>
              <p className="text-gray-400">
                Add expenses in seconds with smart categorization and receipt scanning.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Group Management</h3>
              <p className="text-gray-400">
                Create groups for trips, roommates, or any shared expenses with ease.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Debt Settlement</h3>
              <p className="text-gray-400">
                Automatically calculate who owes what with optimized settlement suggestions.
              </p>
            </div>

            <div className="text-center fade-in-section">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sync className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cross-Platform Sync</h3>
              <p className="text-gray-400">
                Access your data seamlessly across all devices with real-time synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-gray-900">
        <div className="container mx-auto px-6 text-center fade-in-section">
          <h2 className="text-4xl font-bold mb-4">Ready to Simplify Your Expenses?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already simplified their shared expense management with Borccu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 justify-center">
              <Download size={20} />
              Download Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">Borccu</h3>
              <p className="text-gray-400">Track shared expenses effortlessly.</p>
            </div>

            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Borccu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;