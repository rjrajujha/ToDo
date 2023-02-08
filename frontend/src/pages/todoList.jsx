import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const APIUrl = process.env.REACT_APP_APIURL;

const ToDos = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  console.log("Token from react", token);

  axios
    .get(`${APIUrl}/todos`, {
      headers: {
        'authorization': token
      }
    }).then((res) => {
      console.log("response from backend :", res);
    }).catch((e) => {
      console.log("Error", e)
    }).finally(() => {
      console.log("User Info Fetched")
    })

  useEffect(() => {
    if (!token) {
      console.log("not_a_token");
      navigate('/');
    }
  })

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged Out");
    navigate('/');
  }

  return (
    <>
      <p>ToDos Page</p>
      <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default ToDos;