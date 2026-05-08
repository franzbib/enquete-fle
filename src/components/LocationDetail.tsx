import type {
  Character,
  InvestigationDocument,
  InventoryObject,
  Location,
} from '../types/scenario';

type LocationDetailProps = {
  location: Location;
  isUnlocked: boolean;
  documents: InvestigationDocument[];
  presentCharacters: Character[];
  objects: InventoryObject[];
  ownedObjectIds: string[];
  ownedObjects: InventoryObject[];
  onSelectDocument: (id: string) => void;
  onSelectCharacter: (id: string) => void;
  onTakeObject: (id: string) => void;
  onUseObject: (id: string) => void;
};

export function LocationDetail({
  location,
  isUnlocked,
  documents,
  presentCharacters,
  objects,
  ownedObjectIds,
  ownedObjects,
  onSelectDocument,
  onSelectCharacter,
  onTakeObject,
  onUseObject,
}: LocationDetailProps) {
  if (!isUnlocked) {
    const accessObject = ownedObjects.find((obj) =>
      obj.unlocksLocationIds?.includes(location.id),
    );
    return (
      <article className="case-panel case-panel-main case-panel-location">
        <p className="eyebrow">
          Lieu fermé
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          {location.name}
        </h2>
        <p className="body-copy mt-4">
          {location.id === 'salle-informatique'
            ? 'La salle informatique est fermée. Un badge semble nécessaire pour entrer.'
            : `${location.name} est fermé(e). Un objet est nécessaire pour y accéder.`}
        </p>
        {accessObject && (
          <div className="mt-6">
            <button
              className="primary-button text-sm focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
              type="button"
              onClick={() => onUseObject(accessObject.id)}
            >
              {accessObject.useLabel ?? 'Présenter l’objet d’accès'}
            </button>
          </div>
        )}
      </article>
    );
  }

  return (
    <article className="case-panel case-panel-main case-panel-location">
      <p className="eyebrow">
        Lieu
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {location.name}
      </h2>
      {location.vignetteUrl && (
        <img
          src={location.vignetteUrl}
          alt={`Vignette temporaire de ${location.name}`}
          className="mt-4 h-32 w-full rounded-md object-cover border border-slate-300 shadow-sm opacity-90"
        />
      )}
      <p className="body-copy mt-4">{location.description}</p>
      <p className="info-strip mt-4 text-sm leading-6">
        {location.role}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <h3 className="font-semibold text-slate-950">Documents liés</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {documents.length > 0 ? (
              documents.map((document) => (
                <li key={document.id}>
                  <button
                    type="button"
                    onClick={() => onSelectDocument(document.id)}
                    className="link-button text-left"
                  >
                    {document.title}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-slate-500 italic">
                Aucun document disponible pour l’instant
              </li>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-slate-950">Personnages présents</h3>
          <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
            {presentCharacters.length > 0 ? (
              presentCharacters.map((character) => (
                <li key={character.id}>
                  <button
                    type="button"
                    onClick={() => onSelectCharacter(character.id)}
                    className="link-button text-left"
                  >
                    {character.name}
                  </button>
                </li>
              ))
            ) : (
              <li className="text-slate-500 italic">Personne</li>
            )}
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
                  className="item-card"
                  key={object.id}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-center gap-3">
                      {object.iconUrl && (
                        <img
                          src={object.iconUrl}
                          alt=""
                          className="h-10 w-10 rounded-md border border-slate-200 object-contain p-1 shadow-sm bg-white"
                        />
                      )}
                      <div>
                        <p className="text-sm font-semibold text-slate-950">
                          {object.name}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          {object.description}
                        </p>
                      </div>
                    </div>
                    <button
                      className="primary-button text-sm disabled:bg-slate-300 disabled:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
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
            <p className="text-sm italic text-slate-500">
              Aucun objet observable
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
