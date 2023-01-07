import useState from "react";
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

  const handleSubmit = (e) => {
    const password = e.target[1].value;
    const cpassword = e.target[2].value;
    if (password === cpassword) {
      alert('Password is same as conformPassword');
    }
    else {
      alert('password is not as conformPassword')
    }
    e.preventDefault();
  }

  const navigate = useNavigate();
  const LogIn = () => {
    navigate('/')
  }


  return (
    <>

      <div id="login-card">
        <h2>Register</h2>

        <form onSubmit={(e) => { handleSubmit(e) }}>

          <input type='text' value={username} required onChange={(e) => { handleUserChange(e) }} /><br />

          <input type='password' value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />

          <input type='password' value={cpassword} required onChange={(e) => { handlecPasswordChange(e) }} /><br />

          <input type='submit' value='Register' />
        </form>

        <button onClick={LogIn} id='reg-login'>LogIn</button>
      </div>

    </>
  )
}

export default Register;