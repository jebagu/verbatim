import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-900/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-bold text-slate-950">Verbatim</p>
          <p className="mt-2 text-sm text-slate-500">
            A writing laboratory for professional communication.
          </p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full text-sm font-medium text-slate-500 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Verbatim
        </p>
      </div>
    </footer>
  );
}
