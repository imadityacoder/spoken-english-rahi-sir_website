export const BRAND = {
  name: "The Knowledge Hut",
  shortName: "Knowledge Hut",
  tagline: "Empowering Minds, Ensuring Success",
  promise: "Holistic Coaching for School, Skills & Careers",
  phone: "+91 97090 95854",
  phoneRaw: "+919709095854",
  whatsapp: "919709095854",
  whatsappMessage:
    "Hi The Knowledge Hut, I would like to know more about classes and admissions. Please share the details.",
  address: {
    line1: "Pathar Ki Masjid, Ashok Rajpath Road",
    line2: "New Khajoorbanna, Chaudhary Tola, Tripolia",
    city: "Patna",
    state: "Bihar",
    pincode: "800006",
    full: "Pathar Ki Masjid, Ashok Rajpath Road, New Khajoorbanna, Chaudhary Tola, Tripolia, Patna, Bihar 800006",
  },
  landmarks: [
    "Directly opposite the Electricity Office",
    "Near the local Petrol Pump",
    "Close to Pathar Ki Masjid on Ashok Rajpath",
  ],
  facilities: [
    "Structured classrooms for focused learning",
    "Wheelchair-accessible seating inside the center",
  ],
  hours: "Monday to Saturday · 3:00 PM - 8:30 PM | Sunday · 3:00 PM - 7:00 PM",
  weekdayHours: "Monday to Saturday",
  weekdayTime: "3:00 PM - 8:30 PM",
  sundayHours: "Sunday",
  sundayTime: "3:00 PM - 7:00 PM",
  rating: "4.9",
  reviewCount: 120,
  email: "contact@theknowledgehutpatna.in",
  mapsEmbed:
    "https://www.google.com/maps?q=Pathar+Ki+Masjid,+Ashok+Rajpath+Road,+Tripolia,+Patna,+Bihar+800006&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Pathar+Ki+Masjid+Ashok+Rajpath+Road+Tripolia+Patna+Bihar+800006",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-rahi-sir" },
  { label: "Programs", href: "#courses" },
  { label: "Method", href: "#transformation" },
  { label: "Faculty", href: "#meet-rahi-sir" },
  { label: "Results", href: "#success-stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const COURSES = [
  {
    id: "school-academics",
    title: "School Academics",
    tagline: "Classes 4 to 12",
    description:
      "Comprehensive all-subject coaching for CBSE, ICSE, and BSEB students with board-focused planning, regular practice, and personal attention.",
    duration: "Year-round",
    level: "Class 4-12",
    icon: "BookOpenCheck",
    color: "brand",
    highlights: [
      "CBSE, ICSE & BSEB boards",
      "All-subject academic support",
      "Foundation to senior classes",
      "Result-oriented regular practice",
    ],
  },
  {
    id: "commerce-stream",
    title: "Commerce Stream",
    tagline: "Higher studies",
    description:
      "Specialized tutoring for commerce students who need conceptual clarity, exam readiness, and steady academic guidance.",
    duration: "Flexible batches",
    level: "Senior students",
    icon: "Briefcase",
    color: "confidence",
    highlights: [
      "Commerce subject tutoring",
      "Concept-focused explanations",
      "Exam preparation support",
      "Individual doubt clearing",
    ],
  },
  {
    id: "java-training",
    title: "Java Training",
    tagline: "Coding skills",
    description:
      "Professional Java language training that takes students from programming foundations to structured coding practice.",
    duration: "Module-based",
    level: "Beginner+",
    icon: "MessagesSquare",
    color: "brand",
    highlights: [
      "Programming fundamentals",
      "Object-oriented concepts",
      "Hands-on coding practice",
      "Project-style exercises",
    ],
  },
  {
    id: "python-training",
    title: "Python Training",
    tagline: "Modern programming",
    description:
      "Learn Python with practical examples, logic building, syntax clarity, and guided coding exercises for students and beginners.",
    duration: "Module-based",
    level: "Beginner+",
    icon: "Sparkles",
    color: "confidence",
    highlights: [
      "Python basics and syntax",
      "Logic-building practice",
      "Practical coding tasks",
      "Beginner-friendly approach",
    ],
  },
  {
    id: "cpp-dca",
    title: "C++ & DCA",
    tagline: "Computer applications",
    description:
      "Computer Science and IT training covering C++ plus DCA for students who want practical computer application skills.",
    duration: "Diploma/module",
    level: "Students",
    icon: "CalendarClock",
    color: "brand",
    highlights: [
      "C++ language training",
      "DCA course support",
      "Computer application basics",
      "Practical lab-style learning",
    ],
  },
  {
    id: "spoken-english",
    title: "Spoken English",
    tagline: "Communication skills",
    description:
      "Dedicated spoken English modules to build communication, fluency, confidence, and classroom participation.",
    duration: "Skill module",
    level: "All levels",
    icon: "Mic",
    color: "confidence",
    highlights: [
      "Speaking confidence",
      "Communication practice",
      "Vocabulary building",
      "Student-friendly guidance",
    ],
  },
] as const;

export const PAIN_POINTS = [
  {
    icon: "BookX",
    title: "Board Syllabus Pressure",
    text: "CBSE, ICSE, and BSEB students need steady support across subjects, not last-minute exam panic.",
  },
  {
    icon: "ShieldAlert",
    title: "Weak Foundations",
    text: "Many students move ahead with gaps in basics. The right class rebuilds concepts before marks suffer.",
  },
  {
    icon: "MessageCircleOff",
    title: "No Personal Attention",
    text: "Crowded batches make quiet students invisible. Small classes help teachers notice and correct each learner.",
  },
  {
    icon: "HeartCrack",
    title: "Low Confidence",
    text: "A weaker student often needs encouragement first, then practice. Confidence and performance grow together.",
  },
  {
    icon: "UserX",
    title: "Skill Gap",
    text: "School marks matter, but coding, computer applications, and communication skills are now essential too.",
  },
  {
    icon: "MicOff",
    title: "Communication Hesitation",
    text: "Students who know answers may still struggle to express them clearly in English or classroom discussions.",
  },
] as const;

export const WHY_RAHIR_SIR = [
  {
    icon: "Users",
    title: "Small Class Sizes",
    text: "Focused batches make it easier to track every student, clear doubts, and adjust teaching in real time.",
  },
  {
    icon: "BookOpenCheck",
    title: "CBSE, ICSE & BSEB Support",
    text: "Academic coaching is tailored for all three major boards from Class 4 to Class 12.",
  },
  {
    icon: "Heart",
    title: "Special Attention to Weaker Students",
    text: "Students who need extra support receive patient guidance that builds confidence along with marks.",
  },
  {
    icon: "Sparkles",
    title: "Holistic Education",
    text: "The institute combines school academics, commerce tutoring, coding, DCA, and spoken English under one roof.",
  },
  {
    icon: "MessagesSquare",
    title: "Coding & IT Training",
    text: "Professional training in Java, Python, C++, and DCA helps students build practical computer skills.",
  },
  {
    icon: "Mic",
    title: "Spoken English Modules",
    text: "Communication-focused classes improve student expression, fluency, and classroom confidence.",
  },
  {
    icon: "CalendarClock",
    title: "Evening Study Hours",
    text: "Convenient afternoon and evening timings make it easier for school students to attend after classes.",
  },
  {
    icon: "Star",
    title: "4.9-Star Community Rating",
    text: "Parents and students consistently praise the institute for dedication, teaching quality, and results.",
  },
] as const;

export const TRANSFORMATION_STEPS = [
  {
    step: "01",
    title: "Assess the Student",
    text: "We first understand the student's board, class level, strengths, gaps, and learning pace.",
    icon: "Sprout",
  },
  {
    step: "02",
    title: "Build Strong Basics",
    text: "Core concepts are rebuilt with patient explanations so advanced lessons become easier to absorb.",
    icon: "BookOpenCheck",
  },
  {
    step: "03",
    title: "Practice Consistently",
    text: "Regular classwork, doubt clearing, and revision keep students connected to the syllabus every week.",
    icon: "CalendarCheck",
  },
  {
    step: "04",
    title: "Give Individual Attention",
    text: "Small batches allow teachers to support weaker students and adjust the pace when needed.",
    icon: "Heart",
  },
  {
    step: "05",
    title: "Add Practical Skills",
    text: "Coding, computer applications, and spoken English modules help students grow beyond textbook learning.",
    icon: "MessagesSquare",
  },
  {
    step: "06",
    title: "Improve Results",
    text: "With better concepts, confidence, and practice, students steadily improve academic performance.",
    icon: "TrendingUp",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ankit Kumar",
    role: "Class 10 Student",
    rating: 5,
    text: "The teachers explain every topic patiently. I was weak in basics, but the small batch and regular doubt clearing helped me improve a lot.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Singh",
    role: "Class 12 Commerce",
    rating: 5,
    text: "Commerce concepts became much easier here. The classes are disciplined, and teachers focus on whether each student actually understands.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Rahul Raj",
    role: "Python Student",
    rating: 5,
    text: "I joined for Python and learned step by step from the basics. The coding practice made the language less confusing.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sneha Kumari",
    role: "Spoken English Student",
    rating: 5,
    text: "The spoken English classes helped me speak with more confidence. The environment is supportive and friendly.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Aman Verma",
    role: "Class 8 Student",
    rating: 5,
    text: "Santosh Sir teaches very well and gives attention to everyone. I feel more confident in class now.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Neha Sharma",
    role: "Parent",
    rating: 5,
    text: "The institute maintains a focused learning environment. My child receives proper guidance and regular attention.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const SUCCESS_STORIES = [
  {
    name: "Class 10 Student",
    course: "School Academics",
    before:
      "Struggled with board syllabus pressure and weak foundations across multiple subjects.",
    after:
      "Built better concepts through regular classes, doubt clearing, and structured revision.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tag: "From confused to consistent",
  },
  {
    name: "Commerce Learner",
    course: "Commerce Stream",
    before:
      "Found higher commerce concepts difficult and needed clearer explanations before exams.",
    after:
      "Gained conceptual clarity and improved exam confidence with specialized tutoring.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    tag: "From doubt to clarity",
  },
  {
    name: "Coding Beginner",
    course: "Python Training",
    before:
      "Wanted to learn programming but found syntax and logic building intimidating.",
    after:
      "Started writing programs independently through guided practice and simple explanations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    tag: "From basics to code",
  },
  {
    name: "English Learner",
    course: "Spoken English",
    before:
      "Hesitated while speaking and avoided answering in English during class.",
    after:
      "Built confidence through spoken English practice and a supportive learning environment.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    tag: "From hesitation to expression",
  },
] as const;

export const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    alt: "Structured classroom coaching at The Knowledge Hut",
    category: "Classroom Sessions",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    alt: "Students learning in an interactive coaching class",
    category: "Academic Coaching",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
    alt: "Small group learning at The Knowledge Hut",
    category: "Small Batches",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    alt: "Students participating in skill development class",
    category: "Skill Development",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    alt: "Teacher explaining lessons in class",
    category: "Faculty Guidance",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    alt: "Students working together during a coaching session",
    category: "Student Activities",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    alt: "Teacher mentoring student one-on-one",
    category: "Doubt Clearing",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    alt: "Computer and communication skill workshop",
    category: "IT Training",
    span: "normal",
  },
] as const;

export const FAQS = [
  {
    q: "Which boards and classes do you teach?",
    a: "The Knowledge Hut provides all-subject academic coaching for CBSE, ICSE, and BSEB students from Class 4 to Class 12.",
  },
  {
    q: "Do you provide commerce coaching?",
    a: "Yes. The institute offers specialized higher education tutoring for commerce students with concept clarity, exam support, and regular guidance.",
  },
  {
    q: "Which computer courses are available?",
    a: "Students can join professional training for Java, Python, C++, and DCA (Diploma in Computer Applications).",
  },
  {
    q: "Are spoken English classes available?",
    a: "Yes. Dedicated spoken English modules help students improve communication, fluency, confidence, and classroom participation.",
  },
  {
    q: "Do weaker students get extra attention?",
    a: "Yes. The center maintains small class sizes and leveled learning paths so teachers can give dedicated attention to students who need extra support.",
  },
  {
    q: "What are the class timings?",
    a: "Classes run Monday to Saturday from 3:00 PM to 8:30 PM, and Sunday from 3:00 PM to 7:00 PM.",
  },
] as const;

export const STATS = [
  { label: "Community Rating", value: 4.9, suffix: "", icon: "Star" },
  { label: "Boards Covered", value: 3, suffix: "", icon: "BookOpenCheck" },
  { label: "Classes 4-12", value: 9, suffix: " levels", icon: "CalendarCheck" },
  { label: "Skill Programs", value: 5, suffix: "+", icon: "TrendingUp" },
] as const;
