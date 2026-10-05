// ─────────────────────────────────────────────────────────────
// Ubuntu Wellness — Holistic Diabetes Self Care Empowerment Program
// All program content sourced from the WFPB Ubuntu Manual v1.0 and
// the accessible large-print edition (WFPB manual for IAN).
// ─────────────────────────────────────────────────────────────

export const PROGRAM = {
  name: "Ubuntu 21-Day Diabetes Reversal Program",
  fullName: "Holistic Diabetes Self Care Empowerment Program",
  tagline: "Through plant-based alchemy you will experience a reset at a cellular level.",
  preparedBy: "The Ubuntu Team",
  hashtag: "#HEALINGAFRICACHALLENGE",
  website: "https://ubuntuwellness.com/diabetes-reversal/",
  appUrl: "www.ubuntuwellness.app",
  pledgeUrl: "www.ubuntuwellness.com/pledge",
  contact: {
    address: "99 Kloof Street, Gardens, Cape Town",
    email: "support@ubuntuwellness.com",
    phone: "+27 21 422 5140",
    nutritionist: {
      name: "Dawn Macfarlane",
      role: "Program Nutritionist",
      email: "dawn@ubuntuwellness.com",
      phone: "+27 21 422 5140",
    },
    npo: "Ubuntu Trust NPO Reg: 089-081",
  },
  stats: [
    { value: "463M", label: "people worldwide live with diabetes (IDF)" },
    { value: "19M+", label: "people affected in the African region" },
    { value: "47M", label: "projected in Africa by 2045" },
    { value: "24.5%", label: "of all South African deaths are lifestyle-disease related" },
  ],
  quote: {
    text: "Everything in food works together to create health or disease.",
    author: "Prof. T. Colin Campbell",
  },
} as const;

export const WHAT_IS_DIABETES = {
  intro:
    "Diabetes is a disease condition that occurs when either the pancreas does not produce enough insulin (type 1 diabetes), or when the body cannot effectively use the insulin it produces, which is known as type 2 diabetes (World Health Organization, 2016).",
  diagnosis:
    "Diabetes is routinely diagnosed by testing an individual's blood for glucose (sugar) after an overnight fast or after performing a glucose tolerance test under the same conditions.",
  hba1c:
    "Glycated haemoglobin (HbA1c) is the current gold standard test to monitor long-term blood sugar control in people already diagnosed with diabetes. The American Diabetes Association (ADA) recommends that many patients aim for an A1C of less than 7% — your health care provider may suggest a different goal.",
  a1cReference: [
    { a1c: "6%", average: "7.0 mmol/L / 126 mg/dL" },
    { a1c: "7%", average: "8.6 mmol/L / 154 mg/dL" },
    { a1c: "8%", average: "10.2 mmol/L / 183 mg/dL" },
    { a1c: "9%", average: "11.8 mmol/L / 212 mg/dL" },
    { a1c: "10%", average: "13.4 mmol/L / 240 mg/dL" },
  ],
};

export const WFPB_BENEFITS = [
  { icon: "🌿", text: "Reduced inflammation" },
  { icon: "🩸", text: "Lower risk of type 2 diabetes" },
  { icon: "🫘", text: "Improved kidney function" },
  { icon: "❤️", text: "Reduced risk of heart disease" },
  { icon: "📉", text: "Lower cholesterol" },
  { icon: "🧠", text: "Reduced risk of cognitive impairment & dementia" },
  { icon: "🦠", text: "Improved gut health" },
  { icon: "🛡️", text: "Reduced risk of certain cancers" },
  { icon: "🦴", text: "Reduced arthritis pain" },
  { icon: "⚖️", text: "Weight loss" },
];

export const SITE_STATS_BENEFITS = [
  "Reduce risk of mortality from obesity",
  "Lowers cholesterol",
  "Reduce risk of heart disease",
  "Lowers chances of certain cancers",
  "Manages diabetes by reducing A1C levels",
  "Metabolism benefits",
];

// ── The 10-Step Program Checklist ────────────────────────────
export const CHECKLIST_10_STEPS = [
  {
    title: "Get your bloodwork done",
    detail:
      "Ensure bloodwork is taken prior to starting the program. Review the results with a doctor to ensure that your health concerns are medically addressed.",
  },
  {
    title: "Complete the 3-day pre-prep",
    detail:
      "Complete the 3-day pre-prep tasks, which may include specific meal planning, pantry organisation, or other necessary preparations.",
  },
  {
    title: "Schedule a support call",
    detail:
      "Schedule a call with the call-in support team to discuss any questions or concerns before starting the program, and plan to check in after the first week to discuss any challenges or issues that have arisen.",
  },
  {
    title: "Review program materials",
    detail:
      "Review all necessary program materials, including the program book, and plug in to the WhatsApp group support for daily contact.",
  },
  {
    title: "Read & study daily",
    detail:
      "Read the program book and spend time each day reviewing relevant articles, with a focus on understanding the program's goals and guidelines.",
  },
  {
    title: "Record your journey",
    detail:
      "Record a WhatsApp vlog to document your progress and share your experience with others, and consider sharing it with the call-in support team or other participants to foster accountability and community.",
  },
  {
    title: "Meet your doctor",
    detail:
      "Schedule an appointment with a doctor to be medically inducted into the Ubuntu 21-day program.",
  },
  {
    title: "Begin Day 1 & join Zoom sessions",
    detail:
      "Begin the program on day 1, following the guidelines and instructions provided in the book, and attend the weekly Zoom meetings on day 1, 8 and 15 to stay engaged with the program and connect with other participants.",
  },
  {
    title: "Day 9 blood test",
    detail:
      "On day 9, draw blood for tests and schedule a second appointment with the doctor to review the results and discuss any concerns.",
  },
  {
    title: "Day 20 final review",
    detail:
      "Repeat step 9 on day 20 to schedule the final session with the doctor, and use the time between appointments to continue following the program and tracking your progress.",
  },
];

// ── Important program dates ──────────────────────────────────
export const KEY_DATES = [
  { day: 1, label: "Dr Session + Training" },
  { day: 8, label: "Weekly Zoom check-in" },
  { day: 9, label: "Blood draw for tests" },
  { day: 11, label: "Dr Session 2 + Training Session 2" },
  { day: 15, label: "Weekly Zoom check-in" },
  { day: 20, label: "Final blood draw" },
  { day: 21, label: "Program Exit + Maintenance Info" },
];

// ── The Ubuntu Wellness Protocol (healing elements) ──────────
export const PROTOCOL = [
  {
    icon: "💧",
    title: "Water",
    quote:
      "Water is healing. It is the element that washes away all impurities and replenishes, restores and revitalises both body and mind, structuring cellular activity and transforming disease.",
  },
  {
    icon: "🥬",
    title: "Vegetables",
    quote:
      "Minerals present in vegetables catalyse all the enzymatic reactions in the body and organ structures, promoting full system recovery while decreasing inflammation and enhancing immune function and wellbeing.",
  },
  {
    icon: "🌿",
    title: "Herbs",
    quote:
      "Herbal medicines harness the healing powers of plants and roots on the body, with whole herbs and spices added as culinary medicine greatly supporting immune health — for example, nature's miracle in a cup of tea.",
  },
  {
    icon: "🫘",
    title: "Legumes",
    quote:
      "The full spectrum proteins from legumes can help regulate sugar, water and other aspects of metabolism and the immune system, as well as promote proper growth of the body and brain.",
  },
  {
    icon: "🌱",
    title: "Sprouts",
    quote:
      "Sprouts are the highest life-force biogenic super food packed with predigested proteins, nucleic acids, B12, vitamins and minerals, whose processes are thereby amplified, alkalising and regenerating the entire human organism.",
  },
  {
    icon: "🍊",
    title: "Fruits",
    quote:
      "Whole fruits structure water through direct sunlight into vitamin enriched super-food, cleansing and energising biological systems and overall health, fighting inflammation, normalising blood pressure and A1C levels.",
  },
  {
    icon: "🌾",
    title: "Grains",
    quote:
      "Unrefined whole grains lower cholesterol and reduce risk of organ disease, are low in fat, and are packed with fibre, energy (starch), protein, and minerals needed to support our nutritional needs.",
  },
];

export const UBUNTU_CIRCLE =
  "A beautiful circle appeared inside of the crystal. I believe this circle is Ubuntu itself. It signifies that everything is in perfect harmony. Only when everything is in harmony and accord, will all the beings attain true happiness. — Dr. Masaru Emoto";

// ── Balanced Lifestyle pillars ───────────────────────────────
export const BALANCED_LIFESTYLE = [
  {
    icon: "💚",
    title: "Unconditional Love",
    points: [
      "Self-love in managing diabetes",
      "Importance of self-love in managing diabetes",
      "Guided meditation for self-acceptance",
    ],
  },
  {
    icon: "🏃",
    title: "Unlimited Movement",
    points: [
      "The role of exercise in diabetes management",
      "Benefits of regular physical activity",
      "Recommended exercise for diabetics",
    ],
  },
  {
    icon: "🥗",
    title: "Nutrition",
    points: [
      "Adopt a balanced whole-food plant-based diet",
      "Healthy oil-free cooking methods",
      "Meal planning & food selection",
    ],
  },
  {
    icon: "🤝",
    title: "Unity",
    points: [
      "Building your own support base",
      "How to connect with others in similar situations",
      "Becoming an advocate for diabetes awareness",
    ],
  },
  {
    icon: "💊",
    title: "Treat & Adhere",
    points: [
      "Overview of common diabetes medications",
      "Tips for adherence and managing side effects",
      "Always follow your doctor's guidance",
    ],
  },
];

// ── W-E-L-L-N-E-S-S Principles ───────────────────────────────
export const WELLNESS_PRINCIPLES = [
  { letter: "W", word: "Wise", text: "Make informed and wise decisions about your health and lifestyle to manage diabetes effectively." },
  { letter: "E", word: "Embrace", text: "Cultivate self-love and compassion, embracing the journey towards better health with kindness." },
  { letter: "L", word: "Longevity", text: "Prioritise practices and habits that support long-term health and vitality." },
  { letter: "L", word: "Learning", text: "Commit to continuous learning about diabetes management, nutrition, and holistic wellness." },
  { letter: "N", word: "Nutrition", text: "Adopt a balanced and nutritious diet tailored to manage and potentially reverse diabetes." },
  { letter: "E", word: "Emotional", text: "Maintain emotional well-being through stress management techniques and emotional support." },
  { letter: "S", word: "Sustain", text: "Incorporate regular physical activity into daily routines to support overall health and diabetes management." },
  { letter: "S", word: "Support", text: "Build a supportive community, connecting with others and advocating for diabetes awareness and education." },
];

// ── SELF-CARE acronym ────────────────────────────────────────
export const SELFCARE_ACRONYM = [
  { letter: "S", text: "Spirit, mental, emotions and physical balance. The true SELF must prevail to ensure the care happens." },
  { letter: "E", text: "Engage others. Medical team, family, join peer groups." },
  { letter: "L", text: "Longevity." },
  { letter: "F", text: "Focus on sustained health and wellness (nutrition, exercise, weight control and stress management)." },
  { letter: "C", text: "Courage (transcend limitations)." },
  { letter: "A", text: "Accountability (full responsibility)." },
  { letter: "R", text: "Resilience: ability to respond to changing circumstances." },
  { letter: "E", text: "Endurance to persevere." },
];

// ── Diabetes 8 Self-Care Model ───────────────────────────────
export const DIABETES8_MODEL = [
  { letter: "D", behaviour: "Deal with Fear" },
  { letter: "I", behaviour: "Information Plan" },
  { letter: "A", behaviour: "Action Plan" },
  { letter: "B", behaviour: "Behaviour Change" },
  { letter: "E", behaviour: "Eat Healthy" },
  { letter: "T", behaviour: "Test" },
  { letter: "E", behaviour: "Exercise" },
  { letter: "S", behaviour: "Support" },
];

export const DIABETES8_DIMENSIONS = ["Spiritual", "Mental", "Physical", "Emotional"];
export const DIABETES8_INNER = ["Adapt", "Learn", "Hope", "Active", "Smart", "Wise", "Treat", "Eat"];

// ── Emotional Guidance Scale ─────────────────────────────────
export const EMOTIONAL_GUIDANCE = {
  intro:
    "Being diagnosed with diabetes activates fear — negativity, confusion, frustration, exhaustion, bewilderment, blame, guilt, posing many questions. Use this scale (based on Abraham Hicks' Emotional Guidance Scale) to notice where you are and gently climb upward.",
  upward: [
    { level: 1, emotion: "Joy / Knowledge / Empowerment / Freedom / Love / Appreciation" },
    { level: 2, emotion: "Passion" },
    { level: 3, emotion: "Enthusiasm" },
    { level: 4, emotion: "Positive Expectation / Belief" },
    { level: 5, emotion: "Optimism" },
    { level: 6, emotion: "Hopefulness" },
    { level: 7, emotion: "Contentment" },
  ],
  downward: [
    { level: 8, emotion: "Boredom" },
    { level: 9, emotion: "Pessimism" },
    { level: 10, emotion: "Frustration / Irritation / Impatience" },
    { level: 11, emotion: "Overwhelment" },
    { level: 12, emotion: "Disappointment" },
    { level: 13, emotion: "Doubt" },
    { level: 14, emotion: "Worry" },
    { level: 15, emotion: "Blame" },
    { level: 16, emotion: "Discouragement" },
    { level: 17, emotion: "Anger" },
    { level: 18, emotion: "Revenge" },
    { level: 19, emotion: "Hatred / Rage" },
    { level: 20, emotion: "Jealousy" },
    { level: 21, emotion: "Insecurity / Guilt / Unworthiness" },
    { level: 22, emotion: "Fear / Grief / Depression / Powerlessness / Victim" },
  ],
};

// ── Approach to learning ─────────────────────────────────────
export const LEARNING_APPROACH = [
  {
    title: "Self Learning",
    text: "Self-learning is the method of gathering, processing, and retaining knowledge without the help of another person. Any knowledge you get outside of a formal educational setting, such as through self-study or experience, is self-driven learning.",
  },
  {
    title: "Self-Empowerment",
    text: "Self-empowerment means making a conscious decision to take charge of your destiny. It involves making positive choices, taking action to advance, and being confident in your ability to make and execute decisions. Self-empowered people understand their strengths and weaknesses and are motivated to learn and achieve.",
  },
  {
    title: "Self-Care",
    text: "The WHO's definition of self-care is the ability of individuals, families and communities to promote their own health, prevent disease, maintain health, and to cope with illness and disability with or without the support of a health worker.",
  },
  {
    title: "Self-Efficacy",
    text: "Self-efficacy refers to an individual's belief in his or her capacity to execute behaviors necessary to produce specific performance attainments. The construct of self-efficacy has been applied to behaviours as diverse as diabetes self-care.",
  },
];

export const STAGES_OF_LEARNING = [
  { stage: 1, title: "Unconscious Incompetence", text: "You don't know about diabetes." },
  { stage: 2, title: "Conscious Incompetence", text: "Aware of diabetes but full of doubts." },
  { stage: 3, title: "Conscious Competence", text: "Practice diabetes self-care with effort." },
  { stage: 4, title: "Unconscious Competence", text: "Diabetes self-care becomes automatic." },
];

// ── Root cause & pillars ─────────────────────────────────────
export const ROOT_CAUSES = [
  "Excess calories leading to weight gain",
  "Excess fat around the belly and organs",
  "Excess glucose/sugar in the blood",
  "Excess fat in the belly",
  "Inflammation and oxidative stress",
  "Stress",
  "Lack of sleep",
  "Lack of physical activity",
];

export const INSULIN_RESISTANCE =
  "Insulin resistance is when cells in your muscles, fat, and liver don't respond well to insulin and can't easily take up glucose from your blood. As a result, your pancreas makes more insulin to help glucose enter your cells.";

export const FOUR_PILLARS = [
  { icon: "🥗", title: "Eat Healthy" },
  { icon: "🏃", title: "Exercise" },
  { icon: "🩺", title: "Treat & Test" },
  { icon: "🛡️", title: "Prevention" },
];

export const COMPLICATIONS = [
  { icon: "🦵", title: "Amputation" },
  { icon: "👁️", title: "Blindness", detail: "Diabetes can damage the retina (diabetic retinopathy)." },
  { icon: "❤️", title: "Heart Attack", detail: "A damaged heart compared to a healthy heart." },
  { icon: "🫘", title: "Kidney Dialysis", detail: "Kidney disease may progress to dialysis." },
  { icon: "🌀", title: "Diabetic Coma", detail: "Dangerously high blood sugar meter readings." },
  { icon: "🧠", title: "Stroke" },
];

export const COMPLICATIONS_ADVICE =
  "If you have type 2 diabetes, your immediate goal should be to get and/or keep your blood sugar levels under control through nutrition, exercise, weight control and, if prescribed, medications. The long-term goal is to stay as healthy as possible to prevent or delay diabetes complications.";

// ── Why WFPB: nutrition Q&A ──────────────────────────────────
export const NUTRITION_QA = [
  {
    q: "Where will I get my protein? Don't I need animal products for protein?",
    a: "Human beings (both adults and children) don't need animal products or cow's milk for protein or survival. You get sufficient protein on a whole food, plant-based diet.",
    sources: ["Quinoa", "Sprouts", "Nuts & Seeds", "Oats", "Legumes", "Green Peas"],
  },
  {
    q: "What about Calcium?",
    a: "Cow's milk is not the best source of calcium as only 30% of the calcium is absorbed. WFPB calcium sources include:",
    sources: ["Spinach", "Chickpeas", "Broccoli", "Sweet Potato", "Almonds", "Oranges"],
  },
  {
    q: "What about Iron?",
    a: "The common misconception is that a WFPB diet will make you anaemic. This is false — there are great natural plant-based sources of iron:",
    sources: ["Spinach", "Beetroot", "Apricot", "Dark Chocolate", "Pumpkin Seeds", "Broccoli"],
  },
];

export const NUTRIENT_TABLE = [
  {
    nutrient: "Calcium",
    fruits: "Apricots, Blackberries, Figs (dried), Oranges",
    grains: "Bread (Wholewheat)",
    legumes: "Almonds, Brazil nuts, Chickpeas, Kidney beans, Walnuts",
    vegetables: "Asparagus, Broccoli, Fennel, Kale, Spinach, Watercress",
  },
  {
    nutrient: "Carbohydrates",
    fruits: "Apple, Peach, Pear, Pineapple, Watermelon",
    grains: "Barley, Bread (Wholewheat), Buckwheat, Millet, Oats, Pasta (Wholewheat), Quinoa, Rice (brown), Rye, Sorghum",
    legumes: "Beans, Chickpeas, Lentils, Peas",
    vegetables: "Asparagus, Baby marrow, Beetroot, Broccoli, Brussels sprouts, Carrot, Cauliflower, Cucumber, Eggplant",
  },
  {
    nutrient: "Fats",
    fruits: "Coconut, Olives, Avocado",
    grains: "—",
    legumes: "Almonds, Beans, Chia seed, Chickpeas, Flaxseed, Lentils, Macadamias",
    vegetables: "—",
  },
  {
    nutrient: "Fibre",
    fruits: "Apples, Bananas, Mango, Oranges, Raspberries, Strawberries",
    grains: "Bread (Wholewheat), Barley, Rice (brown, wild), Rye",
    legumes: "Almonds, Brazil Nuts, Chickpeas, Kidney beans, Walnuts",
    vegetables: "Asparagus, Broccoli, Fennel, Kale, Spinach, Watercress",
  },
  {
    nutrient: "Iron",
    fruits: "Apple, Peach, Pear, Pineapple, Watermelon",
    grains: "Bread (Wholewheat), Muesli, Oats, Spaghetti (Wholewheat)",
    legumes: "Chickpeas, Mung beans, Red kidney beans, Soya beans, Baked beans",
    vegetables: "Kale, Lentil, Peas, Parsley, Spinach, Spring onions, Swiss chard, Watercress",
  },
  {
    nutrient: "Protein",
    fruits: "Avocado, Apricot, Banana, Dates, Figs, Grapefruit",
    grains: "Oats, Oatmeal, Muesli, Quinoa, Brown rice, Spaghetti",
    legumes: "Almonds, Flaxseed, Lentils, Macadamias, Peanuts, Pistachios",
    vegetables: "Artichoke, Asparagus, Broccoli, Brussels sprouts, Cauliflower, Green beans, Mustard greens",
  },
];

export const NUTRIENT_FUNCTIONS = [
  {
    name: "Carbohydrates",
    functions: ["Providing the body with energy", "Encouraging the growth of beneficial bacteria"],
    good: "Complex carbs: fresh vegetables — peppers, zucchini, carrots, tomato, broccoli, beetroot, spring onions",
    avoid: "Simple carbs: soda, chips, sweets, white bread, white pasta, cookies",
  },
  {
    name: "Proteins",
    functions: [
      "Growth and maintenance of muscle and other body tissues",
      "Helps the body maintain a healthy immune system",
    ],
    good: "Plant-based proteins: legumes, quinoa, sprouts, nuts & seeds, oats, green peas",
    avoid: null,
  },
  {
    name: "Fats",
    functions: [
      "Provide energy to the body and especially to the brain",
      "Transport and help absorb fat-soluble vitamins",
    ],
    good: "Plant-based fats: avocado, coconut, olives, nuts & seeds",
    avoid: null,
  },
];

// ── Sprouting guide ──────────────────────────────────────────
export const SPROUTING = {
  intro:
    "Sprouting is the natural process by which seeds germinate and put out shoots. Sprouting is easy — you should be an expert in no time. The best sprouts will definitely be the ones you grow in a glass jar on the windowsill. You CAN sprout in any container as long as you follow the three basic steps:",
  steps: ["Soak seeds overnight", "Rinse twice daily", "Enjoy when ready"],
  benefits: [
    "Sprouting increases the levels of minerals, vitamins and protein levels in the body.",
    "Sprouts contain high levels of living enzymes which boost the metabolic process.",
    "They enhance the absorption of nutrients.",
    "Provides anti-oxidants, increases the level of chlorophyll which helps to detoxify the body by boosting oxygen levels.",
    "Supports immune health.",
    "Sprouts are alkalizing and reduce acidity in the body.",
  ],
};

// ── Healthy eating guidelines ────────────────────────────────
export const TEN_GUIDELINES = [
  "Practice kindness and compassion towards yourself and your food.",
  "Eat food that is anatomically suitable.",
  "Eat whole rather than refined or processed food (no white rice, white flour, white sugar or oil).",
  "Eat fresh and unprocessed food, avoid junk food.",
  "Eat mindfully, engaging all your five senses.",
  "Eat local, seasonal food.",
  "Choose organic over chemically-grown food.",
  "Always separate fruit from your main meal — preferably eat fruit on an empty stomach.",
  "Always read the ingredients to identify if it is real food or a 'food-like substance'.",
  "Wash food before preparing.",
];

export const EATING_GUIDELINES = [
  { word: "PLAN", text: "Use your menu, shopping list, read food labels and budget accordingly." },
  { word: "COLOUR", text: "'Eat a Rainbow Every Day' — increase vibrant plant-based whole foods and eliminate all animal products." },
  { word: "CRUNCH", text: "Eat fresh whole plant foods eliminating processed and refined foods." },
  { word: "HOME", text: "Include large amounts of fresh living food." },
  { word: "COOKING", text: "Healthy methods without oil." },
  { word: "SUGAR & SALT", text: "Reduce intake." },
];

export const WFPB_PRINCIPLE =
  "Natural foods lead to health, processed foods lead to disease. In today's age we eat refined and processed foods that bear no resemblance to the natural substances that they come from. Our bodies are always working to heal and to remain healthy. Most of the diseases that we face today — like obesity, diabetes, hypertension, heart disease, cancers, infertility, thyroid, kidney disease — are lifestyle diseases.";

// ── 7-Day Meal Plans (3 interchangeable parts) ───────────────
export type DayPlan = {
  day: string;
  breakfast: string[];
  lunch: string[];
  dinner: string[];
};

export const MEAL_PLAN_PART1: DayPlan[] = [
  {
    day: "Monday",
    breakfast: ["Rainbow Salad", "Barley/Oats Porridge", "Avo & Mushroom Toast"],
    lunch: ["Beetroot Salad", "Chickpea Salad", "Roasted Peppers & Sweet Potato Soup"],
    dinner: ["Collard Greens", "Veggie Burgers", "Mixed Vegetable Curry Wraps"],
  },
  {
    day: "Tuesday",
    breakfast: ["Banana Overnight Oats", "Fresh Fruits", "Sweet Mealie Meal Porridge"],
    lunch: ["Barley Salad with Roasted Butternut", "Vegetable Cottage Pie", "Xoli's Dahl Soup"],
    dinner: ["Crunchy Chickpea Salad", "Brown Rice with Baby Marrows & Tomato", "Ratatouille"],
  },
  {
    day: "Wednesday",
    breakfast: ["Avo and Mushroom Toast", "Fresh Fruits", "Baked Oatmeal Slices"],
    lunch: ["Chickpea Salad", "Xoli's Cabbage and Potato Stew", "Pumpkin with Tomato Stew"],
    dinner: ["Beetroot Salad", "Cabbage Steaks", "Dahl and Aubergine"],
  },
  {
    day: "Thursday",
    breakfast: ["Sorghum Porridge", "Barley/Oats Porridge", "Sweet Potato Toast", "Rainbow Fruit Salad"],
    lunch: ["Xoli's Carrot Salad", "Butternut and Apple Soup", "Dahl with Aubergine"],
    dinner: ["Xoli's Green Salad", "Vegetable Moussaka", "Stewed Beans"],
  },
  {
    day: "Friday",
    breakfast: ["Sweet Potatoes & Berries", "Isijini-Pumpkin Porridge", "Avo and Mushroom Toast"],
    lunch: ["Beetroot Salad", "Butterbean Curry Wraps", "Carrot with Sweet Potato"],
    dinner: ["Xoli's Carrot Salad", "Peas and Potato Stew", "Ratatouille Stew"],
  },
  {
    day: "Saturday",
    breakfast: ["Sweet Potato Toast", "Fresh Fruits", "Avo and Mushroom Toast"],
    lunch: ["Xoli's Green Salad", "Roasted Cauliflower", "Xoli's Dahl Soup"],
    dinner: ["Beetroot Salad", "Lentil Cottage Pie", "Cauliflower and Chickpea Curry"],
  },
  {
    day: "Sunday",
    breakfast: ["Sweet Mealie Meal Porridge", "Baked Oatmeal Slices", "Fresh Fruits"],
    lunch: ["Xoli's Carrot Salad", "Lentil Cottage Pie"],
    dinner: ["Umngqusho", "Chickpea with Potato", "Vegetable Moussaka"],
  },
];

export const MEAL_PLAN_PART2: DayPlan[] = [
  {
    day: "Monday",
    breakfast: ["Avo and Mushroom Toast", "Fresh Fruits", "Baked Oatmeal Squares"],
    lunch: ["Buckwheat Salad with Roasted Butternut", "Vegetable Cottage Pie", "Xoli's Dahl Soup"],
    dinner: ["Beetroot Salad", "Chickpea Sauce", "Roasted Peppers & Sweet Potato Soup"],
  },
  {
    day: "Tuesday",
    breakfast: ["Banana Overnight Oats", "Fresh Fruits", "Sweet Mealie Meal Porridge"],
    lunch: ["Xoli's Israeli Salad", "Veggie Burgers", "Mixed Vegetable Curry Wraps"],
    dinner: ["Crunchy Chickpea Salad", "Garlic Butter Beans with Rice", "Ratatouille"],
  },
  {
    day: "Wednesday",
    breakfast: ["Rainbow Salad", "Buckwheat Porridge", "Avo & Mushroom Toast"],
    lunch: ["Xoli's Carrot Salad", "Butternut and Apple Soup", "Dahl with Aubergine"],
    dinner: ["Beetroot Salad", "Cabbage Steaks", "Dahl and Aubergine"],
  },
  {
    day: "Thursday",
    breakfast: ["Buckwheat Porridge", "Sweet Potato Toast", "Rainbow Immune Boosting Salad"],
    lunch: ["Crunchy Chickpea Salad", "Xoli's Cabbage and Potato Stew", "Pumpkin with Tomato Sauce"],
    dinner: ["Xoli's Green Salad", "Vegetable Moussaka", "Stewed Beans"],
  },
  {
    day: "Friday",
    breakfast: ["Sweet Mealie Meal Porridge", "Baked Oatmeal Squares", "Fresh Fruits"],
    lunch: ["Xoli's Carrot Salad", "Whole Lentil Sauce", "Pumpkin with Tomato Sauce"],
    dinner: ["Xoli's Israeli Salad", "Garden Peas and Irish Potato", "Ratatouille"],
  },
  {
    day: "Saturday",
    breakfast: ["Sweet Potato Toast", "Fresh Fruits", "Avo and Mushroom Toast"],
    lunch: ["Xoli's Green Salad", "Roasted Butternut on Fresh Greens", "Xoli's Dahl Soup"],
    dinner: ["Beetroot Salad", "Fava Bean Full", "Carrot with Sweet Potato"],
  },
  {
    day: "Sunday",
    breakfast: ["Baked Berry Oatmeal", "Isijini-Pumpkin Porridge", "Avo and Mushroom Toast"],
    lunch: ["Beetroot Salad", "Lentil Cottage Pie", "Cauliflower and Chickpea Curry"],
    dinner: ["Buckwheat Salad with Roasted Butternut & Beetroot", "Chickpea with Potato", "Vegetable Moussaka"],
  },
];

export const MEAL_PLAN_PART3: DayPlan[] = [
  {
    day: "Monday",
    breakfast: ["Avo and Mushroom Toast", "Fresh Fruits", "Baked Oatmeal Squares"],
    lunch: ["Buckwheat Salad with Roasted Butternut", "Vegetable Cottage Pie", "Xoli's Dahl Soup"],
    dinner: ["Beetroot Salad", "Cabbage Steaks", "Dahl and Aubergine"],
  },
  {
    day: "Tuesday",
    breakfast: ["Banana Overnight Oats", "Fresh Fruits", "Sweet Mealie Meal Porridge"],
    lunch: ["Xoli's Israeli Salad", "Veggie Burgers", "Mixed Vegetable Curry Wraps"],
    dinner: ["Xoli's Green Salad", "Vegetable Moussaka", "Stewed Beans"],
  },
  {
    day: "Wednesday",
    breakfast: ["Rainbow Salad", "Buckwheat Porridge", "Avo & Mushroom Toast"],
    lunch: ["Xoli's Carrot Salad", "Butternut and Apple Soup", "Dahl with Aubergine"],
    dinner: ["Beetroot Salad", "Chickpea Sauce", "Roasted Peppers & Sweet Potato Soup"],
  },
  {
    day: "Thursday",
    breakfast: ["Baked Berry Oatmeal", "Isijini-Pumpkin Porridge", "Avo and Mushroom Toast"],
    lunch: ["Crunchy Chickpea Salad", "Xoli's Cabbage and Potato Stew", "Pumpkin with Tomato Sauce"],
    dinner: ["Crunchy Chickpea Salad", "Garlic Butter Beans with Rice", "Ratatouille"],
  },
  {
    day: "Friday",
    breakfast: ["Sweet Mealie Meal Porridge", "Baked Oatmeal Squares", "Fresh Fruits"],
    lunch: ["Xoli's Carrot Salad", "Whole Lentil Sauce", "Pumpkin with Tomato Sauce"],
    dinner: ["Buckwheat Salad with Roasted Butternut & Beetroot", "Chickpea with Potato", "Vegetable Moussaka"],
  },
  {
    day: "Saturday",
    breakfast: ["Sweet Potato Toast", "Fresh Fruits", "Avo and Mushroom Toast"],
    lunch: ["Xoli's Green Salad", "Roasted Butternut on Fresh Greens", "Xoli's Dahl Soup"],
    dinner: ["Beetroot Salad", "Fava Bean Full", "Carrot with Sweet Potato"],
  },
  {
    day: "Sunday",
    breakfast: ["Buckwheat Porridge", "Sweet Potato Toast", "Rainbow Immune Boosting Salad"],
    lunch: ["Beetroot Salad", "Lentil Cottage Pie", "Cauliflower and Chickpea Curry"],
    dinner: ["Xoli's Israeli Salad", "Garden Peas and Irish Potato", "Ratatouille"],
  },
];

export const MEAL_PLANS = [
  { id: 1, name: "Week 1 · Meal Plan Part 1", days: MEAL_PLAN_PART1, image: "/images/manual-mealplan1.png" },
  { id: 2, name: "Week 2 · Meal Plan Part 2", days: MEAL_PLAN_PART2, image: "/images/manual-mealplan2.png" },
  { id: 3, name: "Week 3 · Meal Plan Part 3", days: MEAL_PLAN_PART3, image: "/images/manual-mealplan3.png" },
];

// ── Recipes ──────────────────────────────────────────────────
export const DETOX_SMOOTHIE = {
  title: "Heavy Metal Detox Smoothie",
  tagline: "Prepare one each day of the program",
  benefits: [
    "Boosts your energy levels",
    "Improves brain function and focus",
    "Improves breathing issues and draws heavy metals out",
  ],
  ingredients: [
    "1 punnet blueberries",
    "1 bunch coriander",
    "2 bananas",
    "½ pineapple",
    "Juice of 1 orange",
  ],
  note: "Add more greens or berries according to your feel on the day.",
};

// ── Stress relief ────────────────────────────────────────────
export const STRESS_RELIEF = {
  intro:
    "Effective stress relief can boost your immunity by jumpstarting your T-cell production, which is an essential part of your immune system that fights viruses and other infections.",
  body:
    "Physical relaxation has mental benefits, allowing you to reduce your stress and anxiety, improve your sleep quality, and even lower your blood pressure. Effective stress management techniques are crucial to leading a healthy lifestyle.",
  techniques: ["Therapy", "Motivation", "Relax", "Music", "Hobby"],
};

// ── Shopping list ────────────────────────────────────────────
export const SHOPPING_LIST: { category: string; icon: string; items: string[] }[] = [
  {
    category: "Fruits",
    icon: "🍎",
    items: [
      "Lemon", "Mango", "Apples", "Strawberries (optional)", "Blueberries (optional)",
      "Pineapple", "Oranges", "Bananas green & unripe", "Bananas almost ripe",
      "Papino", "Nectarines", "Pears", "Pitted dates (optional)",
    ],
  },
  {
    category: "Vegetables",
    icon: "🥕",
    items: [
      "Red onions", "Onions", "Tomatoes", "Green peppers", "Red peppers", "Yellow peppers",
      "Carrots", "Baby marrows", "Sweet potatoes", "Butternut", "Beetroot", "Lettuce",
      "Spinach", "Rocket", "Avocado", "Cherry tomatoes", "Cucumber", "Celery", "Cabbage",
      "Pumpkin", "Purple cabbage", "Aubergines", "Green peas", "Cauliflower", "Leeks",
      "Potatoes", "Baby potatoes", "Mushrooms", "Green beans", "Spring onions",
    ],
  },
  {
    category: "Herbs & Spices",
    icon: "🌿",
    items: [
      "Salt and pepper", "Fresh parsley", "Mint", "Sweet basil", "Rosemary", "Coriander",
      "Thyme", "Oregano", "Garlic", "Ginger", "Vegetable stock", "Curry powder",
      "Turmeric", "Cumin", "Paprika", "Chilli", "Cinnamon", "Fresh nutmeg", "Cayenne pepper",
    ],
  },
  {
    category: "Legumes",
    icon: "🫘",
    items: [
      "Chickpeas", "Dahl or lentils", "Split lentils", "Red lentils",
      "Red beans", "Butter beans",
    ],
  },
  {
    category: "Pantry",
    icon: "🥫",
    items: [
      "Barley", "Brown rice", "Rolled oats", "Diabetic friendly bread", "Mielie meal",
      "Eureka mills unbleached flour", "Sorghum", "Samp",
    ],
  },
  {
    category: "Others",
    icon: "🛒",
    items: ["Olives", "Oil-free soup stock"],
  },
];

// ── Mission & resources ──────────────────────────────────────
export const MISSION = {
  text: "Our mission is to empower you with diabetes self-care management skills necessary to improve your quality of life.",
  udrp:
    "The Ubuntu Diabetes Reversal Program (UDRP) is a 21-day intervention & recipe book designed to provide you with the education, resources and inspiration to make your plant-based journey easier and more enduring. A whole food, plant-based diet is clinically proven to benefit overall body health and promote weight loss. Significant evidence also supports this lifestyle's ability to prevent chronic diseases, including heart disease, type 2 diabetes and some forms of cancer.",
  outcomes: [
    "Linkage between wellness and healthy plant-based eating.",
    "Healthy plant-based eating, including types of food, cooking and nutrition.",
    "Meal planning & food selection.",
  ],
};

export const RESOURCES = [
  { label: "Why Be Vegan", url: "https://ubuntuwellness.com/why-be-vegan/" },
  { label: "Plant-Based Resources", url: "https://ubuntuwellness.com/plant-based-resources/" },
  { label: "Plant-Based Movies", url: "https://ubuntuwellness.com/movies" },
  { label: "Take the Pledge", url: "https://ubuntuwellness.com/pledge" },
  { label: "Diabetes Reversal Project", url: "https://ubuntuwellness.com/diabetes-reversal/" },
];

export const TRAINING_NOTE =
  "Research confirms that a 100% Whole Food Plant-Based Diet is the most healthy lifestyle choice. This program promotes healthy oil-free cooking with no animal products to increase physical, intellectual, social and environmental wellness.";

// ── Glucose log helpers ──────────────────────────────────────
export const GLUCOSE_SLOTS = [
  { id: "fasting", label: "Fasting Glucose" },
  { id: "before-breakfast", label: "Before breakfast" },
  { id: "after-breakfast", label: "2 hours after breakfast" },
  { id: "before-lunch", label: "Before lunch" },
  { id: "after-lunch", label: "2 hours after lunch" },
  { id: "before-dinner", label: "Before dinner" },
  { id: "after-dinner", label: "2 hours after dinner" },
  { id: "before-bed", label: "Before bed" },
] as const;

export const GLUCOSE_NOTES = [
  "Work with your health care provider to determine your blood sugar goals.",
  "Your blood sugar levels vary throughout the day. Self-checking your blood sugar every day shows you how you are doing at a moment in time.",
  "An A1C test shows your blood sugar average for the past 3 months.",
];
