import { useState } from 'react';

function Example({ user, onUpdateUser }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:4000/posts/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((data) => onUpdateUser(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Email:
        <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type='submit'>Update User</button>
    </form>
  );
}

export default Example;
