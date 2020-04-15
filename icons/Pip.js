import React from 'react';

export default function Pip(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <defs>
        <linearGradient id="linear-gradient" x1="17.649" y1="8.845" x2="28.104" y2="19.301" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#387eb8" />
          <stop offset={1} stopColor="#366994" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="10.011" y1="22.109" x2="20.363" y2="11.758" gradientTransform="matrix(1, 0, 0, -1, 0, 32.257)" gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#ffe052" />
          <stop offset={1} stopColor="#ffc331" />
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="-0.155" y1="8.846" x2="10.301" y2="19.301" xlinkHref="#linear-gradient" />
      </defs>
      <title>file_type_pip</title>
      <path d="M24.989,7.936l-.028-.009c-5.58,0-5.15,2.794-5.15,2.794V21.326s-.006,2.749,2.562,2.749h.018c2.513,0,2.51-2.747,2.51-2.747V16.52h2.972C30,16.52,30,15.159,30,15.159V10.246S30.333,7.936,24.989,7.936Zm3.7,2.541h0a.914.914,0,1,1-.89-.936h0l-.024.007a.914.914,0,0,1,.914.914v.015Z" style={{fill: 'url(#linear-gradient)'}} />
      <path d="M16.01,24.073h-.017c-2.561,0-2.561-3.585-2.561-3.585v-8.78s-.007-3.531,2.561-3.524h.018c2.51,0,2.51,3.524,2.51,3.524v8.78S18.521,24.072,16.01,24.073Zm.947-2.3h0a.914.914,0,1,0-.89.937l-.024-.007h0a.914.914,0,0,0,.914-.914Z" style={{fill: 'url(#linear-gradient-2)'}} />
      <path d="M7.186,7.936l-.028-.012c-5.58,0-5.15,2.794-5.15,2.794V21.326S2,24.076,4.568,24.076h.018c2.513,0,2.51-2.747,2.51-2.747V16.52h2.971c2.129,0,2.124-1.361,2.124-1.361V10.246S12.526,7.936,7.186,7.936Zm3.7,2.541h0A.914.914,0,1,1,10,9.54h0l-.024.007a.914.914,0,0,1,.914.914v.015Z" style={{fill: 'url(#linear-gradient-3)'}} />
    </svg>
  );
}
