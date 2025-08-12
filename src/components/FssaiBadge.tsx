import React from 'react';
import CertificationBadge from './CertificationBadge';
import fssaiLogo from '@/assets/fssai_logo.png';

const FssaiBadge: React.FC = () => {
  return (
    <CertificationBadge
      logoSrc={fssaiLogo}
      alt="FSSAI Logo"
      title="FSSAI Certified"
      tagText="IEC Code: AMNPP7565N"
    />
  );
};

export default FssaiBadge;


