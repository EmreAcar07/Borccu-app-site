export default function GooglePlayBadge() {
  return (
    <a href="#" className="hover:opacity-80 transition-opacity">
      <div className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
        <div className="mr-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
        </div>
        <div>
          <div className="text-xs">İndir</div>
          <div className="text-sm font-semibold">Google Play</div>
          <div className="flex items-center text-xs text-yellow-400">
            <span className="mr-1">⭐⭐⭐⭐⭐</span>
            <span>4.6</span>
          </div>
        </div>
      </div>
    </a>
  );
}
