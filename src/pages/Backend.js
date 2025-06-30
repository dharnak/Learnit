import React, { useEffect, useState } from 'react';

function Backend() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Simple API Call Example</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default Backend;

