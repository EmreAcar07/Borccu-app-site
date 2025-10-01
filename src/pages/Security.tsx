export default function Security() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Ana Sayfaya Dön
          </a>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Güvenlik</h1>
          <p className="text-sm text-gray-600">
            Verilerinizi korumak için uyguladığımız güvenlik önlemleri.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Veri İletimi
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Tüm veri iletimi TLS ile şifrelenir.</li>
            <li>Modern tarayıcılarda HSTS zorlanır.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Veri Saklama
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Parolalar güçlü hash algoritmaları ile saklanır.</li>
            <li>Uygulama verileri erişim kontrollü ortamlarda tutulur.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Erişim Kontrolü
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Satır bazlı erişim kontrolü (RLS) uygulanır.</li>
            <li>Rol tabanlı yetkilendirme ile erişimler sınırlandırılır.</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8">
            <p className="text-sm text-gray-700">
              Ayrıntılar için{" "}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                Gizlilik Politikası
              </a>
              na göz atabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
