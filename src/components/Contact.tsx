import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch & feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-sky-400 uppercase mb-2">
            <span>08</span>
            <span aria-hidden="true">/</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {portfolioData.contact.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            {portfolioData.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Connect & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#11151B] border border-white/[0.08] space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Contact Information
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#161B23] border border-white/[0.04] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Mail className="w-4 h-4 text-sky-400" />
                    <span>Direct Email</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-sky-400 transition-colors block break-all"
                >
                  {portfolioData.profile.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#161B23] border border-white/[0.04]">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span>Current Location</span>
                </div>
                <div className="text-sm font-semibold text-white">
                  {portfolioData.profile.location}
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={portfolioData.profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-[#161B23] border border-white/[0.04] hover:border-sky-500/40 hover:bg-[#1C222E] transition-all flex items-center gap-3 group"
                  >
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:scale-110 transition-all" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">@ayan-roy</div>
                    </div>
                  </a>

                  <a
                    href={portfolioData.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-[#161B23] border border-white/[0.04] hover:border-sky-500/40 hover:bg-[#1C222E] transition-all flex items-center gap-3 group"
                  >
                    <Linkedin className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-all" />
                    <div className="text-left">
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">Ayan Roy</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability note */}
            <div className="p-5 rounded-2xl bg-sky-950/20 border border-sky-500/20 text-xs sm:text-sm text-slate-300 space-y-1">
              <span className="font-semibold text-sky-400 block font-mono">Current Availability</span>
              <p className="text-slate-400">
                Open to discussions regarding full-stack software development opportunities, project collaborations, and internship roles.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11151B] border border-white/[0.08] card-glow">
              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Message Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. I'll review your note and respond as soon as possible at your email address.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2">
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className={`w-full px-4 py-3 rounded-lg bg-[#161B23] border text-sm text-white placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                          errors.name ? 'border-rose-500/60 bg-rose-950/10' : 'border-white/[0.08] hover:border-white/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2">
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className={`w-full px-4 py-3 rounded-lg bg-[#161B23] border text-sm text-white placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                          errors.email ? 'border-rose-500/60 bg-rose-950/10' : 'border-white/[0.08] hover:border-white/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-2">
                      Subject <span className="text-sky-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Discussion / Opportunity"
                      className={`w-full px-4 py-3 rounded-lg bg-[#161B23] border text-sm text-white placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                        errors.subject ? 'border-rose-500/60 bg-rose-950/10' : 'border-white/[0.08] hover:border-white/20'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2">
                      Message <span className="text-sky-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your idea, requirements, or timeline..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#161B23] border text-sm text-white placeholder-slate-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 resize-none ${
                        errors.message ? 'border-rose-500/60 bg-rose-950/10' : 'border-white/[0.08] hover:border-white/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${portfolioData.profile.email}?subject=${encodeURIComponent(formData.subject || 'Project Inquiry')}&body=${encodeURIComponent(formData.message || 'Hi Ayan,')}`}
                      className="text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
                    >
                      Or open in mail client →
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
