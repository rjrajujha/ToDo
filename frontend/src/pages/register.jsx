import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {


  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');


  const handleUserChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handlecPasswordChange = (e) => {
    setcPassword(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const user = e.target[0].value;
    const password = e.target[1].value;
    const cpassword = e.target[2].value;
    if (password !== cpassword) {
      alert('Check both Password');
    } else {
      alert(`${user} Registered`);
    }
    e.target[0].value = '';
  }

  const navigate = useNavigate();
  const LogIn = () => {
    navigate('/')
  }


  return (
    <>
      <div id="reg-card">
        <h2>Register</h2>

        <form onSubmit={(e) => { handleRegister(e) }}>

          <input type='text' value={username} onChange={(e) => { handleUserChange(e) }} required
            placeholder="username" /><br />

          <input type='text' value={password} onChange={(e) => { handlePasswordChange(e) }} required placeholder="Password" /><br />

          <input type='password' value={cpassword} onChange={(e) => { handlecPasswordChange(e) }} placeholder="Conform Password" /><br />

          <input type='submit' value='Register' />
        </form>

        <button onClick={LogIn} id='reg-login'>LogIn</button>
      </div>
    </>
  )
}

export default Register;