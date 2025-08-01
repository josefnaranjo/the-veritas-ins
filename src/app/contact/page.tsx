// src/app/contact/page.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoChevronBackSharp } from "react-icons/io5";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // placeholder: actual backend integration can be added later
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status !== "idle") setStatus("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  return (
    <div className="pt-32 bg-[#E6F0FB] min-h-screen pb-16 flex flex-col items-center">
      <div className="w-full max-w-xl px-6 lg:px-12">
        {/* back arrow */}
        <div className="flex items-center mb-6">
          <Link
            href="/"
            aria-label="Back to Home"
            className="inline-flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 transition shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            <IoChevronBackSharp size={24} />
          </Link>
          <h1 className="ml-4 text-3xl font-bold text-blue-900">Contact Us</h1>
        </div>

        <p className="mb-6 text-gray-700">
          Have a question, want to get involved, or share feedback? Fill out the
          form below and someone from our team will follow up. We value your
          input and are here to help.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-label="Name"
                className="rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
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
                aria-label="Email"
                className="rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
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
              aria-label="Subject"
              className="rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400"
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
              aria-label="Message"
              className="rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 resize-none"
            />
          </div>

          <p className="text-sm text-gray-600">
            By submitting, a team member will review and follow up. We respect
            your privacy.
          </p>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-green-600">Thanks! We'll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600">
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
