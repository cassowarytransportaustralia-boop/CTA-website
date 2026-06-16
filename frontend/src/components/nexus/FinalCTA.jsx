import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const REQUEST_TYPES = [
  { id: "feasibility_assessment", label: "Commence detailed feasibility assessment" },
  { id: "strategic_partnership", label: "Request strategic partnership discussion" },
  { id: "council_working_group", label: "Request council working group formation" },
  { id: "general_enquiry", label: "General enquiry" },
];

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function FinalCTA() {
  const [form, setForm] = useState({
    full_name: "",
    organisation: "",
    role: "",
    email: "",
    phone: "",
    request_type: "feasibility_assessment",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email) {
      toast.error("Please provide your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/partnership-requests`, form);
      setDone(true);
      toast.success("Request received. We'll be in touch within 2 business days.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "Submission failed. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="cta"
      data-testid="section-cta"
      className="bg-[#0a0a0a] text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 grain" />
      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="block w-3 h-3 bg-[#d4af37]" />
            <span className="eyebrow text-[#d4af37]">Why Wagga Wagga Should Lead Australia</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[0.98] tracking-tight">
            Build one. <br />
            <span className="text-[#d4af37]">Prove the model.</span> <br />
            Transform regional Australia.
          </h2>
          <p className="mt-8 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Wagga Wagga has every condition required to lead the first community-owned Nexus Regional Hub.
            The next step is a formal feasibility partnership with Council, Cassowary, and regional stakeholders.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 mt-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            {REQUEST_TYPES.map((rt) => (
              <button
                key={rt.id}
                data-testid={`cta-request-type-${rt.id}`}
                onClick={() => setForm({ ...form, request_type: rt.id })}
                className={`w-full text-left border p-5 flex items-center justify-between transition-colors ${
                  form.request_type === rt.id
                    ? "border-[#d4af37] bg-[#d4af37]/10"
                    : "border-white/15 hover:border-white/40"
                }`}
              >
                <span className="text-sm md:text-base font-medium pr-4">{rt.label}</span>
                <ArrowRight
                  size={16}
                  className={form.request_type === rt.id ? "text-[#d4af37]" : "text-white/40"}
                />
              </button>
            ))}
          </div>

          <div className="lg:col-span-7" data-testid="cta-form-card">
            {done ? (
              <div className="border border-[#d4af37] p-10 text-center" data-testid="cta-form-success">
                <div className="w-14 h-14 mx-auto bg-[#d4af37] flex items-center justify-center mb-6">
                  <Check size={26} className="text-[#0a0a0a]" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white">Request received.</h3>
                <p className="mt-3 text-white/75 max-w-md mx-auto">
                  A member of the Cassowary team will contact you within 2 business days to schedule
                  the next conversation.
                </p>
                <button
                  data-testid="cta-form-reset"
                  onClick={() => {
                    setDone(false);
                    setForm({
                      full_name: "",
                      organisation: "",
                      role: "",
                      email: "",
                      phone: "",
                      request_type: "feasibility_assessment",
                      message: "",
                    });
                  }}
                  className="btn-ghost text-white border-white/40 mt-8"
                  style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
                >
                  Submit another
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                data-testid="cta-form"
                className="border border-white/15 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/[0.02]"
              >
                <Field label="Full name *" name="full_name" value={form.full_name} onChange={update("full_name")} />
                <Field label="Organisation" name="organisation" value={form.organisation} onChange={update("organisation")} />
                <Field label="Role / Title" name="role" value={form.role} onChange={update("role")} />
                <Field label="Email *" name="email" type="email" value={form.email} onChange={update("email")} />
                <Field label="Phone" name="phone" value={form.phone} onChange={update("phone")} className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="eyebrow text-[#d4af37] block mb-2">Message</label>
                  <textarea
                    data-testid="cta-input-message"
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] placeholder:text-white/30"
                    placeholder="Anything we should know before our first conversation?"
                  />
                </div>
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-white/55 max-w-sm">
                    Submissions are stored confidentially and reviewed by the Cassowary partnership team.
                  </span>
                  <button
                    type="submit"
                    data-testid="cta-submit"
                    disabled={submitting}
                    className="btn-gold disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Submit Request"} <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", className = "" }) {
  return (
    <div className={className}>
      <label className="eyebrow text-[#d4af37] block mb-2">{label}</label>
      <input
        data-testid={`cta-input-${name}`}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4af37] placeholder:text-white/30"
        autoComplete="off"
      />
    </div>
  );
}
