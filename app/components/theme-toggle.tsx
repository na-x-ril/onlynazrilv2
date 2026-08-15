"use client";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => {
        const root = document.documentElement;
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try {
          localStorage.setItem("theme", next);
        } catch {}
      }}
      className="grid h-8 w-8 ml-2 shrink-0 place-items-center border-3 border-ink bg-surface text-paper shadow-[3px_3px_0_0_#0a0a0a] transition-[translate,box-shadow] duration-120 -translate-x-0.75 -translate-y-0.75 hover:translate-x-0 hover:translate-y-0 hover:shadow-none active:translate-x-0 active:translate-y-0 active:shadow-none max-sm:h-7 max-sm:w-7"
    >
      <svg
        className="theme-toggle-sun h-4 w-4 max-sm:h-3.5 max-sm:w-3.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4 13a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2H4Zm14 0a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2h-2ZM4.93 6.34a1 1 0 0 1 1.41 0l1.42 1.41a1 1 0 1 1-1.42 1.42L4.93 7.75a1 1 0 0 1 0-1.41Zm11.31 11.32a1 1 0 0 1 1.41 0l1.42 1.41a1 1 0 0 1-1.42 1.42l-1.41-1.42a1 1 0 0 1 0-1.41Zm0-11.32a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 1 1-1.41-1.42l1.41-1.41a1 1 0 0 1 1.42 0ZM4.93 17.66a1 1 0 0 1 1.41-1.41l1.42 1.41a1 1 0 1 1-1.42 1.42l-1.41-1.42Z" />
      </svg>
      <svg
        className="theme-toggle-moon h-4 w-4 max-sm:h-3.5 max-sm:w-3.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    </button>
  );
}
