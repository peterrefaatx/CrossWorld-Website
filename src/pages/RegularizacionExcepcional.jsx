import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAStrip from "../components/home/CTAStrip";
import { ArrowLeft, AlertTriangle, Clock } from "lucide-react";

const heroStats = [
  { value: "استثنائي", label: "برنامج مؤقت" },
  { value: "بدون عقد", label: "في بعض الحالات" },
  { value: "داخل إسبانيا", label: "مكان التقديم" },
  { value: "فرصة محدودة", label: "قد لا تتكرر" },
];

const quickFacts = [
  { label: "صلاحية الإقامة", value: "سنة واحدة (متوقعة)" },
  { label: "التجديد", value: "تحويل إلى إقامة عمل أو Arraigo" },
  { label: "الحد الأدنى للإقامة", value: "غير محدد (متوقع تخفيفه)" },
  { label: "عقد العمل", value: "قد لا يكون إلزاميًا" },
  { label: "وقت المعالجة", value: "سريع نسبيًا" },
  { label: "مكان التقديم", value: "داخل إسبانيا" },
];

const targetGroups = [
  "المقيمين في إسبانيا بدون أوراق",
  "من لديهم إثبات تواجد لفترة معينة",
  "العمال غير المسجلين",
  "العائلات المستقرة داخل إسبانيا",
  "من لديهم روابط اجتماعية داخل المجتمع",
];

const steps = [
  { title: "متابعة الإعلان الرسمي", desc: "التأكد من صدور القرار في الجريدة الرسمية" },
  { title: "جمع المستندات", desc: "إثبات التواجد + سجل جنائي + أي مستند داعم" },
  { title: "تجهيز الملف", desc: "بشكل قانوني كامل" },
  { title: "تقديم الطلب", desc: "في مكتب الهجرة داخل إسبانيا" },
  { title: "انتظار القرار", desc: "عادة يكون أسرع من البرامج العادية" },
  { title: "الحصول على الإقامة", desc: "واستخراج بطاقة TIE" },
];

const faqs = [
  { q: "هل التسوية الاستثنائية متاحة الآن؟", a: "لا، لم يتم الإعلان الرسمي عنها حتى الآن." },
  { q: "هل تحتاج عقد عمل؟", a: "ليس بالضرورة، حسب شروط القرار النهائي." },
  { q: "هل يمكن التقديم من خارج إسبانيا؟", a: "لا، التقديم يكون من داخل إسبانيا فقط." },
  { q: "هل هي فرصة مضمونة؟", a: "لا، هي فرصة محتملة وليست مضمونة." },
];

const tocItems = [
  { id: "what-is", label: "ما هي التسوية الاستثنائية؟" },
  { id: "benefits", label: "المميزات" },
  { id: "facts", label: "نظرة سريعة" },
  { id: "target", label: "الفئات المستفيدة" },
  { id: "requirements", label: "الشروط المتوقعة" },
  { id: "checklist", label: "خطوات التقديم" },
  { id: "after", label: "بعد الحصول على الإقامة" },
  { id: "notes", label: "ملاحظات مهمة" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

export default function RegularizacionExcepcional() {
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
              التسوية <span className="text-accent">الاستثنائية</span> في إسبانيا
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              دليل شامل ومحدّث لعام 2026 — الشروط المتوقعة، الفئات المستفيدة، وكيف تحصل على إقامة قانونية بشكل استثنائي.
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
              {/* What is */}
              <ScrollReveal>
                <div id="what-is">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    ما هي <span className="text-accent">التسوية الاستثنائية</span>؟
                  </h2>
                  <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                      التسوية الاستثنائية في إسبانيا هي إجراء قانوني خاص تقوم به الحكومة في حالات معينة، بهدف تقنين أوضاع عدد كبير من المهاجرين غير النظاميين ومنحهم إقامة قانونية دون الحاجة إلى استيفاء جميع الشروط التقليدية.
                    </p>
                    <p>
                      يتم إطلاق هذه التسوية عادةً بقرار حكومي استثنائي، وتكون محددة بفترة زمنية قصيرة، وتشمل شروطًا مبسطة مقارنة بأنواع الإقامات الأخرى مثل الـ Arraigo.
                    </p>
                    <p>
                      تُعتبر هذه الفرصة من أهم وأسرع الطرق للحصول على إقامة قانونية في إسبانيا، في حال تم تفعيلها رسميًا.
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
                        <span>إمكانية الحصول على إقامة بدون تعقيدات كبيرة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>شروط أسهل من برامج الإقامة التقليدية</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>لا يشترط عقد عمل في بعض الحالات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>فرصة لتقنين الوضع القانوني بسرعة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>بداية طريق الإقامة الدائمة</span>
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  حتى الآن، لم يتم الإعلان رسميًا عن تطبيق التسوية الاستثنائية لعام 2026، وكل ما يتم تداوله هو مقترحات أو مناقشات قانونية.
                </p>
                <p className="text-sm font-semibold text-accent">
                  ⚠️ يُنصح بمتابعة المصادر الرسمية فقط قبل اتخاذ أي خطوة.
                </p>
              </div>

              {/* Quick Facts */}
              <ScrollReveal>
                <div id="facts">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    نظرة سريعة — <span className="text-accent">في حال التطبيق</span>
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

              {/* Target Groups */}
              <ScrollReveal>
                <div id="target">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    الفئات المستفيدة <span className="text-accent">(متوقعة)</span>
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">في حال صدور القرار، قد تشمل:</p>
                  <div className="grid grid-cols-1 gap-3">
                    {targetGroups.map((group, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl border border-border">
                        <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-sm text-muted-foreground pt-1">{group}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Requirements */}
              <ScrollReveal>
                <div id="requirements">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    الشروط المتوقعة — <span className="text-accent">2026</span>
                  </h2>
                  <div className="bg-amber-50 border border-amber-200 border-r-4 border-r-amber-500 rounded-xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-xs font-bold text-amber-700">هذه الشروط تقديرية بناءً على تجارب سابقة</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-accent">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">1. إثبات التواجد داخل إسبانيا</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات الدخول قبل تاريخ محدد</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات الاستمرارية داخل البلاد</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-primary">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">2. السجل الجنائي</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>سجل نظيف داخل وخارج إسبانيا</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-accent">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">3. الاندماج المجتمعي</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات وجودك داخل المجتمع (سكن – علاقات – نشاط)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-primary">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">4. متطلبات إضافية (قد تُطلب)</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>عرض عمل (اختياري في بعض الحالات)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إثبات موارد مالية</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Steps */}
              <ScrollReveal>
                <div id="checklist">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    خطوات التقديم <span className="text-accent">(في حال فتح البرنامج)</span>
                  </h2>
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
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>إمكانية التحويل إلى إقامة عمل</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>بدء احتساب مدة الإقامة الدائمة</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent text-lg flex-shrink-0">✓</span>
                        <span>الاستقرار القانوني داخل إسبانيا</span>
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
                      <p className="text-sm text-muted-foreground">البرنامج غير مؤكد حتى الآن</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">في حال صدوره، سيكون لفترة محدودة جدًا</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">الطلبات ستكون عالية والمنافسة كبيرة</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">تجهيز الأوراق مسبقًا يعطيك أفضلية</p>
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
