import type { InventoryObject, Location } from '../types/scenario';
import { IconObjectFound, IconObjectUsed } from './icons/StatusIcons';

type InventoryPanelProps = {
  objects: InventoryObject[];
  locations: Location[];
  ownedObjectIds: string[];
  usedObjectIds: string[];
  onUseObject: (id: string) => void;
  onDropObject: (id: string) => void;
  isVisible: boolean;
  onToggle: () => void;
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
  onDropObject,
  isVisible,
  onToggle,
}: InventoryPanelProps) {
  const ownedObjects = objects.filter((object) =>
    ownedObjectIds.includes(object.id),
  );

  return (
    <section className="side-panel">
      <div className="flex items-center justify-between">
        <h2 className="section-title">
          Objets trouvés
        </h2>
        <button
          type="button"
          onClick={onToggle}
          className="link-button focus:outline-none"
        >
          {isVisible ? 'Masquer' : 'Afficher'}
        </button>
      </div>
      {isVisible && (
        <>
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
                  (object.unlocksLocationIds?.length ?? 0) === 0 &&
                  (object.unlocksDocumentIds?.length ?? 0) > 0;
                const canDrop = !isUsed;

                return (
                  <article
                    className="item-card"
                    key={object.id}
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-3">
                        {object.iconUrl && (
                          <img
                            src={object.iconUrl}
                            alt=""
                            className="h-10 w-10 rounded-md border border-slate-200 object-contain p-1 shadow-sm bg-white"
                          />
                        )}
                        <div>
                          <h3 className="text-sm font-semibold text-slate-950">
                            {object.name}
                          </h3>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal-800">
                            {getObjectTypeLabel(object)}
                          </p>
                        </div>
                      </div>
                      <span className={`status-pill ${isUsed ? 'status-pill-ready' : 'status-pill-ready'} flex items-center gap-1.5`}>
                        {isUsed ? <IconObjectUsed className="h-3.5 w-3.5" /> : <IconObjectFound className="h-3.5 w-3.5" />}
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
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {canUse ? (
                        <button
                          className="primary-button text-sm"
                          type="button"
                          onClick={() => onUseObject(object.id)}
                        >
                          {object.useLabel ?? 'Utiliser'}
                        </button>
                      ) : null}
                      
                      {canDrop ? (
                        <button
                          className="secondary-button text-sm"
                          type="button"
                          onClick={() => onDropObject(object.id)}
                        >
                          Reposer
                        </button>
                      ) : null}
                    </div>

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
        </>
      )}
    </section>
  );
}
