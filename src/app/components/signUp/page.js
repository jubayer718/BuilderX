
import React from 'react';

const SignUpForm = () => {
  return (
    <div>
      <form>
        <label>
          Name
          <input name="name" type="text" />
        </label>
        <label>
          Email
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;