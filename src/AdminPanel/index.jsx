import React from 'react';
import './style.css';

function AdminPanel() {
  const admin ={
    name: 'John',
    greet: 'Welcome to our Admin Panel!'
  };
  return(
    <>
      <h1 className='admin'>Welcome John!</h1>
      <h2 className = 'greet'>Welcome to our Admin Panel!</h2>
      <h2 className="name">{admin.name} likes these sport games</h2>
    </>
  )
};

export default AdminPanel;