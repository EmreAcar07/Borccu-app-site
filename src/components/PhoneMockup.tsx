export default function PhoneMockup() {
  return (
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
                <h3 className="font-semibold text-gray-900 mb-3">
                  Son Hareketler
                </h3>

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
                        <p className="font-medium text-gray-900">
                          Mehmet Özkan
                        </p>
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
  );
}
