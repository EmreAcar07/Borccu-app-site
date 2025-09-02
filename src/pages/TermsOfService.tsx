export default function TermsOfService() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Kullanım Koşulları
          </h1>
          <p className="text-sm text-gray-600">
            <strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            Bu Kullanım Koşulları, Borccu mobil uygulamasının ("Uygulama")
            kullanımına ilişkin hüküm ve koşulları belirlemektedir. Uygulamayı
            kullanarak bu koşulları kabul etmiş sayılırsınız.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Uygulamanın Kullanımı ve Kısıtlamalar
          </h2>
          <p className="mb-4">
            Borccu uygulaması, arkadaşlarınızla borç takibini kolaylaştırmak
            amacıyla tasarlanmıştır. Uygulama içindeki borç istemleri,
            tarafların karşılıklı onayı ile işleme alınır ve bu işlemlerin
            <strong> yasal bir bağlayıcılığı bulunmamaktadır</strong>. Uygulama,
            kullanıcılar arasında mali ilişkileri düzenlemeye yardımcı olan bir
            araç olup, yasal bir alacak-verecek ilişkisi yaratmaz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Kullanıcı Sorumlulukları
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Kullanıcılar, Uygulama içinde oluşturdukları borç istemlerinin ve
              açıklamalarının doğruluğundan sorumludur.
            </li>
            <li>
              Kullanıcılar, Uygulama içindeki iletişimde hakaret, tehdit, taciz
              veya küçük düşürücü ifadeler kullanmamayı kabul eder.
            </li>
            <li>
              Bu tür uygunsuz davranışların tespiti halinde, mağdur olan
              kullanıcı ilgili kişiyi engelleyebilir ve gerekli yasal mercilere
              şikayette bulunabilir.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Fikri Mülkiyet Hakları
          </h2>
          <p className="mb-4">
            Borccu uygulamasının tüm hakları, 4pp Studios adlı Google Play
            hesabına aittir. Uygulamanın tasarımı, yazılımı, içeriği ve tüm
            fikri mülkiyet hakları 4pp Studios'a aittir ve izinsiz kullanılamaz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sorumluluk Sınırlamaları
          </h2>
          <p className="mb-4">
            Borccu uygulaması, güncellemeler veya teknik arızalar nedeniyle
            zaman zaman aksaklıklar yaşayabilir. Uygulamanın kesintisiz veya
            hatasız çalışacağı garanti edilmez. Uygulama, kullanıcılar
            arasındaki borç ilişkilerinden veya bu ilişkilerden doğabilecek
            anlaşmazlıklardan sorumlu değildir.
          </p>
        </div>
      </div>
    </div>
  );
}
