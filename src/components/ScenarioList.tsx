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
    <section className="side-panel">
      <h2 className="section-title">{title}</h2>
      <div className="mt-3 flex flex-col gap-2">
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <button
              className={`nav-item text-sm ${
                isSelected
                  ? 'nav-item-selected'
                  : item.disabled
                    ? 'nav-item-disabled'
                    : ''
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
