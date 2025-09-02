import { Users, DollarSign, Zap, Star } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      number: "50K+",
      label: "Aktif Kullanıcı",
      description: "Türkiye genelinde güvenle kullanılıyor",
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      number: "1M+",
      label: "Borç İşlemi",
      description: "Başarıyla tamamlanan işlem sayısı",
      icon: <DollarSign className="w-6 h-6 text-white" />,
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Kesintisiz hizmet garantisi",
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      number: "4.8",
      label: "Kullanıcı Puanı",
      description: "Google Play Store'da mükemmel puan",
      icon: <Star className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Güvenilir Platform
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Binlerce kullanıcının tercih ettiği Borccu ile arkadaşlarınızla
            güvenle borç takibi yapın
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                  {stat.icon}
                </div>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                SSL Şifreleme
              </span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                GDPR Uyumlu
              </span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">
                KVKK Uyumlu
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
