interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export function ProgressBar({ currentStep, totalSteps, labels }: ProgressBarProps) {
  return (
    <div className="mb-10">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-[13px] font-semibold text-black">
          {labels[currentStep - 1]}
        </span>
        <span className="text-xs text-[#aaa]">
          Step {currentStep} of {totalSteps}
        </span>
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
