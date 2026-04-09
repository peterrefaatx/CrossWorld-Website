import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CTAStrip({ title, highlight, buttonText = "احجز استشارتك المجانية" }) {
  return (
    <section dir="rtl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-secondary via-secondary/80 to-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
      
      {/* Decorative */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <h2 className="font-changa text-3xl lg:text-4xl font-bold text-primary leading-snug text-center lg:text-right">
          {title}
          <br />
          <span className="text-accent">{highlight}</span>
        </h2>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white text-sm font-semibold rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 flex-shrink-0"
        >
          {buttonText}
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}