import React from 'react';

const DividerWithText = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex-grow h-px bg-black"></div>
      <div className="mx-2">{text}</div>
      <div className="flex-grow h-px bg-black"></div>
    </div>
  );
};

export default DividerWithText;
