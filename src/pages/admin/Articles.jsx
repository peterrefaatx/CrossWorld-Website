import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import { Plus, Pencil, Trash2, Eye, EyeOff, Newspaper, ChevronLeft } from "lucide-react";
import { toast } from "sonner";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("list");
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ title: "", content: "", image: "", published: true });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.articles.getAllAdmin();
      setArticles(data);
    } catch (error) {
      toast.error('Failed to load articles');
    }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const openNew = () => {
    setEditing(null);
    setForm({ title: "", content: "", image: "", published: true });
    setView("form");
  };

  const openEdit = (a) => {
    setEditing(a);
    setForm({ title: a.title, content: a.content || "", image: a.image || "", published: !!a.published });
    setView("form");
  };

  const save = async (pub) => {
    if (!form.title || !form.content) return toast.error("يرجى ملء العنوان والمحتوى");
    setSaving(true);
    try {
      const data = { ...form, published: pub };
      if (editing) {
        await api.articles.update(editing.id, data);
      } else {
        await api.articles.create(data);
      }
      toast.success(pub ? "✓ تم النشر" : "تم الحفظ كمسودة");
      setView("list");
      load();
    } catch (error) {
      toast.error('Failed to save article');
    }
    setSaving(false);
  };

  const del = async (id) => {
    if (!confirm("حذف هذا المقال نهائياً؟")) return;
    try {
      await api.articles.delete(id);
      toast.success("تم الحذف");
      load();
    } catch (error) {
      toast.error('Failed to delete article');
    }
  };

  const toggle = async (a) => {
    try {
      await api.articles.update(a.id, { ...a, published: !a.published });
      load();
    } catch (error) {
      toast.error('Failed to update article');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('يرجى اختيار صورة');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('حجم الصورة كبير جداً (الحد الأقصى 5MB)');
      return;
    }

    setUploading(true);
    try {
      const url = await api.upload.image(file);
      setForm({ ...form, image: `http://localhost:5000${url}` });
      toast.success('تم رفع الصورة بنجاح');
    } catch (error) {
      toast.error('فشل رفع الصورة');
    }
    setUploading(false);
  };

  /* ── FORM VIEW ── */
  if (view === "form") {
    return (
      <div className="space-y-5">
        {/* Toolbar */}
        <div className="flex items-center justify-between">
          <button onClick={() => setView("list")} className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition">
            <ChevronLeft className="w-4 h-4 rotate-180" /> المقالات
          </button>
          <h2 className="text-sm font-semibold text-[#1c1c1e]">{editing ? "تعديل المقال" : "مقال جديد"}</h2>
          <div className="flex gap-2">
            <button disabled={saving} onClick={() => save(false)} className="px-4 py-2 text-xs font-medium rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 transition">
              حفظ مسودة
            </button>
            <button disabled={saving} onClick={() => save(true)} className="px-5 py-2 text-xs font-semibold rounded-xl bg-[#e67e22] text-white hover:bg-[#e67e22]/90 transition shadow-sm shadow-[#e67e22]/20">
              {saving ? "..." : "نشر ✓"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
          {/* Editor */}
          <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
            <input
              className="w-full px-6 py-5 text-2xl font-bold text-[#1c1c1e] outline-none border-b border-gray-100 placeholder:text-gray-200 bg-transparent"
              placeholder="عنوان المقال..."
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
            <textarea
              className="w-full px-6 py-5 text-sm text-[#1c1c1e] outline-none resize-none placeholder:text-gray-300 leading-8 min-h-[480px]"
              placeholder="اكتب محتوى المقال الكامل هنا..."
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
            />
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 space-y-4">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-gray-300">Publishing</div>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <div className={`relative w-9 h-5 rounded-full transition-colors ${form.published ? "bg-[#e67e22]" : "bg-gray-200"}`} onClick={() => setForm({ ...form, published: !form.published })}>
                  <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${form.published ? "left-4" : "left-0.5"}`} />
                </div>
                <span className="text-xs text-gray-600">منشور</span>
              </label>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] p-5 space-y-3">
              <div className="text-[10px] font-semibold tracking-widest uppercase text-gray-300">Featured Image</div>
              
              <div className="space-y-3">
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-[#e67e22] hover:bg-[#e67e22]/5 transition text-sm text-gray-500"
                  >
                    {uploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-300 border-t-[#e67e22] rounded-full animate-spin" />
                        جاري الرفع...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        رفع صورة
                      </>
                    )}
                  </label>
                </label>

                <div className="text-xs text-gray-400 text-center">أو</div>

                <input
                  className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-xl outline-none focus:border-[#e67e22] transition placeholder:text-gray-300"
                  placeholder="أو أدخل رابط الصورة..."
                  dir="ltr"
                  value={form.image}
                  onChange={e => setForm({ ...form, image: e.target.value })}
                />
              </div>

              {form.image && (
                <img src={form.image} className="w-full aspect-video object-cover rounded-xl" alt="" onError={e => { e.currentTarget.style.display='none' }} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── LIST VIEW ── */
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#1c1c1e] tracking-tight">المقالات</h1>
          <p className="text-sm text-gray-400 mt-0.5">إدارة الأخبار والمستجدات</p>
        </div>
        <button onClick={openNew} className="flex items-center gap-2 px-5 py-2.5 bg-[#1c1c1e] text-white text-xs font-semibold rounded-xl hover:bg-black transition shadow-sm">
          <Plus className="w-3.5 h-3.5" /> مقال جديد
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        {loading ? (
          <div className="p-5 space-y-2">{[1,2,3,4].map(i => <div key={i} className="h-14 bg-gray-50 rounded-xl animate-pulse" />)}</div>
        ) : articles.length ? (
          <div>
            {articles.map((a, i) => (
              <div key={a.id} className={`flex items-center gap-4 px-5 py-4 ${i < articles.length-1 ? "border-b border-gray-50" : ""} hover:bg-gray-50/50 transition`}>
                {a.image ? (
                  <img src={a.image} className="w-14 h-10 rounded-lg object-cover flex-shrink-0 bg-gray-100" alt="" onError={e => { e.currentTarget.style.display='none' }} />
                ) : (
                  <div className="w-14 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-4 h-4 text-gray-200" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-[#1c1c1e] truncate">{a.title}</div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-gray-300">{new Date(a.created_at).toLocaleDateString('ar')}</span>
                    <span className={`text-[10px] font-semibold ${a.published ? "text-emerald-500" : "text-gray-300"}`}>
                      {a.published ? "● منشور" : "○ مسودة"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button onClick={() => toggle(a)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-300 hover:text-gray-600 transition" title={a.published ? "إخفاء" : "نشر"}>
                    {a.published ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>
                  <button onClick={() => openEdit(a)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-300 hover:text-gray-600 transition">
                    <Pencil className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => del(a.id)} className="p-2 rounded-lg hover:bg-red-50 text-gray-300 hover:text-red-400 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Newspaper className="w-10 h-10 mx-auto mb-3 text-gray-100" />
            <p className="text-sm text-gray-300 mb-4">لا توجد مقالات بعد</p>
            <button onClick={openNew} className="text-xs text-[#e67e22] hover:underline">أضف أول مقال</button>
          </div>
        )}
      </div>
    </div>
  );
}