import { useState, useEffect } from 'react';
import { Key, Save, Info, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const [apiKey, setApiKey] = useState('');
  const [saved, setSaved] = useState(false);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const key = localStorage.getItem('baytips-openai-key') || '';
    setApiKey(key);
    const s = localStorage.getItem('baytips-streak');
    if (s) setStreak(parseInt(s, 10));
  }, []);

  const saveKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('baytips-openai-key', apiKey.trim());
    } else {
      localStorage.removeItem('baytips-openai-key');
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const clearData = () => {
    if (confirm('Clear all local data (checklist progress, streak, API key)?')) {
      localStorage.removeItem('baytips-checklist');
      localStorage.removeItem('baytips-streak');
      localStorage.removeItem('baytips-openai-key');
      setApiKey('');
      setStreak(0);
    }
  };

  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
      <p className="text-sm text-bay-400 mb-6">BayTips · Standalone training tool</p>

      {/* API Key */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Key size={14} /> Optional AI Generation
        </h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4">
          <p className="text-sm text-bay-300 mb-3 leading-relaxed">
            Paste your own OpenAI API key to enable AI-generated content for custom services in a future update. The key stays on your device only.
          </p>
          <input
            type="password"
            placeholder="sk-..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full bg-bay-800 border border-bay-700 rounded-lg py-2.5 px-3 text-sm text-white placeholder:text-bay-500 focus:outline-none focus:border-accent mb-3"
          />
          <button
            onClick={saveKey}
            className="w-full flex items-center justify-center gap-2 bg-accent text-bay-950 font-semibold py-2.5 rounded-lg text-sm"
          >
            <Save size={16} />
            {saved ? 'Saved' : 'Save Key'}
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3">
          Your Progress
        </h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-bay-300">Current streak</p>
            <p className="text-2xl font-bold text-white mt-0.5">{streak} days</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-bay-300">Services in library</p>
            <p className="text-2xl font-bold text-accent mt-0.5">12</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-8">
        <h2 className="text-xs font-semibold text-bay-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
          <Info size={14} /> About
        </h2>
        <div className="bg-bay-900 border border-bay-800 rounded-xl p-4 text-sm text-bay-300 leading-relaxed space-y-2">
          <p>
            <strong className="text-white">BayTips</strong> helps service advisors and lube technicians close more recommendations, build customer trust, and stop digging through manuals or Google.
          </p>
          <p>
            Content is focused on core preventative maintenance services plus the soft skills that actually move the average ticket.
          </p>
          <p className="text-xs text-bay-500 pt-1">Version 0.1.0 · Standalone · Local data only</p>
        </div>
      </section>

      {/* Danger zone */}
      <section>
        <button
          onClick={clearData}
          className="w-full flex items-center justify-center gap-2 border border-danger/40 text-danger py-3 rounded-xl text-sm font-medium hover:bg-danger/10 transition-colors"
        >
          <Trash2 size={16} /> Clear Local Data
        </button>
      </section>
    </div>
  );
}
