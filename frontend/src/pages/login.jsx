import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const LogIn = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleUserChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    // const password = e.target[1].value;
   alert(`no user found with username ${user}`);
  }

  const navigate = useNavigate();
  const SignUp = () => {
    navigate('/reg')
  }

  return (
    <>
      <div id="login-card">
        <h2>Member Login</h2>

        <form onSubmit={(e) => { handleSubmit(e) }}>

          <input type='text' value={username} required onChange={(e) => { handleUserChange(e) }} 
 placeholder="username" /><br />

          <input type='password' value={password} required onChange={(e) => { handlePasswordChange(e) }} placeholder="Password" /><br />

          <input type='submit' value='LOGIN' />
        </form>

        <button onClick={SignUp} id='login-reg'> Register </button> <br />
        <Link to="/reg"> SignUp </Link>
      </div>
    </>
  )
}

export default LogIn;