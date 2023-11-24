import Layout from "../layout";
import PrimeraInscripcionFiltro from "./components/primera-inscripcion-filtro";
import PrimeraInscripcionTramita from "./components/primera-inscripcion-tramita";

const PrimeraInscripcionPage = () => {
  return (
    <Layout>
      <PrimeraInscripcionFiltro />
      <PrimeraInscripcionTramita />
    </Layout>
  );
};

export default PrimeraInscripcionPage;
