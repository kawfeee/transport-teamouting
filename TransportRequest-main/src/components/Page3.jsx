import React from 'react';
import Navbar from './Navbar';
import AvatarsPage3 from './AvatarsPage3';

const Page3 = () => {
  return (
    <div className="transport-request-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <AvatarsPage3 />

       
      </div>
    </div>
  );
};

export default Page3;