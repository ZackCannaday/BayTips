import { useState } from 'react';
import { services } from '../data/services';
import { CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

function buildQuestions(): Question[] {
  const qs: Question[] = [
    {
      id: 'q1',
      prompt: 'A customer says “I’ll do the transmission service later.” What is the strongest response direction?',
      options: [
        'Agree and move on quickly',
        'Explain that damage is already starting and today is the lowest-cost time',
        'Offer a big discount to close now',
        'Tell them the transmission will fail next week',
      ],
      correctIndex: 1,
      explanation:
        'Connecting the delay to ongoing damage + the convenience of doing it while the car is already here is both honest and effective.',
    },
    {
      id: 'q2',
      prompt: 'When presenting multiple recommendations, what order should you use?',
      options: [
        'Highest profit first',
        'Easiest jobs first',
        'Safety → Prevents expensive failure → Comfort/Convenience',
        'Whatever the technician listed first',
      ],
      correctIndex: 2,
      explanation:
        'Leading with safety builds trust. Then items that protect against big repair bills. Comfort items last.',
    },
    {
      id: 'q3',
      prompt: 'What is the #1 visual that helps close a cabin air filter?',
      options: [
        'A printed maintenance schedule',
        'Showing the dirty old filter to the customer',
        'A long technical explanation of HVAC airflow',
        'Comparing prices with other shops',
      ],
      correctIndex: 1,
      explanation:
        'Seeing the black, clogged filter is far more persuasive than any verbal description.',
    },
    {
      id: 'q4',
      prompt: 'Brake fluid absorbs moisture over time. Why does that matter?',
      options: [
        'It changes the color and looks bad',
        'It lowers the boiling point and corrodes ABS components',
        'It makes the fluid smell',
        'It only matters on race cars',
      ],
      correctIndex: 1,
      explanation:
        'Moisture drops the boiling point (risk of fade) and causes internal corrosion in expensive ABS modules and calipers.',
    },
    {
      id: 'q5',
      prompt: 'Best way to turn a basic oil change into a larger ticket without overselling?',
      options: [
        'Recommend every possible service every time',
        'Do a real multi-point inspection and present 3–4 prioritized findings with visuals',
        'Always add a cabin filter and wipers automatically',
        'Pressure the customer about safety on every item',
      ],
      correctIndex: 1,
      explanation:
        'Real inspection + prioritization + visuals + asking for the sale on the highest-priority items is the professional path.',
    },
  ];
  return qs;
}

export default function PracticePage() {
  const questions = buildQuestions();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = questions[current];

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    if (idx === q.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowExplanation(false);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowExplanation(false);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="page-enter px-4 pt-12 pb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 border border-accent/40 mb-4">
          <Trophy size={28} className="text-accent" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Quiz Complete</h1>
        <p className="text-bay-400 mb-6">
          You scored <span className="text-white font-semibold">{score}/{questions.length}</span> ({pct}%)
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-accent text-bay-950 font-semibold px-5 py-3 rounded-xl"
        >
          <RotateCcw size={16} /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="page-enter px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Practice</h1>
          <p className="text-sm text-bay-400">Quick quizzes to lock in the knowledge</p>
        </div>
        <div className="text-sm font-medium text-bay-300 bg-bay-900 border border-bay-700 rounded-lg px-3 py-1.5">
          {current + 1}/{questions.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-bay-800 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${((current + (selected !== null ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="bg-bay-900 border border-bay-800 rounded-xl p-5 mb-5">
        <p className="text-sm font-medium text-white leading-relaxed">{q.prompt}</p>
      </div>

      <div className="space-y-2.5 mb-6">
        {q.options.map((opt, idx) => {
          let style = 'bg-bay-900 border-bay-800 hover:border-bay-600 text-bay-200';
          if (selected !== null) {
            if (idx === q.correctIndex) {
              style = 'bg-success/10 border-success/50 text-success';
            } else if (idx === selected) {
              style = 'bg-danger/10 border-danger/50 text-danger';
            } else {
              style = 'bg-bay-900 border-bay-800 text-bay-500 opacity-60';
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all ${style}`}
            >
              <div className="flex items-start gap-3">
                {selected !== null && idx === q.correctIndex && (
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                )}
                {selected !== null && idx === selected && idx !== q.correctIndex && (
                  <XCircle size={18} className="shrink-0 mt-0.5" />
                )}
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="bg-bay-800/60 border border-bay-700 rounded-xl p-4 mb-5">
          <p className="text-xs text-accent font-medium mb-1">Explanation</p>
          <p className="text-sm text-bay-300 leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          className="w-full bg-accent text-bay-950 font-semibold py-3.5 rounded-xl"
        >
          {current + 1 >= questions.length ? 'See Results' : 'Next Question'}
        </button>
      )}
    </div>
  );
}
