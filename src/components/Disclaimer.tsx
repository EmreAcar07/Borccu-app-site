export default function Disclaimer() {
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
            Yasal Uyarılar / Feragatnameler
          </h1>
          <p className="text-sm text-gray-600">
            <strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Önemli Uyarı:</strong> Borccu uygulaması, finansal
                  veya hukuki bir danışmanlık hizmeti sunmamaktadır. Uygulama
                  üzerinden yapılan tüm işlemler ve kaydedilen borç bilgileri,
                  yalnızca kullanıcıların kendi aralarındaki takibi
                  kolaylaştırmak amacıyla oluşturulmuştur ve{" "}
                  <strong>yasal bir bağlayıcılığı bulunmamaktadır</strong>.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Sorumluluk Sınırlamaları
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              Uygulama, kullanıcılar arasındaki borç ilişkilerinden veya bu
              ilişkilerden doğabilecek anlaşmazlıklardan sorumlu değildir.
            </li>
            <li>
              Kullanıcılar, Uygulamayı kendi riskleri ve sorumlulukları
              dahilinde kullanır.
            </li>
            <li>
              Uygulama, zaman zaman güncelleme, bakım veya teknik arızalar
              nedeniyle geçici olarak erişilemez olabilir.
            </li>
            <li>
              Uygulamanın kesintisiz veya hatasız çalışacağı garanti edilmez.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Yaş Sınırlaması
          </h2>
          <p className="mb-4">
            Bu uygulama{" "}
            <strong>18 yaş altı kullanıcılar için uygun değildir</strong>.
            Uygulamayı kullanmak isteyen kişilerin 18 yaşından büyük olduklarını
            onaylamaları gerekmektedir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Uyuşmazlık Çözümü
          </h2>
          <p className="mb-4">
            Bu belgelerden doğabilecek uyuşmazlıkların çözümünde öncelikle
            arabuluculuk yoluna başvurulabilir. Arabuluculuk ile çözülemeyen
            uyuşmazlıklarda, Türk Hukuku uygulanacak olup, İstanbul Mahkemeleri
            ve İcra Daireleri yetkilidir.
          </p>
        </div>
      </div>
    </div>
  );
}
