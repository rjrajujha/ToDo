import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/login';
import Register from './pages/register'
import ToDos from './pages/todoList';
import NoPage from './pages/nopage';
import axios from "axios";

const APIUrl = process.env.REACT_APP_APIURL;

function App() {

  //Environment Variables Configured Message
  console.log(process.env.REACT_APP_ENV_STATUS);

  //Initializing backend connection
  axios
    .post(`${APIUrl}/init`)
    .then((res) => {
      if (res.data.status === "Connected") {
        console.log(res.data.message);
      }
      else {
        console.log("Error Connecting Database");
      }
    }).catch((e) => {
      console.log("Error Connecting Backend :", e)
    }).finally(() => {
      console.log("Backend Connection finished")
    })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/reg" element={<Register />} />
          <Route path="/todos" element={<ToDos />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;