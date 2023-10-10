import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Funcao } from './componentes/Funcao';
import { Rodape } from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [funcoes, setFuncoes] = useState([
    {
      id: uuidv4(),
      nome: 'Controlador',
      cor: '#E0BBE4' //background
    },
    {
      id: uuidv4(),
      nome: 'Duelista',
      cor: '#957DAD'
    },
    {
      id: uuidv4(),
      nome: 'Iniciador',
      cor: '#A275A7'
    },
    {
      id: uuidv4(),
      nome: 'Sentinela',
      cor: '#8F5E7F'
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
  ]

  const [agentes, setAgentes] = useState(inicial);

  const deletarAgente = (id) => {
    setAgentes(agentes.filter(agente => agente.id !== id));
  }

  const alterarCor = (cor, id) => {
    setFuncoes(funcoes.map(funcao => {
      if (funcao.id === id) {
        funcao.cor = cor;
      }
      return funcao;
    }))
  }

  const cadastrarFuncao = (novaFuncao) => {
    setFuncoes([...funcoes, {...novaFuncao, id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarFuncao={cadastrarFuncao}
        funcoes={funcoes.map(funcao => funcao.nome)}
        aoCadastrar={agente => setAgentes([...agentes, agente])}
      />
      <section className='funcao'>
        <div>
          <h1>Meus agentes</h1>
        </div>
        {funcoes.map((funcao, indice) =>
          <Funcao
            key={indice}
            mudarCor={alterarCor}
            funcao={funcao}
            agentes={agentes.filter(agente => agente.funcao === funcao.nome)}
            aoDeletar={deletarAgente}
          />
        )}
      </section>
      <Rodape />
    </div >
  );
}

export default App;
