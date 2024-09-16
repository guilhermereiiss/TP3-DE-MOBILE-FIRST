import { useState } from "react";
import Post from "./components/Post";
import FriendList from "./components/Amigos";
import SuggestionList from "./components/Sugestoes";
import "./styles.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      <header>
        <img src="https://via.placeholder.com/50" alt="Logo" />
        <nav className="menu">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </button>
          <ul className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#profile">Perfil</a></li>
            <li><a href="#photos">Fotos</a></li>
            <li><a href="#friends">Amigos</a></li>
            <li><a href="#suggestions">Sugestões</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="profile">
          <img src="https://placehold.co/100" alt="Perfil" />
          <div>
            <h1>Guilherme</h1>
            <p>@http_guireis</p>
          </div>
        </section>
        <section id="posts">
          <Post 
            imgSrc="https://placehold.co/100"
            title="Título do Post"
            text="Texto do post..."
            date="12/09/2024"
            author="Guilherme"
            likes={12}
            shares={5}
            comments={[
              { user: "Ana", text: "Ótimo post!" },
              { user: "Carlos", text: "Muito interessante!" }
            ]}
          />
          <Post 
            imgSrc="https://placehold.co/100"
            title="Segundo Post"
            text="Texto do segundo post..."
            date="12/09/2024"
            author="Guilherme"
            likes={8}
            shares={2}
            comments={[
              { user: "João", text: "Muito bom!" },
              { user: "Maria", text: "Adorei!" }
            ]}
          />
        </section>
        <section id="friends">
          <h2>Amigos</h2>
          <FriendList 
            friends={[
              { imgSrc: "https://via.placeholder.com/50", name: "Ana", commonFriends: 3 },
              { imgSrc: "https://via.placeholder.com/50", name: "Carlos", commonFriends: 5 }
            ]}
          />
        </section>
        <section id="suggestions">
          <h2>Sugestões</h2>
          <SuggestionList 
            suggestions={[
              { imgSrc: "https://via.placeholder.com/50", name: "Julia", commonFriend: "Ana" },
              { imgSrc: "https://via.placeholder.com/50", name: "Lucas", commonFriend: "Carlos" }
            ]}
          />
        </section>
      </main>
    </div>
  );
}
