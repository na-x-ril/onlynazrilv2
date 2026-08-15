import { socials } from "../lib/data";

export default function Footer() {
  return (
    <footer className="border-t-3 border-ink bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 lg:gap-8 px-5 py-9 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-bold tracking-tight text-paper">
            ONLYNAZRIL<span className="text-lime-text">_</span>
          </p>
          <p className="mt-1 text-xs font-bold tracking-widest text-paper/50">
            © {new Date().getFullYear()} — RAW ENERGY, SHIPPED WITH PRIDE
          </p>
        </div>

        <nav aria-label="Socials" className="flex flex-wrap items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="border-2 border-transparent px-3 py-2 text-xs font-bold tracking-widest text-paper/80 transition-colors hover:border-ink hover:bg-blue hover:text-ink"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="nb-btn nb-btn-active w-fit px-4 py-2 text-xs"
        >
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
