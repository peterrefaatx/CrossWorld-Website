import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

const empty = { name: "", country: "", text: "", rating: 5, published: true };

export default function Testimonials() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.testimonials.getAllAdmin();
      setList(data);
    } catch (error) {
      toast.error('Failed to load testimonials');
    }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return toast.error("يرجى ملء الاسم والنص");
    setSaving(true);
    try {
      if (editId) {
        await api.testimonials.update(editId, form);
        toast.success("تم التحديث");
      } else {
        await api.testimonials.create(form);
        toast.success("تم الإضافة");
      }
      setForm(empty);
      setEditId(null);
      load();
    } catch (error) {
      toast.error('Failed to save testimonial');
    }
    setSaving(false);
  };

  const edit = (t) => {
    setEditId(t.id);
    setForm({ name: t.name, country: t.country || "", text: t.text, rating: t.rating, published: t.published !== false });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const del = async (id) => {
    if (!confirm("حذف هذا التقييم؟")) return;
    try {
      await api.testimonials.delete(id);
      toast.success("تم الحذف");
      load();
    } catch (error) {
      toast.error('Failed to delete testimonial');
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-[#1c1c1e]">التقييمات</h1>
        <p className="text-sm text-gray-400 mt-0.5">إدارة تقييمات العملاء</p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-6">
        <h3 className="text-sm font-semibold text-[#1c1c1e] mb-5">
          {editId ? "تعديل التقييم" : "إضافة تقييم جديد"}
        </h3>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="الاسم" value={form.name} onChange={v => setForm({ ...form, name: v })} placeholder="محمد أ." />
            <Field label="البلد" value={form.country} onChange={v => setForm({ ...form, country: v })} placeholder="الجزائر" />
          </div>
          <div>
            <label className="text-xs font-medium text-[#1c1c1e] block mb-1.5">نص التقييم</label>
            <textarea className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#e67e22] transition resize-none" rows={3} value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="اكتب التقييم..." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-[#1c1c1e] block mb-1.5">التقييم</label>
              <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#e67e22] transition" value={form.rating} onChange={e => setForm({ ...form, rating: +e.target.value })}>
                {[5,4,3,2,1].map(n => <option key={n} value={n}>{"★".repeat(n)}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[#1c1c1e] block mb-1.5">الحالة</label>
              <select className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#e67e22] transition" value={form.published ? "true" : "false"} onChange={e => setForm({ ...form, published: e.target.value === "true" })}>
                <option value="true">ظاهر</option>
                <option value="false">مخفي</option>
              </select>
            </div>
          </div>
          <div className="flex gap-2 pt-1">
            <button type="submit" disabled={saving} className="px-6 py-2.5 bg-[#e67e22] text-white text-xs font-semibold rounded-xl hover:bg-[#e67e22]/90 transition shadow-sm">
              {editId ? "حفظ التعديلات" : "إضافة التقييم"}
            </button>
            {editId && (
              <button type="button" onClick={() => { setEditId(null); setForm(empty); }} className="px-5 py-2.5 text-xs border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition">
                إلغاء
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 text-sm font-semibold text-[#1c1c1e]">
          التقييمات الحالية
        </div>
        {loading ? (
          <div className="p-5 space-y-2">{[1,2,3].map(i => <div key={i} className="h-16 bg-gray-50 rounded-xl animate-pulse" />)}</div>
        ) : list.length ? list.map((t, i) => (
          <div key={t.id} className={`flex items-start gap-4 px-5 py-4 ${i < list.length-1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition`}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a2a4a] to-[#2c4a7c] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
              {t.name?.slice(0,2)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-semibold text-[#1c1c1e]">{t.name}</span>
                {t.country && <span className="text-xs text-gray-300">— {t.country}</span>}
                {!t.published && <span className="text-[9px] bg-gray-100 text-gray-300 px-2 py-0.5 rounded-full">مخفي</span>}
              </div>
              <div className="text-[#e67e22] text-xs mb-1">{"★".repeat(t.rating)}{"☆".repeat(5-t.rating)}</div>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{t.text}</p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <button onClick={() => edit(t)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-300 hover:text-gray-600 transition"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => del(t.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-400 transition"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        )) : (
          <p className="text-center py-10 text-sm text-gray-300">لا توجد تقييمات بعد</p>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-xs font-medium text-[#1c1c1e] block mb-1.5">{label}</label>
      <input className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl outline-none focus:border-[#e67e22] transition" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  );
}