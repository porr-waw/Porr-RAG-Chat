import './EmptyState.css';

type EmptyStateProps = {
  onSuggest: (prompt: string) => void;
  disabled?: boolean;
};

type Suggestion = {
  title: string;
  prompt: string;
  hint: string;
};

const SUGGESTIONS: Suggestion[] = [
  {
    title: 'Wymagania EIR',
    prompt:
      'Streść kluczowe wymagania EIR dotyczące modeli BIM i ich rewizji.',
    hint: 'Streszczenie wymagań wymiany informacji.',
  },
  {
    title: 'Model Powykonawczy',
    prompt:
      'Jak powstaje Model Powykonawczy i co powinien zawierać po zakończeniu robót?',
    hint: 'Definicja i zawartość modelu.',
  },
  {
    title: 'CDE i przepływ dokumentów',
    prompt:
      'Opisz sposób przekazywania dokumentacji projektowej w środowisku CDE.',
    hint: 'Common Data Environment.',
  },
  {
    title: 'Załączniki 8–27',
    prompt:
      'Wymień rolę załączników 8–27 w dokumentacji zakresu opcjonalnego.',
    hint: 'Mapowanie załączników.',
  },
];

export function EmptyState({ onSuggest, disabled = false }: EmptyStateProps) {
  return (
    <section className="empty-state" aria-label="Sugestie startowe">
      <div className="empty-state__inner">
        <div className="empty-state__logo" aria-hidden="true">
          K
        </div>

        <h2 className="empty-state__title">
          Zapytaj <span>Korpus</span> o dokumentację
        </h2>

        <p className="empty-state__lede">
          Asystent RAG przeszukuje wgrane dokumenty PORR i odpowiada
          ze wskazaniem konkretnych źródeł.
        </p>

        <div className="empty-state__suggestions">
          {SUGGESTIONS.map((s) => (
            <button
              key={s.title}
              type="button"
              className="empty-state__card"
              disabled={disabled}
              onClick={() => onSuggest(s.prompt)}
            >
              <span className="empty-state__card-title">{s.title}</span>
              <span className="empty-state__card-hint">{s.hint}</span>
              <span className="empty-state__card-arrow" aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>

        <p className="empty-state__shortcut">
          Naciśnij <kbd>Ctrl</kbd> + <kbd>K</kbd>, aby utworzyć nową rozmowę ·
          <kbd>Ctrl</kbd> + <kbd>/</kbd>, aby przeszukać historię.
        </p>
      </div>
    </section>
  );
}
