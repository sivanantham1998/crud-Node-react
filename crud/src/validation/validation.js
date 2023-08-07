import React, { useState } from 'react';

const ValidationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate form inputs
    if (name.trim() === '') {
      setError('Name is required');
      return;
    }

    if (email.trim() === '') {
      setError('Email is required');
      return;
    }

    // If form is valid, proceed with submission
    // Your submission logic goes here...
    console.log('Name:', name);
    console.log('Email:', email);

    // Reset form inputs
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Validation Form</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

        </div>
      {error && <p>{error}</p>}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidationForm;
