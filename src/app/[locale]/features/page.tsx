"use client";
import Image from 'next/image';
import {useMessages} from 'next-intl';

export default function FeaturesPage() {
  const m = useMessages() as any;
  const mf = m?.features || {};

  const sections: Array<{id:string; title:string; desc?:string; bg:string; items:string[]; image?:string}> = [
    {
      id: 'multi-model',
      title: mf?.multiModel?.title ?? '多模型协作',
      desc: mf?.multiModel?.desc ?? '支持多模型并行与串联，针对不同任务智能路由',
      bg: 'section-indigo',
      items: mf?.multiModel?.items || ['GPT-4 / o3', 'Claude', 'DeepSeek', '开源模型'],
      image: '/images/brand/ai-mesh.svg'
    },
    {
      id: 'roles',
      title: mf?.roles?.title ?? '智能角色与流程',
      desc: mf?.roles?.desc ?? '可视化编排，支持触发器、条件与循环',
      bg: 'section-slate',
      items: mf?.roles?.items || ['Agent 编排', '对话上下文', '插件扩展'],
      image: '/images/brand/flow.svg'
    },
    {
      id: 'kb',
      title: mf?.kb?.title ?? '知识库与检索',
      desc: mf?.kb?.desc ?? '高质量向量化与分段策略，支持多数据源',
      bg: 'section-teal',
      items: mf?.kb?.items || ['PDF/网页/文档导入', '多嵌入模型', 'RAG 改写']
    },
    {
      id: 'code',
      title: mf?.code?.title ?? '代码与工具调用',
      desc: mf?.code?.desc ?? '函数调用、Sandbox 执行与外部 API 集成',
      bg: 'section-indigo',
      items: mf?.code?.items || ['Function Calling', '工具市场', '安全沙箱']
    },
    {
      id: 'content',
      title: mf?.content?.title ?? '内容生成与多模态',
      desc: mf?.content?.desc ?? '文本、图片、音频与视频的统一工作流',
      bg: 'section-slate',
      items: mf?.content?.items || ['文案生成', '图片编辑', '语音合成']
    },
    {
      id: 'platforms',
      title: mf?.platforms?.title ?? '平台与集成',
      desc: mf?.platforms?.desc ?? 'SDK 与 Webhook，覆盖 Web/移动/企业内部系统',
      bg: 'section-teal',
      items: mf?.platforms?.items || ['Web SDK', 'CLI', 'Webhook']
    },
    {
      id: 'security',
      title: mf?.security?.title ?? '安全与审计',
      desc: mf?.security?.desc ?? '权限、配额与操作日志，企业级可观测性',
      bg: 'section-indigo',
      items: mf?.security?.items || ['细粒度权限', '流量配额', '审计日志']
    }
  ];

  return (
    <div className="space-y-12">
      <header className="text-center py-10">
        <h1 className="text-3xl font-bold tracking-tight">{mf?.title ?? '功能一览'}</h1>
        <p className="text-slate-600 mt-2">{mf?.subtitle ?? '以大色块呈现核心能力，简洁且具科技感'}</p>
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