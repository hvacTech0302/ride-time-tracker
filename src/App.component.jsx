// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home.page";
import DisneyWorld from "./pages/DisneyWorld/DisneyWorld.page";
import Disneyland from "./pages/Disneyland/Disneyland.page";
import UniversalOrlando from "./pages/UniversalStudiosOrlando/UniversalOrlando.page";
import UniversalHollywood from "./pages/UniversalStudiosHollywood/UniversalHollywood.page";
import NotFound from "./pages/NotFound/NotFound.page";
// Sub-Pages
import MagicKingdom from "./pages/DisneyWorld/MagicKingdom/MagicKingdom.page";
import Epcot from "./pages/DisneyWorld/Epcot/Epcot.page";
import AnimalKingdom from "./pages/DisneyWorld/AnimalKingdom/AnimalKingdom.page";
import HollywoodStudios from "./pages/DisneyWorld/HollywoodStudios/HollywoodStudios.page";
import DisneylandPark from "./pages/Disneyland/Disneyland/DisneylandPark.page";
import CaliforniaAdventure from "./pages/Disneyland/CaliforniaAdventure/CaliforniaAdventure.page";
import UniversalOrlandoPark from "./pages/UniversalStudiosOrlando/UniversalOrlando/UniversalOrlandoPark.page";
import IslandsOfAdventure from "./pages/UniversalStudiosOrlando/IslandsOfAdventure/IslandsOfAdventure.page";
// Components
import Navbar from "./components/Navbar/Navbar.component";
import Footer from "./components/Footer/Footer.component";
// Stylesheets
import "./app.styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route index element={<Home />} />
        {/* Disney World Main Page */}
        <Route path="/disney-world" element={<DisneyWorld />} />
        {/* Disney World Parks Pages */}
        <Route path="/Disney-Magic-Kingdom" element={<MagicKingdom />} />
        <Route path="/Epcot" element={<Epcot />} />
        <Route path="/Animal-Kingdom" element={<AnimalKingdom />} />
        <Route
          path="/Disney-Hollywood-Studios"
          element={<HollywoodStudios />}
        />
        {/* Disneyland Main Page */}
        <Route path="/disneyland" element={<Disneyland />} />
        {/* Disneyland Parks Pages */}
        <Route
          path="/disneyland/disneyland-park"
          element={<DisneylandPark />}
        />
        <Route
          path="/disneyland/california-adventure"
          element={<CaliforniaAdventure />}
        />
        {/* Universal Orlando Main Page */}
        <Route path="/universal-orlando" element={<UniversalOrlando />} />
        {/* Universal Orlando Parks Pages */}
        <Route
          path="universal-orlando/universal-orlando-park"
          element={<UniversalOrlandoPark />}
        />
        <Route
          path="universal-orlando/islands-of-adventure-park"
          element={<IslandsOfAdventure />}
        />
        {/* Universal Hollywood Main & Park Page (Single Park) */}
        <Route
          path="/universal-hollywood-park"
          element={<UniversalHollywood />}
        />
        {/* If invalid URL, route to NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
