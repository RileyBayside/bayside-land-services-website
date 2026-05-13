interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  return (
    <div className="mb-10">
      <div className="mb-3 flex justify-between">
        {labels.map((label, i) => (
          <span
            key={label}
            className={`text-xs font-semibold tracking-[0.3px] ${
              i + 1 <= currentStep ? 'text-brand' : 'text-[#bbb]'
            }`}
          >
            {label}
          </span>
        ))}
      </div>
      <div
        className="h-1.5 w-full rounded-full bg-[#e5e5e3]"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={1}
        aria-valuemax={totalSteps}
        aria-label={`Step ${currentStep} of ${totalSteps}: ${labels[currentStep - 1]}`}
      >
        <div
          className="h-1.5 rounded-full bg-brand transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
