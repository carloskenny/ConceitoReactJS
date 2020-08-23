import React, { useState, useEffect } from 'react'; //useEffect é utilizada para disparar funções sempre que uma informação for alterada ou não, apenas quando quiser disparar alguma função quando o elemento for carregado na tela.
import api from './services/api';

import './App.css'; //importação do CSS

import Header from './components/Header'; //importação do componente Header

function App() {
  const [projects, setProjects] = useState([]); // sempre inicialiar o useState com o tipo de aquivo que ele vai ter depois. Se for um array, inicializar com um array "[]", se for um objeto, inicializar com uma objeto "{}"

  /**
   * useEffect(()=>{},[]);
   * useEffect recebe dois paramêtros.
   * ()=>{} => 1ª é a função que é pra ser disparada
   * [] => 2ª é quando a função deve ser disparada. (Array de dependências)
   * 
   * Quando eu quiser disparar a função toda vez que uma informação for alterada, coloco no segundo parametro o objeto.
   * Para disparar apenas um vez, deixa o array vazio.
   * 
   */

  useEffect(()=>{
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  },[]);



/*
  Conceito de Imutabilidade
  useState. A função useState sempre retorna um array com duas posições.
  1ª Retorno o objeto inicial
  2º Uma função que copia o objeto original, copiando os itens já existentes e adicionando no final o itens que desejamos adicionar. Atualizando o valor.
  Imutabilidade quer dizer que não podemos mutar as variáveis, alterar a esrtutura de forma direta. o método push não respeita o conceito de imutabilidade, pois ele altera diretamente
  a variável original.

*/
  function handleAddProject() {
    //projects.push(`Novo Projeto ${Date.now()}`); 

    setProjects([...projects, `Novo Projeto ${Date.now()}` ]);
    //Utilizando esse metódo estamos criando uma cópia da variável original e acrescentando um novo objeto ao final, respeitando o conceito de imutabilidade.

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects"/>
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li> )} 
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}
export default App;