
import './main.css';
import Menu from './components/Menu';
import DetalhesProduto from './components/DetalheProduto';
import GaleriaImagens from './components/GaleriaImagens';
import ProdutosRelacionados from './components/ProdSugestions';
import SecaoComentarios from './components/Comentarios';

const App = () => {
  const produto = {
    nome: "Produto Exemplo",
    valor: "R$ 199,99",
    descricao: "Este é um excelente produto.",
    especificacoes: ["Cor: Azul", "Tamanho: M", "Material: Algodão"]
  };

  const imagens = ["https://placehold.co/150", "https://placehold.co/150", "/https://placehold.co/150"];

  const produtosRelacionados = [
    { imagem: "https://placehold.co/150", nome: "Produto 1", valor: "R$ 99,99" },
    { imagem: "https://placehold.co/150", nome: "Produto 2", valor: "R$ 149,99" }
  ];

  const comentarios = [
    { nome: "João", data: "01/09/2024", texto: "Ótimo produto!" },
    { nome: "Maria", data: "05/09/2024", texto: "Adorei, recomendo." }
  ];

  return (
    <div className="App">
      <Menu />
      <GaleriaImagens imagens={imagens} />
      <DetalhesProduto {...produto} />
      <ProdutosRelacionados produtos={produtosRelacionados} />
      <SecaoComentarios comentarios={comentarios} />
    </div>
  );
};

export default App;
