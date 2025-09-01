export default function AppStoreBadge() {
  return (
    <a href="#" className="hover:opacity-80 transition-opacity">
      <div className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
        <div className="mr-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1200px-App_Store_%28iOS%29.svg.png"
            alt="App Store Logo"
            className="w-6 h-6"
          />
        </div>
        <div>
          <div className="text-xs">İndir</div>
          <div className="text-sm font-semibold">App Store</div>
          <div className="flex items-center text-xs text-yellow-400">
            <span className="mr-1">⭐⭐⭐⭐⭐</span>
            <span>4.8</span>
          </div>
        </div>
      </div>
    </a>
  );
}
