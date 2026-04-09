const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('auth_token');

// Set token in localStorage
const setToken = (token) => localStorage.setItem('auth_token', token);

// Remove token from localStorage
const removeToken = () => localStorage.removeItem('auth_token');

// API request helper
const apiRequest = async (endpoint, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Request failed' }));
    throw { status: response.status, message: error.message, data: error };
  }

  return response.json();
};

// Auth API
export const auth = {
  login: async (email, password) => {
    const data = await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    setToken(data.token);
    return data;
  },

  logout: () => {
    removeToken();
    window.location.href = '/admin/login';
  },

  me: async () => {
    return apiRequest('/auth/me');
  },

  register: async (email, password, full_name) => {
    return apiRequest('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, full_name }),
    });
  },

  // User management (admin only)
  getUsers: async () => {
    return apiRequest('/auth/users');
  },

  createUser: async (userData) => {
    return apiRequest('/auth/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  updateUser: async (id, userData) => {
    return apiRequest(`/auth/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  },

  deleteUser: async (id) => {
    return apiRequest(`/auth/users/${id}`, {
      method: 'DELETE',
    });
  },
};

// Articles API
export const articles = {
  getAll: async () => {
    return apiRequest('/articles');
  },

  getAllAdmin: async () => {
    return apiRequest('/articles/admin');
  },

  getById: async (id) => {
    return apiRequest(`/articles/${id}`);
  },

  create: async (article) => {
    return apiRequest('/articles', {
      method: 'POST',
      body: JSON.stringify(article),
    });
  },

  update: async (id, article) => {
    return apiRequest(`/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(article),
    });
  },

  delete: async (id) => {
    return apiRequest(`/articles/${id}`, {
      method: 'DELETE',
    });
  },
};

// Testimonials API
export const testimonials = {
  getAll: async () => {
    return apiRequest('/testimonials');
  },

  getAllAdmin: async () => {
    return apiRequest('/testimonials/admin');
  },

  create: async (testimonial) => {
    return apiRequest('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonial),
    });
  },

  update: async (id, testimonial) => {
    return apiRequest(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(testimonial),
    });
  },

  delete: async (id) => {
    return apiRequest(`/testimonials/${id}`, {
      method: 'DELETE',
    });
  },
};

// Submissions API
export const submissions = {
  create: async (submission) => {
    return apiRequest('/submissions', {
      method: 'POST',
      body: JSON.stringify(submission),
    });
  },

  getAll: async () => {
    return apiRequest('/submissions');
  },

  updateStatus: async (id, status) => {
    return apiRequest(`/submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },

  delete: async (id) => {
    return apiRequest(`/submissions/${id}`, {
      method: 'DELETE',
    });
  },
};

// Upload API
export const upload = {
  image: async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        try {
          const result = await apiRequest('/upload/image', {
            method: 'POST',
            body: JSON.stringify({
              image: reader.result,
              filename: file.name,
            }),
          });
          resolve(result.url);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },
};

// Settings API
export const settings = {
  get: async () => {
    return apiRequest('/settings');
  },

  update: async (data) => {
    return apiRequest('/settings', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
};

export const api = {
  auth,
  articles,
  testimonials,
  submissions,
  upload,
  settings,
};
