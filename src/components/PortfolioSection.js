import React from 'react';

const PortfolioSection = () => {
  return (
    <div style={{ position: 'relative', padding: '40px', backgroundColor: '#3E3E3E', textAlign: 'center', overflow: 'hidden' }}>
      {/* Watermark Logo */}
      <img
        src="https://i.ibb.co/HP0tZCq/Untitled-1.png"
        alt="Watermark Logo"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: '0.2', height: '80%', width: '80%' }}
      />

      <h2 style={{ fontSize: '36px', color: 'white', marginBottom: '30px' }}>Our Services</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '100px', overflow: 'hidden' }}>
        <div style={{ color: 'white', fontSize: '24px', textAlign: 'left', maxWidth: '400px' }}>
          <h3 style={{ color: '#FF5A5F', marginBottom: '20px' }}>Design Services</h3>
          <ul style={{ padding: 0, overflow: 'hidden' }}>
            <li style={{ marginBottom: '10px' }}>Interior Designs</li>
            <li style={{ marginBottom: '10px' }}>Elevation Designs</li>
            <li style={{ marginBottom: '10px' }}>Exterior Designs</li>
            <li style={{ marginBottom: '10px' }}>Floor Plans</li>
            <li style={{ marginBottom: '10px' }}>Material Selection</li>
            <li style={{ marginBottom: '10px' }}>Client Testimonials</li>
            <li style={{ marginBottom: '10px' }}>Before and After Comparisons</li>
          </ul>
        </div>

        <div style={{ color: 'white', fontSize: '24px', textAlign: 'left', maxWidth: '400px' }}>
          <h3 style={{ color: '#4CAF50', marginBottom: '20px' }}>Other Services</h3>
          <ul style={{ padding: 0, overflow: 'hidden' }}>
            <li style={{ marginBottom: '10px' }}>3D Renderings</li>
            <li style={{ marginBottom: '10px' }}>Construction Projects</li>
            <li style={{ marginBottom: '10px' }}>Renovation Projects</li>
            <li style={{ marginBottom: '10px' }}>Commercial Design</li>
            <li style={{ marginBottom: '10px' }}>Residential Design</li>
            <li style={{ marginBottom: '10px' }}>Sustainable Design Practices</li>
            <li style={{ marginBottom: '10px' }}>Process Showcase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
