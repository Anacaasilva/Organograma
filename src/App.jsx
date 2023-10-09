import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Funcao } from './componentes/Funcao';
import { Rodape } from './componentes/Rodape';

function App() {

  const funcoes = [
    {
      nome: 'Controlador',
      corPrimaria: '#A275A7', //fundo do card do agente
      corSegundaria: '#E0BBE4' //background
    },
    {
      nome: 'Duelista',
      corPrimaria: '#77509E',
      corSegundaria: '#957DAD'
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#800080',
      corSegundaria: '#A275A7'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#D291BC',
      corSegundaria: '#8F5E7F'
    }
  ]

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

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={funcoes.map(funcao => funcao.nome)}
        aoCadastrar={agente => setAgentes([...agentes, agente])}
      />
      <section className='funcao'>
        <h1>Meus agentes</h1>
        {funcoes.map((funcao, indice) => <Funcao
          key={indice}
          funcao={funcao}
          agentes={agentes.filter(agente => agente.funcao === funcao.nome)}
        />)}
      </section>
      <Rodape />
    </div >
  );
}

export default App;
