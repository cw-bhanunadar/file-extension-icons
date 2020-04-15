import React from 'react';

export default function Sketch(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <title>file_type_sketch</title>
      <path d="M8.109,4.26,16,3.433l7.891.828L30,12.4,16,28.567,2,12.4Z" style={{fill: '#fdb300'}} />
      <polygon points="7.671 12.395 16 28.567 2 12.395 7.671 12.395" style={{fill: '#ea6c00'}} />
      <polygon points="24.329 12.395 16 28.567 30 12.395 24.329 12.395" style={{fill: '#ea6c00'}} />
      <polygon points="7.671 12.395 24.329 12.395 16 28.567 7.671 12.395" style={{fill: '#fdad00'}} />
      <polygon points="16 3.433 8.109 4.26 7.671 12.395 16 3.433" style={{fill: '#fdd231'}} />
      <polygon points="16 3.433 23.891 4.26 24.329 12.395 16 3.433" style={{fill: '#fdd231'}} />
      <polygon points="30 12.395 23.891 4.26 24.329 12.395 30 12.395" style={{fill: '#fdad00'}} />
      <polygon points="2 12.395 8.109 4.26 7.671 12.395 2 12.395" style={{fill: '#fdad00'}} />
      <polygon points="16 3.433 7.671 12.395 24.329 12.395 16 3.433" style={{fill: '#feeeb7'}} />
    </svg>
  );
}