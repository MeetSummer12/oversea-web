"use client";

export default function FAQPage() {

  return (
    <div className="space-y-12">
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">Frequently asked questions</h1>
          <p className="text-slate-200 mt-3">Answers about trial, billing, privacy, and model capabilities.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">How do I start the free trial?</h2>
            <p className="text-slate-700 mt-2">Fill in your email and password on the signup page and accept the terms to activate. You can also enable Google sign-in for one-click start.</p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">What does the trial include?</h2>
            <p className="text-slate-700 mt-2">You can access base models, create custom roles and a knowledge-base, and experience full workflows within generous daily limits. Actual models and limits may vary by integrations and licensing.</p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">Do I need a credit card?</h2>
            <p className="text-slate-700 mt-2">No. You can cancel anytime during the trial and only upgrade if it makes sense for you.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">How is my data handled?</h2>
            <p className="text-slate-700 mt-2">We follow our privacy policy and only process data as necessary to deliver the service. You can export your content and control your knowledge-base. Enterprise options offer stricter compliance controls.</p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">Which models are supported?</h2>
            <p className="text-slate-700 mt-2">We integrate with leading model providers (e.g., GPT-4o, Claude 4, Gemini 2.5). Available models depend on integrations and licensing.</p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">What if I run into issues?</h2>
            <p className="text-slate-700 mt-2">Use the contact link in the footer to reach us, or follow the help links from the signup page for guided troubleshooting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}