import { useEffect, useState } from 'react'
import Header from "./components/header"

const FILMES_INICIAIS = [
  { id: 1, titulo: "Interstellar", genero: "Ficção Científica", emoji: "🚀", favorito: false },
  { id: 2, titulo: "Homem Aranha", genero: "Ação", emoji: "🕷️", favorito: false },
  { id: 3, titulo: "Titanic", genero: "Romance", emoji: "🚢", favorito: false },
  { id: 4, titulo: "The Mentalist", genero: "Série/Policial", emoji: "🕵️", favorito: false },
];

export function App() {
  const [tema, setTema] = useState("dark");
  const [filmes, setFilmes] = useState(FILMES_INICIAIS);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  const toggleTema = () => {
    setTema((temaAtual) => (temaAtual === "light" ? "dark" : "light"));
  };

  const toggleFavorito = (id) => {
    setFilmes((filmesAtuais) =>
      filmesAtuais.map((filme) =>
        filme.id === id ? { ...filme, favorito: !filme.favorito } : filme
      )
    );
  };

  const totalFavoritos = filmes.filter((f) => f.favorito).length;

  return (
    <div>
      <Header tema={tema} toggleTema={toggleTema} />

      <main className="container">
        <div className="sub-header">
          <h2>Catálogo de Destaques</h2>
          <p>Favoritos selecionados: <strong>{totalFavoritos}</strong></p>
        </div>

        {/* <div className="movies-grid">
          {filmes.map((filme) => (
            <MovieCard
              key={filme.id}
              filme={filme}
              onToggleFavorito={toggleFavorito}
            />
          ))}
        </div> */}
      </main>
    </div>
  );
}

export default App;
