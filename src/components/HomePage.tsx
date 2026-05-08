type HomePageProps = {
  onStart: () => void;
};

export function HomePage({ onStart }: HomePageProps) {
  return (
    <main className="app-shell">
      <section className="page-frame-narrow home-panel">
        <p className="eyebrow mb-4">
          Enquête FLE
        </p>
        <h1 className="page-title max-w-3xl">
          enquete-fle
        </h1>
        <p className="body-copy mt-6 max-w-2xl text-lg">
          Un jeu d'enquête documentaire pour faire du français un outil de
          déduction.
        </p>
        <div className="mt-10">
          <button
            className="primary-button text-base focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
            type="button"
            onClick={onStart}
          >
            Commencer l'enquête
          </button>
        </div>
      </section>
    </main>
  );
}
