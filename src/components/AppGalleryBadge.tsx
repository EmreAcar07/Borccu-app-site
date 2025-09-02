export default function AppGalleryBadge() {
  return (
    <a
      href="#"
      className="hover:opacity-80 transition-opacity w-full sm:w-auto flex justify-center"
    >
      <img
        src="/appgallery-badge.svg"
        alt="Get it on AppGallery"
        className="h-12 md:h-14 lg:h-16 w-auto"
      />
    </a>
  );
}
