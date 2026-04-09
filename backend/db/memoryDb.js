// Simple in-memory database for testing without MongoDB
export const db = {
  users: [],
  articles: [],
  testimonials: [],
  submissions: []
};

let idCounter = 1;

export const generateId = () => {
  return `id_${idCounter++}`;
};
