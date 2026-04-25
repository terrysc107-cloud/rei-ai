"use client";

import { useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";
import type { Quiz } from "@/types/course";

export function QuizRunner({ quiz }: { quiz: Quiz }) {
  const { saveQuizResult, savedQuizResults } = useAppState();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const result = savedQuizResults[quiz.id];

  function submitQuiz() {
    const score = quiz.questions.reduce((total, question) => {
      return total + Number(answers[question.id] === question.answer);
    }, 0);

    saveQuizResult(quiz.id, score, quiz.questions.length);
    setSubmitted(true);
  }

  return (
    <div className="space-y-6">
      {quiz.questions.map((question, index) => (
        <section key={question.id} className="rounded-[28px] border border-[var(--border)] bg-white p-6">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-[var(--ink-muted)]">Question {index + 1}</p>
              <h3 className="mt-2 text-xl font-semibold text-[var(--ink)]">{question.question}</h3>
            </div>

            <div className="grid gap-3">
              {question.options.map((option) => {
                const active = answers[question.id] === option;
                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer rounded-2xl border px-4 py-3 transition ${
                      active
                        ? "border-[var(--accent)] bg-[var(--panel)]"
                        : "border-[var(--border)] bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option}
                      checked={active}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option,
                        }))
                      }
                      className="sr-only"
                    />
                    <span className="text-sm text-[var(--ink-muted)]">{option}</span>
                  </label>
                );
              })}
            </div>

            {submitted ? (
              <p className="rounded-2xl bg-[var(--panel)] px-4 py-3 text-sm leading-6 text-[var(--ink-muted)]">
                {question.explanation}
              </p>
            ) : null}
          </div>
        </section>
      ))}

      <div className="flex flex-wrap items-center gap-4">
        <button type="button" onClick={submitQuiz} className={buttonClassName("primary")}>
          Submit quiz
        </button>
        {result ? (
          <p className="text-sm font-medium text-[var(--ink-muted)]">
            Best saved score: {result.score}/{result.total}
          </p>
        ) : null}
      </div>
    </div>
  );
}
