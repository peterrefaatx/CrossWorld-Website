import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";

const stats = [
  { num: "+200", label: "ملف تم معالجته بنجاح" },
  { num: "3 سنوات", label: "خبرة في الهجرة الإسبانية" },
  { num: "Madrid", label: "مقرنا في قلب إسبانيا" },
];

export default function HeroSection() {
  const [heroSettings, setHeroSettings] = useState({
    title_line1: "شريكك القانوني",
    title_line2: "للإقامة في إسبانيا",
    description: "نساعد المحترفين والعائلات على الانتقال والاستقرار في إسبانيا بشكل قانوني — من تأشيرة الرحل الرقميين إلى الإقامة الدائمة.",
    accent_word: "إسبانيا"
  });

  useEffect(() => {
    api.settings.get()
      .then(data => {
        if (data.hero) {
          setHeroSettings(data.hero);
        }
      })
      .catch(err => console.error('Failed to load settings:', err));
  }, []);

  // Helper function to highlight accent word
  const highlightText = (text, accentWord) => {
    if (!accentWord) return text;
    const parts = text.split(accentWord);
    return parts.map((part, i) => (
      <span key={i}>
        {part}
        {i < parts.length - 1 && <span className="text-accent">{accentWord}</span>}
      </span>
    ));
  };

  return (
    <section dir="rtl" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/headerhome.jpg"
          alt="Madrid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/95 via-white/85 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-[20%] w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <div className="w-8 h-[1px] bg-accent" />
            <span className="text-[11px] font-cairo tracking-[5px] uppercase text-accent font-medium">
              CrossWorld Spain Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-changa text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-7">
            <span className="block mb-3">{highlightText(heroSettings.title_line1, heroSettings.accent_word)}</span>
            <span className="block">{highlightText(heroSettings.title_line2, heroSettings.accent_word)}</span>
          </h1>

          {/* Sub */}
          <p className="text-base lg:text-lg text-muted-foreground max-w-lg leading-relaxed mb-10">
            {heroSettings.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30"
            >
              ابدأ رحلتك معنا
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur text-primary text-sm font-semibold rounded-full border border-border hover:bg-white transition-all"
            >
              استعرض خدماتنا
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-0 border-t border-border/50 pt-10"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex-1 min-w-[140px] ${
                i > 0 ? "border-r border-border/50 pr-8" : ""
              } ${i < stats.length - 1 ? "pl-8" : ""}`}
            >
              <div className="font-cairo text-2xl lg:text-3xl font-bold text-accent leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-xs text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}