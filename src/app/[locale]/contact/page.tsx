export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-slate-700">Reach us at contact@axiomate.ai (placeholder).</p>
      <div className="mt-6 card">
        <form className="space-y-3">
          <input className="w-full border border-slate-300 rounded px-3 py-2" placeholder="Your email" />
          <textarea className="w-full border border-slate-300 rounded px-3 py-2" rows={4} placeholder="Your message" />
          <button type="submit" className="btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}