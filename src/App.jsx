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

  // const inicial = [
  //   {
  //     nome: 'JULIANA AMOASEI',
  //     habilidades: 'Desenvolvedora de software e instrutora',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  //     funcao: funcoes[0].nome
  //   },
  //   {
  //     nome: 'DANIEL ARTINE',
  //     habilidades: 'Engenheiro de Software na Stone Age',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  //     funcao: funcoes[0].nome
  //   },
  //   {
  //     nome: 'GUILHERME LIMA',
  //     habilidades: 'Desenvolvedor Python e JavaScript na Alura',
  //     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  //     funcao: funcoes[0].nome
  //   },
  //   {
  //     nome: 'PAULO SILVEIRA',
  //     habilidades: 'Hipster e CEO da Alura',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  //     funcao: funcoes[0].nome
  //   },
  //   {
  //     nome: 'JULIANA AMOASEI',
  //     habilidades: 'Desenvolvedora de software e instrutora',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  //     funcao: funcoes[1].nome
  //   },
  //   {
  //     nome: 'DANIEL ARTINE',
  //     habilidades: 'Engenheiro de Software na Stone Age',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  //     funcao: funcoes[1].nome
  //   },
  //   {
  //     nome: 'GUILHERME LIMA',
  //     habilidades: 'Desenvolvedor Python e JavaScript na Alura',
  //     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  //     funcao: funcoes[1].nome
  //   },
  //   {
  //     nome: 'PAULO SILVEIRA',
  //     habilidades: 'Hipster e CEO da Alura',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  //     funcao: funcoes[1].nome
  //   },
  //   {
  //     nome: 'JULIANA AMOASEI',
  //     habilidades: 'Desenvolvedora de software e instrutora',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  //     funcao: funcoes[2].nome
  //   },
  //   {
  //     nome: 'DANIEL ARTINE',
  //     habilidades: 'Engenheiro de Software na Stone Age',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  //     funcao: funcoes[2].nome
  //   },
  //   {
  //     nome: 'GUILHERME LIMA',
  //     habilidades: 'Desenvolvedor Python e JavaScript na Alura',
  //     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  //     funcao: funcoes[2].nome
  //   },
  //   {
  //     nome: 'PAULO SILVEIRA',
  //     habilidades: 'Hipster e CEO da Alura',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  //     funcao: funcoes[2].nome
  //   },
  //   {
  //     nome: 'JULIANA AMOASEI',
  //     habilidades: 'Desenvolvedora de software e instrutora',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
  //     funcao: funcoes[3].nome
  //   },
  //   {
  //     nome: 'DANIEL ARTINE',
  //     habilidades: 'Engenheiro de Software na Stone Age',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
  //     funcao: funcoes[3].nome
  //   },
  //   {
  //     nome: 'GUILHERME LIMA',
  //     habilidades: 'Desenvolvedor Python e JavaScript na Alura',
  //     imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
  //     funcao: funcoes[3].nome
  //   },
  //   {
  //     nome: 'PAULO SILVEIRA',
  //     habilidades: 'Hipster e CEO da Alura',
  //     imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
  //     funcao: funcoes[3].nome
  //   },
  // ]

  const [agentes, setAgentes] = useState([])

  const novoAgente = (agente) => setAgentes([...agentes, agente])

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={funcoes.map(funcao => funcao.nome)}
        aoAgenteCadastrado={agente => novoAgente(agente)}
      />
      <section className='funcao'>
        <h1>Meus agentes</h1>
        {funcoes.map(funcao => <Funcao
          key={funcao.nome}
          nome={funcao.nome}
          corPrimaria={funcao.corPrimaria}
          corSegundaria={funcao.corSegundaria}
          agentes={agentes.filter(agente => agente.funcao === funcao.nome)}
        />)}
      </section>
      <Rodape />
    </div >
  );
}

export default App;
