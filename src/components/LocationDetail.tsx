import type {
  Character,
  InvestigationDocument,
  Location,
} from '../types/scenario';

type LocationDetailProps = {
  location: Location;
  documents: InvestigationDocument[];
  presentCharacters: Character[];
  onSelectDocument: (id: string) => void;
  onSelectCharacter: (id: string) => void;
};

export function LocationDetail({
  location,
  documents,
  presentCharacters,
  onSelectDocument,
  onSelectCharacter,
}: LocationDetailProps) {
  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Lieu
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {location.name}
      </h2>
      <p className="mt-4 leading-7 text-slate-700">{location.description}</p>
      <p className="mt-4 rounded-md bg-stone-100 p-3 text-sm leading-6 text-slate-700">
        {location.role}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-slate-950">Documents liés</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {documents.length > 0 ? documents.map((document) => (
              <li key={document.id}>
                <button type="button" onClick={() => onSelectDocument(document.id)} className="text-teal-700 hover:underline text-left">
                  {document.title}
                </button>
              </li>
            )) : <li className="text-slate-500 italic">Aucun document</li>}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950">Personnages présents</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {presentCharacters.length > 0 ? presentCharacters.map((character) => (
              <li key={character.id}>
                <button type="button" onClick={() => onSelectCharacter(character.id)} className="text-teal-700 hover:underline text-left">
                  {character.name}
                </button>
              </li>
            )) : <li className="text-slate-500 italic">Personne</li>}
          </ul>
        </div>
      </div>
    </article>
  );
}
