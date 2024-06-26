import "./usersignup.css";

const SignUp = () => {
  return (
    <div className="usersign">
      <div className="data">
        <h1>SignUp</h1>
        <div className="insert">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Username</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <label htmlFor="">ConfirmPassword</label>
          <input type="text" />
        </div>
        <button className="up">SignUp</button>
      </div>
    </div>
  );
};

export default SignUp;

// import React from 'react';
// import axios from 'axios';

// const GoogleLoginButton = ({ onSuccess }) => {
//   const handleLoginClick = async () => {
//     try {
//       const res = await axios.get('http://localhost:3001/auth/google');
//       // Handle success or redirect to the returned URL
//       window.location.href = res.data.redirectUrl; // Redirect to the returned URL from backend
//     } catch (error) {
//       console.error('Error logging in with Google:', error);
//     }
//   };

//   return (
//     <button onClick={handleLoginClick}>Login with Google</button>
//   );
// };

// export default GoogleLoginButton;
