import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Conceitos de NodeJS','Conceitos de ReactJS']);
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
        {projects.map(project => <li key={project}>{project}</li> )}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;