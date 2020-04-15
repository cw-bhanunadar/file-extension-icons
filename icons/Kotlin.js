import React from 'react';

export default function Kotlin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="a" x1="73.714" y1="910.226" x2="105.452" y2="878.134" gradientTransform="translate(-64.139 -782.556) scale(0.893)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#0296d8" />
          <stop offset={1} stopColor="#8371d9" />
        </linearGradient>
        <linearGradient id="b" x1="69.813" y1="905.226" x2="102.279" y2="875.745" gradientTransform="translate(-64.139 -782.556) scale(0.893)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#cb55c0" />
          <stop offset={1} stopColor="#f28e0e" />
        </linearGradient>
      </defs>
      <title>file_type_kotlin</title>
      <path d="M2,2V30H30v-.047l-6.95-7L16.1,15.946l6.95-7.012L29.938,2Z" style={{fill: 'url(#a)'}} />
      <path d="M16.318,2,2,16.318V30h.124L16.132,15.992l-.031-.031L23.05,8.95,29.938,2Z" style={{fill: 'url(#b)'}} />
    </svg>
  );
}
