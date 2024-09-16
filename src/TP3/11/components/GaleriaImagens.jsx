import './GaleriaImagens.css';
import PropTypes from 'prop-types';


const GaleriaImagens = ({ imagens }) => {
  return (
    <div className="galeria-imagens">
      {imagens.map((imagem, index) => (
        <img key={index} src="https://placehold.co/150" alt={`Imagem ${index}`} className="imagem-produto" />
      ))}
    </div>
  );
};

GaleriaImagens.propTypes = {
    imagens: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default GaleriaImagens;