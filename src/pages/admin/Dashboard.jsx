import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, Newspaper, TrendingUp, ChevronLeft } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

export function StatusBadge({ status }) {
  const map = {
    new: { label: "جديد", cls: "bg-blue-500/10 text-blue-600" },
    read: { label: "مقروء", cls: "bg-amber-500/10 text-amber-600" },
    replied: { label: "تم الرد", cls: "bg-emerald-500/10 text-emerald-600" },
  };
  const s = map[status] || map.new;
  return (
    <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-md ${s.cls}`}>
      {s.label}
    </span>
  );
}

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({ submissions: 0, newSubs: 0, testimonials: 0, articles: 0 });
  const [recentSubs, setRecentSubs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [subs, tests, arts] = await Promise.all([
          api.submissions.getAll(),
          api.testimonials.getAllAdmin(),
          api.articles.getAllAdmin(),
        ]);
        setStats({
          submissions: subs.length,
          newSubs: subs.filter(s => s.status === "new" || !s.status).length,
          testimonials: tests.length,
          articles: arts.filter(a => a.published).length,
        });
        setRecentSubs(subs.slice(0, 6));
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
      setLoading(false);
    };
    loadData();
  }, []);

  const cards = [
    { label: "إجمالي الطلبات", value: stats.submissions, sub: "contact submissions", icon: Mail, color: "text-blue-500", bg: "bg-blue-500/8" },
    { label: "طلبات جديدة", value: stats.newSubs, sub: "require attention", icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-500/8" },
    ...(user?.role === 'admin' ? [{ label: "التقييمات", value: stats.testimonials, sub: "client reviews", icon: MessageSquare, color: "text-emerald-500", bg: "bg-emerald-500/8" }] : []),
    { label: "مقالات منشورة", value: stats.articles, sub: "published articles", icon: Newspaper, color: "text-purple-500", bg: "bg-purple-500/8" },
  ];

  const quickActions = [
    { label: "مقال جديد", sub: "أضف خبراً أو تحديثاً", path: "/admin/articles", color: "bg-[#e67e22]/10 text-[#e67e22]", icon: Newspaper },
    { label: "طلبات التواصل", sub: "راجع الطلبات الجديدة", path: "/admin/submissions", color: "bg-blue-500/10 text-blue-500", icon: Mail },
    ...(user?.role === 'admin' ? [{ label: "تقييم جديد", sub: "أضف تقييم عميل", path: "/admin/testimonials", color: "bg-emerald-500/10 text-emerald-500", icon: MessageSquare }] : []),
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#1c1c1e]">لوحة التحكم</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          {new Date().toLocaleDateString("ar-SA", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
            <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
              <c.icon className={`w-4 h-4 ${c.color}`} />
            </div>
            <div className="text-[28px] font-bold text-[#1c1c1e] leading-none mb-1">
              {loading ? <span className="text-gray-200 animate-pulse">—</span> : c.value}
            </div>
            <div className="text-xs font-medium text-[#1c1c1e]/60">{c.label}</div>
            <div className="text-[10px] text-gray-300 mt-0.5">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Recent Submissions */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100/80">
            <span className="text-sm font-semibold text-[#1c1c1e]">آخر الطلبات</span>
            <Link to="/admin/submissions" className="flex items-center gap-1 text-[11px] text-[#e67e22] hover:opacity-70 transition font-medium">
              عرض الكل <ChevronLeft className="w-3 h-3" />
            </Link>
          </div>
          <div>
            {loading ? (
              <div className="p-5 space-y-3">{[1,2,3].map(i => <div key={i} className="h-11 bg-gray-50 rounded-xl animate-pulse" />)}</div>
            ) : recentSubs.length ? recentSubs.map((s, i) => (
              <div key={s.id} className={`flex items-center gap-4 px-6 py-3.5 ${i < recentSubs.length - 1 ? "border-b border-gray-50" : ""}`}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2c4a7c] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                  {s.name?.slice(0,1)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-[#1c1c1e] truncate">{s.name}</div>
                  <div className="text-[11px] text-gray-400">{s.service || "استشارة عامة"}</div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-[10px] text-gray-300">{s.created_date?.slice(0,10)}</span>
                  <StatusBadge status={s.status} />
                </div>
              </div>
            )) : (
              <p className="text-center py-10 text-sm text-gray-300">لا توجد طلبات بعد</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)]">
          <div className="px-6 py-4 border-b border-gray-100/80">
            <span className="text-sm font-semibold text-[#1c1c1e]">إجراءات سريعة</span>
          </div>
          <div className="p-3 space-y-1.5">
            {quickActions.map((a, i) => (
              <Link key={i} to={a.path} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-black/[0.02] transition-all group">
                <div className={`w-9 h-9 rounded-xl ${a.color} flex items-center justify-center flex-shrink-0`}>
                  <a.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#1c1c1e]">{a.label}</div>
                  <div className="text-[10px] text-gray-400">{a.sub}</div>
                </div>
                <ChevronLeft className="w-3.5 h-3.5 text-gray-200 mr-auto group-hover:text-gray-400 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}