export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold">联系我们 / Contact</h1>
      <p className="mt-4 text-slate-700">请通过邮箱 contact@axiomate.ai 与我们取得联系（占位）。</p>
      <div className="mt-6 card">
        <form className="space-y-3">
          <input className="w-full border border-slate-300 rounded px-3 py-2" placeholder="你的邮箱 / Your email" />
          <textarea className="w-full border border-slate-300 rounded px-3 py-2" rows={4} placeholder="你的需求 / Your message" />
          <button type="submit" className="btn-primary">发送 / Send</button>
        </form>
      </div>
    </div>
  );
}