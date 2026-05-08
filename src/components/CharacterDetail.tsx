import type { Character, Location } from '../types/scenario';

type CharacterDetailProps = {
  character: Character;
  presentLocations: Location[];
  onSelectLocation: (id: string) => void;
};

export function CharacterDetail({
  character,
  presentLocations,
  onSelectLocation,
}: CharacterDetailProps) {
  return (
    <article className="rounded-md border border-slate-300 bg-white p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
        Personnage
      </p>
      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        {character.name}
      </h2>
      <p className="mt-2 text-sm font-semibold text-slate-600">
        {character.role}
      </p>
      <p className="mt-4 leading-7 text-slate-700">{character.profile}</p>
      <blockquote className="mt-4 rounded-md bg-stone-100 p-4 text-sm leading-6 text-slate-700">
        {character.directSpeech}
      </blockquote>
      <div className="mt-6">
        <h3 className="font-semibold text-slate-950">Rencontré dans</h3>
        <ul className="mt-2 list-inside list-disc text-sm leading-6 text-slate-700">
          {presentLocations.map((location) => (
            <li key={location.id}>
              <button type="button" onClick={() => onSelectLocation(location.id)} className="text-teal-700 hover:underline text-left">
                {location.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
