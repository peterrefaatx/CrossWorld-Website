import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAStrip from "../components/home/CTAStrip";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const heroStats = [
  { value: "1 سنة", label: "صلاحية الإقامة" },
  { value: "عقد عمل", label: "شرط أساسي" },
  { value: "30 ساعة", label: "حد أدنى للعمل" },
  { value: "داخل إسبانيا", label: "مكان التقديم" },
];

const quickFacts = [
  { label: "صلاحية الإقامة", value: "سنة واحدة" },
  { label: "التجديد", value: "تحويل إلى إقامة عمل" },
  { label: "مدة التواجد المطلوبة", value: "سنتين داخل إسبانيا" },
  { label: "العمل", value: "مسموح (بعقد رسمي)" },
  { label: "وقت المعالجة", value: "3 إلى 6 شهور" },
  { label: "مكان التقديم", value: "داخل إسبانيا فقط" },
];

const steps = [
  { title: "جمع إثباتات الإقامة", desc: "مثل شهادة السكن (Empadronamiento) وأي مستند يثبت التواجد" },
  { title: "الحصول على عقد العمل", desc: "التأكد من أن العقد مطابق للشروط القانونية" },
  { title: "إعداد الملف", desc: "جواز سفر – سجل جنائي – عقد العمل – إثبات الإقامة" },
  { title: "تقديم الطلب", desc: "في مكتب الهجرة داخل إسبانيا" },
  { title: "انتظار القرار", desc: "عادة خلال 3 إلى 6 أشهر" },
  { title: "الحصول على الإقامة", desc: "واستخراج بطاقة TIE" },
];

const faqs = [
  { q: "هل يمكنني التقديم بدون عقد عمل؟", a: "لا، عقد العمل شرط أساسي في هذا النوع." },
  { q: "هل يمكن تغيير صاحب العمل؟", a: "نعم بعد الحصول على الإقامة، وفق القوانين." },
  { q: "هل يمكن إضافة الأسرة؟", a: "ليس مباشرة، لكن ممكن بعد التحويل لإقامة عمل." },
  { q: "هل تحتسب للإقامة الدائمة؟", a: "نعم، تحتسب ضمن مدة الإقامة القانونية." },
];

const tocItems = [
  { id: "what-is", label: "ما هي إقامة Arraigo Sociolaboral؟" },
  { id: "benefits", label: "المميزات" },
  { id: "facts", label: "نظرة سريعة" },
  { id: "eligibility", label: "شروط الأهلية" },
  { id: "checklist", label: "خطوات التقديم" },
  { id: "after", label: "بعد الحصول على الإقامة" },
  { id: "notes", label: "ملاحظات مهمة" },
  { id: "comparison", label: "الفرق بين أنواع Arraigo" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

export default function ArraigoSociolaboral() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[11px] font-cairo tracking-[4px] uppercase text-accent font-medium">خدماتنا</span>
            </div>
            <h1 className="font-changa text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
              إقامة <span className="text-accent">Arraigo Sociolaboral</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              دليل شامل ومحدّث لعام 2026 — الشروط الجديدة، عقد العمل، وكيف تحصل على إقامة قانونية من داخل إسبانيا.
            </p>
            <div className="flex flex-wrap gap-10 mt-8 pt-7 border-t border-border/50">
              {heroStats.map((s, i) => (
                <div key={i}>
                  <div className="font-cairo text-2xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layout */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
            {/* Content */}
            <div className="min-w-0 space-y-12">
              {/* What is Arraigo Sociolaboral */}
              <ScrollReveal>
                <div id="what-is">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    ما هي إقامة <span className="text-accent">Arraigo Sociolaboral</span>؟
                  </h2>
                  <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                      إقامة Arraigo Sociolaboral هي أحد أنواع تسوية الأوضاع (Arraigo) في إسبانيا، وتُمنح للأشخاص المتواجدين داخل إسبانيا بشكل غير قانوني، بشرط إثبات الاندماج في المجتمع والحصول على عقد عمل.
                    </p>
                    <p>
                      تهدف هذه الإقامة إلى منح فرصة قانونية للأشخاص الذين عاشوا في إسبانيا لفترة معينة، لبدء حياة مستقرة من خلال العمل بشكل رسمي.
                    </p>
                    <p>
                      تُعد هذه الطريقة من أهم وأشهر طرق التسوية في إسبانيا، خاصة لمن لديهم فرصة عمل حقيقية.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal>
                <div id="benefits">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">المميزات</h2>
                  <div className="bg-secondary/50 rounded-xl p-5">
                    <h3 className="font-changa text-base font-bold text-primary mb-3">تشمل المزايا:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>إقامة قانونية في إسبانيا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>تصريح عمل رسمي</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>إمكانية التجديد لاحقًا</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>بداية مسار الإقامة الدائمة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>فرصة لتسوية الوضع بدون مغادرة إسبانيا</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Alert */}
              <div className="bg-accent/5 border border-accent/20 border-r-4 border-r-accent rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-accent">تنبيه قانوني — 2026</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تُشدد السلطات الإسبانية على ضرورة تقديم عقد عمل حقيقي وقابل للتحقق، وأي تلاعب قد يؤدي إلى رفض الطلب أو مشاكل قانونية.
                </p>
              </div>

              {/* Quick Facts */}
              <ScrollReveal>
                <div id="facts">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    نظرة سريعة — <span className="text-accent">2026</span>
                  </h2>
                  <div className="rounded-2xl border border-border overflow-hidden">
                    {quickFacts.map((f, i) => (
                      <div key={i} className={`flex ${i < quickFacts.length - 1 ? "border-b border-border" : ""}`}>
                        <div className="w-1/3 p-4 bg-primary text-white text-sm font-semibold">{f.label}</div>
                        <div className="flex-1 p-4 text-sm text-muted-foreground">{f.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Eligibility */}
              <ScrollReveal>
                <div id="eligibility">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    شروط الأهلية — <span className="text-accent">تحديث 2026</span>
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">للتأهل، يجب استيفاء 3 شروط أساسية:</p>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-accent">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">1. الإقامة داخل إسبانيا</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات التواجد داخل إسبانيا لمدة لا تقل عن سنتين</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات الاستمرارية (Empadronamiento، تحويلات، فواتير...)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-primary">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">2. عقد العمل</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>عقد عمل قانوني</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>بحد أدنى 30 ساعة أسبوعيًا</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>صاحب العمل مسجل وقادر ماليًا</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-accent">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">3. السجل القانوني</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>سجل جنائي نظيف داخل إسبانيا وخارجها</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>عدم وجود أمر ترحيل نشط</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Steps */}
              <ScrollReveal>
                <div id="checklist">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">خطوات التقديم</h2>
                  <div className="space-y-4">
                    {steps.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <strong className="text-primary text-[15px] block mb-1">{step.title}</strong>
                          <span className="text-sm text-muted-foreground leading-relaxed">{step.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* After Getting Residency */}
              <ScrollReveal>
                <div id="after">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    بعد الحصول على <span className="text-accent">الإقامة</span>
                  </h2>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-border">
                    <h3 className="font-changa text-base font-bold text-primary mb-4">بعد سنة:</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>يمكن تحويل الإقامة إلى إقامة عمل عادية</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>الاستمرار في العمل بشكل قانوني</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>احتساب السنة ضمن الإقامة الدائمة</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Important Notes */}
              <ScrollReveal>
                <div id="notes">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">ملاحظات مهمة</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">لا يمكن التقديم من خارج إسبانيا</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">العقد الوهمي = رفض مباشر</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">لازم تثبت اندماجك في المجتمع</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">الإقامة تبدأ من تاريخ الموافقة</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Comparison */}
              <ScrollReveal>
                <div id="comparison">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    الفرق بينها وبين أنواع <span className="text-accent">Arraigo</span> الأخرى
                  </h2>
                  <div className="space-y-3">
                    <div className="border border-border rounded-xl p-5 bg-accent/5">
                      <h4 className="font-changa text-sm font-bold text-primary mb-2">Arraigo Sociolaboral</h4>
                      <p className="text-sm text-muted-foreground">يعتمد على عقد عمل</p>
                    </div>
                    <div className="border border-border rounded-xl p-5">
                      <h4 className="font-changa text-sm font-bold text-primary mb-2">Arraigo Social</h4>
                      <p className="text-sm text-muted-foreground">يعتمد على روابط اجتماعية + عقد</p>
                    </div>
                    <div className="border border-border rounded-xl p-5">
                      <h4 className="font-changa text-sm font-bold text-primary mb-2">Arraigo Familiar</h4>
                      <p className="text-sm text-muted-foreground">يعتمد على وجود أقارب إسبان</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQ */}
              <ScrollReveal>
                <div id="faq">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">الأسئلة الشائعة</h2>
                  <div className="space-y-0">
                    {faqs.map((f, i) => (
                      <div key={i} className="border-b border-border py-5">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold flex-shrink-0">؟</div>
                          <h3 className="font-changa text-base font-bold text-primary">{f.q}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pr-10">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5 lg:sticky lg:top-24 self-start hidden lg:block">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-7">
                <h3 className="font-changa text-base font-bold text-white mb-3 pb-3 border-b border-white/10">احجز استشارتك</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5">فريقنا جاهز لمراجعة ملفك وتحديد فرص نجاحك مجاناً.</p>
                <Link to="/contact" className="block w-full text-center py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent/90 transition mb-2">
                  استشارة مجانية ←
                </Link>
                <a href="https://wa.me/34604811874" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/15 transition">
                  واتساب مباشر
                </a>
              </div>

              {/* TOC */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-changa text-sm font-bold text-primary mb-4 pb-3 border-b-2 border-accent">محتويات الصفحة</h3>
                <ul className="space-y-1">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="flex items-center gap-2.5 px-3 py-2 text-xs text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-lg transition">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Mini */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-changa text-sm font-bold text-primary mb-4 pb-3 border-b-2 border-accent">تواصل معنا</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-[9px] font-bold tracking-[2px] uppercase text-accent mb-1">Whatsapp</div>
                    <div className="text-xs font-semibold text-primary text-right" dir="ltr">+34 604 811 874</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold tracking-[2px] uppercase text-accent mb-1">Email</div>
                    <div className="text-[11px] font-semibold text-primary text-right" dir="ltr">Info.crossworldspain@gmail.com</div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTAStrip title="جاهز للبدء؟ نحن هنا" highlight="لمساعدتك" />
    </div>
  );
}
