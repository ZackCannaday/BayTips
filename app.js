import React, { useState, useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation, useParams } from 'react-router-dom';
import {
  Home, Wrench, Brain, Target, Settings, Search, Flame, CheckCircle2, ArrowRight,
  ArrowLeft, AlertTriangle, XCircle, MessageCircle, Clock, DollarSign, Lightbulb,
  ChevronDown, BookOpen, MessageSquare, TrendingUp, Phone, RotateCcw, Trophy, Key, Save, Info, Trash2, X
} from 'lucide-react';
import { CATEGORIES, services, softSkills } from './data.js';

function BottomNav() {
  const location = useLocation();
  if (location.pathname.startsWith('/service/')) return null;
  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);
  const cls = (path) => `flex flex-col items-center justify-center gap-0.5 flex-1 py-2 text-[10px] font-medium transition-colors ${isActive(path) ? 'text-accent' : 'text-bay-500'}`;
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bay-900/95 backdrop-blur-lg border-t border-bay-800 safe-bottom">
      <div className="flex items-stretch h-16 max-w-lg mx-auto">
        <NavLink to="/" end className={cls('/')}><Home size={20} strokeWidth={isActive('/') ? 2.5 : 2} /><span>Home</span></NavLink>
        <NavLink to="/services" className={cls('/services')}><Wrench size={20} strokeWidth={isActive('/services') ? 2.5 : 2} /><span>Services</span></NavLink>
        <NavLink to="/soft-skills" className={cls('/soft-skills')}><Brain size={20} strokeWidth={isActive('/soft-skills') ? 2.5 : 2} /><span>Skills</span></NavLink>
        <NavLink to="/practice" className={cls('/practice')}><Target size={20} strokeWidth={isActive('/practice') ? 2.5 : 2} /><span>Practice</span></NavLink>
        <NavLink to="/settings" className={cls('/settings')}><Settings size={20} strokeWidth={isActive('/settings') ? 2.5 : 2} /><span>Settings</span></NavLink>
      </div>
    </nav>
  );
}

function HomePage({ streak }) {
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(() => { try { return JSON.parse(localStorage.getItem('baytips-checklist') || '{}'); } catch { return {}; } });
  const toggleCheck = (id) => { const next = { ...checked, [id]: !checked[id] }; setChecked(next); localStorage.setItem('baytips-checklist', JSON.stringify(next)); };
  const filtered = search.trim() ? services.filter(s => s.name.toLowerCase().includes(search.toLowerCase()) || (s.tags||[]).some(t => t.includes(search.toLowerCase())) || s.category.toLowerCase().includes(search.toLowerCase())) : [];
  const completedCount = Object.values(checked).filter(Boolean).length;
  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold tracking-tight text-white">BayTips</h1><p className="text-sm text-bay-400 mt-0.5">Advisor & Tech Training</p></div>
        <div className="flex items-center gap-1.5 bg-bay-800/80 px-3 py-1.5 rounded-full border border-bay-700"><Flame size={16} className="text-orange-400" /><span className="text-sm font-semibold text-white">{streak}</span><span className="text-xs text-bay-400">day</span></div>
      </div>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bay-500" size={18} />
        <input type="search" placeholder="Search services, tips, scripts..." value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-bay-900 border border-bay-700 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent" />
      </div>
      {search.trim() && (
        <div className="mb-6 space-y-2">
          <p className="text-xs text-bay-500 uppercase tracking-wider font-medium">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>
          {filtered.length === 0 ? <p className="text-sm text-bay-400 py-4 text-center">No services match.</p> : filtered.map(s => (
            <Link key={s.id} to={`/service/${s.id}`} className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3">
              <div><p className="font-medium text-white">{s.name}</p><p className="text-xs text-bay-400 mt-0.5">{s.category}</p></div>
              <ArrowRight size={16} className="text-bay-500" />
            </Link>
          ))}
        </div>
      )}
      {!search.trim() && (
        <>
          <section className="mb-8">
            <div className="flex items-center justify-between mb-3"><h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider">Daily Checklist</h2><span className="text-xs text-accent font-medium">{completedCount}/{(softSkills.dailyChecklist||[]).length}</span></div>
            <div className="space-y-2">
              {(softSkills.dailyChecklist||[]).map(item => (
                <button key={item.id} onClick={() => toggleCheck(item.id)} className={`card-interactive w-full flex items-start gap-3 text-left bg-bay-900 border rounded-xl px-4 py-3 ${checked[item.id] ? 'border-success/40 bg-success/5' : 'border-bay-800'}`}>
                  <CheckCircle2 size={20} className={`mt-0.5 shrink-0 ${checked[item.id] ? 'text-success' : 'text-bay-600'}`} />
                  <div><p className={`text-sm font-medium ${checked[item.id] ? 'text-success line-through opacity-70' : 'text-white'}`}>{item.title}</p><p className="text-xs text-bay-400 mt-0.5 leading-relaxed">{item.description}</p></div>
                </button>
              ))}
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider mb-3">Quick Access</h2>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/services" className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4"><BookOpen size={22} className="text-accent mb-2" /><p className="font-medium text-white text-sm">All Services</p><p className="text-xs text-bay-400 mt-0.5">{services.length} guides</p></Link>
              <Link to="/soft-skills" className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4"><MessageSquare size={22} className="text-purple mb-2" /><p className="font-medium text-white text-sm">Soft Skills</p><p className="text-xs text-bay-400 mt-0.5">Scripts & drills</p></Link>
              <Link to="/practice" className="card-interactive bg-bay-900 border border-bay-800 rounded-xl p-4"><TrendingUp size={22} className="text-warning mb-2" /><p className="font-medium text-white text-sm">Practice</p><p className="text-xs text-bay-400 mt-0.5">Quizzes</p></Link>
              <Link to="/services" className="card-interactive bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 rounded-xl p-4"><Search size={22} className="text-accent mb-2" /><p className="font-medium text-white text-sm">Find a Service</p><p className="text-xs text-bay-300 mt-0.5">Live search</p></Link>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-3"><h2 className="text-sm font-semibold text-bay-300 uppercase tracking-wider">Core Lube Services</h2><Link to="/services" className="text-xs text-accent font-medium flex items-center gap-1">View all <ArrowRight size={12} /></Link></div>
            <div className="space-y-2">
              {services.slice(0, 5).map(s => (
                <Link key={s.id} to={`/service/${s.id}`} className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3.5">
                  <div><p className="font-medium text-white">{s.name}</p><p className="text-xs text-bay-400 mt-0.5">{s.category} · {s.averageTicket}</p></div>
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

function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const filtered = useMemo(() => {
    let list = services;
    if (activeCategory) list = list.filter(s => s.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q) || (s.tags||[]).some(t => t.includes(q)) || s.category.toLowerCase().includes(q));
    }
    return list;
  }, [search, activeCategory]);
  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Services</h1>
      <p className="text-sm text-bay-400 mb-5">{services.length} training guides · preventative maintenance</p>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bay-500" size={18} />
        <input type="search" placeholder="Type to filter services..." value={search} onChange={e => setSearch(e.target.value)} className="w-full bg-bay-900 border border-bay-700 rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent" />
        {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-bay-500"><X size={16} /></button>}
      </div>
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4">
        <button onClick={() => setActiveCategory(null)} className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border ${activeCategory === null ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-bay-900 border-bay-700 text-bay-400'}`}>All</button>
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={() => setActiveCategory(cat === activeCategory ? null : cat)} className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border ${activeCategory === cat ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300' : 'bg-bay-900 border-bay-700 text-bay-400'}`}>{cat}</button>
        ))}
      </div>
      <p className="text-xs text-bay-500 mb-3">Showing {filtered.length} of {services.length}</p>
      <div className="space-y-2">
        {filtered.map(s => (
          <Link key={s.id} to={`/service/${s.id}`} className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3.5">
            <div className="min-w-0"><p className="font-medium text-white truncate">{s.name}</p><div className="flex items-center gap-2 mt-1"><span className="text-[11px] px-2 py-0.5 rounded-md bg-bay-800 text-bay-300">{s.category}</span><span className="text-xs text-bay-500">{s.averageTicket}</span></div></div>
            <ArrowRight size={16} className="text-bay-500 shrink-0 ml-3" />
          </Link>
        ))}
      </div>
    </div>
  );
}

function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const [scriptLevel, setScriptLevel] = useState('beginner');
  const [openObjection, setOpenObjection] = useState(0);
  if (!service) return <div className="px-4 pt-12 text-center"><p className="text-bay-400">Service not found.</p><Link to="/services" className="text-accent text-sm mt-4 inline-block">← Back</Link></div>;
  const LEVELS = [
    { key: 'beginner', label: 'Beginner', active: 'text-success border-success/40 bg-success/10' },
    { key: 'intermediate', label: 'Intermediate', active: 'text-warning border-warning/40 bg-warning/10' },
    { key: 'closer', label: 'Closer', active: 'text-accent border-accent/40 bg-accent/10' }
  ];
  return (
    <div className="page-enter min-h-full">
      <div className="sticky top-0 z-40 bg-bay-950/95 backdrop-blur-md border-b border-bay-800 px-4 py-3 flex items-center gap-3">
        <Link to="/services" className="p-2 -ml-2 rounded-lg text-bay-300"><ArrowLeft size={20} /></Link>
        <div className="min-w-0 flex-1"><h1 className="font-semibold text-white truncate">{service.name}</h1><p className="text-xs text-bay-400">{service.category}</p></div>
      </div>
      <div className="px-4 pt-5 pb-10 space-y-6">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs bg-bay-900 border border-bay-700 rounded-lg px-2.5 py-1.5 text-bay-300"><Clock size={12} /> {service.estimatedTime}</span>
          <span className="inline-flex items-center gap-1.5 text-xs bg-bay-900 border border-bay-700 rounded-lg px-2.5 py-1.5 text-bay-300"><DollarSign size={12} /> {service.averageTicket}</span>
        </div>
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Lightbulb size={14} className="text-warning" /> Why It Matters</h2>
          <div className="bg-bay-900 border border-bay-800 rounded-xl p-4"><p className="text-sm text-bay-200 leading-relaxed">{service.importance}</p></div>
        </section>
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2">Cause & Effect</h2>
          <div className="grid gap-3">
            <div className="bg-success/5 border border-success/25 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><CheckCircle2 size={16} className="text-success" /><span className="text-sm font-semibold text-success">Do it on time</span></div><p className="text-sm text-bay-200 leading-relaxed">{service.doOnTime}</p></div>
            <div className="bg-danger/5 border border-danger/25 rounded-xl p-4"><div className="flex items-center gap-2 mb-2"><XCircle size={16} className="text-danger" /><span className="text-sm font-semibold text-danger">If delayed / ignored</span></div><p className="text-sm text-bay-200 leading-relaxed">{service.delayEffect}</p></div>
          </div>
        </section>
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><MessageCircle size={14} className="text-accent" /> Sales Script</h2>
          <div className="flex gap-2 mb-3">
            {LEVELS.map(lvl => (
              <button key={lvl.key} onClick={() => setScriptLevel(lvl.key)} className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${scriptLevel === lvl.key ? lvl.active : 'bg-bay-900 border-bay-700 text-bay-400'}`}>{lvl.label}</button>
            ))}
          </div>
          <div className="bg-bay-900 border border-bay-800 rounded-xl p-4"><p className="text-sm text-bay-100 leading-relaxed">“{service.scripts[scriptLevel]}”</p></div>
        </section>
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><AlertTriangle size={14} className="text-warning" /> Common Objections & Responses</h2>
          <div className="space-y-2">
            {(service.objections || []).map((obj, idx) => (
              <div key={idx} className="bg-bay-900 border border-bay-800 rounded-xl overflow-hidden">
                <button onClick={() => setOpenObjection(openObjection === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left">
                  <span className="text-sm font-medium text-white pr-2">“{obj.objection}”</span>
                  <ChevronDown size={16} className={`text-bay-500 shrink-0 transition-transform ${openObjection === idx ? 'rotate-180' : ''}`} />
                </button>
                {openObjection === idx && (
                  <div className="px-4 pb-4"><div className="bg-bay-800/60 rounded-lg p-3 border border-bay-700"><p className="text-xs text-accent font-medium mb-1.5">Suggested response</p><p className="text-sm text-bay-200 leading-relaxed">{obj.response}</p></div></div>
                )}
              </div>
            ))}
          </div>
        </section>
        {(service.tips || []).length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2">Pro Tips</h2>
            <ul className="space-y-2">
              {service.tips.map((tip, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-bay-300 bg-bay-900 border border-bay-800 rounded-lg px-3.5 py-2.5"><span className="text-accent font-bold shrink-0">{i + 1}.</span><span className="leading-relaxed">{tip}</span></li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function SoftSkillsPage() {
  const [tab, setTab] = useState('objections');
  const [openId, setOpenId] = useState(null);
  const tabs = [
    { key: 'objections', label: 'Objections', icon: <MessageSquare size={16} /> },
    { key: 'followups', label: 'Follow-ups', icon: <Phone size={16} /> },
    { key: 'upsell', label: 'Upsell', icon: <TrendingUp size={16} /> }
  ];
  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Soft Skills</h1>
      <p className="text-sm text-bay-400 mb-5">Scripts, drills & frameworks that close more tickets</p>
      <div className="flex gap-1 p-1 bg-bay-900 rounded-xl border border-bay-800 mb-6">
        {tabs.map(t => (
          <button key={t.key} onClick={() => { setTab(t.key); setOpenId(null); }} className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold ${tab === t.key ? 'bg-bay-800 text-white' : 'text-bay-400'}`}>{t.icon}{t.label}</button>
        ))}
      </div>
      {tab === 'objections' && (
        <div className="space-y-3">
          <p className="text-xs text-bay-500 mb-2">Tap a common objection to reveal a strong response.</p>
          {(softSkills.objectionDrills || []).map(drill => (
            <div key={drill.id} className="bg-bay-900 border border-bay-800 rounded-xl overflow-hidden">
              <button onClick={() => setOpenId(openId === drill.id ? null : drill.id)} className="w-full flex items-center justify-between px-4 py-3.5 text-left">
                <span className="text-sm font-medium text-white">{drill.title}</span>
                <ChevronDown size={16} className={`text-bay-500 transition-transform ${openId === drill.id ? 'rotate-180' : ''}`} />
              </button>
              {openId === drill.id && (
                <div className="px-4 pb-4"><div className="bg-success/5 border border-success/20 rounded-lg p-3.5"><p className="text-xs text-success font-medium mb-1.5 flex items-center gap-1"><CheckCircle2 size={12} /> Strong response</p><p className="text-sm text-bay-200 leading-relaxed">{drill.goodResponse}</p></div></div>
              )}
            </div>
          ))}
        </div>
      )}
      {tab === 'followups' && (
        <div className="space-y-3">
          {(softSkills.followUpScripts || []).map(script => (
            <div key={script.id} className="bg-bay-900 border border-bay-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">{script.title}</h3>
              <p className="text-sm text-bay-300 leading-relaxed bg-bay-800/50 rounded-lg p-3 border border-bay-700">{script.script}</p>
            </div>
          ))}
        </div>
      )}
      {tab === 'upsell' && (
        <div className="space-y-4">
          {(softSkills.upsellFrameworks || []).map(fw => (
            <div key={fw.id} className="bg-bay-900 border border-bay-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2"><TrendingUp size={16} className="text-accent" />{fw.title}</h3>
              <ol className="space-y-2.5">
                {(fw.steps || []).map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-bay-300"><span className="text-accent font-bold shrink-0 w-5">{i + 1}.</span><span className="leading-relaxed">{step}</span></li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function PracticePage() {
  const questions = [
    { id: 'q1', prompt: 'A customer says “I’ll do the transmission service later.” What is the strongest response direction?', options: ['Agree and move on quickly', 'Explain that damage is already starting and today is the lowest-cost time', 'Offer a big discount to close now', 'Tell them the transmission will fail next week'], correctIndex: 1, explanation: 'Connecting the delay to ongoing damage + the convenience of doing it while the car is already here is both honest and effective.' },
    { id: 'q2', prompt: 'When presenting multiple recommendations, what order should you use?', options: ['Highest profit first', 'Easiest jobs first', 'Safety → Prevents expensive failure → Comfort/Convenience', 'Whatever the technician listed first'], correctIndex: 2, explanation: 'Leading with safety builds trust. Then items that protect against big repair bills. Comfort items last.' },
    { id: 'q3', prompt: 'What is the #1 visual that helps close a cabin air filter?', options: ['A printed maintenance schedule', 'Showing the dirty old filter to the customer', 'A long technical explanation of HVAC airflow', 'Comparing prices with other shops'], correctIndex: 1, explanation: 'Seeing the black, clogged filter is far more persuasive than any verbal description.' },
    { id: 'q4', prompt: 'Brake fluid absorbs moisture over time. Why does that matter?', options: ['It changes the color and looks bad', 'It lowers the boiling point and corrodes ABS components', 'It makes the fluid smell', 'It only matters on race cars'], correctIndex: 1, explanation: 'Moisture drops the boiling point (risk of fade) and causes internal corrosion in expensive ABS modules and calipers.' },
    { id: 'q5', prompt: 'Best way to turn a basic oil change into a larger ticket without overselling?', options: ['Recommend every possible service every time', 'Do a real multi-point inspection and present 3–4 prioritized findings with visuals', 'Always add a cabin filter and wipers automatically', 'Pressure the customer about safety on every item'], correctIndex: 1, explanation: 'Real inspection + prioritization + visuals + asking for the sale on the highest-priority items is the professional path.' }
  ];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const q = questions[current];
  const handleSelect = (idx) => { if (selected !== null) return; setSelected(idx); setShowExplanation(true); if (idx === q.correctIndex) setScore(s => s + 1); };
  const next = () => { if (current + 1 >= questions.length) setFinished(true); else { setCurrent(c => c + 1); setSelected(null); setShowExplanation(false); } };
  const reset = () => { setCurrent(0); setSelected(null); setScore(0); setFinished(false); setShowExplanation(false); };
  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="page-enter px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 mb-4"><Trophy size={28} className="text-accent" /></div>
        <h1 className="text-2xl font-bold text-white mb-2">Quiz Complete</h1>
        <p className="text-bay-400 mb-6">You scored <span className="text-white font-semibold">{score}/{questions.length}</span> ({pct}%)</p>
        <button onClick={reset} className="inline-flex items-center gap-2 bg-accent text-bay-950 font-semibold px-5 py-3 rounded-xl"><RotateCcw size={16} /> Try Again</button>
      </div>
    );
  }
  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-6">
        <div><h1 className="text-2xl font-bold text-white">Practice</h1><p className="text-sm text-bay-400">Quick quizzes to lock in the knowledge</p></div>
        <div className="text-sm font-medium text-bay-300 bg-bay-900 border border-bay-700 rounded-lg px-3 py-1.5">{current + 1}/{questions.length}</div>
      </div>
      <div className="h-1.5 bg-bay-800 rounded-full mb-6 overflow-hidden"><div className="h-full bg-accent transition-all duration-300" style={{ width: `${((current + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }} /></div>
      <div className="bg-bay-900 border border-bay-800 rounded-xl p-5 mb-5"><p className="text-sm font-medium text-white leading-relaxed">{q.prompt}</p></div>
      <div className="space-y-2.5 mb-6">
        {q.options.map((opt, idx) => {
          let style = 'bg-bay-900 border-bay-800 text-bay-200';
          if (selected !== null) {
            if (idx === q.correctIndex) style = 'bg-success/10 border-success/50 text-success';
            else if (idx === selected) style = 'bg-danger/10 border-danger/50 text-danger';
            else style = 'bg-bay-900 border-bay-800 text-bay-500 opacity-60';
          }
          return (
            <button key={idx} onClick={() => handleSelect(idx)} disabled={selected !== null} className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all ${style}`}>
              <div className="flex items-start gap-3">
                {selected !== null && idx === q.correctIndex && <CheckCircle2 size={18} className="shrink-0 mt-0.5" />}
                {selected !== null && idx === selected && idx !== q.correctIndex && <XCircle size={18} className="shrink-0 mt-0.5" />}
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>
      {showExplanation && (<div className="bg-bay-800/60 border border-bay-700 rounded-xl p-4 mb-5"><p className="text-xs text-accent font-medium mb-1">Explanation</p><p className="text-sm text-bay-300 leading-relaxed">{q.explanation}</p></div>)}
      {selected !== null && (<button onClick={next} className="w-full bg-accent text-bay-950 font-semibold py-3.5 rounded-xl">{current + 1 >= questions.length ? 'See Results' : 'Next Question'}</button>)}
    </div>
  );
}

function SettingsPage() {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);
  const [streak, setStreak] = useState(0);
  useEffect(() => { setApiKey(localStorage.getItem('baytips-openai-key') || ''); setStreak(parseInt(localStorage.getItem('baytips-streak') || '0', 10)); }, []);
  const saveKey = () => { if (apiKey.trim()) localStorage.setItem('baytips-openai-key', apiKey.trim()); else localStorage.removeItem('baytips-openai-key'); setSaved(true); setTimeout(() => setSaved(false), 2000); };
  const clearData = () => { if (confirm('Clear all local data?')) { localStorage.removeItem('baytips-checklist'); localStorage.removeItem('baytips-streak'); localStorage.removeItem('baytips-openai-key'); setApiKey(''); setStreak(0); } };
  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
      <p className="text-sm text-bay-400 mb-6">BayTips · Standalone training tool</p>
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><Key size={14} /> Optional AI Generation</h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4">
          <p className="text-sm text-bay-300 mb-3 leading-relaxed">Paste your own OpenAI API key to enable AI-generated content for custom services later. The key stays on your device only.</p>
          <input type="password" placeholder="sk-..." value={apiKey} onChange={e => setApiKey(e.target.value)} className="w-full bg-bay-800 border border-bay-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent mb-3" />
          <button onClick={saveKey} className="w-full flex items-center justify-center gap-2 bg-accent text-bay-950 font-semibold py-2.5 rounded-lg text-sm"><Save size={16} />{saved ? 'Saved' : 'Save Key'}</button>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3">Your Progress</h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4 flex items-center justify-between">
          <div><p className="text-sm text-bay-300">Current streak</p><p className="text-2xl font-bold text-white mt-0.5">{streak} days</p></div>
          <div className="text-right"><p className="text-sm text-bay-300">Services in library</p><p className="text-2xl font-bold text-accent mt-0.5">{services.length}</p></div>
        </div>
      </section>
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5"><Info size={14} /> About</h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4 text-sm text-bay-300 leading-relaxed space-y-2">
          <p><strong className="text-white">BayTips</strong> helps service advisors and lube technicians close more recommendations, build customer trust, and stop digging through manuals or Google.</p>
          <p>Content is focused on core preventative maintenance services plus the soft skills that actually move the average ticket.</p>
          <p className="text-xs text-bay-500 pt-1">Version 0.1.0 · Standalone · Local data only</p>
        </div>
      </section>
      <button onClick={clearData} className="w-full flex items-center justify-center gap-2 border border-danger/40 text-danger py-3 rounded-xl text-sm font-medium"><Trash2 size={16} /> Clear Local Data</button>
    </div>
  );
}

function App() {
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    const today = new Date().toDateString();
    const last = localStorage.getItem('baytips-last-visit');
    let current = parseInt(localStorage.getItem('baytips-streak') || '0', 10);
    if (last !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      if (last === yesterday.toDateString()) current += 1;
      else current = 1;
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

createRoot(document.getElementById('root')).render(<App />);
