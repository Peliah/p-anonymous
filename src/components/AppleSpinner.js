import React from 'react';

const AppleSpinner = () => {
  return (
    <div className="apple-spinner">
      {/* Add your custom apple image here */}
      <img src={require('../assets/images/red-apple-transparen.png')} alt="Loading" />
    </div>
  );
};

export default AppleSpinner;
