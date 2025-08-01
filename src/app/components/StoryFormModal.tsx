"use client";
import React, { useState } from "react";

export interface StoryFormResult {
  fullText: string;
  title?: string;
  email?: string;
  anonymous: boolean;
}

interface StoryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: StoryFormResult) => void | Promise<void>;
}

const StoryFormModal: React.FC<StoryFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(true);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim()) return;
    onSubmit({
      fullText: story.trim(),
      title: title || undefined,
      email: email || undefined,
      anonymous,
    });
    setTitle("");
    setStory("");
    setEmail("");
    setAnonymous(true);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-full p-6 rounded-xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-blue-900 mb-2">
          Tell Your Story
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Your submission will be reviewed by a staff member before it appears
          publicly. You can choose to remain anonymous below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Title (optional)
            </label>
            <input
              type="text"
              placeholder="Brief title"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Story</label>
            <textarea
              placeholder="Describe what happened..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              value={story}
              onChange={(e) => setStory(e.target.value)}
              rows={6}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email (optional)
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="anonymous"
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous((a) => !a)}
              className="h-4 w-4"
            />
            <label htmlFor="anonymous" className="text-sm select-none">
              Submit anonymously
            </label>
          </div>
          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 min-w-[100px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!story.trim()}
              className="px-5 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-800 disabled:opacity-50 min-w-[100px]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StoryFormModal;
