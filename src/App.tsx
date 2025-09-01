import { useState } from 'react';

export default function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalType: string) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="Borccu Logo" 
                  className="h-8 w-8 mr-2"
                />
                <h3 className="text-xl font-bold">Borccu</h3>
              </div>
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
            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => openModal('privacy')} className="hover:text-white text-left">Gizlilik Politikası</button></li>
                <li><button onClick={() => openModal('terms')} className="hover:text-white text-left">Kullanım Koşulları</button></li>
                <li><button onClick={() => openModal('kvkk')} className="hover:text-white text-left">KVKK Aydınlatma Metni</button></li>
                <li><button onClick={() => openModal('disclaimer')} className="hover:text-white text-left">Yasal Uyarılar</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="text-center text-gray-400 mb-4">
              <p>&copy; 2024 4pp Studios. Tüm hakları saklıdır.</p>
              <p className="text-sm mt-2">
                <a href="mailto:4ppstudioss@gmail.com" className="hover:text-white">4ppstudioss@gmail.com</a>
              </p>
            </div>
            
            <div className="text-xs text-gray-500 leading-relaxed">
              <p className="mb-2">
                <strong>Önemli Uyarı:</strong> Bu uygulama arkadaşlarınızla borç takibini kolaylaştırmak amacıyla tasarlanmıştır. 
                Uygulama üzerinden yapılan işlemler yasal bağlayıcılığa sahip değildir ve finansal danışmanlık niteliğinde değildir.
              </p>
              <p>
                Kullanıcılar uygulamayı kendi riskleri dahilinde kullanır. Kullanıcılar arası anlaşmazlıklardan Borccu sorumlu değildir.
                18 yaş altı kullanıcılar için uygun değildir.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal System for Legal Documents */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeModal === 'privacy' && 'Gizlilik Politikası'}
                {activeModal === 'terms' && 'Kullanım Koşulları'}
                {activeModal === 'kvkk' && 'KVKK Aydınlatma Metni'}
                {activeModal === 'disclaimer' && 'Yasal Uyarılar / Feragatnameler'}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              {activeModal === 'privacy' && (
                <div>
                  <p className="text-sm text-gray-600 mb-6"><strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025</p>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="mb-4">
                      Borccu mobil uygulaması (bundan böyle "Uygulama" olarak anılacaktır), Mustafa Selman Durmaz 
                      (bundan böyle "Veri Sorumlusu" olarak anılacaktır) tarafından işletilmektedir. Bu Gizlilik Politikası, 
                      Uygulama aracılığıyla topladığımız kişisel verilerinizi nasıl topladığımızı, kullandığımızı, 
                      sakladığımızı ve koruduğumuzu açıklamaktadır.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Toplanan Kişisel Veriler</h3>
                    <p className="mb-4">Uygulamamız aracılığıyla aşağıdaki kişisel veriler toplanmaktadır:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, e-posta adresi, telefon numarası.</li>
                      <li><strong>İşlem Bilgileri:</strong> Kimden ne kadar borç alındığı/verildiği, bu işlemlerin tarihleri, borç ödemeleri, transferler ve diğer kullanıcılarla olan etkileşimleriniz gibi borç takibiyle ilgili detaylar.</li>
                      <li><strong>Cihaz Bilgileri:</strong> Cihaz modeli, işletim sistemi sürümü, IP adresi, uygulama kullanım süreleri ve çökme raporları gibi uygulamanın yüklü olduğu cihazla ilgili teknik veriler.</li>
                    </ul>
                    <p className="mb-4"><em>Konum bilgisi toplanmamaktadır.</em></p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Kişisel Verilerin Toplanma Amacı ve Hukuki Dayanağı</h3>
                    <p className="mb-4">Topladığımız kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li><strong>Hizmet Sunmak:</strong> Uygulamanın temel işlevi olan borç takibi hizmetini sağlamak ve kullanıcılar arası borç işlemlerini yönetmek.</li>
                      <li><strong>Kullanıcı Deneyimini İyileştirmek:</strong> Uygulamanın performansını artırmak, hataları tespit etmek, yeni özellikler geliştirmek ve genel kullanıcı deneyimini iyileştirmek.</li>
                      <li><strong>Güvenliği Sağlamak:</strong> Uygulamanın güvenliğini sağlamak, yetkisiz erişimleri engellemek ve kötüye kullanımı önlemek.</li>
                      <li><strong>Pazarlama Faaliyetleri:</strong> Kullanıcıların açık rızası alınmak suretiyle, Uygulama ile ilgili duyurular, kampanyalar ve yeni özellikler hakkında bilgilendirme yapmak.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Veri Güvenliği Önlemleri</h3>
                    <p className="mb-4">Borccu, kullanıcıların kişisel verilerinin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirleri almaktadır:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Tüm veri iletişimi SSL/TLS protokolü ile şifrelenmektedir.</li>
                      <li>Kullanıcı parolaları hashlenmiş olarak saklanır, açık şekilde tutulmaz.</li>
                      <li>Row Level Security (satır bazlı erişim kontrolü) ile her kullanıcı yalnızca kendi verilerine erişebilir.</li>
                      <li>Verilere erişim yetkileri rol bazlı olarak sınırlandırılmıştır.</li>
                      <li>Sunucular düzenli olarak güncellenmekte ve güvenlik yamaları uygulanmaktadır.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">İletişim</h3>
                    <p className="mb-4">
                      Gizlilik politikamız hakkında sorularınız için: 
                      <a href="mailto:4ppstudioss@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">4ppstudioss@gmail.com</a>
                    </p>
                  </div>
                </div>
              )}

              {activeModal === 'terms' && (
                <div>
                  <p className="text-sm text-gray-600 mb-6"><strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025</p>
                  
                  <div className="prose prose-gray max-w-none">
                    <p className="mb-4">
                      Bu Kullanım Koşulları, Borccu mobil uygulamasının ("Uygulama") kullanımına ilişkin hüküm ve koşulları belirlemektedir. 
                      Uygulamayı kullanarak bu koşulları kabul etmiş sayılırsınız.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Uygulamanın Kullanımı ve Kısıtlamalar</h3>
                    <p className="mb-4">
                      Borccu uygulaması, arkadaşlarınızla borç takibini kolaylaştırmak amacıyla tasarlanmıştır. 
                      Uygulama içindeki borç istemleri, tarafların karşılıklı onayı ile işleme alınır ve bu işlemlerin 
                      <strong> yasal bir bağlayıcılığı bulunmamaktadır</strong>. Uygulama, kullanıcılar arasında mali ilişkileri 
                      düzenlemeye yardımcı olan bir araç olup, yasal bir alacak-verecek ilişkisi yaratmaz.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Kullanıcı Sorumlulukları</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Kullanıcılar, Uygulama içinde oluşturdukları borç istemlerinin ve açıklamalarının doğruluğundan sorumludur.</li>
                      <li>Kullanıcılar, Uygulama içindeki iletişimde hakaret, tehdit, taciz veya küçük düşürücü ifadeler kullanmamayı kabul eder.</li>
                      <li>Bu tür uygunsuz davranışların tespiti halinde, mağdur olan kullanıcı ilgili kişiyi engelleyebilir ve gerekli yasal mercilere şikayette bulunabilir.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Fikri Mülkiyet Hakları</h3>
                    <p className="mb-4">
                      Borccu uygulamasının tüm hakları, 4pp Studios adlı Google Play hesabına aittir. 
                      Uygulamanın tasarımı, yazılımı, içeriği ve tüm fikri mülkiyet hakları 4pp Studios'a aittir ve izinsiz kullanılamaz.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sorumluluk Sınırlamaları</h3>
                    <p className="mb-4">
                      Borccu uygulaması, güncellemeler veya teknik arızalar nedeniyle zaman zaman aksaklıklar yaşayabilir. 
                      Uygulamanın kesintisiz veya hatasız çalışacağı garanti edilmez. Uygulama, kullanıcılar arasındaki 
                      borç ilişkilerinden veya bu ilişkilerden doğabilecek anlaşmazlıklardan sorumlu değildir.
                    </p>
                  </div>
                </div>
              )}

              {activeModal === 'kvkk' && (
                <div>
                  <div className="prose prose-gray max-w-none">
                    <p className="mb-4">
                      Bu Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca, 
                      kişisel verilerinizin hangi amaçlarla işleneceği, kimlere ve hangi amaçlarla aktarılabileceği, 
                      kişisel veri toplamanın yöntemi ve hukuki sebebi ile KVKK'da yer alan haklarınız hakkında bilgi vermek amacıyla hazırlanmıştır.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">İlgili Kişinin Hakları (KVKK 11. Madde)</h3>
                    <p className="mb-4">KVKK'nın 11. maddesi uyarınca, kişisel verilerinize ilişkin aşağıdaki haklara sahipsiniz:</p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
                      <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                      <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
                      <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
                      <li>KVKK 7. maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
                    </ul>
                    
                    <p className="mb-4">
                      Bu haklarınızı kullanmak için Uygulama içindeki ilgili ayarları kullanabilir veya 
                      <a href="mailto:4ppstudioss@gmail.com" className="text-blue-600 hover:text-blue-800 ml-1">4ppstudioss@gmail.com</a> 
                      e-posta adresine yazılı olarak başvurabilirsiniz.
                    </p>
                  </div>
                </div>
              )}

              {activeModal === 'disclaimer' && (
                <div>
                  <p className="text-sm text-gray-600 mb-6"><strong>Son Güncelleme Tarihi:</strong> 29 Ağustos 2025</p>
                  
                  <div className="prose prose-gray max-w-none">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            <strong>Önemli Uyarı:</strong> Borccu uygulaması, finansal veya hukuki bir danışmanlık hizmeti sunmamaktadır. 
                            Uygulama üzerinden yapılan tüm işlemler ve kaydedilen borç bilgileri, yalnızca kullanıcıların 
                            kendi aralarındaki takibi kolaylaştırmak amacıyla oluşturulmuştur ve <strong>yasal bir bağlayıcılığı bulunmamaktadır</strong>.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sorumluluk Sınırlamaları</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Uygulama, kullanıcılar arasındaki borç ilişkilerinden veya bu ilişkilerden doğabilecek anlaşmazlıklardan sorumlu değildir.</li>
                      <li>Kullanıcılar, Uygulamayı kendi riskleri ve sorumlulukları dahilinde kullanır.</li>
                      <li>Uygulama, zaman zaman güncelleme, bakım veya teknik arızalar nedeniyle geçici olarak erişilemez olabilir.</li>
                      <li>Uygulamanın kesintisiz veya hatasız çalışacağı garanti edilmez.</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Yaş Sınırlaması</h3>
                    <p className="mb-4">
                      Bu uygulama <strong>18 yaş altı kullanıcılar için uygun değildir</strong>. 
                      Uygulamayı kullanmak isteyen kişilerin 18 yaşından büyük olduklarını onaylamaları gerekmektedir.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Uyuşmazlık Çözümü</h3>
                    <p className="mb-4">
                      Bu belgelerden doğabilecek uyuşmazlıkların çözümünde öncelikle arabuluculuk yoluna başvurulabilir. 
                      Arabuluculuk ile çözülemeyen uyuşmazlıklarda, Türk Hukuku uygulanacak olup, 
                      İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}