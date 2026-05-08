import React from 'react';

export type ScenarioListItem = {
  id: string;
  title: string;
  meta?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
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
              {item.icon && (
                <div className="mt-0.5 shrink-0 text-slate-500">
                  {item.icon}
                </div>
              )}
              <div className="flex-1 text-left">
                <span className="block font-semibold">{item.title}</span>
              {item.meta ? (
                <span className="mt-1 block text-xs text-slate-600">
                  {item.meta}
                </span>
              ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
