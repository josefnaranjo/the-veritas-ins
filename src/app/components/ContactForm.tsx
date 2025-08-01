"use client";
import React, { useState, useEffect, useRef } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  submitUrl?: string;
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  submitUrl = "/api/contact",
  onSuccess,
}) => {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const firstRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        onSuccess?.();
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            ref={(el) => {
              if (!firstRef.current) firstRef.current = el;
            }}
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="subject" className="text-sm font-medium mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Brief subject"
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us how we can help..."
          className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      <p className="text-sm text-gray-600">
        By submitting, a team member will review and follow up. We respect your
        privacy.
      </p>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <div className="flex-1">
          {status === "success" && (
            <p className="text-green-600">Thanks! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              Something went wrong or required fields are missing.
            </p>
          )}
        </div>
        <div className="flex-shrink-0">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
