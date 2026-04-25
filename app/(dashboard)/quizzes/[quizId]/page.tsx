import { notFound } from "next/navigation";
import { QuizRunner } from "@/components/quizzes/quiz-runner";
import { PageIntro } from "@/components/ui/page-intro";
import { getQuizById, getTrackBySlug } from "@/lib/data/course-data";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const quiz = getQuizById(quizId);

  if (!quiz) {
    notFound();
  }

  const track = getTrackBySlug(quiz.relatedTrack);

  return (
    <div className="space-y-10">
      <PageIntro
        eyebrow="Quiz"
        title={quiz.title}
        description={
          track
            ? `Checkpoint quiz for the ${track.title} track.`
            : "Checkpoint quiz for your current learning path."
        }
      />
      <QuizRunner quiz={quiz} />
    </div>
  );
}
