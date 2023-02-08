import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const APIUrl = process.env.REACT_APP_APIURL;

const ToDos = () => {

  let notes = [];

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log("Token from react", token);

  useEffect(() => {
    if (!token) {
      console.warn("not_a_token");
      navigate('/');
      return;
    }
  })

  axios
    .get(`${APIUrl}/todos`, {
      headers: {
        'authorization': token
      }
    }).then((res) => {
      if (res.data.status === "sucess") {
        notes = res.data.data;
        console.log(notes);
      }
      else {
        console.warn("Error_fetching_data");
      }
    }).catch((e) => {
      console.log("Error", e)
    }).finally(() => {
      console.log("User Info Fetched")
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