import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import { Trash2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { StatusBadge } from "./Dashboard";

const FILTERS = [
  { key: "all", label: "الكل" },
  { key: "new", label: "جديد" },
  { key: "read", label: "مقروء" },
  { key: "replied", label: "تم الرد" },
];

export default function Submissions() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.submissions.getAll();
      setList(data);
    } catch (error) {
      toast.error('Failed to load submissions');
    }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.submissions.updateStatus(id, status);
      load();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const del = async (id) => {
    if (!confirm("حذف هذا الطلب؟")) return;
    try {
      await api.submissions.delete(id);
      toast.success("تم الحذف");
      load();
    } catch (error) {
      toast.error('Failed to delete submission');
    }
  };

  const filtered = filter === "all" ? list : list.filter(s => (s.status || "new") === filter);

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1c1c1e]">طلبات التواصل</h1>
          <p className="text-sm text-gray-400 mt-0.5">جميع الطلبات المرسلة عبر نموذج التواصل</p>
        </div>
        <div className="text-xs font-medium text-gray-400 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
          {list.length} طلب
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-1.5">
        {FILTERS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition ${
              filter === f.key ? "bg-[#1c1c1e] text-white" : "bg-white border border-gray-200 text-gray-400 hover:bg-gray-50"
            }`}
          >
            {f.label}
            {f.key !== "all" && (
              <span className="mr-1.5 text-[10px] opacity-50">
                {list.filter(s => (s.status || "new") === f.key).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        {loading ? (
          <div className="p-5 space-y-2">{[1,2,3,4].map(i => <div key={i} className="h-16 bg-gray-50 rounded-xl animate-pulse" />)}</div>
        ) : filtered.length ? filtered.map((s, i) => (
          <div key={s.id} className={`flex flex-col sm:flex-row gap-3 sm:items-start px-5 py-4 ${i < filtered.length-1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition`}>
            {/* Avatar */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2c4a7c] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
              {s.name?.slice(0,1)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-sm font-semibold text-[#1c1c1e]">{s.name}</span>
                <StatusBadge status={s.status || "new"} />
                <span className="text-[10px] text-gray-300">{s.created_date?.slice(0,10)}</span>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] text-gray-400 mb-1">
                {s.email && <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{s.email}</span>}
                {s.phone && <span className="flex items-center gap-1" dir="ltr"><Phone className="w-3 h-3" />{s.phone}</span>}
                {s.service && <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-medium">{s.service}</span>}
              </div>
              {s.message && <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mt-1">{s.message}</p>}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <select
                value={s.status || "new"}
                onChange={e => updateStatus(s.id, e.target.value)}
                className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white hover:border-gray-300 transition cursor-pointer"
              >
                <option value="new">جديد</option>
                <option value="pending">قيد المتابعة</option>
                <option value="done">منتهي</option>
              </select>
              <button onClick={() => del(s.id)} className="p-2 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-400 transition">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )) : (
          <p className="text-center py-14 text-sm text-gray-300">لا توجد طلبات</p>
        )}
      </div>
    </div>
  );
}