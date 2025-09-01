export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-xl text-gray-600">
            3 adımda borç takibinizi başlatın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Kayıt Olun
            </h3>
            <p className="text-gray-600">
              Hızlıca hesap oluşturun ve arkadaşlarınızı uygulamaya davet edin
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Borç Ekleyin
            </h3>
            <p className="text-gray-600">
              Kimden ne kadar aldığınızı veya kime verdiğinizi kaydedin
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Takip Edin
            </h3>
            <p className="text-gray-600">
              Tüm borçlarınızı tek ekranda görün ve zamanında ödemelerinizi
              yapın
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
