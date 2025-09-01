import AppStoreBadges from "./AppStoreBadges";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Arkadaşlarınızla
              <br />
              <span className="text-gray-700">Borç Takibini</span>
              <br />
              <span className="text-gray-900">Kolaylaştırın</span>
            </h1>

            <div className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Kimden ne kadar para aldığınızı, kime ne kadar verdiğinizi kolayca
              takip edin. Arkadaşlık bozulmasın, hesaplar karışmasın.
            </div>

            <button className="bg-gray-900 text-white hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors mb-8 md:mb-12 w-full sm:w-auto">
              Ücretsiz Başla
            </button>

            {/* App Store Badges */}
            <AppStoreBadges />
          </div>

          {/* Right Phone Mockup */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
