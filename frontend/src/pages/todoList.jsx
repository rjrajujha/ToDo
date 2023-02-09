import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const APIUrl = process.env.REACT_APP_APIURL;

const ToDos = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log("Token from react :", token);

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

        //ToDos data Oprations
        console.log(res.data);

      }
      else {
        console.warn("Error_fetching_data", res.data);
        localStorage.removeItem("token");
        navigate('/');
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