export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-[#fbfaf7]/78 px-5 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center">
        <a
          href="#top"
          className="focus-ring rounded-full text-lg font-bold tracking-normal text-slate-950"
          aria-label="Verbatim home"
        >
          Verbatim
        </a>
      </div>
    </header>
  );
}
