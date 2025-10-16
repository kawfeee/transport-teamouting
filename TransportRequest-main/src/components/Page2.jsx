import React from 'react';
import Navbar from './Navbar';
import AvatarsPage2 from './AvatarsPage2';

const Page2 = () => {
  return (
    <div className="transport-request-page">
      <Navbar />

      <div style={{ maxWidth: 1100, margin: '24px auto', padding: '0 16px' }}>
        {/* avatars / header */}
        <AvatarsPage2 />

       
      </div>
    </div>
  );
};

export default Page2;