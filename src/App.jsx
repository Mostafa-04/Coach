import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./components/Index";
import Booking from "./components/booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;