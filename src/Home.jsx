import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Home(){

    
    const alStorage = localStorage.getItem("itens");
    const [biblioteca, setBiblioteca] = useState(alStorage ? JSON.parse(alStorage) : []);
    const alStorage2 = localStorage.getItem("Compor");
    const [letras, setLetras] = useState(alStorage ? JSON.parse(alStorage) : []);
    const [letra, setLetra] = useState("");
    const [video, setVideo] = useState("");
    const [nome, setNome] = useState("");
    const [Id, setId] = useState(0);
    const [resumo, setResumo] = useState("");
    const [autor, setAutor] = useState("")

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
          conteudo: conteudo,
          video: video,
          nome: nome,
          Id: Id,
          resumo: resumo,
          autor: autor,
          letra: letra
        },
      ]);
      setConteudo("");
      setNome("");
      setVideo("");
      setId(Id + 1);
      setAutor("");
      setLetra("");
      setCount(count + 1);
    };
   
    const salvarLetra = (e) => {
      e.preventDefault();
      setLetras([{letra: letra}]);
     
    };
  
    const apagar = (index) => {
      const novabiblioteca = [...biblioteca];
      novabiblioteca.splice(index, 1);
      setBiblioteca(novabiblioteca);
    };
  
    const apagarLetra = (index) => {
      const apagar = [];
     
      setLetra(apagar);
    };
    



    const MostraLetra = (index) => {
      const novaletras = [index];
      
      setLetras(novaletras);
    };
  

    return(
       <div> 
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">cadastrar-se/login</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Em alta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">ha</a>
              </li>
            </ul>
         
          </div>
       
        </div>
      </nav> 


      <form onSubmit={salvar}>
                <h2>Nome</h2>
                <input value={nome} onChange={(e) => setNome(e.target.value)} type="text"></input>
                <h2>Incorporaçao do video:</h2>
                <input value={video} onChange={(e) => setVideo(e.target.value)} type="text"></input>
                <h2>Autor</h2>
                <input value={autor} onChange={(e) => setAutor(e.target.value)} type="text"></input>
                <h2>Letra</h2>
                <input value={letra} onChange={(e) => setLetra(e.target.value)} type="text"></input>
                <h2>Resumo do video</h2>
                <input value={resumo} onChange={(e) => setResumo(e.target.value)} type="text"></input>

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
                    <button id={ativ.Id} onClick={() => apagar(index)} className="btn btn-primary">Apagar</button>
                    <button id={ativ.letra} onClick={() => salvarLetra(ativ.letra)} className="btn btn-primary">Descrição</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   


      </div>

      
     );
}