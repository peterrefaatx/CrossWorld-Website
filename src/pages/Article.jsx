import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "@/api/apiClient";
import { Calendar, ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const data = await api.articles.getById(id);
        setArticle(data);
      } catch (error) {
        console.error('Failed to load article:', error);
      }
      setLoading(false);
    };
    loadArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">المقال غير موجود</h1>
          <Link to="/" className="text-accent hover:underline">العودة للرئيسية</Link>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-secondary/30 to-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-secondary/50 to-transparent pt-32 pb-12">
        <div className="max-w-[90%] mx-auto px-6 lg:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition mb-8">
            <ArrowRight className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-accent text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
                أخبار
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(article.created_at).toLocaleDateString('ar', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <h1 className="font-changa text-4xl lg:text-6xl font-bold text-primary leading-tight">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Featured Image */}
      {article.image && (
        <div className="max-w-[90%] mx-auto px-6 lg:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border"
          >
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-[90%] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-sm border border-border p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="text-base lg:text-lg text-foreground leading-relaxed whitespace-pre-wrap font-cairo">
                  {article.content}
                </div>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-5 lg:sticky lg:top-24 self-start hidden lg:block"
          >
            {/* CTA Card - احجز استشارتك */}
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

            {/* Contact Card - تواصل معنا */}
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
          </motion.aside>
        </div>

        {/* Back to home */}
        <div className="mt-16 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowRight className="w-5 h-5" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}
