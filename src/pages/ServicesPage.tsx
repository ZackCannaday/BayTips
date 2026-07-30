import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, X } from 'lucide-react';
import { services, CATEGORIES } from '../data/services';

export default function ServicesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = services;
    if (activeCategory) {
      list = list.filter((s) => s.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.tags.some((t) => t.includes(q)) ||
          s.category.toLowerCase().includes(q) ||
          s.importance.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, activeCategory]);

  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Services</h1>
      <p className="text-sm text-bay-400 mb-5">
        {services.length} training guides · preventative maintenance
      </p>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-bay-500" size={18} />
        <input
          type="search"
          placeholder="Type to filter services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-bay-900 border border-bay-700 rounded-xl py-3 pl-10 pr-10 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-bay-500 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 -mx-4 px-4 scrollbar-none">
        <button
          onClick={() => setActiveCategory(null)}
          className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
            activeCategory === null
              ? 'bg-accent/20 border-accent text-accent'
              : 'bg-bay-900 border-bay-700 text-bay-400 hover:border-bay-500'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
              activeCategory === cat
                ? 'bg-accent/20 border-accent text-accent'
                : 'bg-bay-900 border-bay-700 text-bay-400 hover:border-bay-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-xs text-bay-500 mb-3">
        Showing {filtered.length} of {services.length}
      </p>

      {/* Service list */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-bay-400 text-sm">No services match your filters.</p>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory(null);
              }}
              className="mt-3 text-accent text-sm font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          filtered.map((s) => (
            <Link
              key={s.id}
              to={`/service/${s.id}`}
              className="card-interactive flex items-center justify-between bg-bay-900 border border-bay-800 rounded-xl px-4 py-3.5 hover:border-bay-600"
            >
              <div className="min-w-0">
                <p className="font-medium text-white truncate">{s.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-bay-800 text-bay-300">
                    {s.category}
                  </span>
                  <span className="text-xs text-bay-500">{s.averageTicket}</span>
                </div>
              </div>
              <ArrowRight size={16} className="text-bay-500 shrink-0 ml-3" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
