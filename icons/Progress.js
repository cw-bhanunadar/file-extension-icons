import React from 'react';

export default function Progress(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={32} height={32} {...props}>
      <title>file_type_progress</title>
      <path d="M29.107,9.963h0v14a1.079,1.079,0,0,1-.489.845l-.458.274L24.67,27.1l-2.357,1.372-.489.274V13.6L8.719,6.03l6.224-3.587.574-.327a1.081,1.081,0,0,1,.977,0L25.122,7.1,29.1,9.4v.563Z" style={{fill: '#5ce500'}} />
      <path d="M18.909,15.284l-2.687-1.553L9.935,10.1a1.1,1.1,0,0,0-.977,0L3.378,13.322l-.486.283,9.466,5.464V30l5.571-3.219.491-.274a1.081,1.081,0,0,0,.489-.845Z" style={{fill: '#5ce500'}} />
      <polygon points="2.893 24.536 9.441 28.318 9.441 20.749 2.893 24.536" style={{fill: '#5ce500'}} />
    </svg>
  );
}
