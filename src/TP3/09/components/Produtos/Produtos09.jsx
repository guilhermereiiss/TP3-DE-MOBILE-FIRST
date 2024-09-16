import "./Produtos09C.css"

const imgsProdutos = [
  {
    imagem: 'https://netlogs.com.br/wp-content/uploads/2023/03/03-niveis-de-suporte-de-TI-e-suas-caracteristicas.jpg',
    alt: 'It Suporte'
  },
  {
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzp0FAACmV6ZUC7Rh3-HEit_jIdXFe44FCsV4KkhYtGAggkBxolVRCJkzNoDD6LtJB5-s&usqp=CAU',
    alt: 'Qa'
  },
  {
    imagem: 'https://www.business2community.com/wp-content/uploads/2020/07/Scrum.jpg',
    alt: 'Scrum'
  },
  {
    imagem: 'https://static.vecteezy.com/system/resources/thumbnails/006/173/028/small/computer-repair-logo-template-computer-pixels-logo-software-development-design-free-vector.jpg',
    alt: 'Software Develop'
  },
  {
    imagem: 'https://brasiline.com.br/wp-content/uploads/2021/08/Imagem1.jpg',
    alt: 'Pen Test'
  },
  {
    imagem: 'https://i0.wp.com/www.cienciaedados.com/wp-content/uploads/2019/06/Por-Que-e-Como-Data-Science-e-Mais-do-Que-Apenas-Machine-Learning.jpg?fit=1040%2C520&ssl=1',
    alt: 'Data Science'
  }
];

const ProdutosLitas = () => {
  return (
    <div id="produtos"><h1>Produtos</h1>
    <div id="produtos"className="imgs-Produtos">
      {imgsProdutos.map((imag, index) => (
        <img key={index} src={imag.imagem} alt={imag.alt} />
      ))}
    </div>
    </div>
  );
};

export default ProdutosLitas;