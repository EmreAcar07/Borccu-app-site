export default function Pricing() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
          >
            ← Ana Sayfaya Dön
          </a>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Fiyatlandırma
          </h1>
          <p className="text-sm text-gray-600">
            Basit ve şeffaf fiyatlandırma. Başlamak ücretsiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Ücretsiz</h2>
            <p className="text-3xl font-bold mb-4">
              ₺0<span className="text-base font-normal">/ay</span>
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Sınırsız borç kaydı</li>
              <li>Temel bildirimler</li>
              <li>SSS ve e-posta desteği</li>
            </ul>
            <a
              href="/"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Başla
            </a>
          </div>

          <div className="border-2 border-blue-600 rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-3xl font-bold mb-4">
              ₺29<span className="text-base font-normal">/ay</span>
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Karşılıklı onaylı işlem geçmişi</li>
              <li>Gelişmiş bildirimler</li>
              <li>Öncelikli destek</li>
            </ul>
            <a
              href="/"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Pro'ya Geç
            </a>
          </div>

          <div className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Takım</h2>
            <p className="text-3xl font-bold mb-4">İletişime Geçin</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Takım bazlı yönetim</li>
              <li>Gelişmiş güvenlik</li>
              <li>Özel destek</li>
            </ul>
            <a
              href="/contact"
              className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
