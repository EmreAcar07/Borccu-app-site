import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import AppGalleryBadge from "./AppGalleryBadge";

export default function AppStoreBadges() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
      <AppStoreBadge />
      <GooglePlayBadge />
      <AppGalleryBadge />
    </div>
  );
}
