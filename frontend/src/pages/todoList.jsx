import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ToDos = () => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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