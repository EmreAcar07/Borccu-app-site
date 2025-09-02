// import { Download } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className=" bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20">
          <div className="mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              {/* <Download className="w-20 h-20 text-white" /> */}
              <img
                src="/app_icon_light.svg"
                alt="Borccu"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]"
              />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              BORCCU
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Arkadaşlarınızla borç takibini kolaylaştırmak için Borccu'yu hemen
              indirin. Ücretsiz ve güvenli.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-6 sm:mb-8">
            <a
              href="#"
              className="group bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 border border-gray-600 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm sm:text-base">App Store</span>
            </a>

            <a
              href="#"
              className="group bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 border border-gray-600 w-full sm:w-auto justify-center"
            >
              <img
                src="/Google_Play_2022_icon.svg"
                alt="Google Play"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-sm sm:text-base">Google Play</span>
            </a>

            <a
              href="#"
              className="group bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 border border-gray-600 w-full sm:w-auto justify-center"
            >
              <img
                src="/Huawei_AppGallery.svg"
                alt="AppGallery"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-sm sm:text-base">AppGallery</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-gray-100">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Ücretsiz</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-blue-400"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Reklamsız</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-blue-400"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm">Güvenli</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
