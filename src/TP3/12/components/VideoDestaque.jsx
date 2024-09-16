
import './VideoDestaque.css';

const VideoDestaque = () => {
    return (
        <div className="video-destaque">
            <iframe width="700" height="315" src="https://www.youtube.com/embed/e2Rxym-L_uk?si=k_IBsqYXA3zFgYpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className="acoes-video">
                <button>Curtir</button>
                <button>Compartilhar</button>
                <button>Salvar</button>
                <button>Denunciar</button>
            </div>
            <h1>Título do Vídeo</h1>
            <p>Autor do Vídeo</p>
        </div>
    );
};

export default VideoDestaque;
