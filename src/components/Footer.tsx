export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          <div className="text-center sm:text-left col-span-2 sm:col-span-1">
            {/* Logo Section */}
            <div className="flex justify-center sm:justify-start mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <img
                  src="/app_icon_light.svg"
                  alt="Borccu"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Borccu
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Borç Takip Uygulaması
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Arkadaşlarınızla olan borç-alacak ilişkilerinizi takip etmenin en
              kolay yolu.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Ürün
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Özellikler
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  Fiyatlandırma
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  Güvenlik
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Destek
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  Yardım Merkezi
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  İletişim
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  SSS
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Şirket
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="/about"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  Blog
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed text-xs sm:text-sm">
                  Kariyer
                </span>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Yasal
            </h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400">
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a
                  href="/kvkk"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  KVKK Aydınlatma Metni
                </a>
              </li>
              <li>
                <a
                  href="/disclaimer"
                  className="hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Yasal Uyarılar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p className="text-xs sm:text-sm">
              &copy; 2024 4PP Studios. Tüm hakları saklıdır.
            </p>
            <p className="text-xs sm:text-sm mt-2">
              Designed and developed by 4PP Studios web team. For contact us at{" "}
              <a
                href="mailto:4ppstudioss@gmail.com"
                className="hover:text-white transition-colors"
              >
                4ppstudioss@gmail.com
              </a>
            </p>
          </div>

          <div className="text-xs text-gray-500 leading-relaxed text-center">
            <p className="mb-2 text-xs">
              <strong>Önemli Uyarı:</strong> Bu uygulama arkadaşlarınızla borç
              takibini kolaylaştırmak amacıyla tasarlanmıştır. Uygulama
              üzerinden yapılan işlemler yasal bağlayıcılığa sahip değildir ve
              finansal danışmanlık niteliğinde değildir.
            </p>
            <p className="text-xs">
              Kullanıcılar uygulamayı kendi riskleri dahilinde kullanır.
              Kullanıcılar arası anlaşmazlıklardan Borccu sorumlu değildir. 18
              yaş altı kullanıcılar için uygun değildir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
