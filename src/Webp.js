import React from 'react';

export default function Webp(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <filter id="a" name="e">
          <feGaussianBlur stdDeviation="1.275" />
        </filter>
        <linearGradient id="b" x1="596.629" y1="-820.523" x2="599.481" y2="-826.534" gradientTransform="matrix(0.366, 0, 0, -0.366, -210.44, -292.295)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#8ae234" />
          <stop offset={1} stopColor="#4e9a06" />
        </linearGradient>
        <linearGradient id="c" x1="599.996" y1="-815.078" x2="631.107" y2="-868.963" xlinkHref="#b" />
        <linearGradient id="d" x1="648.158" y1="-1013.946" x2="677.021" y2="-1071.027" gradientTransform="matrix(0.347, 0, 0, -0.339, -214.765, -336.913)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" stopOpacity="0.549" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <radialGradient id="e" cx="572.646" cy="-769.85" r="14.375" gradientTransform="matrix(0.358, 0, 0, -0.358, -181.98, -268.597)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" />
          <stop offset="0.5" stopColor="#fff520" stopOpacity="0.891" />
          <stop offset={1} stopColor="#fff300" stopOpacity={0} />
        </radialGradient>
      </defs>
      <title>file_type_webp</title>
      <g style={{filter: 'url(#a)'}}>
        <path d="M4.646,8H27.353a1.976,1.976,0,0,1,1.981,1.971V25.96a1.977,1.977,0,0,1-1.972,1.981H4.646a1.976,1.976,0,0,1-1.98-1.972V9.978A1.976,1.976,0,0,1,4.637,8Z" style={{fillRule: 'evenodd'}} />
        <path d="M4.646,8H27.353a1.976,1.976,0,0,1,1.981,1.971V25.96a1.977,1.977,0,0,1-1.972,1.981H4.646a1.976,1.976,0,0,1-1.98-1.972V9.978A1.976,1.976,0,0,1,4.637,8Z" style={{fill: 'none', stroke: '#000', strokeWidth: '2.0510001182556152px'}} />
      </g>
      <path d="M6.2,6.374H9.481v3.3H6.2Z" style={{stroke: '#366a04', strokeWidth: '2.9019999504089355px', fillRule: 'evenodd', fill: 'url(#b)'}} />
      <path d="M4.646,8H27.353a1.977,1.977,0,0,1,1.981,1.972V25.961a1.977,1.977,0,0,1-1.972,1.98H4.646a1.976,1.976,0,0,1-1.98-1.972V9.978A1.976,1.976,0,0,1,4.638,8h.008Z" style={{stroke: '#366a04', strokeWidth: '3.6050000190734863px', fillRule: 'evenodd', fill: 'url(#c)'}} />
      <path d="M20.877,17.969A4.878,4.878,0,1,1,16,13.092a4.877,4.877,0,0,1,4.877,4.877Z" style={{fill: '#fff', stroke: '#366a04', strokeWidth: '3.6050000190734863px'}} />
      <path d="M5.185,8.7h21.54c1.406,0,1.879.59,1.879,1.835V25.34c0,1.245-.518,1.834-1.879,1.834H5.185c-1.407,0-1.879-.544-1.879-1.834V10.534C3.306,9.152,3.915,8.7,5.185,8.7Z" style={{fill: 'none', strokeLinejoin: 'round', strokeWidth: '3.380000114440918px', stroke: 'url(#d)'}} />
      <circle cx="23.184" cy="7.22" r="5.15" style={{fill: 'url(#e)'}} />
    </svg>
  );
}
