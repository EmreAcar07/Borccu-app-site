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
      icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
      title: "Kolay Borç Takibi",
      description:
        "Kimden ne kadar borç aldığınızı, kime ne kadar borç verdiğinizi tek bakışta görün. Karmaşık hesaplamalara gerek yok.",
    },
    {
      icon: <Handshake className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
      title: "Karşılıklı Onay",
      description:
        "Tüm borç işlemleri karşılıklı onay ile gerçekleşir. Hem siz hem de arkadaşınız işlemi onaylamadan borç kaydı oluşmaz.",
    },
    {
      icon: <Bell className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
      title: "Anında Bildirimler",
      description:
        "Yeni borç istekleri, ödemeler ve hatırlatmalar için anında bildirim alın. Hiçbir önemli işlemi kaçırmayın.",
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
      title: "Güvenli Veri",
      description:
        "Tüm verileriniz şifrelenmiş olarak saklanır. Sadece siz ve arkadaşlarınız kendi verilerinize erişebilir.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
      title: "Detaylı Raporlar",
      description:
        "Aylık, yıllık borç raporları ile finansal durumunuzu analiz edin. Hangi arkadaşınızla ne kadar borç ilişkiniz var görün.",
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />,
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
          {features.map((feature, index) => {
            const themeBox =
              index % 3 === 0
                ? "bg-blue-50 border-blue-200"
                : index % 3 === 1
                ? "bg-violet-50 border-violet-200"
                : "bg-emerald-50 border-emerald-200";
            const themeDot =
              index % 3 === 0
                ? "bg-blue-100"
                : index % 3 === 1
                ? "bg-violet-100"
                : "bg-emerald-100";
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm transition-all duration-300 border border-gray-100"
              >
                {/* Floating icon box */}
                <div className="absolute inset-x-0 top-12 z-10 flex justify-center">
                  <div
                    className={`card-box w-10 h-10 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center border ${themeBox} transition-all duration-300 group-hover:-translate-y-20 group-hover:scale-75`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Title and description */}
                <div className="pt-20 text-center transition-all duration-300 translate-y-12 group-hover:-translate-y-4">
                  <h3 className="card-title text-lg sm:text-xl font-semibold text-gray-900 transition-all duration-300 group-hover:-translate-y-2">
                    {feature.title}
                  </h3>
                  <p className="card-description text-sm sm:text-base text-gray-600 leading-relaxed opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
