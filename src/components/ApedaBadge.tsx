import React from 'react';
import CertificationBadge from './CertificationBadge';
import apedaLogo from '@/assets/apeda_new_logo.jpg';

const ApedaBadge: React.FC = () => {
  return (
    <CertificationBadge
      logoSrc={apedaLogo}
      alt="APEDA Logo"
      title="APEDA Certified"
      tagText="APEDA Registered"
    />
  );
};

export default ApedaBadge;


