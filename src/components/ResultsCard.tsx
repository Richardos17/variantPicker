"use client";

import { Scores, Variant, variantInfo } from "@/data/questions";
import Disclaimer from "./Disclaimer";

interface Props {
  scores: Scores;
  onRetake: () => void;
}

function computePercentages(scores: Scores): Record<Variant, number> {
  const total = scores.data + scores.multimedia + scores.systems;
  if (total === 0) return { data: 33, multimedia: 33, systems: 34 };
  return {
    data: Math.round((scores.data / total) * 100),
    multimedia: Math.round((scores.multimedia / total) * 100),
    systems: Math.round((scores.systems / total) * 100),
  };
}

function rankVariants(pct: Record<Variant, number>): Variant[] {
  return (Object.keys(pct) as Variant[]).sort((a, b) => pct[b] - pct[a]);
}

const barColors: Record<Variant, string> = {
  data: "bg-green-500",
  multimedia: "bg-pink-500",
  systems: "bg-amber-500",
};

export default function ResultsCard({ scores, onRetake }: Props) {
  const pct = computePercentages(scores);
  const ranked = rankVariants(pct);
  const top = ranked[0];
  const topInfo = variantInfo[top];

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      <div className={`rounded-2xl border-2 ${topInfo.border} ${topInfo.bg} p-6`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{topInfo.emoji}</span>
          <div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Your top match
            </p>
            <h2 className={`text-3xl font-bold ${topInfo.color}`}>
              {topInfo.label}
            </h2>
          </div>
        </div>
        <p className="text-gray-700 mt-3 text-sm leading-relaxed">
          {topInfo.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topInfo.courses.map((c) => (
            <a
              key={c.code}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${topInfo.bg} ${topInfo.color} border ${topInfo.border} hover:opacity-80 transition-opacity`}
            >
              {c.code} · {c.name} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-gray-700 mb-4">Score breakdown</h3>
        <div className="flex flex-col gap-4">
          {ranked.map((variant, i) => {
            const info = variantInfo[variant];
            return (
              <div key={variant}>
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-medium text-sm ${info.color} flex items-center gap-1`}>
                    {i === 0 && <span className="text-base">🏆</span>}
                    {info.emoji} {info.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-600">
                    {pct[variant]}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className={`${barColors[variant]} h-3 rounded-full transition-all duration-700`}
                    style={{ width: `${pct[variant]}%` }}
                  />
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {info.courses.map((c) => (
                    <a
                      key={c.code}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-gray-600 underline"
                    >
                      {c.code}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Disclaimer />

      <button
        onClick={onRetake}
        className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-600 font-medium hover:border-tudelft hover:text-tudelft transition-colors"
      >
        Retake quiz
      </button>
    </div>
  );
}
