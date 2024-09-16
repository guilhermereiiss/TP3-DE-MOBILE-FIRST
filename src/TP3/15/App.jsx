import  { useState, useEffect } from 'react';
import ExibirItem from './components/Items/MostrarItens';
import ListaAfinidade from './components/ListaDeGosto/Gostos';
import Cabecalho from './components/Header/Header';
import './main.css';

const itens = [
  'Inception',
  'Interstellar',
  'Boi da cara preta',
  'The Legend of Zelda',
  'Minecraft',
  'The Last of Us',
  'God of War',
  'The Witcher',
  'Valorant'
];

const usuarios = [
  { nome: 'Alice', gostos: ['Inception', 'Interstellar'], naoGostos: ['Boi da cara preta'] },
  { nome: 'Cleriton', gostos: ['Minecraft', 'Inception'], naoGostos: ['The Legend of Zelda'] },
  { nome: 'Carlos', gostos: ['Valorant', 'Interstellar'], naoGostos: ['Minecraft'] },
  { nome: 'Neymar', gostos: ['Valorant', 'The Last of Us'], naoGostos: ['Boi da cara preta'] }
];

function App() {
  const [preferenciasUsuario, setPreferenciasUsuario] = useState({ gostos: [], naoGostos: [] });
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [verAfinidade, setVerAfinidade] = useState(false);
  const [tema, setTema] = useState('light');

  useEffect(() => {
    document.body.className = tema;
  }, [tema]);

  const lidarComPreferencia = (item, preferencia) => {
    setPreferenciasUsuario((prev) => ({
      ...prev,
      [preferencia]: [...prev[preferencia], item]
    }));
    setIndiceAtual(indiceAtual + 1);
  };

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'light' ? 'dark' : 'light'));
  };

  const mostrarAfinidade = () => {
    setVerAfinidade(true);
  };

  return (
    <div className="App">
      <Cabecalho alternarTema={alternarTema} />
      {verAfinidade ? (
        <ListaAfinidade preferenciasUsuario={preferenciasUsuario} usuarios={usuarios} />
      ) : (
        <ExibirItem
          item={itens[indiceAtual]}
          aoEscolherPreferencia={lidarComPreferencia}
          aoMostrarAfinidade={mostrarAfinidade}
          temMaisItens={indiceAtual < itens.length}
        />
      )}
    </div>
  );
}

export default App;
