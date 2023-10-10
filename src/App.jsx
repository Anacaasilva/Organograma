import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Funcao } from './componentes/Funcao';
import { Rodape } from './componentes/Rodape';

function App() {

  const [funcoes, setFuncoes] = useState([
    {
      nome: 'Controlador',
      cor: '#E0BBE4' //background
    },
    {
      nome: 'Duelista',
      cor: '#957DAD'
    },
    {
      nome: 'Iniciador',
      cor: '#A275A7'
    },
    {
      nome: 'Sentinela',
      cor: '#8F5E7F'
    }
  ])

  const inicial = [
    {
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[0].nome
    },
    {
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[1].nome
    },
    {
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[2].nome
    },
    {
      nome: 'Skye',
      habilidades: 'Passarinho que voa, Ceguei',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[3].nome
    },
    {
      nome: 'DANIEL ARTINE',
      habilidades: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
    {
      nome: 'GUILHERME LIMA',
      habilidades: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
    {
      nome: 'PAULO SILVEIRA',
      habilidades: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      funcao: funcoes[3].nome
    },
  ]

  const [agentes, setAgentes] = useState(inicial)

  const deletarAgente = () => {
    console.log("deletando");
  }

  const alterarCor = (cor, nome) => {
    setFuncoes(funcoes.map(funcao => {
      if(funcao.nome === nome) {
        funcao.cor = cor;
      }
      return funcao
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
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
