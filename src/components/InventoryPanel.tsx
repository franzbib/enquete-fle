import type { InventoryObject, Location } from '../types/scenario';

type InventoryPanelProps = {
  objects: InventoryObject[];
  locations: Location[];
  ownedObjectIds: string[];
  usedObjectIds: string[];
  onUseObject: (id: string) => void;
};

function getObjectTypeLabel(object: InventoryObject) {
  if (object.objectType === 'access') {
    return 'Accès';
  }

  if (object.objectType === 'evidence') {
    return 'Preuve faible';
  }

  if (object.objectType === 'ambient') {
    return 'Ambiance';
  }

  return 'Préparatoire';
}

export function InventoryPanel({
  objects,
  locations,
  ownedObjectIds,
  usedObjectIds,
  onUseObject,
}: InventoryPanelProps) {
  const ownedObjects = objects.filter((object) =>
    ownedObjectIds.includes(object.id),
  );

  return (
    <section className="rounded-md border border-slate-300 bg-white p-4">
      <h2 className="text-base font-semibold text-slate-950">
        Objets trouvés
      </h2>
      {ownedObjects.length === 0 ? (
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Aucun objet pour le moment.
        </p>
      ) : (
        <div className="mt-3 grid gap-3">
          {ownedObjects.map((object) => {
            const isUsed = usedObjectIds.includes(object.id);
            const originLocation = locations.find(
              (location) => location.id === object.originLocationId,
            );
            const canUse =
              !isUsed &&
              ((object.unlocksLocationIds?.length ?? 0) > 0 ||
                (object.unlocksDocumentIds?.length ?? 0) > 0);

            return (
              <article
                className="rounded-md border border-slate-200 bg-stone-50 p-3"
                key={object.id}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-950">
                      {object.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800">
                      {getObjectTypeLabel(object)}
                    </p>
                  </div>
                  <span className="rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-700">
                    {isUsed ? object.usedLabel ?? 'Utilisé' : 'Trouvé'}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {object.description}
                </p>
                {originLocation ? (
                  <p className="mt-2 text-xs text-slate-500">
                    Trouvé dans : {originLocation.name}
                  </p>
                ) : null}
                {canUse ? (
                  <button
                    className="mt-3 rounded-md bg-teal-800 px-3 py-2 text-sm font-semibold text-white hover:bg-teal-900"
                    type="button"
                    onClick={() => onUseObject(object.id)}
                  >
                    {object.useLabel ?? 'Utiliser'}
                  </button>
                ) : null}
                {!canUse && !isUsed && object.objectType === 'ambient' ? (
                  <p className="mt-2 text-xs text-slate-500">
                    Sans utilité apparente pour l’instant.
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
