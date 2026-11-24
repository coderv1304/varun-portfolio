export default function ArchitectureDiagram({
  steps,
  label = "Architecture, in request order",
}: {
  steps: string[];
  label?: string;
}) {
  return (
    <ol className="arch-flow" aria-label={label}>
      {steps.map((step, index) => (
        <li
          key={step}
          className="arch-step"
          data-index={String(index + 1).padStart(2, "0")}
        >
          {step}
        </li>
      ))}
    </ol>
  );
}
