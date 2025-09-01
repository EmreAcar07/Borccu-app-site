export default function AppGalleryBadge() {
  return (
    <a href="#" className="hover:opacity-80 transition-opacity">
      <div className="flex items-center bg-red-600 text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
        <div className="mr-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
          </svg>
        </div>
        <div>
          <div className="text-xs">İndir</div>
          <div className="text-sm font-semibold">AppGallery</div>
          <div className="flex items-center text-xs text-yellow-400">
            <span className="mr-1">⭐⭐⭐⭐⭐</span>
            <span>4.5</span>
          </div>
        </div>
      </div>
    </a>
  );
}
