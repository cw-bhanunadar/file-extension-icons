import React from 'react';

export default function GridSome(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="a" x1="18.92" y1="10.58" x2="26.55" y2="9.6" gradientTransform="matrix(1, 0, 0, -1, 0, 32)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#1a7d75" />
          <stop offset={1} stopColor="#1a8864" />
        </linearGradient>
        <linearGradient id="b" x1="11.46" y1="13.46" x2="7.6" y2="3.34" gradientTransform="matrix(1, 0, 0, -1, 0, 32)" gradientUnits="userSpaceOnUse">
          <stop offset="0.01" stopColor="#168a81" />
          <stop offset={1} stopColor="#31a97f" />
        </linearGradient>
        <linearGradient id="c" x1="20.67" y1="23.36" x2="27.15" y2="13.54" gradientTransform="matrix(1, 0, 0, -1, 0, 32)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#27a59b" />
          <stop offset={1} stopColor="#64d8a2" />
        </linearGradient>
        <linearGradient id="d" x1="10.7" y1="20.5" x2="17.69" y2="14.45" xlinkHref="#c" />
        <linearGradient id="e" x1="24.45" y1="16.91" x2="3.9" y2="23.83" xlinkHref="#c" />
      </defs>
      <title>file_type_gridsome</title>
      <path d="M27.32,13.59A2.57,2.57,0,0,1,30,15.92c.5,6.53-5.36,13.83-13.76,14.06A2.43,2.43,0,0,1,13.7,27.6h0a2.45,2.45,0,0,1,2.37-2.52c5.58-.15,9.11-5,8.92-8.93a2.45,2.45,0,0,1,2.32-2.56Z" style={{fillRule: 'evenodd', fill: 'url(#a)'}} />
      <path d="M4.47,13.45A2.45,2.45,0,0,1,6.91,15.9h0A9,9,0,0,0,16,25.1a2.43,2.43,0,0,1,2.5,2.38h0A2.45,2.45,0,0,1,16.1,30,13.91,13.91,0,0,1,2,15.9a2.47,2.47,0,0,1,2.47-2.45Z" style={{fillRule: 'evenodd', fill: 'url(#b)'}} />
      <path d="M21.22,16.09a2.51,2.51,0,0,1,2.52-2.51h3.67a2.51,2.51,0,1,1,0,5H23.74a2.51,2.51,0,0,1-2.52-2.51Z" style={{fill: 'url(#c)'}} />
      <path d="M13.51,16.09A2.5,2.5,0,1,1,16,18.61,2.5,2.5,0,0,1,13.51,16.09Z" style={{fill: 'url(#d)'}} />
      <path d="M18.44,4.35A2.44,2.44,0,0,1,16.11,6.9c-5.82.24-9.37,4.82-9.2,9.17A2.41,2.41,0,0,1,4.6,18.61,2.52,2.52,0,0,1,2,16.22,14,14,0,0,1,15.9,2a2.45,2.45,0,0,1,2.54,2.35Z" style={{fillRule: 'evenodd', fill: 'url(#e)'}} />
    </svg>
  );
}
