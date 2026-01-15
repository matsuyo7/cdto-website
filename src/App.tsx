import Navbar from "./app/components/Navbar";
import Home from "./app/pages/Home";
import Footer from "./app/components/Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Home /> */}
        <main className="min-h-screen">
          {/* Define routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
