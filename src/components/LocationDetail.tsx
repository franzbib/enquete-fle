import type {
  Character,
  InvestigationDocument,
  InventoryObject,
  Location,
} from '../types/scenario';

type LocationDetailProps = {
  location: Location;
  documents: InvestigationDocument[];
  presentCharacters: Character[];
  objects: InventoryObject[];
  ownedObjectIds: string[];
  onSelectDocument: (id: string) => void;
  onSelectCharacter: (id: string) => void;
  onTakeObject: (id: string) => void;
};

export function LocationDetail({
  location,
  documents,
  presentCharacters,
  objects,
  ownedObjectIds,
  onSelectDocument,
  onSelectCharacter,
  onTakeObject,
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

      <div className="mt-6">
        <h3 className="font-semibold text-slate-950">Objets observables</h3>
        <div className="mt-3 grid gap-3">
          {objects.length > 0 ? (
            objects.map((object) => {
              const isOwned = ownedObjectIds.includes(object.id);
              return (
                <article
                  className="rounded-md border border-slate-200 bg-stone-50 p-3"
                  key={object.id}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-950">
                        {object.name}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-700">
                        {object.description}
                      </p>
                    </div>
                    <button
                      className="rounded-md bg-teal-800 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-900 disabled:bg-slate-300 disabled:text-slate-600"
                      type="button"
                      disabled={isOwned}
                      onClick={() => onTakeObject(object.id)}
                    >
                      {isOwned ? 'Déjà pris' : 'Prendre'}
                    </button>
                  </div>
                </article>
              );
            })
          ) : (
            <p className="text-sm italic text-slate-500">Aucun objet observable</p>
          )}
        </div>
      </div>
    </article>
  );
}
