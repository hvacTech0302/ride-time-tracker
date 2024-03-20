import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import "./App.css";
import "./components/navbar/navigation.styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* If invalid URL, route to NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
