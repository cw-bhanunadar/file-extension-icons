import React from 'react';

export default function Diff(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <title>file_type_diff</title>
      <rect x="6.975" y={3} width="18.05" height="6.017" style={{fill: '#c00000'}} />
      <path d="M12.992,10.95v6.017H6.975v6.017h6.017V29h6.017V22.983h6.017V16.967H19.008V10.95Z" style={{fill: 'green'}} />
    </svg>
  );
}
