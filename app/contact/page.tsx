"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - Your actual values
      const serviceId = "service_hnw19s9";
      const templateId = "template_e1p0ums";
      const publicKey = "xJRRZA4CWFXt-EBwn";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "MBC Laboratory",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
            <p className="text-blue-100">Get in touch with MBC Laboratory</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-100 text-center">
                ✅ Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-100 text-center">
                ❌ Failed to send message. Please try again or contact us
                directly.
              </div>
            )}

            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm disabled:opacity-50"
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm resize-none disabled:opacity-50"
                placeholder="Enter your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="space-y-2 text-blue-100">
              <p className="flex items-center justify-center gap-2">
                <span>📧</span>
                <span>info@mbclaboratory.com</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📞</span>
                <span>+62 123 4567 890</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>Jakarta, Indonesia</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
