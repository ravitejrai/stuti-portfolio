export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle mb-4">
          404: page not found
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.05]">
          That page is <em className="italic">elsewhere</em>.
        </h1>
        <p className="mt-6 text-ink-muted max-w-prose">
          The link may be old, or the page may have moved. Try the{" "}
          <a href="/" className="underline decoration-ink-subtle underline-offset-4 hover:decoration-ink">
            homepage
          </a>{" "}
          or the{" "}
          <a href="/work" className="underline decoration-ink-subtle underline-offset-4 hover:decoration-ink">
            work index
          </a>
          .
        </p>
      </div>
    </section>
  );
}
