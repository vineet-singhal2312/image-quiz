import "./App.css";
import { UserDetails } from "./pages/UserDetails/UserDetails";
import { Routes, Route } from "react-router-dom";
import { Quiz } from "./pages/quiz/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserDetails />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
