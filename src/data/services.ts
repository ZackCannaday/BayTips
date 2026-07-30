export type ScriptLevel = 'beginner' | 'intermediate' | 'closer';

export interface Objection {
  objection: string;
  response: string;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  tags: string[];
  importance: string;
  doOnTime: string;
  delayEffect: string;
  scripts: Record<ScriptLevel, string>;
  objections: Objection[];
  tips: string[];
  estimatedTime: string;
  averageTicket: string;
}

export const CATEGORIES = [
  'Fluids',
  'Filters',
  'Brakes',
  'Tires & Alignment',
  'Battery & Electrical',
  'Inspection',
] as const;

export const services: Service[] = [
  {
    id: 'oil-change',
    name: 'Oil Change & Filter',
    category: 'Fluids',
    tags: ['oil', 'filter', 'maintenance', 'engine', 'synthetic'],
    importance:
      'Engine oil is the lifeblood of the vehicle. It lubricates moving parts, reduces friction, carries away heat, and traps contaminants. Fresh oil with a clean filter keeps the engine running cooler, quieter, and lasting far longer.',
    doOnTime:
      'Engine stays clean and efficient. Better fuel economy, quieter operation, maximum engine life, and stronger warranty protection. Customers notice smoother performance.',
    delayEffect:
      'Oil breaks down, turns acidic, and loses viscosity. Metal-on-metal wear accelerates. Sludge builds up, oil passages clog, and catastrophic engine failure becomes likely. Cost of neglect: $4,000–$8,000+ engine rebuild or replacement.',
    scripts: {
      beginner:
        "Your oil is due based on the mileage and condition we see. Fresh oil and a new filter keep the engine protected and running smoothly. Most manufacturers recommend this interval — would you like us to take care of it while it's here?",
      intermediate:
        "I checked the oil and it's past the recommended interval. Dirty oil can't protect the engine the way it should. A fresh oil change with a quality filter is one of the cheapest ways to avoid expensive repairs down the road. We can get it done today — sound good?",
      closer:
        "Your oil is overdue and already showing signs of breakdown. Continuing to drive on it is like running a marathon with no water — eventually something fails. The good news is we can fix this right now for a fraction of what an engine repair would cost. Let's protect the engine today.",
    },
    objections: [
      {
        objection: "It's too expensive / I'll do it cheaper somewhere else.",
        response:
          "I completely understand wanting value. The difference with us is the quality of oil, the correct filter for your engine, and the inspection we do while the oil is draining. A bad oil change can actually hurt the engine. Most of our customers find the peace of mind is worth a few extra dollars.",
      },
      {
        objection: "I'll just do it later / next month.",
        response:
          "I hear that a lot. The problem is oil doesn't wait — once it starts breaking down, the damage is already happening. Waiting another month or two can turn a $70 service into a $5,000 problem. While the car is already here and the oil is warm, this is the ideal time.",
      },
      {
        objection: "My other shop never said it was due.",
        response:
          "Different shops use different intervals and some just look at the sticker. We actually check the oil condition and the manufacturer's severe-service recommendations, which most daily drivers fall under. Better to catch it early than after the engine starts making noise.",
      },
    ],
    tips: [
      'Always recommend the correct viscosity and quality (API SP / ILSAC GF-6).',
      'Show the customer the old filter and oil if it looks dirty — visual proof sells.',
      'Mention the free multi-point inspection that comes with every oil change.',
    ],
    estimatedTime: '25–40 min',
    averageTicket: '$65–$120',
  },
  {
    id: 'cabin-air-filter',
    name: 'Cabin Air Filter',
    category: 'Filters',
    tags: ['cabin', 'filter', 'ac', 'air quality', 'allergies'],
    importance:
      'The cabin air filter cleans the air that enters the passenger compartment through the HVAC system. A clogged filter reduces airflow, strains the blower motor, and lets dust, pollen, and exhaust fumes into the car.',
    doOnTime:
      'Stronger airflow, better A/C and heat performance, cleaner air for passengers (especially kids and allergy sufferers), and longer blower motor life.',
    delayEffect:
      'Reduced cooling/heating performance, musty odors, increased strain on the blower motor (expensive failure), and poor air quality inside the vehicle.',
    scripts: {
      beginner:
        "Your cabin filter is dirty. This is the filter that cleans the air you and your passengers breathe. Replacing it improves airflow and keeps the A/C working at its best. Want us to replace it while we have the car?",
      intermediate:
        "I pulled the cabin filter and it's pretty loaded with debris. When this filter clogs, the A/C has to work harder and the air quality inside drops. It's a quick, inexpensive job that makes a noticeable difference in comfort. Can we take care of it today?",
      closer:
        "This cabin filter is overdue and restricting airflow. You're not getting full A/C performance and the blower motor is working overtime. Replacing it now is cheap insurance against a more expensive blower motor later — and your passengers will breathe cleaner air immediately.",
    },
    objections: [
      {
        objection: "I don't really need that / I never change it.",
        response:
          "A lot of people don't realize it exists until the A/C starts feeling weak or they notice a musty smell. Once you drive with a fresh one, the difference in airflow is obvious. It's one of the highest-satisfaction services we do.",
      },
      {
        objection: "Is it really that dirty?",
        response:
          "I can show you the old one — most customers are surprised how black it is. If you'd like, I can bring it out so you can see exactly what was filtering your air.",
      },
    ],
    tips: [
      'Always offer to show the old filter — visual sells this service hard.',
      'Mention allergy season or kids/pets in the car for extra relevance.',
    ],
    estimatedTime: '10–20 min',
    averageTicket: '$35–$65',
  },
  {
    id: 'engine-air-filter',
    name: 'Engine Air Filter',
    category: 'Filters',
    tags: ['air filter', 'engine', 'performance', 'fuel economy'],
    importance:
      'The engine air filter prevents dirt, dust, and debris from entering the combustion chambers. A clean filter protects internal engine components and helps maintain proper air-fuel ratio.',
    doOnTime:
      'Better throttle response, improved fuel economy, cleaner emissions, and protection against premature engine wear.',
    delayEffect:
      'Restricted airflow reduces power and fuel economy. Dirt that gets past a damaged filter acts like sandpaper inside the engine, accelerating wear on cylinders, rings, and valves.',
    scripts: {
      beginner:
        "Your engine air filter is dirty. A clean filter helps the engine breathe better, which means better performance and fuel economy. It's a quick replacement — would you like us to take care of it?",
      intermediate:
        "I inspected the engine air filter and it's restricting airflow. When the engine can't get enough clean air, you lose power and burn more gas. Replacing it is inexpensive and restores the performance the manufacturer intended.",
      closer:
        "This air filter is overdue. Restricted airflow is costing you fuel economy and putting extra strain on the engine. A new filter is one of the cheapest performance upgrades you can make — let's get it done while the car is here.",
    },
    objections: [
      {
        objection: "It still looks okay to me.",
        response:
          "The dirty side isn't always obvious from a quick glance. Once we hold it up to the light you can see how little air is actually getting through. Most people are surprised.",
      },
    ],
    tips: [
      'Hold the old filter up to a light source — if you can barely see light, it sells itself.',
      'Tie it to fuel economy for cost-conscious customers.',
    ],
    estimatedTime: '5–15 min',
    averageTicket: '$25–$45',
  },
  {
    id: 'transmission-fluid',
    name: 'Transmission Fluid Service',
    category: 'Fluids',
    tags: ['transmission', 'fluid', 'flush', 'automatic', 'maintenance'],
    importance:
      'Transmission fluid lubricates, cools, and provides hydraulic pressure for gear changes. Over time it breaks down, oxidizes, and loses its ability to protect expensive internal components.',
    doOnTime:
      'Smoother shifts, cooler operating temperatures, longer transmission life, and prevention of costly failures. Many transmissions are designed to last the life of the vehicle when fluid is maintained.',
    delayEffect:
      'Burnt fluid leads to harsh shifting, slipping, overheating, and eventual transmission failure. Rebuild or replacement commonly costs $3,500–$7,000+.',
    scripts: {
      beginner:
        "Your transmission fluid is due for service based on mileage and condition. Fresh fluid keeps the transmission shifting smoothly and helps it last. Would you like us to service it while the car is here?",
      intermediate:
        "I checked the transmission fluid and it's showing signs of age — darker color and a burnt smell. This fluid is what protects a multi-thousand-dollar transmission. Servicing it now is far cheaper than repairing it later. Can we schedule it today?",
      closer:
        "The transmission fluid is past its useful life. Continuing to drive on degraded fluid is one of the fastest ways to destroy a transmission. We can service it properly today and give that transmission a much better chance of lasting. This is one of the highest-ROI services we offer.",
    },
    objections: [
      {
        objection: "I thought transmission fluid lasted forever / sealed for life.",
        response:
          "Some manufacturers market them that way, but the fluid still breaks down from heat. 'Sealed for life' often means sealed for the life of the warranty, not the life of the car. We see the difference every day between cars that service the fluid and those that don't.",
      },
      {
        objection: "Is a flush safe? I've heard it can cause problems.",
        response:
          "Great question. We use the method recommended for your specific transmission. On higher-mileage units we often do a drain-and-fill instead of a full flush if that's the safer approach. We'll choose the right method for your car.",
      },
    ],
    tips: [
      'Always check fluid condition (color and smell) and show the customer if possible.',
      'Know the difference between drain-and-fill vs. machine flush for the vehicle.',
    ],
    estimatedTime: '45–90 min',
    averageTicket: '$180–$350',
  },
  {
    id: 'coolant-flush',
    name: 'Coolant / Antifreeze Service',
    category: 'Fluids',
    tags: ['coolant', 'antifreeze', 'radiator', 'overheating', 'flush'],
    importance:
      'Coolant regulates engine temperature, prevents freezing and boiling, and protects against corrosion inside the radiator, water pump, heater core, and engine passages.',
    doOnTime:
      'Stable operating temperature, protection from corrosion, longer water pump and radiator life, and reliable heater performance in winter.',
    delayEffect:
      'Coolant becomes acidic and loses corrosion inhibitors. This leads to radiator leaks, water pump failure, heater core issues, and in severe cases cracked heads or blown head gaskets — repairs that easily exceed $2,000.',
    scripts: {
      beginner:
        "Your coolant is due for service. Fresh coolant keeps the engine at the right temperature and protects the cooling system from rust and corrosion. We can take care of it today if you'd like.",
      intermediate:
        "I tested the coolant and it's past its service life — the protective additives are depleted. When that happens, corrosion starts attacking the radiator and water pump. A coolant service now prevents much more expensive repairs later.",
      closer:
        "The coolant is overdue and no longer protecting the system. Corrosion is already a risk. A proper coolant exchange is inexpensive insurance against radiator, water pump, or head gasket failure. Let's protect the cooling system while the car is here.",
    },
    objections: [
      {
        objection: "It still looks green / fine to me.",
        response:
          "Color alone doesn't tell the full story. The corrosion inhibitors deplete over time even if it still looks okay. We test the actual protection level — that's the part that matters.",
      },
    ],
    tips: [
      'Use a refractometer or test strips to show the customer the actual protection level.',
      'Mention winter freeze protection and summer boil-over protection.',
    ],
    estimatedTime: '45–75 min',
    averageTicket: '$120–$220',
  },
  {
    id: 'brake-fluid',
    name: 'Brake Fluid Flush',
    category: 'Brakes',
    tags: ['brake fluid', 'flush', 'abs', 'safety', 'moisture'],
    importance:
      'Brake fluid is hygroscopic — it absorbs moisture from the air over time. Moisture lowers the boiling point and causes internal corrosion in ABS modules, calipers, and lines.',
    doOnTime:
      'Firm pedal feel, proper ABS function, protection of expensive ABS components, and maximum stopping power even under hard use.',
    delayEffect:
      'Spongy pedal, longer stopping distances, ABS module failure ($800–$1,500+), and in extreme cases brake fade when the fluid boils under hard braking.',
    scripts: {
      beginner:
        "Your brake fluid is due for a flush. Over time it absorbs moisture which reduces braking performance and can damage ABS components. It's a recommended safety service — would you like us to take care of it?",
      intermediate:
        "I tested the brake fluid and the moisture content is high. That moisture lowers the boiling point and starts corroding the ABS module and calipers from the inside. Flushing it now is much cheaper than replacing those parts later.",
      closer:
        "The brake fluid has absorbed enough moisture that it's compromising both performance and the longevity of the ABS system. This is a pure safety item. We can flush it today and restore the system to proper condition before expensive components are damaged.",
    },
    objections: [
      {
        objection: "I've never flushed brake fluid before and the brakes feel fine.",
        response:
          "That's common — the degradation is gradual so you don't notice until the pedal gets spongy or an ABS light comes on. By then the damage inside the ABS module is often already done. Preventing that is the goal.",
      },
    ],
    tips: [
      'Use a brake fluid tester and show the customer the moisture percentage.',
      'Emphasize ABS module protection — that part is expensive.',
    ],
    estimatedTime: '30–45 min',
    averageTicket: '$90–$160',
  },
  {
    id: 'tire-rotation',
    name: 'Tire Rotation & Inspection',
    category: 'Tires & Alignment',
    tags: ['tires', 'rotation', 'wear', 'alignment', 'safety'],
    importance:
      'Rotating tires equalizes wear patterns so all four tires last as long as possible. It also gives us a chance to inspect for damage, uneven wear, and alignment issues.',
    doOnTime:
      'Maximized tire life, more even traction, better handling, and early detection of alignment or suspension problems before they destroy a set of tires.',
    delayEffect:
      'Uneven wear forces early replacement of tires. Cupping or feathering from neglected rotation or alignment issues can make the vehicle noisy and unsafe, and often voids tire warranties.',
    scripts: {
      beginner:
        "Your tires are due for rotation. Rotating them helps them wear evenly so you get the full life out of the set. We also inspect them while they're off. Want us to take care of it?",
      intermediate:
        "I looked at the tire wear and it's starting to get uneven. Rotating them now will help the remaining tread last longer and keep the car handling predictably. It's one of the best ways to protect your investment in the tires.",
      closer:
        "The tire wear is already becoming uneven. If we don't rotate them, you'll end up replacing tires earlier than necessary. While we have them off we also check for damage and alignment issues that could be eating your tires. Let's protect that investment today.",
    },
    objections: [
      {
        objection: "I'll just wait until I get new tires.",
        response:
          "Waiting actually shortens the life of the tires you already paid for. Rotation is what lets you get the full 40–60k miles most tires are rated for. Doing it now saves money on the next set.",
      },
    ],
    tips: [
      'Always measure and record tread depth at each rotation.',
      'Point out any early signs of alignment issues while the customer is there.',
    ],
    estimatedTime: '20–30 min',
    averageTicket: '$25–$50',
  },
  {
    id: 'wiper-blades',
    name: 'Wiper Blade Replacement',
    category: 'Inspection',
    tags: ['wipers', 'visibility', 'safety', 'rain'],
    importance:
      'Wiper blades are a primary safety item. Streaking, chattering, or torn rubber reduces visibility exactly when you need it most — in rain, snow, or spray.',
    doOnTime:
      'Clear visibility in bad weather, reduced driver stress, and compliance with safety expectations. Fresh blades also protect the windshield from being scratched by damaged rubber.',
    delayEffect:
      'Poor visibility in rain, potential windshield damage from metal frames contacting glass, and increased risk in emergency stops or low-visibility conditions.',
    scripts: {
      beginner:
        "Your wiper blades are worn and starting to streak. Clear visibility is important for safety. We can replace them with a quality set while the car is here.",
      intermediate:
        "I checked the wipers and the rubber is cracked and no longer making full contact. In the next rain you're going to have streaking right in your line of sight. Fresh blades are inexpensive and make a big difference in visibility.",
      closer:
        "These blades are past the point of cleaning the glass properly. The next time you're in a downpour you'll notice it immediately. Replacing them now is cheap insurance for clear vision when it matters.",
    },
    objections: [
      {
        objection: "They still work okay.",
        response:
          "They work until they don't — and that moment is usually in the middle of a storm. Most people only notice how bad they were after they get new ones. It's a five-minute job with a big safety payoff.",
      },
    ],
    tips: [
      'Demonstrate the streaking on the windshield if possible.',
      'Offer beam-style blades for better performance in all weather.',
    ],
    estimatedTime: '5–10 min',
    averageTicket: '$35–$70',
  },
  {
    id: 'battery-test',
    name: 'Battery Test & Service',
    category: 'Battery & Electrical',
    tags: ['battery', 'charging', 'starting', 'electrical'],
    importance:
      'The battery provides the power to start the engine and stabilizes the electrical system. A weak battery can fail without warning and leave the customer stranded.',
    doOnTime:
      'Reliable starting in all weather, protection of sensitive electronics, and early replacement before a no-start situation occurs.',
    delayEffect:
      'Unexpected no-start, especially in cold weather or after the car sits. A failing battery can also damage the alternator by forcing it to work harder.',
    scripts: {
      beginner:
        "We tested the battery and it's showing signs of weakness. Replacing it before it leaves you stranded is the smarter move. Would you like us to install a new one today?",
      intermediate:
        "The battery load test shows it's near the end of its life. These usually fail with no warning — often on a cold morning or when you're in a hurry. We can replace it now and give you peace of mind.",
      closer:
        "This battery is marginal and statistically likely to fail in the next few months. A roadside no-start is inconvenient and sometimes expensive. Replacing it proactively while you're already here is the lowest-stress option.",
    },
    objections: [
      {
        objection: "It still starts fine.",
        response:
          "That's the tricky part with batteries — they work until the day they don't. The test measures reserve capacity, not just whether it can start the car right now. Once the reserve is low, failure is unpredictable.",
      },
    ],
    tips: [
      'Always print or show the battery test results.',
      'Mention cold-weather risk if applicable.',
    ],
    estimatedTime: '15–30 min',
    averageTicket: '$140–$250',
  },
  {
    id: 'fuel-filter',
    name: 'Fuel Filter Replacement',
    category: 'Filters',
    tags: ['fuel', 'filter', 'injection', 'performance'],
    importance:
      'The fuel filter protects the fuel injectors and high-pressure pump from dirt and debris in the fuel. A restricted filter starves the engine of fuel under load.',
    doOnTime:
      'Consistent power under acceleration, protection of expensive injectors and pumps, and better overall drivability.',
    delayEffect:
      'Hesitation, power loss at higher speeds or under load, and potential damage to fuel injectors or the high-pressure fuel pump (very expensive on modern engines).',
    scripts: {
      beginner:
        "Your fuel filter is due for replacement. A clean filter helps the engine get the fuel it needs for full power. We can replace it while the car is here.",
      intermediate:
        "The fuel filter is at the recommended interval. When it starts restricting flow you lose power under load and the fuel pump has to work harder. Replacing it is inexpensive protection for the fuel system.",
      closer:
        "This filter is overdue. Restricted fuel flow is hard on the pump and can cause drivability issues. On modern direct-injection engines the fuel system components are expensive — this is cheap insurance.",
    },
    objections: [
      {
        objection: "I didn't know it had a serviceable filter.",
        response:
          "Many newer cars still have them, and the interval is often overlooked. It's one of those items that prevents much larger problems when maintained.",
      },
    ],
    tips: [
      'Confirm the vehicle actually has a serviceable inline filter (some are in-tank only).',
    ],
    estimatedTime: '20–40 min',
    averageTicket: '$80–$160',
  },
  {
    id: 'differential-fluid',
    name: 'Differential Fluid Service',
    category: 'Fluids',
    tags: ['differential', 'axle', 'gear oil', '4x4', 'rwd'],
    importance:
      'Differential fluid lubricates the gears that transfer power to the wheels. It operates under extreme pressure and heat and breaks down over time, especially on trucks and AWD vehicles.',
    doOnTime:
      'Quiet operation, proper gear protection, and long differential life — critical on trucks, SUVs, and any vehicle that tows or sees hard use.',
    delayEffect:
      'Whining noises, accelerated gear wear, and eventual differential failure. Rebuilds are labor-intensive and expensive.',
    scripts: {
      beginner:
        "Your differential fluid is due for service. Fresh fluid protects the gears that send power to the wheels. We recommend this service at the manufacturer's interval.",
      intermediate:
        "The differential fluid is past the recommended interval. This fluid works under a lot of heat and pressure. Changing it now helps prevent noise and premature wear in an expensive component.",
      closer:
        "Differential fluid is one of the most neglected services we see, and also one of the most important on trucks and AWD vehicles. Once the fluid breaks down, gear wear accelerates fast. Servicing it today is far cheaper than a differential repair.",
    },
    objections: [
      {
        objection: "I've never done that before.",
        response:
          "You're not alone — it's commonly overlooked. But the gears inside are precision components running under high load. Fresh fluid is cheap protection for an expensive part.",
      },
    ],
    tips: [
      'Especially important for trucks, SUVs, and vehicles that tow.',
      'Check for metal particles on the drain plug magnet — good talking point.',
    ],
    estimatedTime: '30–60 min',
    averageTicket: '$120–$220',
  },
  {
    id: 'power-steering',
    name: 'Power Steering Fluid Service',
    category: 'Fluids',
    tags: ['steering', 'fluid', 'pump', 'hydraulic'],
    importance:
      'Power steering fluid lubricates the pump and assists steering effort. Contaminated or low fluid causes noise, hard steering, and premature pump failure.',
    doOnTime:
      'Quiet operation, smooth steering feel, and longer power steering pump and rack life.',
    delayEffect:
      'Whining pump, harder steering effort, and eventual pump or rack failure. Pumps and racks are not cheap to replace.',
    scripts: {
      beginner:
        "Your power steering fluid could use a service. Fresh fluid keeps the pump quiet and the steering smooth. We can take care of it today if you'd like.",
      intermediate:
        "The power steering fluid is dirty. Contaminated fluid makes the pump work harder and shortens its life. A fluid exchange is inexpensive compared to a new pump.",
      closer:
        "Dirty power steering fluid is hard on the pump. Once the pump starts making noise, failure is usually not far behind. Servicing the fluid now is the low-cost way to protect a more expensive component.",
    },
    objections: [
      {
        objection: "It steers fine and isn't noisy.",
        response:
          "That's the best time to service it — before the noise and hard steering start. Once the pump is noisy, the damage is often already done.",
      },
    ],
    tips: [
      'Listen for pump whine during the inspection — easy upsell if present.',
    ],
    estimatedTime: '30–45 min',
    averageTicket: '$90–$150',
  },
];

export const softSkills = {
  dailyChecklist: [
    {
      id: 'walkaround',
      title: 'Vehicle Walk-Around',
      description: 'Perform a thorough multi-point inspection and note every concern before talking to the customer.',
    },
    {
      id: 'listen-first',
      title: 'Listen Before Recommending',
      description: 'Ask what concerns the customer already has. Build recommendations around their priorities.',
    },
    {
      id: 'show-dont-tell',
      title: 'Show the Evidence',
      description: 'Bring the old filter, show the fluid color, display the battery test printout. Visuals close more tickets.',
    },
    {
      id: 'priority-order',
      title: 'Present by Priority',
      description: 'Safety items first, then items that prevent expensive failures, then convenience/comfort items.',
    },
    {
      id: 'ask-for-the-sale',
      title: 'Ask for the Sale',
      description: 'After presenting value, clearly ask: "Would you like us to take care of that today?"',
    },
    {
      id: 'follow-up',
      title: 'Same-Day Follow-Up',
      description: 'Text or call declined recommendations the same day with a short value reminder.',
    },
  ],
  objectionDrills: [
    {
      id: 'too-expensive',
      title: '“It’s too expensive”',
      goodResponse:
        'I understand. The price reflects the quality of parts and the inspection that comes with the service. Skipping it often costs more later. Which part of the recommendation feels highest priority to you right now?',
    },
    {
      id: 'do-it-later',
      title: '“I’ll do it later”',
      goodResponse:
        'A lot of people say that. The issue is that the damage is already starting. While the vehicle is here and everything is accessible, this is the lowest-cost time to handle it. Waiting usually turns a small job into a bigger one.',
    },
    {
      id: 'other-shop',
      title: '“My other shop never mentioned this”',
      goodResponse:
        'Different shops have different inspection standards. We check condition, not just the sticker date. I’d rather tell you about it early than have you come back with a bigger problem.',
    },
    {
      id: 'dont-need-it',
      title: '“I don’t think I need that”',
      goodResponse:
        'Fair enough. Can I show you what we found? Sometimes seeing the actual condition makes the recommendation clearer. If after that it still doesn’t feel necessary, no pressure.',
    },
  ],
  followUpScripts: [
    {
      id: 'same-day-text',
      title: 'Same-Day Text (Declined Item)',
      script:
        'Hi [Name], this is [Your Name] at [Shop]. Just a quick follow-up on the [Service] we talked about. It’s one of the better ways to avoid a bigger repair later. Happy to get you scheduled whenever you’re ready — just reply to this text.',
    },
    {
      id: 'three-day-followup',
      title: '3-Day Follow-Up Call',
      script:
        'Hi [Name], this is [Your Name] from [Shop]. I wanted to check in about the [Service] we recommended. Have you had a chance to think it over? I’m happy to answer any questions or get you on the schedule.',
    },
    {
      id: 'post-service-thankyou',
      title: 'Post-Service Thank You + Review',
      script:
        'Hi [Name], thank you for trusting us with your [Vehicle] today. If everything felt good, a quick Google review helps us a lot. If anything wasn’t perfect, reply to this text and I’ll make it right.',
    },
  ],
  upsellFrameworks: [
    {
      id: 'oil-to-ticket',
      title: 'Turning a $60 Oil Change into a $300–$400 Ticket',
      steps: [
        '1. Always perform a real multi-point inspection — not a checklist you pencil-whip.',
        '2. Prioritize findings: Safety → Prevents expensive failure → Comfort/Convenience.',
        '3. Present no more than 3–4 items at once. Overwhelm kills the sale.',
        '4. Use visuals (old parts, test results, photos).',
        '5. Bundle related items (“While we’re doing the oil, the cabin filter is a 10-minute add”).',
        '6. Ask for the sale on the highest-priority item first.',
        '7. Offer to stage the remaining items for the next visit if budget is tight.',
      ],
    },
    {
      id: 'trust-builder',
      title: 'Building Long-Term Trust (Return Rate)',
      steps: [
        'Never oversell. If it’s not needed, say so — customers remember honesty.',
        'Explain the “why” in plain language, not tech jargon.',
        'Give options when possible (good / better / best).',
        'Follow up on declined items without pressure.',
        'Remember previous conversations and vehicle history.',
      ],
    },
  ],
};
