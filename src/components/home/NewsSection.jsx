import { useState, useEffect, useRef } from "react";
import { api } from "@/api/apiClient";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    api.articles.getAll()
      .then(data => {
        console.log('Articles loaded:', data);
        setArticles(data.slice(0, 9));
      })
      .catch(err => {
        console.error('Failed to load articles:', err);
      });
  }, []);

  if (!articles.length) return null;

  const perView = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const max = Math.max(0, articles.length - perView);

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(max, i + 1));

  return (
    <section dir="rtl" className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-secondary/40" id="news">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            tag="آخر الأخبار"
            title="أخبار ومستجدات"
            description="آخر التحديثات القانونية والمعلومات المهمة لعام 2026."
          />
          <div className="flex gap-2 mb-4">
            <button
              onClick={prev}
              disabled={idx === 0}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={idx >= max}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Track */}
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-5"
            animate={{ 
              x: `-${idx * (100 / perView)}%`
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {articles.map(a => (
              <Link
                key={a.id}
                to={`/article/${a.id}`}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-13.33px)] bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-secondary relative">
                  {a.image ? (
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-accent/95 text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full">
                      أخبار
                    </span>
                  </div>
                  {/* Accent line on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-l from-accent to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-changa text-base font-bold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
                    {a.content?.substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(a.created_at).toLocaleDateString('ar')}
                    </span>
                    <span className="text-[11px] font-bold text-accent flex items-center gap-1">
                      اقرأ أكثر <ArrowLeft className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        {articles.length > perView && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "bg-accent w-6" : "bg-border w-1.5"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}