'use client';

import React from 'react';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <div style={{ paddingTop: '80px' }}>
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
