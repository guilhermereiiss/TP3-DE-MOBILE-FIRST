import "./QmSomos09C.css"

const images = [
    {
        src: 'https://cdn-icons-png.flaticon.com/128/10832/10832132.png',
        alt: 'React Logo'
    },
    {
        src: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        alt: 'Next.js Logo'
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIry0BTIWxFOF80Neth3iDIrocwj5JvC_gw&s',
        alt: 'React Native Logo'
    },
];
const QmSomos = () => {
    return(
        <div id="quem-somos"className="container">
            <div className="sobre-nos">
                <h1>Quem Somos</h1>
                <p>Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio.</p>

                <div className="lista-produtos">
                    {images.map((image, index) => (
                        <img key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QmSomos;