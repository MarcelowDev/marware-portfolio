import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
      <div className="glass-surface p-16 rounded-[3rem] border border-rose-accent/20 animate-fade-in-up">
        <h2 className="font-headline-xl text-primary mb-4 text-9xl">404</h2>
        <p className="font-body-lg text-on-surface-variant mb-10 max-w-md mx-auto">
          The page you are looking for has been moved into the void. Let's get you back to familiar digital territory.
        </p>
        <Link href="/" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-label-bold lime-glow transition-all inline-block">
          Return to Hub
        </Link>
      </div>
    </main>
  );
}
