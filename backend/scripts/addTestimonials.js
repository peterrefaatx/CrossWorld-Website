import { database } from '../db/database.js';

const testimonials = [
  {
    name: "أحمد المنصوري",
    country: "المغرب",
    text: "خدمة ممتازة ومتابعة دقيقة. حصلت على تأشيرة الرحل الرقميين في وقت قياسي بفضل فريق CrossWorld. أنصح بهم بشدة!",
    rating: 5,
    published: true
  },
  {
    name: "سارة العلي",
    country: "الإمارات",
    text: "كنت قلقة من تعقيدات الإجراءات، لكن الفريق سهّل كل شيء. الآن أعيش في مدريد وأعمل بحرية تامة.",
    rating: 5,
    published: true
  },
  {
    name: "محمد بن سالم",
    country: "السعودية",
    text: "احترافية عالية وشفافية كاملة في كل خطوة. تم إنجاز ملفي بسرعة ودقة. شكراً CrossWorld!",
    rating: 5,
    published: true
  },
  {
    name: "ليلى حسين",
    country: "مصر",
    text: "أفضل قرار اتخذته! الفريق ساعدني في كل التفاصيل من البداية للنهاية. الآن أنا في برشلونة وسعيدة جداً.",
    rating: 5,
    published: true
  },
  {
    name: "يوسف الخطيب",
    country: "الأردن",
    text: "خدمة متميزة وأسعار معقولة. حصلت على الإقامة بدون أي مشاكل. أنصح الجميع بالتعامل معهم.",
    rating: 5,
    published: true
  },
  {
    name: "فاطمة الزهراء",
    country: "تونس",
    text: "فريق محترف وصبور. أجابوا على كل أسئلتي وساعدوني في تجهيز الأوراق. الآن أعيش حلمي في إسبانيا!",
    rating: 5,
    published: true
  }
];

console.log('Adding testimonials...');

testimonials.forEach(testimonial => {
  database.testimonials.create(testimonial);
  console.log(`✅ Added: ${testimonial.name}`);
});

console.log('\n✅ All testimonials added successfully!');
process.exit(0);
