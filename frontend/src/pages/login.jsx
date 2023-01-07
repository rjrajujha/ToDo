import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const user = e.target[0].value;
    const password = e.target[1].value;
    if (user === password) {
      alert('username is same as password');
    }
    else {
      alert('password is not as username')
    }
    e.preventDefault();
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

          <input type='text' value={username} required onChange={(e) => { handleUserChange(e) }} /><br />

          <input type='password' value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />

          <input type='submit' value='LOGIN' />
        </form>

        <button onClick={SignUp} id='login-reg'> Register </button>
      </div>
    </>
  )
}

export default LogIn;