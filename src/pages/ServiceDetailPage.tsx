import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Clock,
  DollarSign,
  Lightbulb,
  ChevronDown,
} from 'lucide-react';
import { services, ScriptLevel } from '../data/services';

const LEVELS: { key: ScriptLevel; label: string; color: string }[] = [
  { key: 'beginner', label: 'Beginner', color: 'text-success border-success/40 bg-success/10' },
  { key: 'intermediate', label: 'Intermediate', color: 'text-warning border-warning/40 bg-warning/10' },
  { key: 'closer', label: 'Closer', color: 'text-accent border-accent/40 bg-accent/10' },
];

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);
  const [scriptLevel, setScriptLevel] = useState<ScriptLevel>('beginner');
  const [openObjection, setOpenObjection] = useState<number | null>(0);

  if (!service) {
    return (
      <div className="px-4 pt-12 text-center">
        <p className="text-bay-400">Service not found.</p>
        <Link to="/services" className="text-accent text-sm mt-4 inline-block">
          ← Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="page-enter min-h-full">
      {/* Sticky header */}
      <div className="sticky top-0 z-40 bg-bay-950/95 backdrop-blur-md border-b border-bay-800 px-4 py-3 flex items-center gap-3">
        <Link
          to="/services"
          className="p-2 -ml-2 rounded-lg hover:bg-bay-800 text-bay-300 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="font-semibold text-white truncate">{service.name}</h1>
          <p className="text-xs text-bay-400">{service.category}</p>
        </div>
      </div>

      <div className="px-4 pt-5 pb-10 space-y-6">
        {/* Meta chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs bg-bay-900 border border-bay-700 rounded-lg px-2.5 py-1.5 text-bay-300">
            <Clock size={12} /> {service.estimatedTime}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs bg-bay-900 border border-bay-700 rounded-lg px-2.5 py-1.5 text-bay-300">
            <DollarSign size={12} /> {service.averageTicket}
          </span>
        </div>

        {/* Why it matters */}
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Lightbulb size={14} className="text-warning" />
            Why It Matters
          </h2>
          <div className="bg-bay-900 border border-bay-800 rounded-xl p-4">
            <p className="text-sm text-bay-200 leading-relaxed">{service.importance}</p>
          </div>
        </section>

        {/* Cause & Effect */}
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2">
            Cause & Effect
          </h2>
          <div className="grid gap-3">
            <div className="bg-success/5 border border-success/25 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={16} className="text-success" />
                <span className="text-sm font-semibold text-success">Do it on time</span>
              </div>
              <p className="text-sm text-bay-200 leading-relaxed">{service.doOnTime}</p>
            </div>
            <div className="bg-danger/5 border border-danger/25 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <XCircle size={16} className="text-danger" />
                <span className="text-sm font-semibold text-danger">If delayed / ignored</span>
              </div>
              <p className="text-sm text-bay-200 leading-relaxed">{service.delayEffect}</p>
            </div>
          </div>
        </section>

        {/* Sales Scripts */}
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <MessageCircle size={14} className="text-accent" />
            Sales Script
          </h2>

          {/* Level selector */}
          <div className="flex gap-2 mb-3">
            {LEVELS.map((lvl) => (
              <button
                key={lvl.key}
                onClick={() => setScriptLevel(lvl.key)}
                className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${
                  scriptLevel === lvl.key
                    ? lvl.color
                    : 'bg-bay-900 border-bay-700 text-bay-400 hover:border-bay-500'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>

          <div className="bg-bay-900 border border-bay-800 rounded-xl p-4">
            <p className="text-sm text-bay-100 leading-relaxed whitespace-pre-line">
              “{service.scripts[scriptLevel]}”
            </p>
          </div>
        </section>

        {/* Objections */}
        <section>
          <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <AlertTriangle size={14} className="text-warning" />
            Common Objections & Responses
          </h2>
          <div className="space-y-2">
            {service.objections.map((obj, idx) => (
              <div
                key={idx}
                className="bg-bay-900 border border-bay-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenObjection(openObjection === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <span className="text-sm font-medium text-white pr-2">
                    “{obj.objection}”
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-bay-500 shrink-0 transition-transform ${
                      openObjection === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openObjection === idx && (
                  <div className="px-4 pb-4 pt-0">
                    <div className="bg-bay-800/60 rounded-lg p-3 border border-bay-700">
                      <p className="text-xs text-accent font-medium mb-1.5">Suggested response</p>
                      <p className="text-sm text-bay-200 leading-relaxed">{obj.response}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        {service.tips.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-2">
              Pro Tips
            </h2>
            <ul className="space-y-2">
              {service.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-bay-300 bg-bay-900 border border-bay-800 rounded-lg px-3.5 py-2.5"
                >
                  <span className="text-accent font-bold shrink-0">{i + 1}.</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Bottom spacer for safe area */}
        <div className="h-4" />
      </div>
    </div>
  );
}
