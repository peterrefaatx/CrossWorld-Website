import { useState } from "react";
import { motion } from "framer-motion";
import { api } from "@/api/apiClient";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contacts = [
  { icon: Phone, label: "Whatsapp", value: "+34 604 811 874", note: "متاح من 9 صباحاً حتى 6 مساءً (توقيت مدريد)" },
  { icon: Mail, label: "Email", value: "Info.crossworldspain@gmail.com", note: "نرد خلال 24 ساعة في أيام العمل" },
  { icon: MapPin, label: "Location", value: "Madrid, España", note: "الاجتماعات بالتنسيق المسبق" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.submissions.create(form);
      setSent(true);
      toast.success("تم إرسال طلبك بنجاح — سنتواصل معك قريباً");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (error) {
      toast.error("حدث خطأ، يرجى المحاولة مرة أخرى");
    }
    setLoading(false);
  };

  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[11px] font-cairo tracking-[4px] uppercase text-accent font-medium">
                تواصل معنا
              </span>
            </div>
            <h1 className="font-changa text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
              نحن هنا <span className="text-accent">لمساعدتك</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed">
              احجز استشارتك المجانية اليوم — سنحلل وضعك ونحدد أفضل مسار لك نحو الإقامة في إسبانيا.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info */}
            <ScrollReveal>
              <div>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-accent" />
                    <span className="text-[11px] font-cairo tracking-[4px] uppercase text-accent font-medium">
                      معلومات التواصل
                    </span>
                  </div>
                  <h2 className="font-changa text-2xl font-bold text-primary mb-2">تحدث معنا مباشرة</h2>
                  <p className="text-sm text-muted-foreground">فريقنا متاح للرد على استفساراتك من الأحد إلى الخميس.</p>
                </div>
                <div className="space-y-4">
                  {contacts.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-5 items-start bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold tracking-[2px] uppercase text-accent mb-1">
                          {c.label}
                        </div>
                        <div className="text-[15px] font-semibold text-primary text-right" dir={c.label !== "Location" ? "ltr" : "rtl"}>
                          {c.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{c.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.2}>
              <div className="bg-card rounded-3xl border border-border p-8 lg:p-10 shadow-xl shadow-black/5">
                <h3 className="font-changa text-xl font-bold text-primary mb-1">احجز استشارتك المجانية</h3>
                <p className="text-sm text-muted-foreground mb-8">أرسل لنا تفاصيل وضعك وسنتواصل معك خلال 24 ساعة</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-primary mb-1.5 block">الاسم الكامل</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-primary mb-1.5 block">رقم الواتساب</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition text-right"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1.5 block">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1.5 block">الخدمة المطلوبة</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition"
                    >
                      <option value="">اختر الخدمة...</option>
                      <option>تأشيرة الرحل الرقميين</option>
                      <option>الاندماج الاجتماعي والمهني</option>
                      <option>تأشيرة غير الربحية</option>
                      <option>استشارة عامة</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary mb-1.5 block">تفاصيل وضعك</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading || sent}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-l from-accent to-accent/90 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 transition-all disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : sent ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        تم الإرسال بنجاح
                      </>
                    ) : (
                      <>
                        إرسال الطلب
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}