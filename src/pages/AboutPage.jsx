import React from 'react';
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <SEO
        pageTitle="About Us — Brand Development & Marketing Agency India"
        description="Learn about TalentElla — India's 360° marketing agency. 50+ clients, 120+ projects delivered in brand development, web dev, SMM & visual identity design."
        url="https://talentella.in/about"
      />
      <div style={{ paddingTop: '80px' }}>
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
