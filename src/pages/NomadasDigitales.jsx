import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAStrip from "../components/home/CTAStrip";
import { ArrowLeft, AlertTriangle, Phone, Mail } from "lucide-react";

const heroStats = [
  { value: "3 سنوات", label: "صلاحية الإقامة" },
  { value: "€2,850", label: "الحد الأدنى للدخل" },
  { value: "24%", label: "ضريبة ثابتة" },
  { value: "29 دولة", label: "حرية التنقل" },
];

const quickFacts = [
  { label: "صلاحية أولية", value: "سنة (قنصلية) أو 3 سنوات (داخل إسبانيا)" },
  { label: "التجديد", value: "قابلة للتمديد حتى 5 سنوات" },
  { label: "الحد الأدنى للدخل", value: "€2,850+ شهرياً (200% من الحد الأدنى للأجور)" },
  { label: "الميزة الضريبية", value: "مؤهل لقانون بيكهام (ضريبة ثابتة 24%)" },
  { label: "وقت المعالجة", value: "20 يوم (UGE) إلى 45 يوم (قنصلية)" },
  { label: "العملاء الإسبان", value: "مسموح (حتى 20% من إجمالي الدخل)" },
];

const steps = [
  { title: "جمع الوثائق والأبوستيل", desc: "شهادات السجل الجنائي من كل دولة أقمت فيها خلال آخر 5 سنوات، مع الأبوستيل والترجمة المعتمدة." },
  { title: "التأمين الصحي", desc: "وثيقة من مزود إسباني (Sanitas أو Adeslas) بدون مشاركة في التكاليف وبدون فترات انتظار." },
  { title: "الشهادة الرقمية", desc: "للتقديم من داخل إسبانيا، احصل على Certificado Digital — توقيعك الرقمي لبوابة UGE-CE." },
  { title: "تقديم الملف", desc: "رفع ملفك الكامل. الحكومة ملزمة قانونياً بالرد خلال 20 يوم عمل." },
  { title: "موعد بصمة الأصابع (TIE)", desc: "بعد الموافقة، احجز موعد Toma de Huellas في مركز الشرطة للحصول على بطاقة الإقامة." },
];

const costs = [
  { item: "رسوم التأشيرة (Tasa 790-038)", cost: "€73 – €90" },
  { item: "الترجمات المعتمدة", cost: "€40 – €60 / وثيقة" },
  { item: "خدمات الأبوستيل", cost: "$25 – $100" },
  { item: "التأمين الصحي الخاص", cost: "€50 – €90 / شهر" },
  { item: "رسوم بطاقة TIE", cost: "€16.50" },
];

const faqs = [
  { q: "هل يمكنني العمل مع عملاء إسبان؟", a: "نعم، يُسمح بالعمل مع عملاء إسبان بشرط ألا يتجاوز دخلهم 20% من إجمالي دخلك السنوي." },
  { q: "هل يمكن إضافة أفراد الأسرة؟", a: "نعم، يمكن إضافة الزوج/الزوجة والأطفال القاصرين كمعالين مع زيادة متطلبات الدخل." },
  { q: "ماذا يحدث بعد انتهاء 3 سنوات؟", a: "يمكن تجديد الإقامة لمدة سنتين إضافيتين، وبعد 5 سنوات يمكن التقديم للإقامة الدائمة." },
  { q: "هل أحتاج لحساب بنكي إسباني؟", a: "ليس شرطاً للتقديم، لكنه ضروري عملياً للحياة اليومية وبعض الإجراءات الإدارية." },
];

const tocItems = [
  { id: "what-is", label: "ما هي فيزا ال Digital Nomad؟" },
  { id: "facts", label: "نظرة سريعة" },
  { id: "eligibility", label: "شروط الأهلية" },
  { id: "paths", label: "مسارا التقديم" },
  { id: "checklist", label: "خطوات التقديم" },
  { id: "taxes", label: "الضرائب" },
  { id: "faq", label: "الأسئلة الشائعة" },
];

export default function NomadasDigitales() {
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
              تأشيرة الرحل <span className="text-accent">الرقميين</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              دليل شامل ومحدّث لعام 2026 — المتطلبات الرسمية، الضرائب، وكيفية الحصول على إقامة 3 سنوات في إسبانيا.
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
              {/* What is Digital Nomad Visa */}
              <ScrollReveal>
                <div id="what-is">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    ما هي فيزا ال <span className="text-accent">Digital Nomad</span>؟
                  </h2>
                  <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                    <p>
                      فيزا النوماد الرقمي في إسبانيا هي برنامج إقامة مخصص لغير مواطني الاتحاد الأوروبي، يتيح لهم العيش بشكل قانوني داخل إسبانيا أثناء العمل عن بُعد لصالح شركات أو عملاء خارج البلاد.
                    </p>
                    <p>
                      تم إطلاق هذه الفيزا ضمن قانون الشركات الناشئة بهدف جذب الكفاءات الدولية ودعم نمط العمل الحديث المعتمد على الإنترنت. وتُعد واحدة من أفضل الخيارات للأشخاص الذين يرغبون في الجمع بين العمل عن بُعد والاستقرار في بيئة أوروبية متطورة.
                    </p>
                    <p>
                      تمنح هذه الفيزا مرونة كبيرة في التقديم، حيث يمكن التقديم من خارج إسبانيا عبر القنصلية، أو من داخل إسبانيا أثناء التواجد بتأشيرة سياحية. كما تتيح إمكانية إضافة أفراد العائلة، والاستفادة من مستوى معيشة مرتفع وبنية تحتية قوية.
                    </p>
                    
                    <div className="bg-secondary/50 rounded-xl p-5 mt-6">
                      <h3 className="font-changa text-base font-bold text-primary mb-3">تشمل المزايا:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إقامة قانونية في إسبانيا</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إمكانية العمل عن بُعد بشكل رسمي</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>مدة إقامة تصل إلى 3 سنوات (حسب طريقة التقديم)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إمكانية التجديد والتحول إلى إقامة دائمة</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>إمكانية اصطحاب أفراد الأسرة</span>
                        </li>
                      </ul>
                    </div>

                    <p>
                      للحصول على الفيزا، يجب إثبات العمل عن بُعد لصالح جهة خارج إسبانيا، وتوفير دخل ثابت، بالإضافة إلى تأمين صحي ساري.
                    </p>
                    <p>
                      توفر إسبانيا بيئة مثالية للنوماد الرقمي، بفضل جودة الحياة، وسرعة الإنترنت، وتنوع المدن، مما يجعلها وجهة مميزة للعمل والعيش في آن واحد.
                    </p>
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
                  تفرض الحكومة الإسبانية الآن بصرامة متطلب الدخل الشهري البالغ <strong className="text-primary">€2,849</strong> وشهادات التغطية الاجتماعية.
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
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">للتأهل يجب استيفاء ثلاثة محاور: الملف المهني، استقرار الشركة، والملاءة المالية.</p>
                  <h3 className="font-changa text-base font-bold text-primary mb-2">1. الملف المهني والخبرة</h3>
                  <ul className="list-disc pr-6 space-y-2 text-sm text-muted-foreground leading-relaxed mb-6">
                    <li>شهادة جامعية معترف بها، <strong className="text-primary">أو</strong> 3 سنوات خبرة في مجالك الحالي.</li>
                    <li>إثبات العمل مع شركتك أو عملائك لمدة لا تقل عن 3 أشهر قبل التقديم.</li>
                  </ul>
                  <h3 className="font-changa text-base font-bold text-primary mb-3">2. المتطلبات المالية</h3>
                  <div className="rounded-2xl border border-border overflow-hidden mb-4">
                    <div className="flex bg-primary text-white text-xs font-semibold">
                      <div className="flex-1 p-3 text-center">تكوين الأسرة</div>
                      <div className="flex-1 p-3 text-center">المتطلب الشهري</div>
                      <div className="flex-1 p-3 text-center">الإجمالي السنوي</div>
                    </div>
                    {[
                      ["المتقدم الرئيسي فقط", "€2,850", "€34,200"],
                      ["+ زوج/شريك", "€3,889", "€46,668"],
                      ["+ كل طفل", "+ €356", "+ €4,272"],
                    ].map((row, i) => (
                      <div key={i} className={`flex text-sm ${i % 2 === 0 ? "bg-secondary/30" : ""}`}>
                        <div className="flex-1 p-3 text-center text-primary font-medium">{row[0]}</div>
                        <div className="flex-1 p-3 text-center text-accent font-bold">{row[1]}</div>
                        <div className="flex-1 p-3 text-center text-accent font-bold">{row[2]}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-secondary border-r-4 border-r-primary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">نصيحة:</strong> نوصي بإظهار ما لا يقل عن €3,000 شهرياً لضمان موافقة سلسة.</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Paths */}
              <ScrollReveal>
                <div id="paths">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">مسارا التقديم</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-accent">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-2 block">المسار أ</span>
                      <h4 className="font-changa text-base font-bold text-primary mb-2">عبر القنصلية (سنة واحدة)</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">يُقدَّم في القنصلية الإسبانية في بلدك. الأفضل لمن يريد راحة البال قبل السفر.</p>
                    </div>
                    <div className="border border-border rounded-2xl p-6 border-t-4 border-t-primary">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-2 block">المسار ب</span>
                      <h4 className="font-changa text-base font-bold text-primary mb-2">من داخل إسبانيا (3 سنوات)</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">الدخول كسائح والتقديم عبر بوابة UGE-CE. معالجة أسرع وإقامة 3 سنوات فورية.</p>
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

              {/* Taxes */}
              <ScrollReveal>
                <div id="taxes">
                  <h2 className="font-changa text-xl font-bold text-primary mb-5 pb-3 border-b-2 border-border">
                    الضرائب وقانون <span className="text-accent">بيكهام</span>
                  </h2>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                    حاملو تأشيرة الرحل الرقميين مؤهلون للاستفادة من قانون بيكهام — ضريبة ثابتة 24% بدلاً من الشرائح التصاعدية.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-secondary rounded-2xl p-6 border border-border">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-muted-foreground/50 block mb-3">مقيم عادي (IRPF)</span>
                      <div className="font-cairo text-4xl font-bold text-primary mb-2">30-45%</div>
                      <p className="text-xs text-muted-foreground leading-relaxed">ضريبة تصاعدية على الدخل العالمي + ضريبة ثروة + نموذج 720</p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6">
                      <span className="text-[10px] font-bold tracking-[2px] uppercase text-accent block mb-3">قانون بيكهام (DNV)</span>
                      <div className="font-cairo text-4xl font-bold text-white mb-2">24%</div>
                      <p className="text-xs text-white/50 leading-relaxed">ضريبة ثابتة، إعفاء من الثروة، لا نموذج 720، مضمون 6 سنوات</p>
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