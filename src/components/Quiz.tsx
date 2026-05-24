"use client";

import { useState } from "react";
import { questions, Scores } from "@/data/questions";
import QuestionCard from "./QuestionCard";
import ResultsCard from "./ResultsCard";
import Disclaimer from "./Disclaimer";

type Phase = "intro" | "quiz" | "results";

const emptyScores = (): Scores => ({ data: 0, multimedia: 0, systems: 0 });

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<Scores>(emptyScores());

  function handleAnswer(answerIndex: number) {
    const q = questions[currentQ];
    const a = q.answers[answerIndex];
    const next: Scores = {
      data: scores.data + a.scores.data,
      multimedia: scores.multimedia + a.scores.multimedia,
      systems: scores.systems + a.scores.systems,
    };
    setScores(next);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setPhase("results");
    }
  }

  function handleRetake() {
    setPhase("intro");
    setCurrentQ(0);
    setScores(emptyScores());
  }

  if (phase === "results") {
    return <ResultsCard scores={scores} onRetake={handleRetake} />;
  }

  if (phase === "quiz") {
    return (
      <QuestionCard
        question={questions[currentQ]}
        questionNumber={currentQ + 1}
        total={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6 text-center">
      <div>
        <p className="text-sm font-semibold text-tudelft uppercase tracking-widest mb-2">
          TU Delft · CSE Year 2
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Which variant is for you?
        </h1>
        <p className="text-gray-500 text-lg">
          Answer {questions.length} quick questions about your interests,
          working style, and career goals — and find out whether{" "}
          <span className="text-green-600 font-semibold">Data</span>,{" "}
          <span className="text-pink-600 font-semibold">Multimedia</span>, or{" "}
          <span className="text-amber-600 font-semibold">Systems</span> is your
          best match.
        </p>
      </div>

      <div className="flex justify-center gap-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          Data
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-pink-500 inline-block" />
          Multimedia
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          Systems
        </div>
      </div>

      <Disclaimer />

      <button
        onClick={() => setPhase("quiz")}
        className="bg-tudelft text-white font-semibold py-4 px-8 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-indigo-200 text-lg"
      >
        Start quiz →
      </button>

      <p className="text-xs text-gray-400">
        Takes about 2 minutes · No data stored
      </p>
    </div>
  );
}
