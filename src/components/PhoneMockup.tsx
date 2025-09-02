export default function PhoneMockup() {
  return (
    <div className="flex justify-center lg:justify-end relative mt-8 lg:mt-0 order-first lg:order-last">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl opacity-0"></div>

      <div className="relative z-10 perspective-1000">
        {/* 3D Phone Container */}
        <div className="transform-style-preserve-3d animate-float">
          {/* Phone Frame */}
          <div className="w-48 h-[400px] sm:w-56 sm:h-[450px] md:w-64 md:h-[520px] lg:w-72 lg:h-[580px] xl:w-80 xl:h-[650px] bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-1 md:p-1.5 lg:p-2 shadow-2xl transform rotate-y-12 rotate-x-5">
            <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden relative">
              {/* Status Bar */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-3 md:w-24 md:h-4 lg:w-32 md:h-6 bg-gray-900 rounded-b-lg md:rounded-b-xl lg:rounded-b-2xl z-10"></div>

              {/* App Content - Borccu Style */}
              <div className="pt-6 md:pt-8 lg:pt-12 px-2 md:px-3 lg:px-4 h-full bg-gradient-to-b from-white to-gray-50">
                {/* Status bar content */}
                <div className="flex justify-between items-center text-xs font-semibold mb-3 md:mb-4 lg:mb-6">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-1 md:w-3 md:h-1.5 lg:w-4 lg:h-2 bg-gray-900 rounded-sm"></div>
                    <div className="w-1 h-1 bg-gray-900 rounded-full"></div>
                    <div className="w-4 h-2 md:w-5 md:h-2.5 lg:w-6 lg:h-3 border border-gray-900 rounded-sm">
                      <div className="w-2 h-0.5 md:w-3 md:h-0.5 lg:w-4 lg:h-1 bg-gray-900 rounded-xs m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* Main Balance Card */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg md:rounded-xl lg:rounded-2xl p-3 md:p-4 lg:p-6 mb-3 md:mb-4 lg:mb-6 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-xs md:text-sm opacity-80 mb-1 md:mb-2">
                      Ana Hesap
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4">
                      ₺2.847,23
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs opacity-60">BORÇ</div>
                        <div className="text-xs md:text-sm">₺847,23</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-60">ALACAK</div>
                        <div className="text-xs md:text-sm">₺2.000,00</div>
                      </div>
                    </div>
                  </div>
                  {/* Card decoration */}
                  <div className="absolute -right-2 md:-right-4 -top-2 md:-top-4 w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 border border-white/20 rounded-full"></div>
                  <div className="absolute -right-1 md:-right-2 -bottom-1 md:-bottom-2 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 border border-white/10 rounded-full"></div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-4 gap-2 md:gap-3 mb-4 md:mb-5 lg:mb-6">
                  <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm">
                    <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-green-100 rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                      <span className="text-green-600 text-xs md:text-sm">
                        +
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">Borç Ver</span>
                  </div>
                  <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm">
                    <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-red-100 rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                      <span className="text-red-600 text-xs md:text-sm">-</span>
                    </div>
                    <span className="text-xs text-gray-600">Borç Al</span>
                  </div>
                  <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm">
                    <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                      <span className="text-blue-600 text-xs md:text-sm">
                        ↕
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">Transfer</span>
                  </div>
                  <div className="bg-white rounded-lg md:rounded-xl p-2 md:p-3 text-center shadow-sm">
                    <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-purple-100 rounded-full mx-auto mb-1 md:mb-2 flex items-center justify-center">
                      <span className="text-purple-600 text-xs md:text-sm">
                        📊
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">Rapor</span>
                  </div>
                </div>

                {/* Recent Transactions */}
                <div className="bg-white rounded-lg md:rounded-xl p-3 md:p-4 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">
                    Son Hareketler
                  </h3>

                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-green-100 rounded-full mr-2 md:mr-3 flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-xs md:text-sm">
                            AK
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-xs md:text-sm lg:text-base">
                            Ahmet Kaya
                          </p>
                          <p className="text-gray-600 text-xs md:text-sm">
                            Borç ödeme
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600 text-xs md:text-sm lg:text-base">
                          +₺500
                        </p>
                        <p className="text-gray-500 text-xs">2 saat önce</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-red-100 rounded-full mr-2 md:mr-3 flex items-center justify-center">
                          <span className="text-red-600 font-semibold text-xs md:text-sm">
                            MÖ
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-xs md:text-sm lg:text-base">
                            Mehmet Özkan
                          </p>
                          <p className="text-gray-600 text-xs md:text-sm">
                            Borç verdin
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-red-600 text-xs md:text-sm lg:text-base">
                          -₺300
                        </p>
                        <p className="text-gray-500 text-xs">1 gün önce</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-[3rem] transform rotate-y-12 rotate-x-5"></div>
        </div>
      </div>
    </div>
  );
}
