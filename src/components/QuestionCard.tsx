"use client";

import { Question } from "@/data/questions";

interface Props {
  question: Question;
  questionNumber: number;
  total: number;
  onAnswer: (answerIndex: number) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  total,
  onAnswer,
}: Props) {
  const progress = ((questionNumber - 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Question {questionNumber} of {total}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-tudelft h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h2>

      <div className="flex flex-col gap-3">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            className="text-left w-full px-5 py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-700 hover:border-tudelft hover:bg-indigo-50 hover:text-indigo-900 transition-all duration-150 font-medium shadow-sm hover:shadow-md active:scale-[0.99]"
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
