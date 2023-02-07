import { useState } from "react";
import { useNavigate } from "react-router-dom";
const APIUrl = "test.com"

const Register = () => {

  const navigate = useNavigate();

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

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = username;
    const pword = password;
    const cpword = cpassword;
    if (pword !== cpword) {
      alert('Check both Password');
      return;
    }

    const data = { user, pword };
    console.log(data);

    let result = await fetch(`${APIUrl}/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }).catch((e) => {
      alert(e.message);
    });

    let response = await result.json();

    console.warn("result", response)

    localStorage.setItem('user-info', JSON.stringify(result))

    if (response.errors) alert(response.errors[0].msg)
    if (response.status === "failed") {
      alert(response.message);

    }
    if (response.status === "Success") {
      alert("Sign Up Successfully completed !!");
      navigate('/')
    }

  }

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