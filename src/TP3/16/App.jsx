import { useState } from 'react';
import ListaPontosTuristicos from './components/Hoteis/ListaPontos';
import PontosSelecionados from './components/Hoteis/PontosSelec';
import Header from "./components/Header/Header.jsx"
import './main.css';


const dadosPontos = [
  { id: 1, nome: 'Cristo Redentor', info: 'Um dos maiores símbolos do Brasil.', transporte: 'Ônibus, metrô', preco: 100, imagem: 'https://via.placeholder.com/150' },
  { id: 2, nome: 'Pão de Açúcar', info: 'Famosa montanha com vista panorâmica.', transporte: 'Teleférico', preco: 60, imagem: 'https://via.placeholder.com/150' },
  { id: 3, nome: 'Arena Barradão', info: 'Estadio do Vitoria.', transporte: 'Ônibus, metrô', preco: 40, imagem: 'https://via.placeholder.com/150' },
  { id: 4, nome: 'Elevador Lacerda', info: 'Elevador de Salvador', transporte: 'Ônibus, metrô', preco: 30, imagem: 'https://via.placeholder.com/150' },
  { id: 5, nome: 'Chapada Diamantina', info: 'Chapada', transporte: 'Ônibus, Carro, A pé', preco: 40, imagem: 'https://via.placeholder.com/150' }
];

function App() {
  const [pontosSelecionados, setPontosSelecionados] = useState([]);

  const aoSelecionarPonto = (ponto) => {
    setPontosSelecionados((prev) => [...prev, ponto]);
  };

  return (
    <>
    <Header />
    <div className="App">
      <h1>Pontos Turísticos</h1>
      <ListaPontosTuristicos pontos={dadosPontos} aoSelecionar={aoSelecionarPonto} />
      <PontosSelecionados pontosSelecionados={pontosSelecionados} />
    </div>
    </>
  );
}

export default App;
