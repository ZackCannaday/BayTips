import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Home, Wrench, Brain, Target, Settings } from 'lucide-react';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SoftSkillsPage from './pages/SoftSkillsPage';
import PracticePage from './pages/PracticePage';
import SettingsPage from './pages/SettingsPage';
import { useState, useEffect } from 'react';

function BottomNav() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/service/');

  if (hideNav) return null;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const linkClass = (path: string) =>
    `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 text-[10px] font-medium transition-colors ${
      isActive(path) ? 'text-accent' : 'text-bay-500 hover:text-bay-300'
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bay-900/95 backdrop-blur-lg border-t border-bay-800 safe-bottom">
      <div className="flex items-stretch h-16 max-w-lg mx-auto">
        <NavLink to="/" end className={linkClass('/')}>
          <Home size={20} strokeWidth={isActive('/') ? 2.5 : 2} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/services" className={linkClass('/services')}>
          <Wrench size={20} strokeWidth={isActive('/services') ? 2.5 : 2} />
          <span>Services</span>
        </NavLink>
        <NavLink to="/soft-skills" className={linkClass('/soft-skills')}>
          <Brain size={20} strokeWidth={isActive('/soft-skills') ? 2.5 : 2} />
          <span>Skills</span>
        </NavLink>
        <NavLink to="/practice" className={linkClass('/practice')}>
          <Target size={20} strokeWidth={isActive('/practice') ? 2.5 : 2} />
          <span>Practice</span>
        </NavLink>
        <NavLink to="/settings" className={linkClass('/settings')}>
          <Settings size={20} strokeWidth={isActive('/settings') ? 2.5 : 2} />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default function App() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // Simple streak logic: increment if last visit was yesterday or today
    const today = new Date().toDateString();
    const last = localStorage.getItem('baytips-last-visit');
    let current = parseInt(localStorage.getItem('baytips-streak') || '0', 10);

    if (last !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (last === yesterday.toDateString()) {
        current += 1;
      } else if (!last) {
        current = 1;
      } else {
        current = 1; // reset if gap
      }
      localStorage.setItem('baytips-streak', String(current));
      localStorage.setItem('baytips-last-visit', today);
    }
    setStreak(current);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-full flex flex-col max-w-lg mx-auto relative bg-bay-950">
        <div className="flex-1 pb-20">
          <Routes>
            <Route path="/" element={<HomePage streak={streak} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:id" element={<ServiceDetailPage />} />
            <Route path="/soft-skills" element={<SoftSkillsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
