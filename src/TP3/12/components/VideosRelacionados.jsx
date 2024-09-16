
import './VideosRelacionados.css';

const videos = [
  { id: 1, nome: 'Vídeo 1', autor: 'Autor 1', capa: 'https://placehold.co/150' },
  { id: 2, nome: 'Vídeo 2', autor: 'Autor 2', capa: 'https://placehold.co/150' },
];

const VideosRelacionados = () => {
  return (
    <div className="videos-relacionados">
      {videos.map(video => (
        <div key={video.id} className="video-relacionado">
          <img src={video.capa} alt={`Capa do ${video.nome}`} />
          <p>{video.nome}</p>
          <p>{video.autor}</p>
        </div>
      ))}
    </div>
  );
};

export default VideosRelacionados;
