import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(65,214,158,0.14),transparent_55%)] px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-border/70 bg-card/95 p-8 text-center shadow-xl shadow-black/5 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl font-semibold text-primary">
          404
        </div>

        <p className="mt-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          Page not found
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          The page you&apos;re looking for seems to have wandered off.
        </h1>

        <p className="mt-4 text-base leading-7 text-muted-foreground">
          It may have been moved, deleted, or never existed. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  )
}