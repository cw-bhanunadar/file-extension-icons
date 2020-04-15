import React from 'react';

export default function Flash(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="a" x1="28.841" y1="29.545" x2="3.828" y2="3.161" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b42025" />
          <stop offset={1} stopColor="#d42027" />
        </linearGradient>
      </defs>
      <title>file_type_flash</title>
      <rect x={2} y="2.328" width={28} height="27.344" style={{fill: 'url(#a)'}} />
      <path d="M21.56,10.892a4.655,4.655,0,0,1,1.546-.243V7.122a7.439,7.439,0,0,0-6.115,2.884,11.422,11.422,0,0,0-1.529,2.571l-1.147,2.8a23.24,23.24,0,0,1-1.025,2.519,9.844,9.844,0,0,1-1.06,1.876,4.02,4.02,0,0,1-1.39,1.147,4.525,4.525,0,0,1-1.946.4v3.561a7.487,7.487,0,0,0,6.115-2.884,13.442,13.442,0,0,0,1.251-2.015l.973-2.224h4.082V14.211H18.623a11.3,11.3,0,0,1,.8-1.529,4.6,4.6,0,0,1,.938-1.095,3.613,3.613,0,0,1,1.2-.695Z" style={{fill: '#fff', fillRule: 'evenodd'}} />
    </svg>
  );
}
