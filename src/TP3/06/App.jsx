import "./styles.css";

function App() {
  return (
    <div className="container">
      <h2 className="titulo-h2">Desenvolvimento Front-End com Frameworks</h2>
      <h3 className="titulo-h3">Mobile-First UI com React</h3>
      <h4 className="titulo-h4">Conceitos de Usabilidade</h4>
      <p className="paragrafo">
        O conceito de <strong>Mobile-First</strong> começa com uma abordagem de design onde o foco inicial é no desenvolvimento para dispositivos móveis e, em seguida, para telas maiores. A usabilidade está diretamente relacionada à experiência do usuário em interagir com a interface.
      </p>
      <br />
      <p className="paragrafo">
        Quando se pensa em usabilidade, é necessario garantir que o usuário consiga navegar e entender as informações com facilidade. Usar componentes adaptáveis e responsivos melhora a experiência e facilita o acesso à informação em diferentes dispositivos.
      </p>
    </div>
  );
}

export default App;
