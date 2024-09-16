import { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css'; 

const perguntas = [
  { 
    enunciado: "Qual é a capital da França?", 
    opcoes: ["Berlim", "Londres", "Paris", "Lisboa"], 
    correta: 2 
  },
  { 
    enunciado: "Qual é o maior planeta do sistema solar?", 
    opcoes: ["Terra", "Júpiter", "Saturno", "Marte"], 
    correta: 1 
  },
  { 
    enunciado: "Qual seleção venceu a ultima Copa do Mundo?", 
    opcoes: ["Argentina", "França", "Brasil", "Espanha"], 
    correta: 1 
  },
  { 
    enunciado: "Qual é o país mais populoso do mundo?", 
    opcoes: ["Índia", "Rússia", "China", "Estados Unidos"], 
    correta: 2 
  },
  { 
    enunciado: "Qual elemento tem o símbolo químico O?", 
    opcoes: ["Ouro", "Oxigênio", "Prata", "Fósforo"], 
    correta: 1 
  },
  { 
    enunciado: "Qual foi o primeiro presidente dos EUA?", 
    opcoes: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], 
    correta: 2 
  },
  { 
    enunciado: "Em que ano o homem pisou na Lua pela primeira vez?", 
    opcoes: ["1965", "1969", "1971", "1980"], 
    correta: 1 
  },
  { 
    enunciado: "Qual o animal mais rápido do mundo?", 
    opcoes: ["Guepardo", "Falcão-peregrino", "Leão", "Cavalo"], 
    correta: 1 
  },
  { 
    enunciado: "Qual é a fórmula química da água?", 
    opcoes: ["CO2", "H2O", "O2", "CH4"], 
    correta: 1 
  },
  { 
    enunciado: "Qual país é conhecido como a terra do sol nascente?", 
    opcoes: ["China", "Coreia do Sul", "Japão", "Tailândia"], 
    correta: 2 
  }
];

const Quiz = () => {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [terminou, setTerminou] = useState(false);

  const handleResposta = (index) => {
    if (index === perguntas[perguntaAtual].correta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = perguntaAtual + 1;
    if (proximaPergunta < perguntas.length) {
      setPerguntaAtual(proximaPergunta);
    } else {
      setTerminou(true);
    }
  };

  return (
    <div className={`quiz-container ${terminou ? 'terminou' : ''}`}>
      {terminou ? (
        <Resultado pontuacao={pontuacao} total={perguntas.length} />
      ) : (
        <Pergunta
          pergunta={perguntas[perguntaAtual].enunciado}
          opcoes={perguntas[perguntaAtual].opcoes}
          handleResposta={handleResposta}
        />
      )}
    </div>
  );
};

const Pergunta = ({ pergunta, opcoes, handleResposta }) => (
  <div className="pergunta">
    <h2>{pergunta}</h2>
    <div className="opcoes">
      {opcoes.map((opcao, index) => (
        <button key={index} onClick={() => handleResposta(index)}>
          {opcao}
        </button>
      ))}
    </div>
  </div>
);

Pergunta.propTypes = {
  pergunta: PropTypes.string.isRequired,
  opcoes: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleResposta: PropTypes.func.isRequired,
};

const Resultado = ({ pontuacao, total }) => (
  <div className="resultado">
    <h2>Você finalizou o quiz!</h2>
    <p>
      Pontuação: {pontuacao} de {total}
    </p>
  </div>
);

Resultado.propTypes = {
  pontuacao: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Quiz;
