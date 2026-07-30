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
  },
  {
    id: 'cabin-air-filter',
    name: 'Cabin Air Filter',
    category: 'Filters',
    tags: ['cabin', 'filter', 'ac', 'air quality', 'allergies'],
    importance: 'The cabin air filter cleans the air that enters the passenger compartment through the HVAC system. A clogged filter reduces airflow, strains the blower motor, and lets dust, pollen, and exhaust fumes into the car.',
    doOnTime: 'Stronger airflow, better A/C and heat performance, cleaner air for passengers (especially kids and allergy sufferers), and longer blower motor life.',
    delayEffect: 'Reduced cooling/heating performance, musty odors, increased strain on the blower motor (expensive failure), and poor air quality inside the vehicle.',
    scripts: {
      beginner: "Your cabin filter is dirty. This is the filter that cleans the air you and your passengers breathe. Replacing it improves airflow and keeps the A/C working at its best. Want us to replace it while we have the car?",
      intermediate: "I pulled the cabin filter and it's pretty loaded with debris. When this filter clogs, the A/C has to work harder and the air quality inside drops. It's a quick, inexpensive job that makes a noticeable difference in comfort. Can we take care of it today?",
      closer: "This cabin filter is overdue and restricting airflow. You're not getting full A/C performance and the blower motor is working overtime. Replacing it now is cheap insurance against a more expensive blower motor later — and your passengers will breathe cleaner air immediately."
    },
    objections: [
      { objection: "I don't really need that / I never change it.", response: "A lot of people don't realize it exists until the A/C starts feeling weak or they notice a musty smell. Once you drive with a fresh one, the difference in airflow is obvious. It's one of the highest-satisfaction services we do." },
      { objection: "Is it really that dirty?", response: "I can show you the old one — most customers are surprised how black it is. If you'd like, I can bring it out so you can see exactly what was filtering your air." }
    ],
    tips: ['Always offer to show the old filter — visual sells this service hard.', 'Mention allergy season or kids/pets in the car for extra relevance.'],
    estimatedTime: '10–20 min',
    averageTicket: '$35–$65'
  },
  {
    id: 'engine-air-filter',
    name: 'Engine Air Filter',
    category: 'Filters',
    tags: ['air filter', 'engine', 'performance', 'fuel economy'],
    importance: 'The engine air filter prevents dirt, dust, and debris from entering the combustion chambers. A clean filter protects internal engine components and helps maintain proper air-fuel ratio.',
    doOnTime: 'Better throttle response, improved fuel economy, cleaner emissions, and protection against premature engine wear.',
    delayEffect: 'Restricted airflow reduces power and fuel economy. Dirt that gets past a damaged filter acts like sandpaper inside the engine, accelerating wear on cylinders, rings, and valves.',
    scripts: {
      beginner: "Your engine air filter is dirty. A clean filter helps the engine breathe better, which means better performance and fuel economy. It's a quick replacement — would you like us to take care of it?",
      intermediate: "I inspected the engine air filter and it's restricting airflow. When the engine can't get enough clean air, you lose power and burn more gas. Replacing it is inexpensive and restores the performance the manufacturer intended.",
      closer: "This air filter is overdue. Restricted airflow is costing you fuel economy and putting extra strain on the engine. A new filter is one of the cheapest performance upgrades you can make — let's get it done while the car is here."
    },
    objections: [
      { objection: "It still looks okay to me.", response: "The dirty side isn't always obvious from a quick glance. Once we hold it up to the light you can see how little air is actually getting through. Most people are surprised." }
    ],
    tips: ['Hold the old filter up to a light source — if you can barely see light, it sells itself.', 'Tie it to fuel economy for cost-conscious customers.'],
    estimatedTime: '5–15 min',
    averageTicket: '$25–$45'
  },
  {
    id: 'transmission-fluid',
    name: 'Transmission Fluid Service',
    category: 'Fluids',
    tags: ['transmission', 'fluid', 'flush', 'automatic', 'maintenance'],
    importance: 'Transmission fluid lubricates, cools, and provides hydraulic pressure for gear changes. Over time it breaks down, oxidizes, and loses its ability to protect expensive internal components.',
    doOnTime: 'Smoother shifts, cooler operating temperatures, longer transmission life, and prevention of costly failures. Many transmissions are designed to last the life of the vehicle when fluid is maintained.',
    delayEffect: 'Burnt fluid leads to harsh shifting, slipping, overheating, and eventual transmission failure. Rebuild or replacement commonly costs $3,500–$7,000+.',
    scripts: {
      beginner: "Your transmission fluid is due for service based on mileage and condition. Fresh fluid keeps the transmission shifting smoothly and helps it last. Would you like us to service it while the car is here?",
      intermediate: "I checked the transmission fluid and it's showing signs of age — darker color and a burnt smell. This fluid is what protects a multi-thousand-dollar transmission. Servicing it now is far cheaper than repairing it later. Can we schedule it today?",
      closer: "The transmission fluid is past its useful life. Continuing to drive on degraded fluid is one of the fastest ways to destroy a transmission. We can service it properly today and give that transmission a much better chance of lasting. This is one of the highest-ROI services we offer."
    },
    objections: [
      { objection: "I thought transmission fluid lasted forever / sealed for life.", response: "Some manufacturers market them that way, but the fluid still breaks down from heat. 'Sealed for life' often means sealed for the life of the warranty, not the life of the car. We see the difference every day between cars that service the fluid and those that don't." },
      { objection: "Is a flush safe? I've heard it can cause problems.", response: "Great question. We use the method recommended for your specific transmission. On higher-mileage units we often do a drain-and-fill instead of a full flush if that's the safer approach. We'll choose the right method for your car." }
    ],
    tips: ['Always check fluid condition (color and smell) and show the customer if possible.', 'Know the difference between drain-and-fill vs. machine flush for the vehicle.'],
    estimatedTime: '45–90 min',
    averageTicket: '$180–$350'
  }
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
  objectionDrills: [
    { id: 'too-expensive', title: '“It’s too expensive”', goodResponse: 'I understand. The price reflects the quality of parts and the inspection that comes with the service. Skipping it often costs more later. Which part of the recommendation feels highest priority to you right now?' },
    { id: 'do-it-later', title: '“I’ll do it later”', goodResponse: 'A lot of people say that. The issue is that the damage is already starting. While the vehicle is here and everything is accessible, this is the lowest-cost time to handle it. Waiting usually turns a small job into a bigger one.' },
    { id: 'other-shop', title: '“My other shop never mentioned this”', goodResponse: 'Different shops have different inspection standards. We check condition, not just the sticker date. I’d rather tell you about it early than have you come back with a bigger problem.' },
    { id: 'dont-need-it', title: '“I don’t think I need that”', goodResponse: 'Fair enough. Can I show you what we found? Sometimes seeing the actual condition makes the recommendation clearer. If after that it still doesn’t feel necessary, no pressure.' }
  ],
  followUpScripts: [
    { id: 'same-day-text', title: 'Same-Day Text (Declined Item)', script: 'Hi [Name], this is [Your Name] at [Shop]. Just a quick follow-up on the [Service] we talked about. It’s one of the better ways to avoid a bigger repair later. Happy to get you scheduled whenever you’re ready — just reply to this text.' },
    { id: 'three-day-followup', title: '3-Day Follow-Up Call', script: 'Hi [Name], this is [Your Name] from [Shop]. I wanted to check in about the [Service] we recommended. Have you had a chance to think it over? I’m happy to answer any questions or get you on the schedule.' },
    { id: 'post-service-thankyou', title: 'Post-Service Thank You + Review', script: 'Hi [Name], thank you for trusting us with your [Vehicle] today. If everything felt good, a quick Google review helps us a lot. If anything wasn’t perfect, reply to this text and I’ll make it right.' }
  ],
  upsellFrameworks: [
    {
      id: 'oil-to-ticket',
      title: 'Turning a $60 Oil Change into a $300–$400 Ticket',
      steps: [
        'Always perform a real multi-point inspection — not a checklist you pencil-whip.',
        'Prioritize findings: Safety → Prevents expensive failure → Comfort/Convenience.',
        'Present no more than 3–4 items at once. Overwhelm kills the sale.',
        'Use visuals (old parts, test results, photos).',
        'Bundle related items (“While we’re doing the oil, the cabin filter is a 10-minute add”).',
        'Ask for the sale on the highest-priority item first.',
        'Offer to stage the remaining items for the next visit if budget is tight.'
      ]
    },
    {
      id: 'trust-builder',
      title: 'Building Long-Term Trust (Return Rate)',
      steps: [
        'Never oversell. If it’s not needed, say so — customers remember honesty.',
        'Explain the “why” in plain language, not tech jargon.',
        'Give options when possible (good / better / best).',
        'Follow up on declined items without pressure.',
        'Remember previous conversations and vehicle history.'
      ]
    }
  ]
};

export { CATEGORIES, services, softSkills };
