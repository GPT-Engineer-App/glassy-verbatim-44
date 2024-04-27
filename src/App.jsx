import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} /> {/* Tambahkan rute untuk halaman login */}
        <Route exact path="/dashboard" element={<Dashboard />} /> {/* Tambahkan rute untuk halaman dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
