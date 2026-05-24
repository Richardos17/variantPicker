export type Variant = "data" | "multimedia" | "systems";

export interface Scores {
  data: number;
  multimedia: number;
  systems: number;
}

export interface Answer {
  text: string;
  scores: Scores;
}

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Which mini-project sounds most exciting to you?",
    answers: [
      {
        text: "Build a robot that follows a line using sensors and real-time control",
        scores: { data: 0, multimedia: 1, systems: 3 },
      },
      {
        text: "Train a model to discover hidden patterns in a massive dataset",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Build software that recognises speech or identifies objects in images",
        scores: { data: 1, multimedia: 3, systems: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "Which Year 1 math topic did you enjoy most?",
    answers: [
      {
        text: "Calculus and signal analysis — Fourier transforms, integrals, frequency domains",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
      {
        text: "Statistics and probability — distributions, hypothesis testing, inference",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Discrete math and logic — Boolean algebra, circuits, automata",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
    ],
  },
  {
    id: 3,
    text: "How do you feel about programming very close to hardware?",
    answers: [
      {
        text: "Love it — I want to know exactly what the machine is doing at the bit level",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "It's fine, but I'm more interested in what the software does",
        scores: { data: 1, multimedia: 1, systems: 1 },
      },
      {
        text: "I prefer to work at higher abstraction levels — algorithms and models",
        scores: { data: 2, multimedia: 2, systems: 0 },
      },
    ],
  },
  {
    id: 4,
    text: "Which career path sounds most appealing in 5 years?",
    answers: [
      {
        text: "Machine learning engineer or data scientist at a tech company",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Embedded software or hardware engineer working on physical products",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "Computer vision or audio/multimedia AI researcher or engineer",
        scores: { data: 1, multimedia: 3, systems: 0 },
      },
      {
        text: "Platform or infrastructure engineer building scalable data pipelines",
        scores: { data: 3, multimedia: 0, systems: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Which technology excites you most?",
    answers: [
      {
        text: "Distributed computing frameworks like Hadoop and Spark",
        scores: { data: 3, multimedia: 0, systems: 1 },
      },
      {
        text: "Deep learning for image classification and object detection",
        scores: { data: 1, multimedia: 3, systems: 0 },
      },
      {
        text: "FPGAs and digital circuit design using VHDL",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
    ],
  },
  {
    id: 6,
    text: "What kind of bug would you actually enjoy hunting down?",
    answers: [
      {
        text: "A race condition or deadlock in a multi-threaded OS kernel",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "A model that learns the wrong pattern from biased training data",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "An audio filter that introduces unwanted artefacts in the output signal",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "How do you prefer to spend a lab session?",
    answers: [
      {
        text: "Wiring up a microcontroller or programming a physical robot",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "Running experiments on large datasets and visualising results",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Processing audio samples or tuning a computer vision pipeline",
        scores: { data: 0, multimedia: 3, systems: 0 },
      },
    ],
  },
  {
    id: 8,
    text: "You have a week to build something impressive. What do you make?",
    answers: [
      {
        text: "A real-time operating system that schedules tasks on a microcontroller",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "A recommendation engine trained on user behaviour data",
        scores: { data: 3, multimedia: 0, systems: 0 },
      },
      {
        text: "An app that identifies songs from audio clips (like Shazam)",
        scores: { data: 0, multimedia: 3, systems: 0 },
      },
      {
        text: "A search engine that finds images by text description",
        scores: { data: 1, multimedia: 3, systems: 0 },
      },
    ],
  },
  {
    id: 9,
    text: "Which real-world problem would you most want to tackle?",
    answers: [
      {
        text: "Autonomous vehicle perception — detecting pedestrians and road signs in real time",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
      {
        text: "Fraud detection — finding anomalies in millions of financial transactions",
        scores: { data: 3, multimedia: 0, systems: 0 },
      },
      {
        text: "Reliable low-latency control systems for medical or aerospace devices",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
    ],
  },
  {
    id: 10,
    text: "Which MSc specialisation sounds most like you?",
    answers: [
      {
        text: "Embedded Systems — designing reliable hardware-software systems",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "Data Science & AI — advanced machine learning and intelligent systems",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Computer Science (broad) — algorithms, distributed systems, security",
        scores: { data: 2, multimedia: 1, systems: 2 },
      },
    ],
  },
  {
    id: 11,
    text: "What is your honest take on Calculus from Year 1?",
    answers: [
      {
        text: "Loved it — I want even more signal analysis and mathematical depth",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
      {
        text: "It was fine, but I'm more excited about applying maths than studying it",
        scores: { data: 2, multimedia: 1, systems: 1 },
      },
      {
        text: "Not my favourite — I prefer discrete topics, logic, and systems thinking",
        scores: { data: 1, multimedia: 0, systems: 3 },
      },
    ],
  },
  {
    id: 12,
    text: "Which achievement would feel most satisfying?",
    answers: [
      {
        text: "My robot navigates a maze perfectly on the first real run",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
      {
        text: "My evolutionary algorithm beats humans at a strategy game",
        scores: { data: 3, multimedia: 0, systems: 0 },
      },
      {
        text: "My system identifies the correct song from a 5-second clip",
        scores: { data: 0, multimedia: 3, systems: 0 },
      },
      {
        text: "My data pipeline processes 1 billion records in under a minute",
        scores: { data: 3, multimedia: 0, systems: 1 },
      },
    ],
  },
];

export const variantInfo: Record<
  Variant,
  {
    label: string;
    color: string;
    bg: string;
    border: string;
    courses: { code: string; name: string; url: string }[];
    description: string;
    emoji: string;
  }
> = {
  multimedia: {
    label: "Multimedia",
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-400",
    emoji: "🎵",
    description:
      "You'll master signal & image processing and build intelligent systems that see, hear, and understand media. Expect heavy applied math (Fourier, filtering), computer vision assignments like licence-plate recognition, and multimedia AI for speech and video.",
    courses: [
      {
        code: "CSE2220",
        name: "Signal Processing",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14263",
      },
      {
        code: "CSE2225",
        name: "Image Processing",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14264",
      },
      {
        code: "CSE2230",
        name: "Multimedia Analysis",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14265",
      },
    ],
  },
  systems: {
    label: "Systems",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-400",
    emoji: "🤖",
    description:
      "You'll go deep into hardware-software interaction — designing digital circuits in VHDL, programming robots in C, and building operating system components from scratch. Great prep for embedded, OS, and computer architecture careers.",
    courses: [
      {
        code: "CSE2420",
        name: "Digital Systems",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14268",
      },
      {
        code: "CSE2425",
        name: "Embedded Software",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14269",
      },
      {
        code: "CSE2430",
        name: "Operating Systems",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14270",
      },
    ],
  },
  data: {
    label: "Data",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-500",
    emoji: "📊",
    description:
      "You'll tackle large-scale data challenges — from distributed Spark pipelines to neural networks and evolutionary algorithms. Two sub-tracks let you lean towards Data Engineering or AI/Data Science, making this the most flexible variant.",
    courses: [
      {
        code: "CSE2520",
        name: "Big Data Processing",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14272",
      },
      {
        code: "CSE2525",
        name: "Data Mining",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14273",
      },
      {
        code: "CSE2530",
        name: "Computational Intelligence",
        url: "https://studiegids.tudelft.nl/opleidingen/study-guide/educations/13603#/details/14274",
      },
    ],
  },
};
