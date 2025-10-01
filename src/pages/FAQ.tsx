export default function FAQ() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-sm text-gray-600">
            Borccu hakkında merak ettikleriniz.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Borccu nedir ve ne işe yarar?
          </h2>
          <p className="mb-4">
            Borccu, arkadaşlarınızla olan borç-alacak ilişkilerinizi düzenli ve
            şeffaf biçimde takip etmenizi sağlayan bir mobil uygulamadır. Kimden
            ne kadar borç aldığınızı veya kime borç verdiğinizi kaydedebilir,
            karşılıklı onay ile kayıtları netleştirebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Uygulamadaki kayıtların yasal bağlayıcılığı var mı?
          </h2>
          <p className="mb-4">
            Hayır. Uygulamadaki kayıtlar yalnızca kullanıcıların aralarındaki
            borçları takip etmelerini kolaylaştırmak için tutulur ve{" "}
            <strong>yasal bağlayıcılık taşımaz</strong>. Resmi veya hukuki bir
            belge yerine geçmez.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Verilerim güvende mi?
          </h2>
          <p className="mb-4">
            Borccu, kullanıcı verilerinin güvenliği için gerekli teknik ve idari
            önlemleri alır. Veri iletişimi şifrelenir, parolalar güvenli şekilde
            saklanır ve yalnızca yetkili erişimlere izin verilir. Detaylar için{" "}
            <a href="/privacy" className="text-blue-600 hover:text-blue-800">
              Gizlilik Politikası
            </a>
            na göz atabilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Uygulamayı kimler kullanabilir?
          </h2>
          <p className="mb-4">
            Uygulama <strong>18 yaş ve üzeri</strong> kullanıcılar içindir.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Arkadaşımla uyuşmazlık yaşarsam ne yapmalıyım?
          </h2>
          <p className="mb-4">
            Uygulama, kullanıcılar arasındaki uyuşmazlıkların tarafı değildir ve
            bu ilişkilerden sorumluluk kabul etmez. Öncelikle karşı tarafla
            iletişim kurmanızı, gerekirse arabuluculuk gibi yöntemlere
            başvurmanızı öneririz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Bilgilerimi nasıl silebilirim?
          </h2>
          <p className="mb-4">
            Uygulama içerisindeki hesap/ayarlar bölümünden verilerinizi
            yönetebilir veya silme talebinde bulunabilirsiniz. Ek destek için{" "}
            <a
              href="mailto:4ppstudioss@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              4ppstudioss@gmail.com
            </a>
            adresine e-posta gönderebilirsiniz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Hangi platformlarda mevcut?
          </h2>
          <p className="mb-4">
            Borccu; Google Play üzerinden Android cihazlarda kullanılabilir.
            Diğer platformlar için güncellemeleri takipte kalın.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8">
            <p className="text-sm text-gray-700">
              Daha fazla bilgi için{" "}
              <a href="/terms" className="text-blue-600 hover:text-blue-800">
                Kullanım Koşulları
              </a>
              ,{" "}
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                Gizlilik Politikası
              </a>{" "}
              ve{" "}
              <a
                href="/disclaimer"
                className="text-blue-600 hover:text-blue-800"
              >
                Yasal Uyarılar
              </a>{" "}
              sayfalarına göz atabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
