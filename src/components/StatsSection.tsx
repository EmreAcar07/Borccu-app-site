export default function StatsSection() {
  return (
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
  );
}
