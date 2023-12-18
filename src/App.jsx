import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import AllQrCode from "./page/AllQrCode";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/all-qr-code" element={<AllQrCode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
