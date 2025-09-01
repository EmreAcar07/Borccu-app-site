export default function PrivacyPolicy() {
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
            Gizlilik Politikası
          </h1>
          <p className="text-sm text-gray-600">
            <strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="mb-4">
            Borccu mobil uygulaması (bundan böyle "Uygulama" olarak
            anılacaktır), Mustafa Selman Durmaz (bundan böyle "Veri Sorumlusu"
            olarak anılacaktır) tarafından işletilmektedir. Bu Gizlilik
            Politikası, Uygulama aracılığıyla topladığımız kişisel verilerinizi
            nasıl topladığımızı, kullandığımızı, sakladığımızı ve koruduğumuzu
            açıklamaktadır.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Toplanan Kişisel Veriler
          </h2>
          <p className="mb-4">
            Uygulamamız aracılığıyla aşağıdaki kişisel veriler toplanmaktadır:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, e-posta
              adresi, telefon numarası.
            </li>
            <li>
              <strong>İşlem Bilgileri:</strong> Kimden ne kadar borç
              alındığı/verildiği, bu işlemlerin tarihleri, borç ödemeleri,
              transferler ve diğer kullanıcılarla olan etkileşimleriniz gibi
              borç takibiyle ilgili detaylar.
            </li>
            <li>
              <strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi
              sürümü, IP adresi, uygulama kullanım süreleri ve çökme raporları
              gibi uygulamanın yüklü olduğu cihazla ilgili teknik veriler.
            </li>
          </ul>
          <p className="mb-4">
            <em>Konum bilgisi toplanmamaktadır.</em>
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Kişisel Verilerin Toplanma Amacı ve Hukuki Dayanağı
          </h2>
          <p className="mb-4">
            Topladığımız kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Hizmet Sunmak:</strong> Uygulamanın temel işlevi olan borç
              takibi hizmetini sağlamak ve kullanıcılar arası borç işlemlerini
              yönetmek.
            </li>
            <li>
              <strong>Kullanıcı Deneyimini İyileştirmek:</strong> Uygulamanın
              performansını artırmak, hataları tespit etmek, yeni özellikler
              geliştirmek ve genel kullanıcı deneyimini iyileştirmek.
            </li>
            <li>
              <strong>Güvenliği Sağlamak:</strong> Uygulamanın güvenliğini
              sağlamak, yetkisiz erişimleri engellemek ve kötüye kullanımı
              önlemek.
            </li>
            <li>
              <strong>Pazarlama Faaliyetleri:</strong> Kullanıcıların açık
              rızası alınmak suretiyle, Uygulama ile ilgili duyurular,
              kampanyalar ve yeni özellikler hakkında bilgilendirme yapmak.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Veri Güvenliği Önlemleri
          </h2>
          <p className="mb-4">
            Borccu, kullanıcıların kişisel verilerinin güvenliğini sağlamak
            amacıyla gerekli teknik ve idari tedbirleri almaktadır:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Tüm veri iletişimi SSL/TLS protokolü ile şifrelenmektedir.</li>
            <li>
              Kullanıcı parolaları hashlenmiş olarak saklanır, açık şekilde
              tutulmaz.
            </li>
            <li>
              Row Level Security (satır bazlı erişim kontrolü) ile her kullanıcı
              yalnızca kendi verilerine erişebilir.
            </li>
            <li>
              Verilere erişim yetkileri rol bazlı olarak sınırlandırılmıştır.
            </li>
            <li>
              Sunucular düzenli olarak güncellenmekte ve güvenlik yamaları
              uygulanmaktadır.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            İletişim
          </h2>
          <p className="mb-4">
            Gizlilik politikamız hakkında sorularınız için:
            <a
              href="mailto:4ppstudioss@gmail.com"
              className="text-blue-600 hover:text-blue-800 ml-1"
            >
              4ppstudioss@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
