import './Comentarios.css';

const comentarios = [
  { id: 1, nome: 'Usuário 1', data: '01/01/2024', comentario: 'Ótimo vídeo!' },
  { id: 2, nome: 'Usuário 2', data: '02/01/2024', comentario: 'Muito informativo!' },
];

const Comentarios = () => {
  return (
    <div className="comentarios">
      {comentarios.map(comentario => (
        <div key={comentario.id} className="comentario">
          <p><strong>{comentario.nome}</strong> - {comentario.data}</p>
          <p>{comentario.comentario}</p>
        </div>
      ))}
    </div>
  );
};

export default Comentarios;