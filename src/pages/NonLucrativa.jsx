import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAStrip from "../components/home/CTAStrip";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const heroStats = [
  { value: "1 سنة", label: "صلاحية الإقامة" },
  { value: "€2,400", label: "الحد الأدنى للدخل" },
  { value: "0%", label: "مسموح بالعمل" },
  { value: "29 دولة", label: "حرية التنقل" },
];

const quickFacts = [
  { label: "صلاحية أولية", value: "سنة واحدة" },
  { label: "التجديد", value: "سنتين + سنتين (حتى 5 سنوات)" },
  { label: "الحد الأدنى للدخل", value: "€2,400 شهريًا (400% من IPREM)" },
  { label: "وقت المعالجة", value: "30 إلى 90 يوم" },
  { label: "العمل داخل إسبانيا", value: "غير مسموح" },
  { label: "التحويل لإقامة أخرى", value: "ممكن بعد سنة" },
];

const steps = [
  { title: "جمع الوثائق والأبوستيل", desc: "شهادات السجل الجنائي + ترجمة معتمدة + تصديق رسمي" },
  { title: "إثبات الموارد المالية", desc: "كشف حساب بنكي أو إثبات دخل ثابت" },
  { title: "التأمين الصحي", desc: "وثيقة تأمين إسبانية بدون مشاركة في التكاليف" },
  { title: "تقديم الطلب", desc: "تقديم الملف في القنصلية الإسبانية" },
  { title: "استلام الفيزا والسفر", desc: "الدخول إلى إسبانيا خلال مدة صلاحية الفيزا" },
  { title: "بصمة الإقامة (TIE)", desc: "حجز موعد واستخراج بطاقة الإقامة" },
];

const faqs = [
  { q: "هل يمكنني العمل عن بُعد؟", a: "لا، هذه الفيزا لا تسمح بأي نوع من العمل، سواء داخل أو خارج إسبانيا." },
  { q: "هل يمكن إضافة أفراد الأسرة؟", a: "نعم، يمكن إضافة الزوج/الزوجة والأطفال مع زيادة متطلبات الدخل." },
  { q: "هل يمكن تحويلها إلى إقامة عمل؟", a: "نعم، يمكن التحويل بعد السنة الأولى وفق شروط معينة." },
  { q: "هل أحتاج حساب بنكي إسباني؟", a: "ليس شرطًا للتقديم، لكنه مفيد جدًا بعد الوصول." },
];

const tocItems = [
  { id: "what-is", label: "ما هي فيزا Non Lucrativa؟" },
  { id: "facts", label: "نظرة سريعة" },
  { id: "eligibility", label: "شروط الأهلية" },
  { id: "paths", label: "مسار التقديم" },
  { id: "checklist", label: "خطوات التقديم" },
  { id: "taxes", label: "الضرائب" },
  { id: "notes", label: "ملاحظات مهمة" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

export default function NonLucrativa() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[11px] font-cairo uppercase text-accent font-medium">خدماتنا</span>
            </div>
            <h1 className="font-changa text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
              تأشيرة الإقامة <span className="text-accent">غير الربحية</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              دليل شامل ومحدّث لعام 2026 — المتطلبات الرسمية، الدخل المطلوب، وكيفية الحصول على إقامة قانونية في إسبانيا بدون عمل.
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
              {/* What is Non Lucrativa */}
              <ScrollReveal>
                <div id="what-is">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    ما هي فيزا <span className="text-accent">Non Lucrativa</span>؟
                  </h2>
                  <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                      فيزا الإقامة غير الربحية في إسبانيا هي برنامج إقامة مخصص لغير مواطني الاتحاد الأوروبي، يتيح لهم العيش في إسبانيا بشكل قانوني بدون الحاجة إلى العمل داخل البلاد.
                    </p>
                    <p>
                      تعتمد هذه الفيزا على إثبات القدرة المالية، وهي مثالية للأشخاص الذين لديهم دخل ثابت من خارج إسبانيا مثل:
                    </p>
                    <ul className="space-y-2 text-sm pr-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>أصحاب المدخرات</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>المستثمرين</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>المتقاعدين</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>أصحاب الدخل السلبي</span>
                      </li>
                    </ul>
                    <p>
                      تُعد هذه الفيزا من أقدم وأسهل طرق الإقامة في إسبانيا، حيث لا تتطلب عقد عمل أو نشاط مهني داخل الدولة.
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
                        <span>عدم الحاجة إلى عمل أو عقد وظيفي</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>إمكانية التجديد والتحول إلى إقامة دائمة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>حرية التنقل داخل منطقة الشنغن</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>إمكانية إضافة أفراد الأسرة</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>إمكانية التحويل لاحقًا إلى إقامة عمل</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>

              {/* Alert */}
              <div className="bg-accent/5 border border-accent/20 border-r-4 border-r-accent rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase text-accent">تنبيه قانوني — 2026</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  تطبق السلطات الإسبانية بشكل صارم شرط عدم العمل داخل إسبانيا، وأي مخالفة قد تؤدي إلى رفض التجديد أو إلغاء الإقامة.
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
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">للتأهل، يجب استيفاء شرطين أساسيين: الملاءة المالية + الاستقرار القانوني</p>
                  
                  <h3 className="font-changa text-base font-bold text-primary mb-3">1. المتطلبات المالية</h3>
                  <div className="rounded-2xl border border-border overflow-hidden mb-4">
                    <div className="flex bg-primary text-white text-xs font-semibold">
                      <div className="flex-1 p-3 text-center">تكوين الأسرة</div>
                      <div className="flex-1 p-3 text-center">المتطلب الشهري</div>
                      <div className="flex-1 p-3 text-center">الإجمالي السنوي</div>
                    </div>
                    {[
                      ["المتقدم الرئيسي فقط", "€2,400", "€28,800"],
                      ["زوج/شريك", "€3,000", "€36,000"],
                      ["كل طفل", "+ €600", "+ €7,200"],
                    ].map((row, i) => (
                      <div key={i} className={`flex text-sm ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                        <div className="flex-1 p-3 text-center text-primary font-medium">{row[0]}</div>
                        <div className="flex-1 p-3 text-center text-accent font-bold">{row[1]}</div>
                        <div className="flex-1 p-3 text-center text-accent font-bold">{row[2]}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary border-r-4 border-r-primary rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">نصيحة:</strong> يُفضل إظهار دخل أعلى من الحد الأدنى (مثلاً €2,700+) لزيادة فرص القبول.</p>
                  </div>

                  <h3 className="font-changa text-base font-bold text-primary mb-2">2. المتطلبات الأساسية</h3>
                  <ul className="list-disc pr-6 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    <li>جواز سفر ساري</li>
                    <li>إثبات دخل أو مدخرات كافية</li>
                    <li>تأمين صحي خاص في إسبانيا</li>
                    <li>سجل جنائي نظيف</li>
                    <li>شهادة طبية تثبت خلوك من الأمراض المعدية</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Path */}
              <ScrollReveal>
                <div id="paths">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">مسار التقديم</h2>
                  <div className="bg-accent/5 border border-accent/20 border-r-4 border-r-accent rounded-xl p-5 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-bold text-accent">هذه الفيزا تُقدّم فقط من خارج إسبانيا</span>
                    </div>
                  </div>
                  <div className="border border-border rounded-2xl p-6 border-t-4 border-t-primary">
                    <span className="text-[10px] font-bold uppercase text-primary mb-2 block">المسار الوحيد</span>
                    <h4 className="font-changa text-base font-bold text-primary mb-2">عبر القنصلية الإسبانية</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">يتم التقديم في القنصلية الإسبانية في بلدك، والحصول على فيزا لمدة سنة، ثم السفر إلى إسبانيا واستخراج بطاقة الإقامة.</p>
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

              {/* Taxes */}
              <ScrollReveal>
                <div id="taxes">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    الضرائب في <span className="text-accent">إسبانيا</span>
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                    حاملو هذه الفيزا يصبحون مقيمين ضريبيين في إسبانيا إذا أقاموا أكثر من 183 يومًا في السنة.
                  </p>
                  <div className="bg-secondary rounded-2xl p-6 border border-border">
                    <span className="text-[10px] font-bold uppercase text-muted-foreground/50 block mb-3">مقيم عادي (IRPF)</span>
                    <div className="font-cairo text-4xl font-bold text-primary mb-2">20% - 45%</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">ضريبة تصاعدية على الدخل العالمي</p>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-3">
                      <p className="text-xs text-muted-foreground">⚠️ لا ينطبق قانون بيكهام على هذه الفيزا</p>
                    </div>
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
                      <p className="text-sm text-muted-foreground">لا يُسمح بالعمل داخل إسبانيا أو العمل عن بُعد لشركات أجنبية</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">يمكن التحويل لاحقًا إلى إقامة عمل أو مشروع</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">يجب الحفاظ على مستوى الدخل طوال مدة الإقامة</p>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <span className="text-accent text-lg flex-shrink-0">•</span>
                      <p className="text-sm text-muted-foreground">الإقامة تؤدي إلى الإقامة الدائمة بعد 5 سنوات</p>
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
                    <div className="text-[9px] font-bold uppercase text-accent mb-1">Whatsapp</div>
                    <div className="text-xs font-semibold text-primary text-right" dir="ltr">+34 604 811 874</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-bold uppercase text-accent mb-1">Email</div>
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
