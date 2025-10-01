import { Users, Send, CheckCircle, BarChart3 } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Arkadaşınızı Ekleyin",
      description:
        "Telefon numarası ile arkadaşınızı arayın ve borç takibine başlayın.",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />,
    },
    {
      number: "02",
      title: "Borç İsteği Gönderin",
      description:
        "Kimden ne kadar borç aldığınızı belirtin ve arkadaşınızdan onay isteyin.",
      icon: <Send className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />,
    },
    {
      number: "03",
      title: "Karşılıklı Onay",
      description:
        "Arkadaşınız işlemi onayladığında borç kaydı oluşur ve takip başlar.",
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />,
    },
    {
      number: "04",
      title: "Kolay Takip",
      description:
        "Tüm borçlarınızı tek yerden görün, ödemeleri kaydedin ve hatırlatmalar alın.",
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />,
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Sadece 4 basit adımda arkadaşlarınızla borç takibine başlayın
          </p>
        </div>

        {/* Snake Flow Layout */}
        <div className="relative">
          {/* Snake Path */}
          <div className="hidden lg:block absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none">
              <defs>
                <linearGradient id="hw-line" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
              <path
                d="M 100 200 Q 300 100 500 200 Q 700 300 900 200 Q 1100 100 1100 200"
                stroke="url(#hw-line)"
                strokeWidth="3"
                strokeDasharray="10 5"
                className="animate-pulse"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-full left-1/2 w-px h-6 sm:h-8 bg-gray-200 transform -translate-x-1/2"></div>
                )}

                <div className="relative bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md transition-all duration-300 border border-gray-100">
                  {/* Step Number */}
                  <div
                    className={
                      `absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold border ` +
                      (index % 3 === 0
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : index % 3 === 1
                        ? "bg-violet-50 border-violet-200 text-violet-700"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700")
                    }
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={
                      `w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 border ` +
                      (index % 3 === 0
                        ? "bg-blue-50 border-blue-200 text-blue-700"
                        : index % 3 === 1
                        ? "bg-violet-50 border-violet-200 text-violet-700"
                        : "bg-emerald-50 border-emerald-200 text-emerald-700")
                    }
                  >
                    {step.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 bg-white rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-800">
                Ücretsiz
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-800">
                Güvenli
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-200"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-800">
                Hızlı
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
