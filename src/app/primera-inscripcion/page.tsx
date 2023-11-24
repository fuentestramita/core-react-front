import Layout from "../layout";
import PrimeraInscripcionDatosVehiculo from "./components/primera-inscripcion-datos-vehiculo";
import PrimeraInscripcionFiltro from "./components/primera-inscripcion-filtro";
import PrimeraInscripcionTramita from "./components/primera-inscripcion-tramita";

const PrimeraInscripcionPage = () => {
  return (
    <Layout>
      <PrimeraInscripcionFiltro />
      <PrimeraInscripcionTramita />
      <PrimeraInscripcionDatosVehiculo />
    </Layout>
  );
};

export default PrimeraInscripcionPage;
