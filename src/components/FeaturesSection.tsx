import {
  DollarSign,
  Handshake,
  Bell,
  Shield,
  BarChart3,
  Globe,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Kolay Borç Takibi",
      description:
        "Kimden ne kadar borç aldığınızı, kime ne kadar borç verdiğinizi tek bakışta görün. Karmaşık hesaplamalara gerek yok.",
    },
    {
      icon: <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Karşılıklı Onay",
      description:
        "Tüm borç işlemleri karşılıklı onay ile gerçekleşir. Hem siz hem de arkadaşınız işlemi onaylamadan borç kaydı oluşmaz.",
    },
    {
      icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Anında Bildirimler",
      description:
        "Yeni borç istekleri, ödemeler ve hatırlatmalar için anında bildirim alın. Hiçbir önemli işlemi kaçırmayın.",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Güvenli Veri",
      description:
        "Tüm verileriniz şifrelenmiş olarak saklanır. Sadece siz ve arkadaşlarınız kendi verilerinize erişebilir.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Detaylı Raporlar",
      description:
        "Aylık, yıllık borç raporları ile finansal durumunuzu analiz edin. Hangi arkadaşınızla ne kadar borç ilişkiniz var görün.",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      title: "Çoklu Para Birimi",
      description:
        "Farklı para birimlerinde borç takibi yapın. TL, USD, EUR ve daha fazlası. Döviz kurları otomatik güncellenir.",
    },
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Neden Borccu?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Arkadaşlarınızla olan borç-alacak ilişkilerinizi yönetmenin en
            akıllı yolu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-300"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-lg sm:text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              <div className="pt-6 sm:pt-8 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
