import { Route, Routes ,Navigate} from "react-router-dom";
import Home from "./Components/Home";
import Funciones from "./Components/Funciones";
import Caracteristicas from "./Components/Caracteristicas";
import Lazy from "./Components/Lazy";
import Worker from "./Components/Worker";
import SingIr from "./Components/SingIr";
import Mensajeria from "./Components/Mensajeria";
import Diagramas from "./Components/Diagramas";
import Documentacion from "./Components/Documentacion";
import Seguridad from "./Components/Seguridad";
import Redis from "./Components/Redis";
import Contacto from "./Components/Contacto";
import Token from "./Components/Token";
import NavBar from "./Components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/funciones" element={<Funciones />} />
        <Route path="/caracteristicas" element={<Caracteristicas />} />
        <Route path="/lazy" element={<Lazy />} />
        <Route path="/worker" element={<Worker />} />
        <Route path="/singir" element={<SingIr />} />
        <Route path="/mensajeria" element={<Mensajeria />} />
        <Route path="/diagramas" element={<Diagramas />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/seguridad" element={<Seguridad />} />
        <Route path="/redis" element={<Redis />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/token" element={<Token />} />
      </Routes>
    </>
  );
}

export default App;
