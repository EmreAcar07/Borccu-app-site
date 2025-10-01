import AppStoreBadges from "./AppStoreBadges";
import PhoneMockup from "./PhoneMockup";
import GotoWebButton from "./ui/GotoWebButton";

export default function HeroSection() {
  return (
    <section className="pt-0 sm:pt-32 pb-16 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout - Content overlays phone */}
        <div className="lg:hidden relative min-h-screen flex flex-col justify-end">
          {/* Phone Mockup - Background */}
          <div className="absolute inset-0 flex items-center justify-center -translate-y-24">
            <PhoneMockup />
          </div>

          {/* Content - Overlays phone */}
          <div className="relative z-20 text-center pt-20 pb-20 bg-gradient-to-b from-transparent via-gray-50/95 via-10% to-gray-50">
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
              <img
                src="/logo_full.svg"
                alt="Borccu"
                className="w-48 sm:w-56 h-auto max-w-full"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Arkadaşlarınızla
              <br />
              <span className="text-gray-600">Borç Takibini</span>
              <br />
              <span className="italic">Kolaylaştırın</span>
            </h1>

            <div className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-md mx-auto">
              Kimden ne kadar para aldığınızı, kime ne kadar verdiğinizi kolayca
              takip edin.{" "}
              <span className="font-semibold text-gray-700">
                Arkadaşlık bozulmasın, hesaplar karışmasın.
              </span>
            </div>

            {/* App Store Badges */}
            <AppStoreBadges />

            {/* divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
            <GotoWebButton />
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Logo Section */}
            <div className="flex justify-start mb-12">
              <img
                src="/logo_full.svg"
                alt="Borccu"
                className="w-80 h-auto max-w-full"
              />
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Arkadaşlarınızla
              <br />
              <span className="text-gray-600">Borç Takibini</span>
              <br />
              <span className="italic">Kolaylaştırın</span>
            </h1>

            <div className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Kimden ne kadar para aldığınızı, kime ne kadar verdiğinizi kolayca
              takip edin.{" "}
              <span className="font-semibold text-gray-700">
                Arkadaşlık bozulmasın, hesaplar karışmasın.
              </span>
            </div>

            {/* App Store Badges */}
            <AppStoreBadges />

            {/* divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>
            <GotoWebButton />
          </div>

          {/* Right Phone Mockup */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
