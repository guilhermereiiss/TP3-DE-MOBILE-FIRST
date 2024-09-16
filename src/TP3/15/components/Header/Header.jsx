
import AlterarTema from '../Temas';

function Cabecalho({ alternarTema }) {
  return (
    <header>
      <h1>App Match</h1>
      <AlterarTema alternarTema={alternarTema} />
    </header>
  );
}

export default Cabecalho;
