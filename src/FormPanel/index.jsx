import React from 'react';
import './style.css';

function FormPanel() {
  return (
    <>
      <form>
        <label className="label">
          Enter your login:
          <input type="text" placeholder="Enter your login..." className="login"/>
        </label>
        <label className="label">
          Enter your password:
          <input type="password" placeholder="Enter your password..." className="psw"/>
        </label>
        <button className="btn">Submit</button>
      </form>
    </>
  )
}

export default FormPanel();