import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './pages/login';
import Register from './pages/register';
import ToDos from './pages/todoList';
import NoPage from './pages/nopage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />}>
          <Route path="/reg" element={<Register />} />
          <Route path="/todo" element={<ToDos />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
