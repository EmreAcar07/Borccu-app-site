export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="Borccu Logo" className="h-8 w-8 mr-2" />
              <h3 className="text-xl font-bold">Borccu</h3>
            </div>
            <p className="text-gray-400">
              Arkadaşlarınızla olan borç-alacak ilişkilerinizi takip etmenin en
              kolay yolu.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ürün</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Özellikler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Güvenlik
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Destek</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  SSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Şirket</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Kariyer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/privacy" className="hover:text-white text-left">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-white text-left">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="/kvkk" className="hover:text-white text-left">
                  KVKK Aydınlatma Metni
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="hover:text-white text-left">
                  Yasal Uyarılar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400 mb-4">
            <p>&copy; 2024 4pp Studios. Tüm hakları saklıdır.</p>
            <p className="text-sm mt-2">
              <a
                href="mailto:4ppstudioss@gmail.com"
                className="hover:text-white"
              >
                4ppstudioss@gmail.com
              </a>
            </p>
          </div>

          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              <strong>Önemli Uyarı:</strong> Bu uygulama arkadaşlarınızla borç
              takibini kolaylaştırmak amacıyla tasarlanmıştır. Uygulama
              üzerinden yapılan işlemler yasal bağlayıcılığa sahip değildir ve
              finansal danışmanlık niteliğinde değildir.
            </p>
            <p>
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
