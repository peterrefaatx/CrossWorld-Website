import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    api.testimonials.getAll()
      .then(data => {
        console.log('Testimonials loaded:', data);
        setTestimonials(data.slice(0, 6));
      })
      .catch(err => {
        console.error('Failed to load testimonials:', err);
      });
  }, []);

  if (!testimonials.length) return null;

  return (
    <section dir="rtl" className="py-12 lg:py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="آراء عملائنا"
          title="ماذا يقولون عنا"
          description="أكثر من 200 عميل وثقوا بنا رحلتهم نحو الإقامة في إسبانيا."
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.1}>
              <div className="bg-card rounded-2xl border border-border p-7 flex flex-col gap-5 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 h-full min-h-[240px]">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < (t.rating || 5) ? "fill-accent text-accent" : "text-border"}`}
                    />
                  ))}
                </div>
                {/* Text */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-6">"{t.text}"</p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-xs font-bold">
                    {t.name?.slice(0, 2)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{t.name}</div>
                    {t.country && <div className="text-xs text-muted-foreground">{t.country}</div>}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}