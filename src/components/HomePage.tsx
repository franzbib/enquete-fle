type HomePageProps = {
  onStart: () => void;
};

export function HomePage({ onStart }: HomePageProps) {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10 text-slate-900">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col justify-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-teal-800">
          Prototype V0.2
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          enquete-fle
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Un jeu d'enquête documentaire pour faire du français un outil de
          déduction.
        </p>
        <div className="mt-10">
          <button
            className="rounded-md bg-teal-800 px-5 py-3 text-base font-semibold text-white hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2"
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
