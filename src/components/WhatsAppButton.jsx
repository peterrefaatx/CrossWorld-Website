import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+34604811874";
  const message = "مرحباً، أود الاستفسار عن خدماتكم";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 lg:hidden w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </a>
  );
}
