"use client";
import React, { createContext, useContext, useState } from "react";

export interface Story {
  id: number;
  title?: string;
  snippet: string;
  fullText: string;
  email?: string;
  anonymous?: boolean;
  pending?: boolean; // e.g., waiting review
  createdAt: string;
}

export interface AddStoryPayload {
  fullText: string;
  title?: string;
  email?: string;
  anonymous?: boolean;
}

interface StoriesContextValue {
  stories: Story[];
  addStory: (payload: AddStoryPayload) => void;
}

const StoriesContext = createContext<StoriesContextValue | undefined>(
  undefined
);

const now = () => new Date().toISOString();

export const StoriesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      title: "Pressure to Publish",
      snippet:
        "Our team was under pressure to publish quickly, and corners were cut...",
      fullText:
        "Our team was under pressure to publish quickly, and corners were cut. I wish I had known where to turn. Sharing this now in hopes others feel less alone.",
      anonymous: false,
      pending: false,
      createdAt: now(),
    },
    {
      id: 2,
      title: "Favoritism Ignored",
      snippet: "During my internship, I witnessed clear favoritism...",
      fullText:
        "During my internship, I witnessed clear favoritism. My complaints were ignored. I’m relieved there's now a platform to voice this.",
      anonymous: true,
      pending: false,
      createdAt: now(),
    },
    {
      id: 3,
      title: "Asked to Fudge Data",
      snippet:
        "I was asked to alter data in a research study. It didn’t feel right...",
      fullText:
        "I was asked to alter data in a research study. It didn’t feel right, and I spoke up. That experience taught me how vital it is to have spaces like Veritas where integrity matters.",
      anonymous: false,
      pending: false,
      createdAt: now(),
    },
    {
      id: 4,
      title: "Unclear AI Policy",
      snippet:
        "My department had no clear policy on AI-assisted work, leaving students confused...",
      fullText:
        "My department had no clear policy on AI-assisted work, leaving students confused and faculty frustrated. Without guidance, integrity felt subjective. I’m hopeful Veritas will help create clarity.",
      anonymous: false,
      pending: true,
      createdAt: now(),
    },
    {
      id: 5,
      title: "Ethics Overlooked",
      snippet:
        "Ethics conversations kept getting deprioritized as AI tools spread across courses...",
      fullText:
        "Ethics conversations kept getting deprioritized as AI tools spread across courses. Administrators acknowledged the problem but lacked a framework to act. Seeing Veritas build standards gives me hope.",
      anonymous: true,
      pending: true,
      createdAt: now(),
    },
    {
      id: 6,
      title: "Unfair Assessment",
      snippet:
        "Some students were using generative AI without accountability, and the rules were inconsistent...",
      fullText:
        "Some students were using generative AI without accountability, and the rules were inconsistent across instructors. It felt like integrity was a moving target. A unified, transparent approach would help everyone.",
      anonymous: false,
      pending: false,
      createdAt: now(),
    },
    {
      id: 7,
      title: "Hidden Misconduct",
      snippet:
        "I reported academic misconduct tied to AI and it got buried under bureaucracy...",
      fullText:
        "I reported academic misconduct tied to AI and it got buried under bureaucracy. There was no public tracking of follow-up. The idea of an accountability ranking from Veritas would have made that process more visible.",
      anonymous: true,
      pending: false,
      createdAt: now(),
    },
    {
      id: 8,
      title: "Seeking Guidance",
      snippet:
        "Faculty want to enforce fairness but don't know what 'responsible AI use' means in practice...",
      fullText:
        "Faculty want to enforce fairness but don't know what 'responsible AI use' means in practice. We need shared guidelines—otherwise each course becomes its own silo. Veritas’s collaborative task force could fix that.",
      anonymous: false,
      pending: false,
      createdAt: now(),
    },
  ]);

  const addStory = (payload: AddStoryPayload) => {
    const nextId = stories.length + 1;
    const snippet =
      payload.fullText.length > 80
        ? payload.fullText.slice(0, 77).trimEnd() + "..."
        : payload.fullText;
    setStories([
      ...stories,
      {
        id: nextId,
        title: payload.title,
        fullText: payload.fullText,
        snippet,
        email: payload.email,
        anonymous: payload.anonymous ?? true,
        pending: true, // new submissions are reviewed
        createdAt: now(),
      },
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
