import React from 'react';

interface CertificationBadgeProps {
  logoSrc: string;
  alt: string;
  title: string; // e.g., "FSSAI Certified"
  tagText: string; // e.g., "IEC Code: AMNPP7565N"
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ logoSrc, alt, title, tagText }) => {
  return (
    <div className="inline-flex flex-col items-center gap-3">
      {/* Emblem */}
      <div
        className="relative"
        style={{
          width: 168,
          height: 168,
          filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.08))',
        }}
        aria-hidden
      >
        {/* Outer ring */}
        <svg width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="168" y2="168" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <circle cx="84" cy="84" r="82" stroke="url(#ring)" strokeWidth="4" />
        </svg>

        {/* Inner circle (white) */}
        <div className="absolute inset-2 rounded-full bg-white border border-gray-200" />

        {/* Centered logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logoSrc}
            alt={alt}
            className="object-contain"
            style={{ width: 108, height: 108 }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center">
        <div className="font-heading font-semibold text-lg text-primary leading-tight">
          {title}
        </div>
      </div>

      {/* Tag */}
      <div className="px-3 py-1 rounded-full text-white text-xs font-medium" style={{ backgroundColor: '#16A34A' }}>
        {tagText}
      </div>
    </div>
  );
};

export default CertificationBadge;


