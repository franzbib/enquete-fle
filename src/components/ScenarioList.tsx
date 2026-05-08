type ScenarioListItem = {
  id: string;
  title: string;
  meta?: string;
  disabled?: boolean;
};

type ScenarioListProps = {
  title: string;
  items: ScenarioListItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function ScenarioList({
  title,
  items,
  selectedId,
  onSelect,
}: ScenarioListProps) {
  return (
    <section className="rounded-md border border-slate-300 bg-white p-4">
      <h2 className="text-base font-semibold text-slate-950">{title}</h2>
      <div className="mt-3 flex flex-col gap-2">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <button
              className={`rounded-md border px-3 py-2 text-left text-sm transition-colors duration-200 ${
                isSelected
                  ? 'border-teal-800 bg-teal-50 text-teal-950'
                  : item.disabled
                    ? 'cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                  : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
              }`}
              key={item.id}
              type="button"
              disabled={item.disabled}
              onClick={() => onSelect(item.id)}
            >
              <span className="block font-semibold">{item.title}</span>
              {item.meta ? (
                <span className="mt-1 block text-xs text-slate-600">
                  {item.meta}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
