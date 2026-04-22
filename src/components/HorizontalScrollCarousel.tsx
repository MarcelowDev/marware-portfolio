export function HorizontalScrollCarousel({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section className="relative h-[500vh] w-full timeline-horizontal-scroll">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* The horizontally scrolling track */}
        <div className="flex h-full items-center w-max animate-scroll-x">
          {children}
        </div>

      </div>
    </section>
  );
}
