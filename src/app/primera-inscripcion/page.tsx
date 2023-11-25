import Layout from "../layout";
import PrimeraInscripcionDatosVehiculo from "./components/primera-inscripcion-datos-vehiculo";
import PrimeraInscripcionFiltro from "./components/primera-inscripcion-filtro";
import PrimeraInscripcionNuevoPropietario from "./components/primera-inscripcion-nuevo-propietario";
import PrimeraInscripcionTramita from "./components/primera-inscripcion-tramita";

const PrimeraInscripcionPage = () => {
  return (
    <Layout>
      <PrimeraInscripcionFiltro />
      <PrimeraInscripcionTramita />
      <PrimeraInscripcionDatosVehiculo />
      <PrimeraInscripcionNuevoPropietario />
    </Layout>
  );
};

export default PrimeraInscripcionPage;
