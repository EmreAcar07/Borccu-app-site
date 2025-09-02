export default function AboutPage() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Borccu</strong>, arkadaşlarınızla olan borç-alacak
                  ilişkilerinizi kolayca takip etmenizi sağlayan bir mobil
                  uygulamadır.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Misyonumuz
          </h2>
          <p className="mb-4">
            Borccu olarak misyonumuz, arkadaşlar arasındaki mali ilişkileri
            şeffaf ve düzenli hale getirmektir. Kimden ne kadar borç aldığınızı,
            kime ne kadar borç verdiğinizi kolayca takip edebilmenizi
            sağlayarak, arkadaşlık ilişkilerinizin maddi konular yüzünden
            bozulmasını önlemeyi hedefliyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Vizyonumuz
          </h2>
          <p className="mb-4">
            Türkiye'de ve dünyada arkadaşlar arası borç takibinin en güvenilir
            ve kullanıcı dostu platformu olmak istiyoruz. Teknoloji ile insan
            ilişkilerini güçlendiren, şeffaf ve adil bir finansal takip sistemi
            oluşturmayı amaçlıyoruz.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Değerlerimiz
          </h2>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Şeffaflık:</strong> Tüm işlemlerin açık ve net olmasını
              sağlıyoruz
            </li>
            <li>
              <strong>Güvenlik:</strong> Kullanıcı verilerinin güvenliğini en
              üst düzeyde tutuyoruz
            </li>
            <li>
              <strong>Kullanıcı Dostu:</strong> Basit ve anlaşılır bir arayüz
              sunuyoruz
            </li>
            <li>
              <strong>Güvenilirlik:</strong> Karşılıklı onay sistemi ile
              güvenilir işlemler sağlıyoruz
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Ekibimiz
          </h2>
          <p className="mb-4">
            Borccu, Mustafa Selman Durmaz tarafından geliştirilmiş ve 4pp
            Studios çatısı altında sunulmaktadır. Mobil uygulama geliştirme
            konusunda deneyimli ekibimiz, kullanıcılarımızın ihtiyaçlarını en
            iyi şekilde karşılayan çözümler üretmek için çalışmaktadır.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            İletişim
          </h2>
          <p className="mb-4">
            Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle
            iletişime geçebilirsiniz:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>E-posta:</strong>{" "}
              <a
                href="mailto:4ppstudioss@gmail.com"
                className="text-blue-600 hover:text-blue-800"
              >
                4ppstudioss@gmail.com
              </a>
            </li>
            <li>
              <strong>Uygulama:</strong> Google Play Store'da "Borccu" olarak
              bulabilirsiniz
            </li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  <strong>Not:</strong> Borccu, arkadaşlar arası borç takibi
                  için tasarlanmıştır ve yasal bağlayıcılığı bulunmamaktadır.
                  Ticari işlemler için uygun değildir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
