import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

export default function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  if (!articles.length) {
    console.log('No articles to display');
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section dir="rtl" className="pt-6 pb-12 lg:pt-8 lg:pb-16 bg-secondary/40" id="news">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <SectionHeader
            tag="آخر الأخبار"
            title="أخبار ومستجدات"
            description="آخر التحديثات القانونية والمعلومات المهمة لعام 2026."
          />
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"
              aria-label="Previous"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"
              aria-label="Next"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Mobile: Show 1 card */}
          <div className="md:hidden">
            <div className="relative">
              <Link
                to={`/article/${articles[currentIndex].id}`}
                className="block bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-secondary relative">
                  {articles[currentIndex].image ? (
                    <img 
                      src={articles[currentIndex].image} 
                      alt={articles[currentIndex].title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-accent/95 text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full">
                      أخبار
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-l from-accent to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3 className="font-changa text-base font-bold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                    {articles[currentIndex].title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {articles[currentIndex].content?.substring(0, 150)}...
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(articles[currentIndex].created_at).toLocaleDateString('ar')}
                    </span>
                    <span className="text-[11px] font-bold text-accent flex items-center gap-1">
                      اقرأ أكثر <ArrowLeft className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop: Show 3 cards with carousel */}
          <div className="hidden md:block">
            <div className="overflow-hidden">
              <div 
                className="flex gap-5 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${Math.floor(currentIndex / 3) * 100}%)`
                }}
              >
                {articles.map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/article/${article.id}`}
                    className="flex-shrink-0 w-[calc(33.333%-13.33px)] bg-card rounded-2xl border border-border overflow-hidden group hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="aspect-video overflow-hidden bg-secondary relative">
                      {article.image ? (
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-secondary to-muted" />
                      )}
                      <div className="absolute top-3 right-3">
                        <span className="bg-accent/95 text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-full">
                          أخبار
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-l from-accent to-accent/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      <h3 className="font-changa text-base font-bold text-primary leading-snug mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {article.content?.substring(0, 150)}...
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.created_at).toLocaleDateString('ar')}
                        </span>
                        <span className="text-[11px] font-bold text-accent flex items-center gap-1">
                          اقرأ أكثر <ArrowLeft className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? "bg-accent w-6" : "bg-border w-1.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
