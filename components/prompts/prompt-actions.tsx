"use client";

import { useState } from "react";
import { useAppState } from "@/components/providers/app-state-provider";
import { buttonClassName } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PromptActions({
  promptId,
  promptBody,
}: {
  promptId: string;
  promptBody: string;
}) {
  const { favoritePromptIds, toggleFavoritePrompt } = useAppState();
  const [copied, setCopied] = useState(false);
  const isFavorite = favoritePromptIds.includes(promptId);

  async function copyPrompt() {
    await navigator.clipboard.writeText(promptBody);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button type="button" onClick={copyPrompt} className={buttonClassName("primary")}>
        {copied ? "Copied" : "Copy prompt"}
      </button>
      <button
        type="button"
        onClick={() => toggleFavoritePrompt(promptId)}
        className={cn(
          buttonClassName("secondary"),
          isFavorite && "border-[var(--accent)] text-[var(--accent)]",
        )}
      >
        {isFavorite ? "Saved to favorites" : "Save prompt"}
      </button>
    </div>
  );
}
