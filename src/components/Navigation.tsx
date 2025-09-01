export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/logo-header.png"
                alt="Borccu"
                className="h-24 md:h-32 lg:h-36"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Ücretsiz Başla
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
