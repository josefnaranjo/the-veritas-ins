"use client";
import React, { createContext, useContext, useState } from "react";

export interface Story {
  id: number;
  snippet: string;
  fullText: string;
  pending?: boolean;
}

interface StoriesContextValue {
  stories: Story[];
  addStory: (fullText: string) => void;
}

const StoriesContext = createContext<StoriesContextValue | undefined>(
  undefined
);

export const StoriesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      snippet:
        "I was asked to alter data in a research study. It didn’t feel right...",
      fullText:
        "I was asked to alter data in a research study. It didn’t feel right, and I spoke up. That experience taught me how vital it is to have spaces like Veritas where integrity matters.",
    },
    {
      id: 2,
      snippet:
        "Our team was under pressure to publish quickly, and corners were cut...",
      fullText:
        "Our team was under pressure to publish quickly, and corners were cut. I wish I had known where to turn. Sharing this now in hopes others feel less alone.",
    },
    {
      id: 3,
      snippet: "During my internship, I witnessed clear favoritism...",
      fullText:
        "During my internship, I witnessed clear favoritism. My complaints were ignored. I’m relieved there's now a platform to voice this.",
    },
  ]);

  const addStory = (fullText: string) => {
    const nextId = stories.length + 1;
    setStories([
      ...stories,
      { id: nextId, snippet: fullText.slice(0, 80) + "...", fullText },
    ]);
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => {
  const ctx = useContext(StoriesContext);
  if (!ctx) throw new Error("useStories must be inside StoriesProvider");
  return ctx;
};
