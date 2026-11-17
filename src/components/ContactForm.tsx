'use client';

import { useState, FormEvent } from 'react';

interface ContactFormProps {
  translations: {
    yourName: string;
    emailAddress: string;
    company: string;
    subject: string;
    message: string;
    sendMessage: string;
    privacyNotice: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    companyPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
  };
}

export function ContactForm({ translations: t }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Open email client with pre-filled data
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n${data.company ? `Company: ${data.company}\n` : ''}\n\nMessage:\n${data.message}`
    );
    
    window.location.href = `mailto:contact@rebelinternet.eu?subject=${subject}&body=${body}`;
    
    setStatus('success');
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="bg-gradient-to-br from-[#FFFBF6] to-white p-8 md:p-12 rounded-3xl">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#595658] mb-2">
            {t.yourName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
            placeholder={t.namePlaceholder}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#595658] mb-2">
            {t.emailAddress}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
            placeholder={t.emailPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#595658] mb-2">
            {t.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
            placeholder={t.companyPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-[#595658] mb-2">
            {t.subject}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors"
            placeholder={t.subjectPlaceholder}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#595658] mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#D62D3A] focus:outline-none transition-colors resize-none"
            placeholder={t.messagePlaceholder}
          />
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-xl">
            ✓ Opening your email client... If it doesn't open, email us at contact@rebelinternet.eu
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl">
            Failed to send message. Please try again or email us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#D62D3A] to-[#E63946] text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : t.sendMessage}
        </button>

        <p className="text-sm text-[#595658] text-center">
          {t.privacyNotice}
        </p>
      </form>
    </div>
  );
}
