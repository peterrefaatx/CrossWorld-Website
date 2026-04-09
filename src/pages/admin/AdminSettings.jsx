import { useAuth } from "@/lib/AuthContext";
import { LogOut, User, Mail, Shield, Save, Plus, Trash2, Edit } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "@/api/apiClient";
import toast from "react-hot-toast";

export default function AdminSettings() {
  const { user, logout } = useAuth();
  const [heroSettings, setHeroSettings] = useState({
    title_line1: "",
    title_line2: "",
    description: "",
    accent_word: ""
  });
  const [users, setUsers] = useState([]);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
    full_name: "",
    role: "editor"
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadSettings();
    if (user?.role === 'admin') {
      loadUsers();
    }
  }, [user]);

  const loadSettings = async () => {
    try {
      const data = await api.settings.get();
      if (data.hero) {
        setHeroSettings(data.hero);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const loadUsers = async () => {
    try {
      const data = await api.auth.getUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  const handleSaveHero = async () => {
    setLoading(true);
    try {
      await api.settings.update({ hero: heroSettings });
      toast.success('تم حفظ الإعدادات بنجاح');
    } catch (error) {
      toast.error('فشل حفظ الإعدادات');
      console.error('Failed to save settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setUserForm({ email: "", password: "", full_name: "", role: "editor" });
    setShowUserModal(true);
  };

  const handleEditUser = (u) => {
    setEditingUser(u);
    setUserForm({ email: u.email, password: "", full_name: u.full_name, role: u.role });
    setShowUserModal(true);
  };

  const handleSaveUser = async () => {
    setLoading(true);
    try {
      if (editingUser) {
        await api.auth.updateUser(editingUser.id, userForm);
        toast.success('تم تحديث المستخدم بنجاح');
      } else {
        await api.auth.createUser(userForm);
        toast.success('تم إنشاء المستخدم بنجاح');
      }
      setShowUserModal(false);
      loadUsers();
    } catch (error) {
      toast.error(error.data?.message || 'فشل حفظ المستخدم');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!confirm('هل أنت متأكد من حذف هذا المستخدم؟')) return;
    try {
      await api.auth.deleteUser(id);
      toast.success('تم حذف المستخدم بنجاح');
      loadUsers();
    } catch (error) {
      toast.error(error.data?.message || 'فشل حذف المستخدم');
    }
  };

  return (
    <div className="max-w-4xl space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-[#1c1c1e] tracking-tight">الإعدادات</h1>
        <p className="text-sm text-gray-400 mt-0.5">إعدادات الحساب والنظام</p>
      </div>

      {/* User Management - Admin Only */}
      {user?.role === 'admin' && (
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">Users Management</span>
            <button
              onClick={handleCreateUser}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e67e22] text-white hover:bg-[#d35400] transition text-xs font-medium"
            >
              <Plus className="w-3.5 h-3.5" />
              إضافة مستخدم
            </button>
          </div>
          <div className="p-5">
            <div className="space-y-2">
              {users.map((u) => (
                <div key={u.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#e67e22] to-[#f39c12] flex items-center justify-center text-white text-sm font-bold">
                      {u.full_name?.slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1c1c1e]">{u.full_name}</div>
                      <div className="text-xs text-gray-400" dir="ltr">{u.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      u.role === 'admin' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {u.role === 'admin' ? 'مدير' : 'محرر'}
                    </span>
                    {u.id !== user.id && (
                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEditUser(u)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition"
                        >
                          <Edit className="w-4 h-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => handleDeleteUser(u.id)}
                          className="p-2 rounded-lg hover:bg-red-50 transition"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section Settings - Admin Only */}
      {user?.role === 'admin' && (
        <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-50 text-xs font-semibold text-gray-300 tracking-widest uppercase">Hero Section</div>
          <div className="p-5 space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">السطر الأول من العنوان</label>
              <input
                type="text"
                value={heroSettings.title_line1}
                onChange={(e) => setHeroSettings({ ...heroSettings, title_line1: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                dir="rtl"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">السطر الثاني من العنوان</label>
              <input
                type="text"
                value={heroSettings.title_line2}
                onChange={(e) => setHeroSettings({ ...heroSettings, title_line2: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                dir="rtl"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">الوصف</label>
              <textarea
                value={heroSettings.description}
                onChange={(e) => setHeroSettings({ ...heroSettings, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22] resize-none"
                dir="rtl"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">الكلمة الملونة (باللون البرتقالي)</label>
              <input
                type="text"
                value={heroSettings.accent_word}
                onChange={(e) => setHeroSettings({ ...heroSettings, accent_word: e.target.value })}
                placeholder="مثال: إسبانيا"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                dir="rtl"
              />
              <p className="text-xs text-gray-400 mt-1.5">اكتب الكلمة التي تريد تلوينها باللون البرتقالي في العنوان</p>
            </div>
            <button
              onClick={handleSaveHero}
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#e67e22] text-white hover:bg-[#d35400] transition text-sm font-medium disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {loading ? 'جاري الحفظ...' : 'حفظ التغييرات'}
            </button>
          </div>
        </div>
      )}

      {/* Account */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 text-xs font-semibold text-gray-300 tracking-widest uppercase">Account</div>
        <div className="p-5 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#e67e22] to-[#f39c12] flex items-center justify-center text-white text-xl font-bold shadow-sm">
              {user?.full_name?.slice(0,1) || "A"}
            </div>
            <div>
              <div className="font-semibold text-[#1c1c1e]">{user?.full_name || "Admin"}</div>
              <div className="text-sm text-gray-400" dir="ltr">{user?.email}</div>
            </div>
          </div>
          {[
            { icon: User, label: "الاسم الكامل", value: user?.full_name },
            { icon: Mail, label: "البريد الإلكتروني", value: user?.email, ltr: true },
            { icon: Shield, label: "الدور", value: user?.role === "admin" ? "مدير" : "محرر" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
              <row.icon className="w-4 h-4 text-gray-300 flex-shrink-0" />
              <span className="text-xs text-gray-400 w-28">{row.label}</span>
              <span className="text-sm font-medium text-[#1c1c1e]" dir={row.ltr ? "ltr" : "rtl"}>{row.value || "—"}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 text-xs font-semibold text-gray-300 tracking-widest uppercase">Business Info</div>
        <div className="p-5 space-y-3">
          {[
            { label: "WhatsApp", value: "+34 604 811 874" },
            { label: "Email", value: "Info.crossworldspain@gmail.com" },
            { label: "Location", value: "Madrid, España" },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-3 py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-xs font-medium text-gray-300">{row.label}</span>
              <span className="text-xs font-medium text-[#1c1c1e]" dir="ltr">{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-2 px-5 py-3 rounded-xl border border-red-100 text-red-400 hover:bg-red-50 transition text-sm font-medium"
      >
        <LogOut className="w-4 h-4" />
        تسجيل الخروج
      </button>

      {/* User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 relative z-[101]">
            <h2 className="text-xl font-bold text-[#1c1c1e]">
              {editingUser ? 'تعديل مستخدم' : 'إضافة مستخدم جديد'}
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  value={userForm.full_name}
                  onChange={(e) => setUserForm({ ...userForm, full_name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                  dir="rtl"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={userForm.email}
                  onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  {editingUser ? 'كلمة المرور الجديدة (اتركها فارغة للإبقاء على القديمة)' : 'كلمة المرور'}
                </label>
                <input
                  type="password"
                  value={userForm.password}
                  onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                  dir="ltr"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">الدور</label>
                <select
                  value={userForm.role}
                  onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-[#e67e22]/20 focus:border-[#e67e22]"
                  dir="rtl"
                >
                  <option value="editor">محرر</option>
                  <option value="admin">مدير</option>
                </select>
                <p className="text-xs text-gray-400 mt-1.5">
                  المدير: صلاحيات كاملة | المحرر: مقالات وشهادات وطلبات التواصل فقط
                </p>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleSaveUser}
                disabled={loading}
                className="flex-1 px-5 py-2.5 rounded-xl bg-[#e67e22] text-white hover:bg-[#d35400] transition text-sm font-medium disabled:opacity-50"
              >
                {loading ? 'جاري الحفظ...' : 'حفظ'}
              </button>
              <button
                onClick={() => setShowUserModal(false)}
                className="flex-1 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition text-sm font-medium"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}