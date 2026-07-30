/* BayTips service + soft skills data */
const CATEGORIES = ['Fluids', 'Filters', 'Brakes', 'Tires & Alignment', 'Battery & Electrical', 'Inspection'];

const services = [
  {
    id: 'oil-change',
    name: 'Oil Change & Filter',
    category: 'Fluids',
    tags: ['oil', 'filter', 'maintenance', 'engine', 'synthetic'],
    importance: 'Engine oil is the lifeblood of the vehicle. It lubricates moving parts, reduces friction, carries away heat, and traps contaminants. Fresh oil with a clean filter keeps the engine running cooler, quieter, and lasting far longer.',
    doOnTime: 'Engine stays clean and efficient. Better fuel economy, quieter operation, maximum engine life, and stronger warranty protection. Customers notice smoother performance.',
    delayEffect: 'Oil breaks down, turns acidic, and loses viscosity. Metal-on-metal wear accelerates. Sludge builds up, oil passages clog, and catastrophic engine failure becomes likely. Cost of neglect: $4,000–$8,000+ engine rebuild or replacement.',
    scripts: {
      beginner: "Your oil is due based on the mileage and condition we see. Fresh oil and a new filter keep the engine protected and running smoothly. Most manufacturers recommend this interval — would you like us to take care of it while it's here?",
      intermediate: "I checked the oil and it's past the recommended interval. Dirty oil can't protect the engine the way it should. A fresh oil change with a quality filter is one of the cheapest ways to avoid expensive repairs down the road. We can get it done today — sound good?",
      closer: "Your oil is overdue and already showing signs of breakdown. Continuing to drive on it is like running a marathon with no water — eventually something fails. The good news is we can fix this right now for a fraction of what an engine repair would cost. Let's protect the engine today."
    },
    objections: [
      { objection: "It's too expensive / I'll do it cheaper somewhere else.", response: "I completely understand wanting value. The difference with us is the quality of oil, the correct filter for your engine, and the inspection we do while the oil is draining. A bad oil change can actually hurt the engine. Most of our customers find the peace of mind is worth a few extra dollars." },
      { objection: "I'll just do it later / next month.", response: "I hear that a lot. The problem is oil doesn't wait — once it starts breaking down, the damage is already happening. Waiting another month or two can turn a $70 service into a $5,000 problem. While the car is already here and the oil is warm, this is the ideal time." },
      { objection: "My other shop never said it was due.", response: "Different shops use different intervals and some just look at the sticker. We actually check the oil condition and the manufacturer's severe-service recommendations, which most daily drivers fall under. Better to catch it early than after the engine starts making noise." }
    ],
    tips: ['Always recommend the correct viscosity and quality (API SP / ILSAC GF-6).', 'Show the customer the old filter and oil if it looks dirty — visual proof sells.', 'Mention the free multi-point inspection that comes with every oil change.'],
    estimatedTime: '25–40 min',
    averageTicket: '$65–$120'
  }
  // NOTE: Full services array continues in the complete version. This is a partial push to establish the file. Full content is being completed.
];

const softSkills = {
  dailyChecklist: [
    { id: 'walkaround', title: 'Vehicle Walk-Around', description: 'Perform a thorough multi-point inspection and note every concern before talking to the customer.' },
    { id: 'listen-first', title: 'Listen Before Recommending', description: 'Ask what concerns the customer already has. Build recommendations around their priorities.' },
    { id: 'show-dont-tell', title: 'Show the Evidence', description: 'Bring the old filter, show the fluid color, display the battery test printout. Visuals close more tickets.' },
    { id: 'priority-order', title: 'Present by Priority', description: 'Safety items first, then items that prevent expensive failures, then convenience/comfort items.' },
    { id: 'ask-for-the-sale', title: 'Ask for the Sale', description: 'After presenting value, clearly ask: "Would you like us to take care of that today?"' },
    { id: 'follow-up', title: 'Same-Day Follow-Up', description: 'Text or call declined recommendations the same day with a short value reminder.' }
  ],
  objectionDrills: [],
  followUpScripts: [],
  upsellFrameworks: []
};

export { CATEGORIES, services, softSkills };
