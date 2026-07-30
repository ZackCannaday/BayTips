import { Link } from 'react-router-dom';
import { Search, Flame, CheckCircle2, ArrowRight, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';
import { services, softSkills } from '../data/services';
import { useState } from 'react';

interface Props {
  streak: number;
}

export default function HomePage({ streak }: Props) {
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem('baytips-checklist') || '{}');
    } catch {
      return {};
    }
  });

  const toggleCheck = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    localStorage.setItem('baytips-checklist', JSON.stringify(next));
  };

  const filtered = search.trim()
    ? services.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.tags.some((t) => t.includes(search.toLowerCase())) ||
          s.category.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="page-enter px-4 pt-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">BayTips</h1>
          <p className="text-sm text-bay-400 mt-0.5">Advisor & Tech Training</p>
        </div>
        <div className="flex items-center gap-1.5 bg-bay-800/80 px-3 py-1.5 rounded-full border border-bay-700">
          <Flame size={16} className="text-orange-400" />
          <span className="text-sm font-semibold text-white">{streak}</span>
          <span className="text-xs text-bay-400">day streak</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bay-500" size={18} />
        <input
          type="search"
          placeholder="Search services, tips, scripts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-bay-900 border border-bay-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40"
        />
      </div>

      {/* Live search results */}
      {search.trim() && (
        <div className="mb-6 space-y-2">
          <p className="text-xs text-bay-500 uppercase tracking-wider font-medium">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          </p>
          {filtered.length === 0 ? (
            <p className="text-sm text-bay-400 py-4 text-center">No services match that search.</p>
          ) : (
            filtered.map((s) => (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3 hover:border-bay-600"
              >
                <div>
                  <p className="font-medium text-white">{s.name}</p>
                  <p className="text-xs text-bay-400 mt-0.5">{s.category}</p>
                </div>
                <ArrowRight size={16} className="text-bay-500" />
              </Link>
            ))
          )}
        </div>
      )}

      {!search.trim() && (
        <>
          {/* Daily Checklist */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider">
                Daily Checklist
              </h2>
              <span className="text-xs text-accent font-medium">
                {completedCount}/{softSkills.dailyChecklist.length}
              </span>
            </div>
            <div className="space-y-2">
              {softSkills.dailyChecklist.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`card-interactive w-full flex items-start gap-3 text-left bg-bay-900 border rounded-xl px-4 py-3 transition-colors ${
                    checked[item.id]
                      ? 'border-success/40 bg-success/5'
                      : 'border-bay-800 hover:border-bay-600'
                  }`}
                >
                  <CheckCircle2
                    size={20}
                    className={`mt-0.5 shrink-0 ${
                      checked[item.id] ? 'text-success' : 'text-bay-600'
                    }`}
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        checked[item.id] ? 'text-success line-through opacity-70' : 'text-white'
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-xs text-bay-400 mt-0.5 leading-relaxed">{item.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider mb-3">
              Quick Access
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/services"
                className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4 hover:border-accent/40"
              >
                <BookOpen size={22} className="text-accent mb-2" />
                <p className="font-medium text-white text-sm">All Services</p>
                <p className="text-xs text-bay-400 mt-0.5">{services.length} guides</p>
              </Link>
              <Link
                to="/soft-skills"
                className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4 hover:border-purple/40"
              >
                <MessageSquare size={22} className="text-purple mb-2" />
                <p className="font-medium text-white text-sm">Soft Skills</p>
                <p className="text-xs text-bay-400 mt-0.5">Scripts & drills</p>
              </Link>
              <Link
                to="/practice"
                className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4 hover:border-warning/40"
              >
                <TrendingUp size={22} className="text-warning mb-2" />
                <p className="font-medium text-white text-sm">Practice</p>
                <p className="text-xs text-bay-400 mt-0.5">Quizzes & drills</p>
              </Link>
              <Link
                to="/services"
                className="card-interactive bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-4"
              >
                <Search size={22} className="text-accent mb-2" />
                <p className="font-medium text-white text-sm">Find a Service</p>
                <p className="text-xs text-bay-300 mt-0.5">Live search</p>
              </Link>
            </div>
          </section>

          {/* Featured Services */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider">
                Core Lube Services
              </h2>
              <Link to="/services" className="text-xs text-accent font-medium flex items-center gap-1">
                View all <ArrowRight size={12} />
              </Link>
            </div>
            <div className="space-y-2">
              {services.slice(0, 5).map((s) => (
                <Link
                  key={s.id}
                  to={`/service/${s.id}`}
                  className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3.5 hover:border-bay-600"
                >
                  <div>
                    <p className="font-medium text-white">{s.name}</p>
                    <p className="text-xs text-bay-400 mt-0.5">
                      {s.category} · {s.averageTicket}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-bay-500" />
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
