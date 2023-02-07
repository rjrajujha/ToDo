import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/login';
import Register from './pages/register'
import ToDos from './pages/todoList';
import NoPage from './pages/nopage';

function App() {
  console.log(process.env.REACT_APP_ENV_STATUS);
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
