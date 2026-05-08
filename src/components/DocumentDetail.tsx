import type { InvestigationDocument } from '../types/scenario';

type DocumentDetailProps = {
  document: InvestigationDocument;
};

export function DocumentDetail({ document }: DocumentDetailProps) {
  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Document
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {document.title}
      </h2>
      <p className="mt-2 text-sm font-semibold text-slate-600">
        {document.source}
      </p>
      <p className="mt-4 leading-7 text-slate-700">{document.summary}</p>
      <div className="mt-4 rounded-md border border-slate-200 bg-stone-50 p-4 text-sm leading-7 text-slate-800">
        {document.content}
      </div>
    </article>
  );
}
