"use client";
import React, { useState } from "react";

interface StoryFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (fullText: string) => void;
}

const StoryFormModal: React.FC<StoryFormModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [text, setText] = useState("");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-full p-6 rounded shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          Tell Your Story
        </h3>
        <textarea
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
          placeholder="Your story..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSubmit(text);
              setText("");
            }}
            className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryFormModal;
