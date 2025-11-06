"use client";

export default function TermsPage() {

  return (
    <div className="space-y-12">
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">Terms of Service</h1>
          <p className="text-slate-200 mt-3">Please read and accept the following terms before using the product.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">1. Acceptance of Terms</h2>
          <p className="text-slate-700 mt-2">By registering or using the service, you agree to these Terms and related policies (including our Privacy Policy). If you do not agree, please discontinue use.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">2. Services</h2>
          <p className="text-slate-700 mt-2">We provide AI capabilities such as multi-model access, roles, and knowledge-base. Specific features may change by version and integrations.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">3. Accounts and Security</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account and credentials, and for all activities under your account.</li>
            <li>Notify us immediately of any security issues or unauthorized use.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">4. Acceptable Use</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>Do not use the service for illegal, infringing, or harmful activities.</li>
            <li>Do not attempt to disrupt, bypass security, or access without authorization.</li>
            <li>Respect licenses and usage limits of third-party models and data sources.</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">5. Fees and Subscriptions</h2>
          <p className="text-slate-700 mt-2">No credit card is required for the free trial; paid plans and billing cycles follow what is shown on the pricing page and any applicable agreement. Prices may be adjusted with reasonable notice.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">6. Intellectual Property</h2>
          <p className="text-slate-700 mt-2">The product and its components are owned by us or our licensors. You retain applicable rights to your inputs and outputs.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">7. Data and Privacy</h2>
          <p className="text-slate-700 mt-2">We process your data according to our Privacy Policy and only as necessary to provide the service. Enterprise offerings may include stricter compliance options.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">8. Disclaimers</h2>
          <p className="text-slate-700 mt-2">AI outputs may be inaccurate or incomplete; you are responsible for evaluation and use. The service is provided “as is”.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">9. Limitation of Liability</h2>
          <p className="text-slate-700 mt-2">To the extent permitted by law, we are not liable for indirect damages, loss of profits, or data loss.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">10. Termination</h2>
          <p className="text-slate-700 mt-2">We may suspend or terminate the service if you violate the Terms or pose significant risks. You may cancel your subscription at any time.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">11. Governing Law</h2>
          <p className="text-slate-700 mt-2">These Terms are governed by the laws applicable in your jurisdiction; disputes will be resolved as agreed between the parties.</p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">12. Contact</h2>
          <p className="text-slate-700 mt-2">For questions, please reach out via the contact link in the footer.</p>
        </section>
      </div>
    </div>
  );
}