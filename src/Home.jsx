import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const alStorage = localStorage.getItem("itens");
  const alStorage2 = localStorage.getItem("Compor");
  const [biblioteca, setBiblioteca] = useState(alStorage ? JSON.parse(alStorage) : []);
  const [letras, setLetras] = useState(alStorage2 ? JSON.parse(alStorage2) : []);
  const [letra, setLetra] = useState("");
  const [video, setVideo] = useState("");
  const [nome, setNome] = useState("");
  const [Id, setId] = useState(0);
  const [resumo, setResumo] = useState("");
  const [autor, setAutor] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("itens", JSON.stringify(biblioteca));
    document.title = `Você clicou ${count} vezes`;
  }, [biblioteca, count]);

  useEffect(() => {
    localStorage.setItem("Compor", JSON.stringify(letras));
  }, [letras]);

  const salvar = (e) => {
    e.preventDefault();
    setBiblioteca([
      ...biblioteca,
      {
        letra: letra,
        video: video,
        nome: nome,
        Id: Id,
        resumo: resumo,
        autor: autor,
      },
    ]);
    setLetra("");
    setNome("");
    setVideo("");
    setId(Id + 1);
    setAutor("");
    setResumo("");
    setCount(count + 1);
  };

  const apagarLetra = () => {
    setLetras([]);
  };

  const salvarLetra = (ativ) => {
    setLetras([{ letra: ativ.letra }]);
  };
  

  const apagar = (index) => {
    const novabiblioteca = [...biblioteca];
    novabiblioteca.splice(index, 1);
    setBiblioteca(novabiblioteca);
  };

  

  const MostraLetra = (index) => {
    setLetras([index]);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-div="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Cadastrar-se/Login
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Em alta
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  ha
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <form onSubmit={salvar}>
        <div>
          <h2>Nome</h2>
          <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" />
        </div>
        <div>
          <h2>Incorporação do vídeo:</h2>
          <input value={video} onChange={(e) => setVideo(e.target.value)} type="text" />
        </div>
        <div>
          <h2>Autor</h2>
          <input value={autor} onChange={(e) => setAutor(e.target.value)} type="text" />
        </div>
        <div>
          <h2>Letra</h2>
          <input value={letra} onChange={(e) => setLetra(e.target.value)} type="text" />
        </div>
        <div>
          <h2>Resumo do vídeo</h2>
          <input value={resumo} onChange={(e) => setResumo(e.target.value)} type="text" />
        </div>

        <button type="submit">ADD</button>
      </form>

      <div className="container text-center">
        <div className="row">
          {biblioteca.map((ativ, index) => (
            <div className="col" key={index}>
              <div className="card" style={{ width: "18rem" }}>
                <div dangerouslySetInnerHTML={{ __html: ativ.video }} />
                <div className="card-body">
                  <h5 className="card-title">{ativ.nome}</h5>
                  <p className="card-text">{ativ.autor}</p>
                  <p className="card-text">{ativ.resumo}</p>
                  <div className="azul">
                    <button
                      id={ativ.Id}
                      onClick={() => apagar(index)}
                      className="btn btn-primary"
                    >
                      Apagar
                    </button>
                    <button
                     
                      onClick={() => salvarLetra(ativ)}
                      className="btn btn-primary"
                    >
                      Letra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {letras.map((ativ, index) => (
        <div key={index}>
          <p>{ativ.letra}</p>
          <div className="azul">
            <button
              id={ativ.Id}
              onClick={() => apagarLetra(index)}
              className="btn btn-primary"
            >
              Fechar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
