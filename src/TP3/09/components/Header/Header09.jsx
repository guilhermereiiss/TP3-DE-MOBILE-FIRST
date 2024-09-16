import LogoGui from "./GuiLogo.jpeg"
import MinhaImg from "./minhaImg.png"
import { useState } from "react";

import "./Header09C.css"

function Header09() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header>
                <img src={LogoGui} alt="logo" className="logoGui" />
                <button className="menu-btn" onClick={toggleMenu}>
                    ☰
                </button>
                <nav>
                    <ul className={menuOpen ? "active" : ""}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#quem-somos">Sobre nós</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contatos">Contatos</a></li>
                    </ul>
                </nav>
            </header>

            <div id="home" className="sobre">
                <div>
                    <img src={MinhaImg} alt="" />
                </div>
                <div>
                    <h1>Lorem Ipsum</h1>
                    <p>Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio.</p>
                </div>
            </div>

            <div id="servicos" className="sobre">
                <div>
                    <h1>Serviços</h1>
                    <p>Quisque sagittis est neque, eu dignissim dui gravida et. Mauris id nisl sed purus semper elementum eu a turpis. Curabitur et sollicitudin risus, in lacinia risus. Aliquam finibus purus felis, quis cursus justo hendrerit interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin sit amet pulvinar nibh, nec molestie odio.</p>
                </div>
            </div>
        </div>
    );
}

export default Header09;