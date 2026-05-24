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
        text: "Program a Raspberry Pi Pico to follow a line using IR sensors — writing C code that runs directly on the hardware with no OS underneath",
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
        text: "Calculus — I enjoyed derivatives, integrals, and working with continuously changing quantities",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
      {
        text: "Probability & Statistics — distributions, hypothesis testing, and drawing conclusions from data",
        scores: { data: 3, multimedia: 1, systems: 0 },
      },
      {
        text: "Reasoning & Logic — Boolean algebra, proofs, and abstract discrete structures",
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
        text: "Big data frameworks like Apache Spark and Flink (tools that split massive datasets across many computers, processing billions of rows in minutes)",
        scores: { data: 3, multimedia: 0, systems: 1 },
      },
      {
        text: "Deep learning for image classification and object detection",
        scores: { data: 1, multimedia: 3, systems: 0 },
      },
      {
        text: "FPGAs (reprogrammable hardware chips) and circuit design using VHDL (a language that describes circuits the way code describes software)",
        scores: { data: 0, multimedia: 0, systems: 3 },
      },
    ],
  },
  {
    id: 6,
    text: "What kind of bug would you actually enjoy hunting down?",
    answers: [
      {
        text: "A race condition or deadlock — when two parts of a program fight over the same resource and it silently freezes or crashes",
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
        text: "Wiring up a microcontroller (a tiny programmable chip) or programming a physical robot",
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
        text: "A real-time operating system (RTOS — software that keeps tasks running on strict timing schedules) on a microcontroller",
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
        text: "A reinforcement learning agent (trained purely by reward and penalty — no rules given, just play millions of games and improve) that teaches itself to master a strategy game",
        scores: { data: 3, multimedia: 0, systems: 0 },
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
        text: "Loved it — I enjoy continuous mathematics and want to apply it deeper (think filters, transforms, frequencies)",
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
        text: "My evolutionary algorithm (an AI method inspired by natural selection — survival of the fittest, but for code) beats humans at a strategy game",
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
  {
    id: 13,
    text: "Which analysis task sounds most interesting to you?",
    answers: [
      {
        text: "Decomposing a giant matrix of user ratings using SVD (a technique that uncovers hidden factors — e.g. 'this person likes dark comedies') to predict what films someone will enjoy",
        scores: { data: 3, multimedia: 0, systems: 0 },
      },
      {
        text: "Analysing a spectrogram (a visual map of sound over time showing which frequencies were active) to automatically detect what words were spoken",
        scores: { data: 0, multimedia: 3, systems: 1 },
      },
      {
        text: "Tracing memory allocations and process scheduling across a running OS to find the root cause of a crash or timing violation",
        scores: { data: 0, multimedia: 0, systems: 3 },
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
      "Start with 1D digital signals — sampling, filtering, and Fourier analysis in Python (CSE2220). Extend those ideas to 2D images: convolution filters, edge detection, colour spaces, and a quarter-long image processing project (CSE2225). Finish with full multimedia AI: automatic speech recognition, text classification, and multimodal video indexing (CSE2230). Heavy applied math throughout.",
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
      "Design combinational and sequential digital circuits in VHDL/Verilog, finishing with a real circuit on an FPGA chip (CSE2420). Then program a line-following Raspberry Pi Pico robot in C using a real-time operating system (CSE2425). Finally, study OS internals: processes, scheduling, virtual memory, concurrency, security, and virtualisation (CSE2430).",
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
      "Process datasets too large for one machine using Apache Spark and Flink (CSE2520). Then mine patterns with SVD, clustering, anomaly detection, and recommender systems (CSE2525). Finish with neural networks, evolutionary computing, and reinforcement learning (CSE2530). The most popular variant (~60% of students) with paths toward both Data Engineering and AI/Data Science.",
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
