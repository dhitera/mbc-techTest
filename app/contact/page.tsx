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
    <div className="min-h-screen w-full bg-gradient-to-b from-red-800 to-transparent dark:from-red-800">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] pt-10">
        {" "}
        {/* Subtract navbar height */}
        {/* Left Side - Google Maps */}
        <div className="lg:w-1/2 w-full h-64 lg:h-auto relative ml-4">
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.342847486394!2d107.6273574!3d-6.9734471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sJl.%20Telekomunikasi%20No.1%2C%20Sukapura%2C%20Kec.%20Dayeuhkolot%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040267!5e0!3m2!1sen!2sid!4v1699999999999!5m2!1sen!2sid"
              width="100%"
              height="75%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:rounded-none"
            ></iframe>
          </div>
        </div>
        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center p-4 lg:p-8 ">
          <div className="w-full max-w-md">
            <div className="backdrop-blur-sm bg-white/10 p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">
                  Contact Us
                </h1>
                <p className="text-blue-100">
                  Get in touch with MBC Laboratory
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-100 text-center">
                    ✅ Message sent successfully! We&apos;ll get back to you
                    soon.
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
                    <span>+62 81317870428</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-sm">
                    <span>📍</span>
                    <span>
                      Jl. Telekomunikasi No.1, Sukapura, Dayeuhkolot, Bandung,
                      Jawa Barat 40267
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
