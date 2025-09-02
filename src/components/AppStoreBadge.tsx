export default function AppStoreBadge() {
  return (
    <a
      href="#"
      className="hover:opacity-80 transition-opacity w-full sm:w-auto flex justify-center"
    >
      <img
        src="/appstore-badge.svg"
        alt="Download on the App Store"
        className="h-12 md:h-14 lg:h-16 w-auto"
      />
    </a>
  );
}
