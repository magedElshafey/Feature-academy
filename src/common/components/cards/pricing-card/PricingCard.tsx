const plans = [
  {
    title: "الخطة السنوية",
    price: "$742",
    period: "سنوياً",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...",
    buttonColor: "bg-orange-400 hover:bg-orange-500",
  },
  {
    title: "الخطة الشهرية",
    price: "$98",
    period: "شهرياً",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...",
    buttonColor: "bg-white text-blue-600 hover:bg-gray-100",
    highlight: true, // عشان نعملها مميزة
  },
  {
    title: "الخطة الأساسية",
    price: "$0",
    period: "دائماً",
    description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...",
    buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
  },
];

export default function Pricing() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* العنوان */}
        <h2 className="text-2xl md:text-3xl font-bold mb-12 inline-block relative">
          خطط الاشتراكات
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-orange-400 rounded-full"></span>
        </h2>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105 shadow-2xl z-10"
                  : "bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-1">{plan.price}</p>
              <p className="text-sm mb-4">{plan.period}</p>
              <p className="text-sm leading-relaxed mb-6">{plan.description}</p>
              <button
                className={`w-full py-2 rounded-lg font-medium transition ${plan.buttonColor}`}
              >
                المزيد
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
