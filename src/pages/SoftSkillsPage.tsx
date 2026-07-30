import { useState } from 'react';
import { softSkills } from '../data/services';
import { MessageSquare, Phone, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';

type Tab = 'objections' | 'followups' | 'upsell';

export default function SoftSkillsPage() {
  const [tab, setTab] = useState<Tab>('objections');
  const [openId, setOpenId] = useState<string | null>(null);

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: 'objections', label: 'Objections', icon: <MessageSquare size={16} /> },
    { key: 'followups', label: 'Follow-ups', icon: <Phone size={16} /> },
    { key: 'upsell', label: 'Upsell', icon: <TrendingUp size={16} /> },
  ];

  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Soft Skills</h1>
      <p className="text-sm text-bay-400 mb-5">Scripts, drills & frameworks that close more tickets</p>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-bay-900 rounded-xl border border-bay-800 mb-6">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => {
              setTab(t.key);
              setOpenId(null);
            }}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
              tab === t.key
                ? 'bg-bay-800 text-white shadow-sm'
                : 'text-bay-400 hover:text-bay-200'
            }`}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Objection Drills */}
      {tab === 'objections' && (
        <div className="space-y-3">
          <p className="text-xs text-bay-500 mb-2">
            Tap a common objection to reveal a strong response. Practice these out loud.
          </p>
          {softSkills.objectionDrills.map((drill) => (
            <div
              key={drill.id}
              className="bg-bay-900 border border-bay-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === drill.id ? null : drill.id)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="text-sm font-medium text-white">{drill.title}</span>
                <ChevronDown
                  size={16}
                  className={`text-bay-500 transition-transform ${
                    openId === drill.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === drill.id && (
                <div className="px-4 pb-4">
                  <div className="bg-success/5 border border-success/20 rounded-lg p-3.5">
                    <p className="text-xs text-success font-medium mb-1.5 flex items-center gap-1">
                      <CheckCircle2 size={12} /> Strong response
                    </p>
                    <p className="text-sm text-bay-200 leading-relaxed">{drill.goodResponse}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Follow-up Scripts */}
      {tab === 'followups' && (
        <div className="space-y-3">
          <p className="text-xs text-bay-500 mb-2">
            Copy these templates. Personalize the bracketed fields.
          </p>
          {softSkills.followUpScripts.map((script) => (
            <div key={script.id} className="bg-bay-900 border border-bay-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-2">{script.title}</h3>
              <p className="text-sm text-bay-300 leading-relaxed whitespace-pre-line bg-bay-800/50 rounded-lg p-3 border border-bay-700">
                {script.script}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Upsell Frameworks */}
      {tab === 'upsell' && (
        <div className="space-y-4">
          {softSkills.upsellFrameworks.map((fw) => (
            <div key={fw.id} className="bg-bay-900 border border-bay-800 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <TrendingUp size={16} className="text-accent" />
                {fw.title}
              </h3>
              <ol className="space-y-2.5">
                {fw.steps.map((step, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-bay-300">
                    <span className="text-accent font-bold shrink-0 w-5">{i + 1}.</span>
                    <span className="leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
