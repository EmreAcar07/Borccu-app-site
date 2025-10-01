export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-48">
        <div className="relative text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Şu an ücretsiz
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Fiyatlandırma
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Planlar yakında. Şimdilik tüm özellikler <strong>ücretsiz</strong>.
            Gönül rahatlığıyla kullanabilirsiniz😉.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard
            title="Ücretsiz"
            price="₺0/ay"
            features={[
              "Sınırsız borç kaydı",
              "Temel bildirimler",
              "SSS & e‑posta desteği",
            ]}
            badge="Bal Kaymak 😋"
            ctaText="Hemen Başla"
            disabled={false}
          />
          <PricingCard
            title="Pro"
            price="₺??/ay"
            features={[
              "Onaylı işlem geçmişi",
              "Gelişmiş bildirimler",
              "Öncelikli destek",
            ]}
            badge="Yakında"
            ctaText="Yakında"
            disabled={true}
          />
          <PricingCard
            title="Takım"
            price="İletişime Geçin"
            features={[
              "Takım bazlı yönetim",
              "Gelişmiş güvenlik",
              "Özel destek",
            ]}
            badge="Yakında"
            ctaText="Yakında"
            disabled={true}
          />
        </div>
      </div>
    </section>
  );
}

type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
  disabled?: boolean;
  badge?: string;
};

function PricingCard({
  title,
  price,
  features,
  ctaText,
  disabled,
  badge,
}: PricingCardProps) {
  const theme =
    title === "Ücretsiz"
      ? {
          bg: "bg-blue-50",
          border: "border-blue-100",
          iconBg: "bg-blue-100",
          badgeBg: "bg-blue-50 text-blue-700 border-blue-100",
          checkBg: "bg-blue-100",
          checkText: "text-blue-700",
          ctaBg: "bg-blue-600 hover:bg-blue-700",
        }
      : title === "Pro"
      ? {
          bg: "bg-violet-50",
          border: "border-violet-100",
          iconBg: "bg-violet-100",
          badgeBg: "bg-violet-50 text-violet-700 border-violet-100",
          checkBg: "bg-violet-100",
          checkText: "text-violet-700",
          ctaBg: "bg-violet-600 hover:bg-violet-700",
        }
      : {
          bg: "bg-emerald-50",
          border: "border-emerald-100",
          iconBg: "bg-emerald-100",
          badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
          checkBg: "bg-emerald-100",
          checkText: "text-emerald-700",
          ctaBg: "bg-emerald-600 hover:bg-emerald-700",
        };
  return (
    <div
      className={`relative rounded-2xl ${theme.bg} border ${theme.border} ${
        disabled ? "opacity-75" : ""
      }`}
    >
      <div className="rounded-2xl bg-white/60 backdrop-blur-[1px] p-6 h-full">
        {badge ? (
          <span
            className={`absolute -top-3 right-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border shadow-sm ${theme.badgeBg}`}
          >
            {badge}
          </span>
        ) : null}

        <div className="flex items-center justify-center mb-3">
          {renderPlanIcon(title, disabled, theme.iconBg)}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">
          {title}
        </h3>
        <p className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {price}
        </p>

        <ul className="space-y-2 mb-5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-gray-700">
              <span
                className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                  disabled ? "bg-gray-100" : theme.checkBg
                }`}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`h-3 w-3 ${
                    disabled ? "text-gray-400" : theme.checkText
                  }`}
                >
                  <path
                    d="M16.667 5.833l-7.5 7.5-3.334-3.333"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <button
          disabled={disabled}
          className={`w-full inline-flex items-center justify-center rounded-md px-4 py-2 font-medium ${
            disabled
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : `${theme.ctaBg} text-white`
          }`}
        >
          {ctaText}
        </button>
      </div>
      {disabled ? (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/30" />
      ) : null}
    </div>
  );
}

function renderPlanIcon(title: string, disabled?: boolean, bgClass?: string) {
  const base = `h-10 w-10 rounded-xl ${
    disabled
      ? "bg-gray-100 text-gray-400"
      : `${bgClass ?? "bg-blue-50"} text-current`
  } flex items-center justify-center`;
  if (title === "Ücretsiz") {
    return (
      <div className={base}>
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 2l3 7h7l-5.5 4 2.5 7-7-4.5L5 20l2.5-7L2 9h7l3-7z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  if (title === "Pro") {
    return (
      <div className={base}>
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3l8 5v8l-8 5-8-5V8l8-5z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className={base}>
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 12a4 4 0 100-8 4 4 0 000 8z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M3 21a7 7 0 0114 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
