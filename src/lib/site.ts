export const BRAND = {
  name: "Spoken English by Rahi Sir",
  shortName: "Rahi Sir",
  tagline: "From Hesitation to Confidence",
  promise: "Stop Hesitating. Start Speaking.",
  phone: "+91 90153 41661",
  phoneRaw: "+919015341661",
  whatsapp: "919015341661",
  whatsappMessage:
    "Hi Rahi Sir, I would like to book a Free Trial Class for Spoken English. Please share the details.",
  address: {
    line1: "Patthar Ki Masjid, Opposite Milan Studio",
    line2: "Tripolia, Ashok Rajpath",
    city: "Patna",
    state: "Bihar",
    pincode: "800006",
    full: "Patthar Ki Masjid, Opposite Milan Studio, Tripolia, Ashok Rajpath, Patna, Bihar 800006",
  },
  hours: "Monday to Saturday · 8:00 AM – 8:00 PM",
  rating: "5.0",
  reviewCount: 247,
  email: "contact@spokenenglishbyrahisir.in",
  mapsEmbed:
    "https://www.google.com/maps?q=Patthar+Ki+Masjid,+Ashok+Rajpath,+Patna,+Bihar+800006&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Patthar+Ki+Masjid+Ashok+Rajpath+Patna+Bihar+800006",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Rahi Sir", href: "#why-rahi-sir" },
  { label: "Courses", href: "#courses" },
  { label: "Journey", href: "#transformation" },
  { label: "Mentor", href: "#meet-rahi-sir" },
  { label: "Stories", href: "#success-stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const COURSES = [
  {
    id: "foundation",
    title: "Foundation Spoken English",
    tagline: "Build your base",
    description:
      "Perfect for beginners and Hindi-medium students. Learn sounds, vocabulary, sentence structure and everyday phrases that get you speaking from day one.",
    duration: "3 Months",
    level: "Beginner",
    icon: "Sprout",
    color: "brand",
    highlights: [
      "Phonetics & pronunciation",
      "Daily-use vocabulary",
      "Sentence formation",
      "Basic conversation drills",
    ],
  },
  {
    id: "grammar-mastery",
    title: "Grammar Mastery Program",
    tagline: "Speak without fear",
    description:
      "A structured journey through tenses, modifiers and sentence patterns so grammar becomes an unconscious tool — not a barrier that freezes you mid-sentence.",
    duration: "2.5 Months",
    level: "Beginner → Intermediate",
    icon: "BookOpenCheck",
    color: "brand",
    highlights: [
      "All 12 tenses, demystified",
      "Common error correction",
      "Spoken grammar drills",
      "Sentence rewriting practice",
    ],
  },
  {
    id: "advanced-communication",
    title: "Advanced Communication Skills",
    tagline: "Speak with impact",
    description:
      "For students who can speak but want to sound polished. Master tone, voice modulation, storytelling and professional English for any setting.",
    duration: "2 Months",
    level: "Intermediate → Advanced",
    icon: "MessagesSquare",
    color: "confidence",
    highlights: [
      "Voice & tone modulation",
      "Storytelling frameworks",
      "Group discussions",
      "Professional English",
    ],
  },
  {
    id: "interview-prep",
    title: "Interview Preparation Program",
    tagline: "Crack any interview",
    description:
      "Mock interviews, HR rounds, technical Q&A and body language coaching. Walk into any interview room with steady confidence and the right words.",
    duration: "1.5 Months",
    level: "Job Seekers",
    icon: "Briefcase",
    color: "confidence",
    highlights: [
      "Mock HR & technical rounds",
      "Resume + LinkedIn review",
      "Body language coaching",
      "Common interview Q&A bank",
    ],
  },
  {
    id: "personality-dev",
    title: "Personality Development Training",
    tagline: "Become unforgettable",
    description:
      "Confidence, body language, etiquette and presence. Become the kind of person who walks into a room and is remembered — for the right reasons.",
    duration: "2 Months",
    level: "All Levels",
    icon: "Sparkles",
    color: "brand",
    highlights: [
      "Confidence & posture",
      "Etiquette & grooming",
      "Public presence training",
      "Mindset & self-image",
    ],
  },
  {
    id: "public-speaking",
    title: "Public Speaking Sessions",
    tagline: "Own the stage",
    description:
      "Stage fear ends here. Structured speaking practice in front of live groups, with instant feedback that turns anxiety into adrenaline-fuelled clarity.",
    duration: "1 Month",
    level: "All Levels",
    icon: "Mic",
    color: "confidence",
    highlights: [
      "Weekly stage practice",
      "Impromptu speaking drills",
      "Speech structuring",
      "Audience engagement",
    ],
  },
] as const;

export const PAIN_POINTS = [
  {
    icon: "ShieldAlert",
    title: "Fear of Making Mistakes",
    text: "You know the words but freeze before speaking — worried people will laugh at your grammar.",
  },
  {
    icon: "HeartCrack",
    title: "Lack of Confidence",
    text: "Even simple introductions feel impossible. Your thoughts are clear, your voice simply won't cooperate.",
  },
  {
    icon: "BookX",
    title: "Grammar Confusion",
    text: "Tenses, articles, prepositions — rules jumble up in your head and stall every sentence halfway out.",
  },
  {
    icon: "MessageCircleOff",
    title: "No Speaking Practice",
    text: "You read and write English, but no real environment to actually speak in — so fluency never builds.",
  },
  {
    icon: "MicOff",
    title: "Stage Fear",
    text: "Standing in front of even 5 people makes your heart race, voice tremble and mind go completely blank.",
  },
  {
    icon: "UserX",
    title: "Interview Hesitation",
    text: "Dream job on the line, but the thought of an English interview makes you want to skip the opportunity entirely.",
  },
] as const;

export const WHY_RAHIR_SIR = [
  {
    icon: "Mic",
    title: "Daily Speaking Practice",
    text: "Every single class includes speaking drills. You don't just learn English — you speak it, daily, until it becomes natural.",
  },
  {
    icon: "Heart",
    title: "Confidence Building Sessions",
    text: "Dedicated mindset work that targets the fear underneath the hesitation. We rebuild the speaker before we polish the language.",
  },
  {
    icon: "BookOpenCheck",
    title: "Grammar Foundation",
    text: "Simplified, story-based grammar that finally makes sense. No more memorising rules — you understand why each one works.",
  },
  {
    icon: "Briefcase",
    title: "Interview Training",
    text: "Real mock interviews with industry-style questions and instant feedback. You walk in prepared, not panicking.",
  },
  {
    icon: "Sparkles",
    title: "Personality Development",
    text: "Beyond language — posture, presence, etiquette, mindset. We shape the kind of communicator people remember.",
  },
  {
    icon: "Users",
    title: "Small Group Interaction",
    text: "Batches capped at small sizes so every student gets attention, speaking time and personalised correction.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible Batch Timing",
    text: "Morning, afternoon and evening batches. Students, job-seekers and working professionals all find a slot that fits.",
  },
  {
    icon: "MessagesSquare",
    title: "Real-Life Communication Practice",
    text: "Roleplays, debates, group discussions and real-world scenarios — so classroom English survives in the real world.",
  },
] as const;

export const TRANSFORMATION_STEPS = [
  {
    step: "01",
    title: "Understand Basics",
    text: "We start at zero — sounds, common words, simple sentences. No assumption of prior knowledge, ever.",
    icon: "Sprout",
  },
  {
    step: "02",
    title: "Learn Grammar",
    text: "Tenses, sentence structure and common patterns — taught through stories, not rules you forget tomorrow.",
    icon: "BookOpenCheck",
  },
  {
    step: "03",
    title: "Daily Speaking Practice",
    text: "From day one, you speak. Every class. Until the words stop feeling foreign and start feeling like yours.",
    icon: "Mic",
  },
  {
    step: "04",
    title: "Confidence Building",
    text: "We dismantle the fear — stage drills, mindset work and a safe space where mistakes are celebrated, not punished.",
    icon: "Heart",
  },
  {
    step: "05",
    title: "Interview Training",
    text: "Mock interviews, HR rounds, body language. You walk into any interview room with steady, trained confidence.",
    icon: "Briefcase",
  },
  {
    step: "06",
    title: "Fluent Communication",
    text: "You don't just speak English. You communicate — clearly, confidently, and with a presence that people remember.",
    icon: "Sparkles",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Priya Kumari",
    role: "Patna University Student",
    rating: 5,
    text: "I joined Rahi Sir's class unable to introduce myself in English. Three months later, I gave a presentation in front of my entire class — and got applause. That moment changed how I see myself forever.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Aman Raj",
    role: "SSC Aspirant",
    rating: 5,
    text: "The interview training here is unmatched. Sir personally took 12 mock interviews with me. When the real SSC interview happened, I felt like I'd already done it ten times. Cleared it in first attempt.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Verma",
    role: "Working Professional",
    rating: 5,
    text: "I'm a Hindi-medium graduate working in a corporate office. English used to terrify me in meetings. After Rahi Sir's advanced communication batch, I now lead those meetings. That's the transformation.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rohit Anand",
    role: "Banking Aspirant",
    rating: 5,
    text: "Grammar was always my weakness. Rahi Sir explained tenses in a way that finally clicked — using stories and examples I still remember. The fear of speaking wrong English is completely gone now.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Anjali Singh",
    role: "BPSC Aspirant",
    rating: 5,
    text: "Personality development sessions here are something else. I came in shy and quiet. I left with the confidence to speak in interviews, group discussions and even public events. Forever grateful to Sir.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Vikash Kumar",
    role: "Railway Aspirant",
    rating: 5,
    text: "The daily speaking practice is what makes this place different. You don't just memorise — you actually speak every single day. That's why results are real here, not promised. Highly recommended.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const SUCCESS_STORIES = [
  {
    name: "Priya K.",
    course: "Foundation Spoken English",
    before:
      "Couldn't introduce herself in English. Skipped viva rounds. Stayed silent in college discussions.",
    after:
      "Delivered a presentation in front of 60 classmates. Won a college debate. Now mentors juniors.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tag: "From silence to spotlight",
  },
  {
    name: "Aman R.",
    course: "Interview Preparation",
    before:
      "Failed two interviews due to English hesitation. Considered dropping out of competition prep.",
    after:
      "Cleared SSC interview in first attempt. Now posted in a central government department.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    tag: "From rejected to recruited",
  },
  {
    name: "Sneha V.",
    course: "Advanced Communication",
    before:
      "Hindi-medium graduate. Stayed silent in office meetings. Avoided client calls.",
    after:
      "Leads weekly team meetings. Handles client presentations. Promoted in 6 months.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    tag: "From invisible to indispensable",
  },
  {
    name: "Rohit A.",
    course: "Grammar Mastery",
    before:
      "Could read English but froze when speaking. Stage fear stopped him from participating anywhere.",
    after:
      "Hosted the academy's annual event. Speaks fluently in interviews and group discussions.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    tag: "From frozen to fluent",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    alt: "Classroom session at Spoken English by Rahi Sir",
    category: "Classroom Sessions",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    alt: "Students participating in interactive English class",
    category: "Interactive Learning",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    alt: "Group discussion practice at Rahi Sir's academy",
    category: "Speaking Practice",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    alt: "Student activities during communication workshop",
    category: "Student Activities",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    alt: "Public speaking practice on stage",
    category: "Speaking Practice",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    alt: "Annual communication event at the academy",
    category: "Events",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    alt: "Teacher mentoring student one-on-one",
    category: "Interactive Learning",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    alt: "Workshop session with Rahi Sir",
    category: "Classroom Sessions",
    span: "normal",
  },
] as const;

export const FAQS = [
  {
    q: "Do I need basic English knowledge to join?",
    a: "Not at all. Our Foundation Spoken English batch is designed for absolute beginners — including students who have only studied in Hindi medium. We start with sounds, basic vocabulary and simple sentence formation. Many of our most successful students started from zero.",
  },
  {
    q: "Can Hindi medium students join?",
    a: "Yes — this is one of our core strengths. A large portion of our students come from Hindi-medium backgrounds. Rahi Sir personally understands the transition challenges and has built the curriculum specifically to bridge that gap with patience, bilingual support and structured practice.",
  },
  {
    q: "Are trial classes available?",
    a: "Absolutely. Your first trial class is completely free. You'll experience a real session, meet Rahi Sir, see the teaching style, and only then decide if it's the right fit for you. There's zero pressure to enrol after the trial.",
  },
  {
    q: "Are there flexible timings?",
    a: "Yes. We run morning, afternoon and evening batches — Monday to Saturday, 8 AM to 8 PM. Whether you're a college student, a working professional or a competitive exam aspirant, we have a slot that fits your schedule.",
  },
  {
    q: "Will interview preparation be included?",
    a: "Yes. Interview preparation is integrated into our Interview Preparation Program and Advanced Communication courses. It includes mock HR interviews, technical question practice, body language coaching and resume review — everything you need to walk into any interview with confidence.",
  },
  {
    q: "How long does it take to become fluent?",
    a: "Fluency depends on your starting level and daily practice. Most beginners see noticeable improvement in 3 months, become comfortable speakers in 6 months, and achieve professional-level fluency in 9–12 months. The key is consistency — and our daily speaking practice makes that natural.",
  },
] as const;

export const STATS = [
  { label: "Rating on Google", value: 5, suffix: ".0", icon: "Star" },
  { label: "Students Mentored", value: 1200, suffix: "+", icon: "Users" },
  { label: "Years of Teaching", value: 8, suffix: "+", icon: "CalendarCheck" },
  { label: "Interview Success Rate", value: 85, suffix: "%", icon: "TrendingUp" },
] as const;
