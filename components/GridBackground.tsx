export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute left-1/2 top-1/3 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 top-0 h-[25rem] w-[25rem] rounded-full bg-violet-500/10 blur-[120px]" />
    </div>
  );
}
