import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NomadasDigitales from './pages/NomadasDigitales';
import NonLucrativa from './pages/NonLucrativa';
import ArraigoSociolaboral from './pages/ArraigoSociolaboral';
import RegularizacionExcepcional from './pages/RegularizacionExcepcional';
import Article from './pages/Article';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Articles from './pages/admin/Articles';
import Testimonials from './pages/admin/Testimonials';
import Submissions from './pages/admin/Submissions';
import AdminSettings from './pages/admin/AdminSettings';
import Login from './pages/admin/Login';

const AuthenticatedApp = () => {
  const { isLoadingAuth } = useAuth();

  // Show loading spinner while checking auth
  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Render the main app
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nomadas-digitales" element={<NomadasDigitales />} />
        <Route path="/non-lucrativa" element={<NonLucrativa />} />
        <Route path="/arraigo-sociolaboral" element={<ArraigoSociolaboral />} />
        <Route path="/regularizacion-excepcional" element={<RegularizacionExcepcional />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
        <Route index element={<Dashboard />} />
        <Route path="articles" element={<Articles />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="submissions" element={<Submissions />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App