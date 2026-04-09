import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    num: "01",
    title: "تأشيرة الرحل الرقميين",
    desc: "للعاملين عن بُعد والمستقلين — إقامة قانونية في إسبانيا مع الاحتفاظ بعملائك خارجها.",
    path: "/nomadas-digitales",
    image: "/images/service-nolucrativa.jpg",
    active: true,
  },
  {
    num: "02",
    title: "تأشيرة الإقامة غير الربحية",
    desc: "للمقيمين بدخل ثابت من خارج إسبانيا دون الحاجة للعمل داخلها.",
    path: "/non-lucrativa",
    image: "/images/service-nolucrativa.jpg",
    active: true,
  },
  {
    num: "03",
    title: "إقامة Arraigo Sociolaboral",
    desc: "للمقيمين في إسبانيا — تسوية الوضع القانوني من خلال عقد عمل واندماج اجتماعي.",
    path: "/arraigo-sociolaboral",
    image: "/images/service-arraigo.jpg",
    active: true,
  },
  {
    num: "04",
    title: "التسوية الاستثنائية",
    desc: "فرصة محدودة لتقنين الأوضاع — شروط مبسطة ومعالجة سريعة (في حال التطبيق).",
    path: "/regularizacion-excepcional",
    image: "/images/regur.jpg",
    active: true,
  },
];

export default function ServicesSection() {
  return (
    <section dir="rtl" id="services" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="ما نقدمه"
          title="خدماتنا"
          description="دعم قانوني متكامل لكل مراحل رحلتك نحو الإقامة في إسبانيا."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Link
                to={s.active ? s.path : "#"}
                className={`group flex flex-col relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1 h-full ${
                  !s.active ? "opacity-50 pointer-events-none" : ""
                }`}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-accent to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

                {/* Image */}
                {s.image ? (
                  <div className="overflow-hidden aspect-video flex-shrink-0">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">{s.num}</span>
                    </div>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  <span className="text-[11px] font-cairo text-muted-foreground/50">
                    {s.num}
                  </span>
                  <h3 className="font-changa text-lg font-bold text-primary mt-3 mb-2 line-clamp-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1 line-clamp-3">
                    {s.desc}
                  </p>
                  {s.active ? (
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent group-hover:gap-3 transition-all">
                      اعرف أكثر
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="inline-block text-[10px] font-semibold text-accent/60 border border-accent/20 px-3 py-1 rounded-full">
                      قريباً
                    </span>
                  )}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}