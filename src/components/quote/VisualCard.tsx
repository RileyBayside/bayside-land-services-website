'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';

interface VisualCardProps {
  label: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export function VisualCard({ label, description, image, icon, selected, onClick }: VisualCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-full overflow-hidden rounded-[10px] border-[2px] text-left transition-all duration-200 ${
        selected
          ? 'border-brand shadow-[0_0_0_3px_rgba(74,124,47,0.12)]'
          : 'border-[#e5e5e3] hover:border-brand'
      }`}
    >
      {image && (
        <div className="relative aspect-video w-full overflow-hidden">
          <Image src={image} alt={label} fill sizes="(max-width: 640px) 50vw, 300px" className="object-cover" />
          {selected && <div className="absolute inset-0 bg-brand/20" />}
        </div>
      )}

      {!image && icon && (
        <div className={`flex items-center justify-center py-6 ${selected ? 'bg-brand-pale' : 'bg-[#fafafa]'}`}>
          {icon}
        </div>
      )}

      {selected && (
        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand shadow-sm">
          <Check size={13} className="text-white" />
        </div>
      )}

      <div className={`px-3 py-3 ${selected ? 'bg-brand-pale' : 'bg-white'}`}>
        <div className="text-[14px] font-semibold leading-tight text-black">{label}</div>
        {description && (
          <div className="mt-0.5 text-[12px] leading-snug text-[#666]">{description}</div>
        )}
      </div>
    </button>
  );
}
