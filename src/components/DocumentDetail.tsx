import type {
  Character,
  InvestigationDocument,
  Location,
} from '../types/scenario';

type DocumentDetailProps = {
  document: InvestigationDocument;
  locations: Location[];
  characters: Character[];
};

export function DocumentDetail({
  document,
  locations,
  characters,
}: DocumentDetailProps) {
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

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-slate-950">Lieux associés</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950">Personnages associés</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {characters.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
