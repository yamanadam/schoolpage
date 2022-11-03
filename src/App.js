import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Graduates from "./pages/Graduates";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import GrdDetail from "./pages/GrdDetail";
import { Navigate } from "react-router-dom";
import Exam from "./pages/Exam";
import Sporting from "./pages/Sporting";
import Social from "./pages/Social";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/graduates/:id" element={<GrdDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />}>
          <Route path="exam" element={<Exam />} />
          <Route path="sporting" element={<Sporting />} />
          <Route path="social" element={<Social />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
