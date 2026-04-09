import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = join(__dirname, 'data.json');

// Initialize database
let db = {
  users: [],
  articles: [],
  testimonials: [],
  submissions: [],
  settings: {
    hero: {
      title_line1: "شريكك القانوني",
      title_line2: "للإقامة في إسبانيا",
      description: "نساعد المحترفين والعائلات على الانتقال والاستقرار في إسبانيا بشكل قانوني — من تأشيرة الرحل الرقميين إلى الإقامة الدائمة.",
      accent_word: "إسبانيا"
    }
  },
  _counters: { users: 1, articles: 1, testimonials: 1, submissions: 1 }
};

// Load existing data
if (existsSync(dbPath)) {
  try {
    db = JSON.parse(readFileSync(dbPath, 'utf8'));
  } catch (error) {
    console.error('Error loading database:', error.message);
  }
}

// Save data
const save = () => {
  try {
    writeFileSync(dbPath, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error('Error saving database:', error.message);
  }
};

// Database operations
export const database = {
  // Users
  users: {
    findByEmail: (email) => db.users.find(u => u.email === email),
    findById: (id) => db.users.find(u => u.id === id),
    findAll: () => db.users,
    create: (user) => {
      const newUser = { ...user, id: db._counters.users++, created_at: new Date().toISOString() };
      db.users.push(newUser);
      save();
      return newUser;
    },
    update: (id, data) => {
      const index = db.users.findIndex(u => u.id === parseInt(id));
      if (index === -1) return null;
      db.users[index] = { ...db.users[index], ...data };
      save();
      return db.users[index];
    },
    delete: (id) => {
      const index = db.users.findIndex(u => u.id === parseInt(id));
      if (index === -1) return false;
      db.users.splice(index, 1);
      save();
      return true;
    }
  },

  // Articles
  articles: {
    findAll: () => db.articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    findPublished: () => db.articles.filter(a => a.published).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    findById: (id) => db.articles.find(a => a.id === parseInt(id)),
    create: (article) => {
      const newArticle = {
        ...article,
        id: db._counters.articles++,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      db.articles.push(newArticle);
      save();
      return newArticle;
    },
    update: (id, data) => {
      const index = db.articles.findIndex(a => a.id === parseInt(id));
      if (index === -1) return null;
      db.articles[index] = { ...db.articles[index], ...data, updated_at: new Date().toISOString() };
      save();
      return db.articles[index];
    },
    delete: (id) => {
      const index = db.articles.findIndex(a => a.id === parseInt(id));
      if (index === -1) return false;
      db.articles.splice(index, 1);
      save();
      return true;
    }
  },

  // Testimonials
  testimonials: {
    findAll: () => db.testimonials.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    findPublished: () => db.testimonials.filter(t => t.published).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    findById: (id) => db.testimonials.find(t => t.id === parseInt(id)),
    create: (testimonial) => {
      const newTestimonial = {
        ...testimonial,
        id: db._counters.testimonials++,
        created_at: new Date().toISOString()
      };
      db.testimonials.push(newTestimonial);
      save();
      return newTestimonial;
    },
    update: (id, data) => {
      const index = db.testimonials.findIndex(t => t.id === parseInt(id));
      if (index === -1) return null;
      db.testimonials[index] = { ...db.testimonials[index], ...data };
      save();
      return db.testimonials[index];
    },
    delete: (id) => {
      const index = db.testimonials.findIndex(t => t.id === parseInt(id));
      if (index === -1) return false;
      db.testimonials.splice(index, 1);
      save();
      return true;
    }
  },

  // Submissions
  submissions: {
    findAll: () => db.submissions.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    findById: (id) => db.submissions.find(s => s.id === parseInt(id)),
    create: (submission) => {
      const newSubmission = {
        ...submission,
        id: db._counters.submissions++,
        created_at: new Date().toISOString()
      };
      db.submissions.push(newSubmission);
      save();
      return newSubmission;
    },
    update: (id, data) => {
      const index = db.submissions.findIndex(s => s.id === parseInt(id));
      if (index === -1) return null;
      db.submissions[index] = { ...db.submissions[index], ...data };
      save();
      return db.submissions[index];
    },
    delete: (id) => {
      const index = db.submissions.findIndex(s => s.id === parseInt(id));
      if (index === -1) return false;
      db.submissions.splice(index, 1);
      save();
      return true;
    }
  },

  // Settings
  settings: {
    get: () => db.settings || {
      hero: {
        title_line1: "شريكك القانوني",
        title_line2: "للإقامة في إسبانيا",
        description: "نساعد المحترفين والعائلات على الانتقال والاستقرار في إسبانيا بشكل قانوني — من تأشيرة الرحل الرقميين إلى الإقامة الدائمة.",
        accent_word: "إسبانيا"
      }
    },
    update: (data) => {
      db.settings = { ...db.settings, ...data };
      save();
      return db.settings;
    }
  }
};

console.log('✅ JSON database initialized');
