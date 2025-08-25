export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img 
                  src="/logo-header.png" 
                  alt="Borccu" 
                  className="h-24 md:h-32 lg:h-36"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Ücretsiz Başla
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Papara Style */}
      <section className="pt-20 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Arkadaşlarınızla
                <br />
                <span className="text-gray-700">Borç Takibini</span>
                <br />
                <span className="text-gray-900">Kolaylaştırın</span>
              </h1>
              
              <div className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Kimden ne kadar para aldığınızı, kime ne kadar verdiğinizi kolayca takip edin. 
                Arkadaşlık bozulmasın, hesaplar karışmasın.
              </div>
              
              <button className="bg-gray-900 text-white hover:bg-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors mb-8 md:mb-12 w-full sm:w-auto">
                Ücretsiz Başla
              </button>
              
              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                {/* App Store */}
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
                    <div className="mr-3">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1200px-App_Store_%28iOS%29.svg.png" 
                        alt="App Store Logo" 
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <div className="text-xs">İndir</div>
                      <div className="text-sm font-semibold">App Store</div>
                      <div className="flex items-center text-xs text-yellow-400">
                        <span className="mr-1">⭐⭐⭐⭐⭐</span>
                        <span>4.8</span>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* Google Play */}
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center bg-black text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
                    <div className="mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">İndir</div>
                      <div className="text-sm font-semibold">Google Play</div>
                      <div className="flex items-center text-xs text-yellow-400">
                        <span className="mr-1">⭐⭐⭐⭐⭐</span>
                        <span>4.6</span>
                      </div>
                    </div>
                  </div>
                </a>
                
                {/* AppGallery */}
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <div className="flex items-center bg-red-600 text-white rounded-lg px-3 md:px-4 py-2 md:py-3 min-w-[120px] md:min-w-[140px]">
                    <div className="mr-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs">İndir</div>
                      <div className="text-sm font-semibold">AppGallery</div>
                      <div className="flex items-center text-xs text-yellow-400">
                        <span className="mr-1">⭐⭐⭐⭐⭐</span>
                        <span>4.5</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right Phone Mockup */}
            <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0 order-first lg:order-last">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl opacity-50"></div>
              
              <div className="relative z-10">
                {/* Phone Frame */}
                <div className="w-64 h-[520px] sm:w-72 sm:h-[580px] md:w-80 md:h-[650px] bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
                                      <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-4 md:w-32 md:h-6 bg-gray-900 rounded-b-xl md:rounded-b-2xl z-10"></div>
                    
                    {/* App Content - Borccu Style */}
                    <div className="pt-8 md:pt-12 px-3 md:px-4 h-full bg-gradient-to-b from-white to-gray-50">
                      {/* Status bar content */}
                      <div className="flex justify-between items-center text-xs font-semibold mb-4 md:mb-6">
                        <span>9:41</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-1.5 md:w-4 md:h-2 bg-gray-900 rounded-sm"></div>
                          <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                          <div className="w-5 h-2.5 md:w-6 md:h-3 border border-gray-900 rounded-sm">
                            <div className="w-3 h-0.5 md:w-4 md:h-1 bg-gray-900 rounded-xs m-0.5"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Main Balance Card */}
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 mb-4 md:mb-6 text-white relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="text-sm opacity-80 mb-2">Ana Hesap</div>
                          <div className="text-3xl font-bold mb-4">₺2.847,23</div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-xs opacity-60">BORÇ</div>
                              <div className="text-sm">₺847,23</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs opacity-60">ALACAK</div>
                              <div className="text-sm">₺2.000,00</div>
                            </div>
                          </div>
                        </div>
                        {/* Card decoration */}
                        <div className="absolute -right-4 -top-4 w-20 h-20 border border-white/20 rounded-full"></div>
                        <div className="absolute -right-2 -bottom-2 w-12 h-12 border border-white/10 rounded-full"></div>
                      </div>
                      
                      {/* Quick Actions */}
                      <div className="grid grid-cols-4 gap-3 mb-6">
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-green-600 text-sm">+</span>
                          </div>
                          <span className="text-xs text-gray-600">Borç Ver</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <div className="w-8 h-8 bg-red-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-red-600 text-sm">-</span>
                          </div>
                          <span className="text-xs text-gray-600">Borç Al</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-blue-600 text-sm">↕</span>
                          </div>
                          <span className="text-xs text-gray-600">Transfer</span>
                        </div>
                        <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                          <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-purple-600 text-sm">📊</span>
                          </div>
                          <span className="text-xs text-gray-600">Rapor</span>
                        </div>
                      </div>
                      
                      {/* Recent Transactions */}
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-3">Son Hareketler</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-green-100 rounded-full mr-3 flex items-center justify-center">
                                <span className="text-green-600 font-semibold">AK</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Ahmet Kaya</p>
                                <p className="text-sm text-gray-600">Borç ödeme</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-green-600">+₺500</p>
                              <p className="text-xs text-gray-500">2 saat önce</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-red-100 rounded-full mr-3 flex items-center justify-center">
                                <span className="text-red-600 font-semibold">MÖ</span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">Mehmet Özkan</p>
                                <p className="text-sm text-gray-600">Borç verdin</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-red-600">-₺300</p>
                              <p className="text-xs text-gray-500">1 gün önce</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kolay Takip</h3>
              <p className="text-gray-600">
                Kimden ne kadar aldığınızı, kime ne verdiğinizi tek tıkla kaydedin
              </p>
            </div>

            <div className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Arkadaş Ağı</h3>
              <p className="text-gray-600">
                Arkadaşlarınızı ekleyin, borçları karşılıklı onaylayın
              </p>
            </div>

            <div className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h5v2H4a2 2 0 01-2-2V5a2 2 0 012-2h5v2H4v14zM20 3h-5v2h5v14h-5v2h5a2 2 0 002-2V5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hatırlatma</h3>
              <p className="text-gray-600">
                Otomatik hatırlatmalar ile hiçbir borç unutulmaz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kayıt Olun</h3>
              <p className="text-gray-600">
                Hızlıca hesap oluşturun ve arkadaşlarınızı uygulamaya davet edin
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Borç Ekleyin</h3>
              <p className="text-gray-600">
                Kimden ne kadar aldığınızı veya kime verdiğinizi kaydedin
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl md:text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Takip Edin</h3>
              <p className="text-gray-600">
                Tüm borçlarınızı tek ekranda görün ve zamanında ödemelerinizi yapın
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Aktif Kullanıcı</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Takip Edilen Borç</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₺2M+</div>
              <div className="text-gray-300">Toplam İşlem</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-300">Memnuniyet</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Borç Takibini Kolaylaştırmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Arkadaşlarınızla olan mali ilişkilerinizi düzenli tutun
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Hemen Başlayın - Ücretsiz
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Borccu</h3>
              <p className="text-gray-400">
                Arkadaşlarınızla olan borç-alacak ilişkilerinizi takip etmenin en kolay yolu.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ürün</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Özellikler</a></li>
                <li><a href="#" className="hover:text-white">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-white">Güvenlik</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Destek</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-white">İletişim</a></li>
                <li><a href="#" className="hover:text-white">SSS</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Kariyer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BorçTakip. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}