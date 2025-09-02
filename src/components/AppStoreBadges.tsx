import AppStoreBadge from "./AppStoreBadge";
import GooglePlayBadge from "./GooglePlayBadge";
import AppGalleryBadge from "./AppGalleryBadge";

export default function AppStoreBadges() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
      <div className="w-full sm:w-auto flex justify-center">
        <AppStoreBadge />
      </div>
      <div className="w-full sm:w-auto flex justify-center">
        <GooglePlayBadge />
      </div>
      <div className="w-full sm:w-56 flex justify-center">
        <AppGalleryBadge />
      </div>
    </div>
  );
}
