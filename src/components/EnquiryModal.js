import React, { useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send, ShieldCheck, X } from "lucide-react";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fields = [
  { id: "name", label: "Full name", type: "text", placeholder: "Your name", autoComplete: "name" },
  { id: "email", label: "Work email", type: "email", placeholder: "you@company.com", autoComplete: "email" },
  { id: "phone", label: "Phone number", type: "tel", placeholder: "+91 98765 43210", autoComplete: "tel" },
  { id: "subject", label: "I'm interested in", type: "text", placeholder: "How can we help?" },
];

const EnquiryModal = ({ onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ type: "", message: "" });

  const handleChange = (event, field = event.target.id) => {
    const { value } = event.target;
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = "Enter a valid email address.";
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15)
      newErrors.phone = "Enter a phone number with 10 to 15 digits.";
    if (!formData.subject.trim()) newErrors.subject = "Please tell us what you need.";
    if (!formData.message.trim()) newErrors.message = "Please add a short message.";
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setPopup({ type: "", message: "" });
    try {
      await axios.post("https://sevysis.com/api/enquiry/send", formData);
      setPopup({ type: "success", message: "Thanks for reaching out. Our team will be in touch soon." });
    } catch {
      setPopup({
        type: "error",
        message: "We couldn't send your enquiry. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/55 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !loading) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="my-auto flex max-h-[min(92vh,820px)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_32px_100px_rgba(15,23,42,0.32)]"
      >
        <header className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-teal-50/70 px-5 py-5 sm:px-8 sm:py-7">
          <div className="absolute -right-6 -top-12 h-36 w-36 rounded-full bg-teal-100/60 blur-2xl" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-700/20 sm:flex">
                <Send size={21} />
              </div>
              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">Let’s talk</p>
                <h2 id="enquiry-title" className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  Tell us about your project
                </h2>
                <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-slate-600">
                  Share a few details and our team will get back to you shortly.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              aria-label="Close enquiry form"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <form onSubmit={handleSubmit} noValidate className="min-h-0 overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
          {popup.message && (
            <div
              role="status"
              className={`mb-5 flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                popup.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                  : "border-rose-200 bg-rose-50 text-rose-800"
              }`}
            >
              {popup.type === "success" ? (
                <CheckCircle2 size={19} className="mt-0.5 shrink-0" />
              ) : (
                <AlertCircle size={19} className="mt-0.5 shrink-0" />
              )}
              <span className="flex-1 leading-relaxed">{popup.message}</span>
              {popup.type === "success" && (
                <button type="button" onClick={onClose} className="font-semibold underline underline-offset-2">
                  Done
                </button>
              )}
            </div>
          )}

          <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
            {fields.map(({ id, label, type, placeholder, autoComplete }) => (
              <div key={id}>
                <label htmlFor={`enquiry-${id}`} className="mb-1.5 block text-sm font-semibold text-slate-700">
                  {label} <span className="text-rose-500">*</span>
                </label>
                <input
                  id={`enquiry-${id}`}
                  name={id}
                  type={type}
                  value={formData[id]}
                  onChange={(event) => handleChange(event, id)}
                  placeholder={placeholder}
                  autoComplete={autoComplete}
                  aria-invalid={Boolean(errors[id])}
                  aria-describedby={errors[id] ? `enquiry-${id}-error` : undefined}
                  className={`w-full rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 ${
                    errors[id] ? "border-rose-400" : "border-slate-200"
                  }`}
                />
                {errors[id] && (
                  <p id={`enquiry-${id}-error`} className="mt-1.5 text-xs font-medium text-rose-600">
                    {errors[id]}
                  </p>
                )}
              </div>
            ))}
            <div className="sm:col-span-2">
              <label htmlFor="enquiry-message" className="mb-1.5 block text-sm font-semibold text-slate-700">
                Project details <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="enquiry-message"
                name="message"
                value={formData.message}
                onChange={(event) => handleChange(event, "message")}
                placeholder="What would you like us to help you with?"
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "enquiry-message-error" : undefined}
                className={`w-full resize-y rounded-xl border bg-white px-3.5 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 ${
                  errors.message ? "border-rose-400" : "border-slate-200"
                }`}
              />
              {errors.message && <p id="enquiry-message-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.message}</p>}
            </div>
          </div>

          <footer className="mt-6 flex flex-col-reverse items-center justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row">
            <p className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={15} className="text-teal-700" />
              Your details are only used to respond to your enquiry.
            </p>
            <button
              type="submit"
              disabled={loading || popup.type === "success"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-800/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-teal-600/20 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {loading ? <LoaderCircle size={17} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending enquiry..." : "Send enquiry"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
};

export default EnquiryModal;
