import { useState } from 'react';
import './AppC.css';


function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container">
            <header className={`header ${isSidebarOpen ? 'sidebar-open' : ''}`}>
                <img src="https://via.placeholder.com/150" alt="Logo" className="logo" />
                <button className="menu-toggle" onClick={toggleSidebar}>
                    ☰
                </button>
                <nav className={`navbar ${isSidebarOpen ? 'sidebar' : 'topnav'}`}>
                    <ul>
                        <li>Perfil</li>
                        <li>Postagens</li>
                        <li>Amigos</li>
                        <li>Fotos</li>
                        <li>Vídeos</li>
                        <li>Configurações</li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Bem-vindo ARIEL</h1>
                <p>ME PASSA PFVR!!!!!</p>
            </main>
        </div>
    );
}

export default App;
