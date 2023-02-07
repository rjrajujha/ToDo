import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const APIUrl = process.env.REACT_APP_APIURL;

const LogIn = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${APIUrl}/login`, {
        username: username,
        password: password
      }).then((res) => {

        if (res.data.status === "Sucess") {
          window.localStorage.setItem("token", res.data.token);
          alert("LogIn Sucessfull");
          navigate('/todos')
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

  const navigate = useNavigate();
  const SignUp = () => {
    navigate('/reg')
  }

  return (
    <>
      <div id="login-card">
        <h2>Member Login</h2>

        <form onSubmit={(e) => { handleSubmit(e) }}>

          <input type='text' value={username} onChange={(e) => { setUserName(e.target.value) }}
            placeholder="username" required /><br /> <br />

          <input type='password' value={password} onChange={(e) => { setPassword(e.target.value); }}
            placeholder="Password" required /><br /> <br />

          <input type='submit' value='LOGIN' />
        </form>
        <br />
        <button onClick={SignUp} id='login-reg'> Register </button> <br />
      </div>
    </>
  )
}

export default LogIn;