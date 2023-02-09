import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const APIUrl = process.env.REACT_APP_APIURL;


const Register = () => {

  const navigate = useNavigate();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcPassword] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      alert('Check both Password');
      return;
    }

    axios
      .post(`${APIUrl}/signup`, {
        username: username,
        password: password
      }).then((res) => {

        if (res.data.status === "Success") {
          alert(res.data.message);
          navigate('/')
        }
        else {
          alert(res.data.message);
        }

      }).catch((e) => {
        console.log("Error", e)
      }).finally(() => {
        console.log("User Info Fetched")
      })

  }

  const LogIn = () => {
    navigate('/todos')
  }


  return (
    <>
      <div id="reg-card">
        <h2>Register</h2>

        <form onSubmit={(e) => { handleRegister(e) }}>

          <input type='text' value={username} onChange={(e) => { setUserName(e.target.value) }}
            placeholder="username" required /><br /><br />

          <input type='text' value={password} onChange={(e) => { setPassword(e.target.value) }}
            placeholder="Password" required /><br /><br />

          <input type='password' value={cpassword} onChange={(e) => { setcPassword(e.target.value) }} onPaste={(e) => {
            e.preventDefault();
            alert("Pasting is not allowed!");
          }}
            placeholder="Conform Password" required /><br /><br />

          <input type='submit' value='Register' />
        </form>
        <br />
        <button onClick={LogIn} id='reg-login'>LogIn</button>
      </div>
    </>
  )
}

export default Register;