import type { InvestigationDocument } from '../types/scenario';

type DocumentDetailProps = {
  document: InvestigationDocument;
};

export function DocumentDetail({ document }: DocumentDetailProps) {
  return (
    <article className="case-panel case-panel-main case-panel-document">
      <p className="eyebrow">
        Document
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {document.title}
      </h2>
      <p className="mt-2 text-sm font-semibold text-slate-600">
        {document.source}
      </p>
      <p className="body-copy mt-4">{document.summary}</p>
      <div className="document-paper mt-4">
        {document.content}
      </div>
    </article>
  );
}
