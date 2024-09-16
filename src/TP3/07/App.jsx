
import Cartao from './Card';

function App() {
  return (
    <div className="container mt-4">
      <Cartao
        imagem="https://via.placeholder.com/150"
        titulo="Título do Card"
        descricao="Esta é a descrição do card."
        rodape="Rodapé do Card"
      />
    </div>
  );
}

export default App;
