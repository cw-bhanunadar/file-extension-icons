import React from 'react';

export default function Red(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="a" x1="-547.975" y1="-244.974" x2={-547} y2="-244.974" gradientTransform="matrix(4, 0, 0, -4, 2204, -974)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#eea831" />
          <stop offset={1} stopColor="#ffc929" />
        </linearGradient>
        <linearGradient id="b" x1={-547} y1="-247.171" x2="-544.762" y2="-247.171" gradientTransform="matrix(4, 0, 0, -4, 2204, -974)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b32629" />
          <stop offset="0.583" stopColor="#8c1e21" />
          <stop offset={1} stopColor="#7a1a1d" />
        </linearGradient>
        <linearGradient id="c" x1={-547} y1="-244.974" x2="-546.025" y2="-244.974" gradientTransform="matrix(4, 0, 0, -4, 2204, -974)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#e8a333" />
          <stop offset="0.612" stopColor="#c68931" />
          <stop offset={1} stopColor="#ab762f" />
        </linearGradient>
        <linearGradient id="d" y1="-249.368" x2="-543.5" y2="-249.368" xlinkHref="#b" />
        <linearGradient id="e" x1="-550.5" y1="-249.368" x2={-547} y2="-249.368" gradientTransform="matrix(4, 0, 0, -4, 2204, -974)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#ae2524" />
          <stop offset="0.563" stopColor="#d01d19" />
          <stop offset={1} stopColor="#ed1913" />
        </linearGradient>
        <linearGradient id="f" x1="-549.238" y1="-247.171" y2="-247.171" xlinkHref="#e" />
      </defs>
      <title>file_type_red2</title>
      <polygon points="16 9.792 16 2 12.097 7.77 16 9.792" style={{fill: 'url(#a)'}} />
      <polygon points="16 12.097 16 19.903 16 19.903 24.952 15.236 21.048 9.467 16 12.097" style={{fill: 'url(#b)'}} />
      <polygon points="16 9.792 19.903 7.77 16 2 16 9.792" style={{fill: 'url(#c)'}} />
      <polygon points="26.097 16.947 16 22.208 16 22.208 16 30 30 22.717 26.097 16.947" style={{fill: 'url(#d)'}} />
      <polygon points="2 22.717 16 30 16 22.208 5.903 16.947 2 22.717" style={{fill: 'url(#e)'}} />
      <polygon points="10.952 9.467 7.048 15.236 16 19.903 16 12.097 10.952 9.467" style={{fill: 'url(#f)'}} />
    </svg>
  );
}
