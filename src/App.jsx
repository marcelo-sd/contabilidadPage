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
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/contabilidadPage/home" element={<Home />} />
        <Route path="/contabilidadPage/" element={<Home />} />
        <Route path="/contabilidadPage/funciones" element={<Funciones />} />
        <Route path="/contabilidadPage/caracteristicas" element={<Caracteristicas />} />
        <Route path="/contabilidadPage/lazy" element={<Lazy />} />
        <Route path="/contabilidadPage/worker" element={<Worker />} />
        <Route path="/contabilidadPage/singir" element={<SingIr />} />
        <Route path="/contabilidadPage/mensajeria" element={<Mensajeria />} />
        <Route path="/contabilidadPage/diagramas" element={<Diagramas />} />
        <Route path="/contabilidadPage/documentacion" element={<Documentacion />} />
        <Route path="/contabilidadPage/seguridad" element={<Seguridad />} />
        <Route path="/contabilidadPage/redis" element={<Redis />} />
        <Route path="/contabilidadPage/contacto" element={<Contacto />} />
        <Route path="/contabilidadPage/token" element={<Token />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
