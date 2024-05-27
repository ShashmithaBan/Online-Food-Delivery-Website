import React from 'react';

const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: '#ffcb22',
      borderRadius: '50%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: 1,
      cursor: 'pointer',
      color: '#ffffff',
    }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: '#ffcb22',
      borderRadius: '50%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      zIndex: 1,
      cursor: 'pointer',
      color: '#ffffff',
    }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
