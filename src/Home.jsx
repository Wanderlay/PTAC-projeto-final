import React, { useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Home(){

    const alStorage = localStorage.getItem("lista");
    const [letra, setLetra] = useState("");
    const [video, setVideo] = useState("");
    const [nome, setNome] = useState("");
    const [biblioteca, setBiblioteca] = useState(alStorage ? JSON.parse(alStorage) : []);
    const [Id, setId] = useState(0)

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
                <a class="nav-link" href="#">cadastrar-se/login</a>
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
      </div>

      
     );
}