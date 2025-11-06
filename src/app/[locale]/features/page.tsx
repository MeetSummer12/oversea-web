"use client";
import Image from 'next/image';
import {useMessages} from 'next-intl';

export default function FeaturesPage() {
  const m = useMessages() as any;
  const mf = m?.features || {};

  const sections: Array<{id:string; title:string; desc?:string; bg:string; items:string[]; image?:string}> = [
    {
      id: 'multi-model',
      title: mf?.multiModel?.title ?? 'Multi-model engine',
      desc: mf?.multiModel?.desc ?? 'Parallel and chained models with smart routing per task',
      bg: 'section-indigo',
      items: mf?.multiModel?.items || ['GPT-4 / o3', 'Claude', 'DeepSeek', 'Open-source models'],
      image: '/images/brand/ai-mesh.svg'
    },
    {
      id: 'roles',
      title: mf?.roles?.title ?? 'Custom roles & workflows',
      desc: mf?.roles?.desc ?? 'Visual orchestration with triggers, conditions, loops',
      bg: 'section-slate',
      items: mf?.roles?.items || ['Agent orchestration', 'Conversation context', 'Plugin extensions'],
      image: '/images/brand/flow.svg'
    },
    {
      id: 'kb',
      title: mf?.kb?.title ?? 'Knowledge base & retrieval',
      desc: mf?.kb?.desc ?? 'High-quality embeddings, chunking strategies, multi-source',
      bg: 'section-teal',
      items: mf?.kb?.items || ['Import PDFs/pages/docs', 'Multiple embedding models', 'RAG rewriter']
    },
    {
      id: 'code',
      title: mf?.code?.title ?? 'Code & tool calling',
      desc: mf?.code?.desc ?? 'Function calls, sandbox execution, external API integrations',
      bg: 'section-indigo',
      items: mf?.code?.items || ['Function Calling', 'Tool marketplace', 'Secure sandbox']
    },
    {
      id: 'content',
      title: mf?.content?.title ?? 'Content generation & multimodal',
      desc: mf?.content?.desc ?? 'Unified workflow for text, images, audio, and video',
      bg: 'section-slate',
      items: mf?.content?.items || ['Copywriting', 'Image editing', 'Speech synthesis']
    },
    {
      id: 'platforms',
      title: mf?.platforms?.title ?? 'Platforms & integrations',
      desc: mf?.platforms?.desc ?? 'SDKs & Webhooks across web, mobile, and enterprise systems',
      bg: 'section-teal',
      items: mf?.platforms?.items || ['Web SDK', 'CLI', 'Webhook']
    },
    {
      id: 'security',
      title: mf?.security?.title ?? 'Security & audit',
      desc: mf?.security?.desc ?? 'Permissions, quotas, activity logs, enterprise observability',
      bg: 'section-indigo',
      items: mf?.security?.items || ['Fine-grained permissions', 'Traffic quotas', 'Audit logs']
    }
  ];

  return (
    <div className="space-y-12">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold tracking-tight">{mf?.title ?? 'Feature overview'}</h1>
        <p className="text-slate-600 mt-2">{mf?.subtitle ?? 'Large sections highlighting core capabilities, clean and modern'}</p>
      </header>

      {sections.map((sec) => (
        <section key={sec.id} id={sec.id} className={`section-block ${sec.bg}`}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-white text-2xl font-semibold">{sec.title}</h2>
              {sec.desc && <p className="text-slate-200 mt-2">{sec.desc}</p>}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {sec.items.map((it, i) => (
                  <div key={i} className="rounded-lg bg-white/8 backdrop-blur-sm border border-white/15 px-4 py-3 text-white/95 hover:bg-white/12 transition">
                    {it}
                  </div>
                ))}
              </div>
            </div>
            <div className="justify-self-center">
              {sec.image ? (
                <Image src={sec.image} alt={sec.title} width={420} height={260} className="rounded-xl border border-white/15"/>
              ) : (
                <div className="h-48 w-full rounded-xl border border-white/15 bg-white/5"/>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}