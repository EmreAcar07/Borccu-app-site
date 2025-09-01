export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neden Borccu?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Borç-alacak ilişkilerinizi düzenli tutmanın en kolay yolu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Kolay Takip
            </h3>
            <p className="text-gray-600">
              Kimden ne kadar aldığınızı, kime ne verdiğinizi tek tıkla kaydedin
            </p>
          </div>

          <div className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Arkadaş Ağı
            </h3>
            <p className="text-gray-600">
              Arkadaşlarınızı ekleyin, borçları karşılıklı onaylayın
            </p>
          </div>

          <div className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5v-5zM4 19h5v2H4a2 2 0 01-2-2V5a2 2 0 012-2h5v2H4v14zM20 3h-5v2h5v14h-5v2h5a2 2 0 002-2V5a2 2 0 00-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Hatırlatma
            </h3>
            <p className="text-gray-600">
              Otomatik hatırlatmalar ile hiçbir borç unutulmaz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
