export default function Contact() {
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">İletişim</h1>
          <p className="text-sm text-gray-600">
            Sorularınız, önerileriniz ve geri bildirimleriniz için bize ulaşın.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Bize Ulaşın
          </h2>
          <p className="mb-4">
            E-posta ile her zaman iletişime geçebilirsiniz:{" "}
            <a
              href="mailto:4ppstudioss@gmail.com"
              className="text-blue-600 hover:text-blue-800"
            >
              4ppstudioss@gmail.com
            </a>
          </p>

          {/* İletişim formu kaldırıldı */}

          <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
            Sık Sorulanlar
          </h2>
          <p className="mb-4">
            Yaygın sorular için{" "}
            <a href="/faq" className="text-blue-600 hover:text-blue-800">
              SSS
            </a>{" "}
            sayfamıza göz atabilirsiniz.
          </p>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8">
            <p className="text-sm text-gray-700">
              Yanıt sürelerimiz değişiklik gösterebilir. Genellikle 1-3 iş günü
              içinde dönüş yapıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
