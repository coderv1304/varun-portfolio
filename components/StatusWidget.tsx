export function StatusWidget() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs tracking-[0.2em] text-slate-500">
          SYSTEM STATUS
        </span>
        <span className="flex items-center gap-2 text-xs text-green-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          ONLINE
        </span>
      </div>

      <div className="space-y-4 font-mono text-xs">
        {[
          ["AVAILABILITY", "OPEN"],
          ["MCA", "VESIT MUMBAI"],
          ["CGPA", "8.5"],
          ["FOCUS", "DEVOPS / CLOUD"],
        ].map(([key, value]) => (
          <div key={key} className="flex justify-between gap-4">
            <span className="text-slate-500">{key}</span>
            <span className="text-slate-200">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
