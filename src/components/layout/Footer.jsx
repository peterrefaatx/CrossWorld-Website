import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_1fr_1fr] gap-8">
          {/* About */}
          <div>
            <h4 className="font-changa text-sm font-semibold mb-5 text-white/80">من نحن</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              CrossWorld هي شركة متخصصة في تقديم الاستشارات القانونية وخدمات الهجرة والإقامة في إسبانيا. نساعدك في تحقيق حلمك بالعيش والعمل في إسبانيا بطريقة قانونية وآمنة.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-changa text-sm font-semibold mb-5 text-white/80">روابط</h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", path: "/" },
                { label: "من نحن", path: "/about" },
                { label: "تواصل معنا", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/40 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-changa text-sm font-semibold mb-5 text-white/80">خدماتنا</h4>
            <ul className="space-y-3">
              {[
                { label: "تأشيرة الرحل الرقميين", path: "/nomadas-digitales" },
                { label: "تأشيرة الإقامة غير الربحية", path: "/non-lucrativa" },
                { label: "إقامة Arraigo Sociolaboral", path: "/arraigo-sociolaboral" },
                { label: "التسوية الاستثنائية", path: "/regularizacion-excepcional" },
              ].map((l) => (
                <li key={l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/40 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-changa text-sm font-semibold mb-5 text-white/80">تواصل</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/50" dir="ltr">Info.crossworldspain@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/50" dir="ltr">+34 604 811 874</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm text-white/50">Madrid, España</span>
              </div>
              <div className="flex items-center gap-3">
                <Facebook className="w-4 h-4 text-accent" />
                <a 
                  href="https://www.facebook.com/crossworldspain/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                >
                  صفحتنا على فيسبوك
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-4 h-4 text-accent" />
                <a 
                  href="https://www.facebook.com/groups/808772868210091" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-accent transition-colors"
                >
                  مجموعتنا على فيسبوك
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/30">© 2026 CrossWorld Spain Services</span>
          <span className="text-xs text-white/30">Madrid, España</span>
        </div>
      </div>

      {/* Accent line */}
      <div className="h-1 bg-gradient-to-l from-accent via-accent/60 to-transparent" />
    </footer>
  );
}