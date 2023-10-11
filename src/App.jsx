import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Funcao } from './componentes/Funcao';
import { Rodape } from './componentes/Rodape';

function App() {

  const [funcoes, setFuncoes] = useState([
    {
      id: uuidv4(),
      nome: 'Controlador',
      cor: '#E0BBE4'
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
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'BRIMSTONE',
      habilidades: 'Incendiário, Fumaça Celeste, Sinalizador Estimulante e Ataque Orbital.',
      imagem: 'https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'VIPER',
      habilidades: 'Nuvem venenosa, Cortina tóxica, Veneno de cobra e Poço peçonhento.',
      imagem: 'https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'OMEN',
      habilidades: 'Paranoia, Manto Sombrio, Passos Tenebrosos e Salto das Sombras.',
      imagem: 'https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'ASTRA',
      habilidades: 'Pulso Nova, Nebulosa , Pulso Gravitacional e Divisa Cósmica. ',
      imagem: 'https://media.valorant-api.com/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png',
      funcao: funcoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'JETT',
      habilidades: 'Corrente Ascendente, Brisa de Impulso, Erupção das Brumas e Tormenta de Aço.',
      imagem: 'https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'PHOENIX',
      habilidades: 'Bola Curva, Mãos Quentes e Labareda.',
      imagem: 'https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'RAZE',
      habilidades: 'Carga de Explosivos, Cartucho de Tinta, Bumba  e Estraga-Prazeres.',
      imagem: 'https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'REYNA',
      habilidades: 'Devorar, Dispensar, Olhar Voraz e Imperatriz.',
      imagem: 'https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png',
      funcao: funcoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'BREACH',
      habilidades: 'Estopim, Falha Tectônica, Pós-choque e Onda Trovejante.',
      imagem: 'https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'SOVA',
      habilidades: 'Flecha de Choque, Flecha Rastreadora, Drone Coruja e Fúria do Caçador.',
      imagem: 'https://media.valorant-api.com/agents/ded3520f-4264-bfed-162d-b080e2abccf9/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'SKYE',
      habilidades: 'Predador Explosivo, Luz Desbravadora, Reflorescer  e Rastreadores.',
      imagem: 'https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'FADE',
      habilidades: 'Clausura,  Assombrar, Espreitadores e Véu da Noite.',
      imagem: 'https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/displayicon.png',
      funcao: funcoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'SAGE',
      habilidades: 'Orbe de Lentidão, Orbe curativo, Orbe de barreira e Ressurreição.',
      imagem: 'https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/displayicon.png',
      funcao: funcoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'CYPHER',
      habilidades: 'Jaula Cibernética, Câmera de Vigilância, Fio-armadilha e Assalto Neural.',
      imagem: 'https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/displayicon.png',
      funcao: funcoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'KILLJOY',
      habilidades: 'Robô de Alarme, Torreta, Nanoenxame e Confinamento.',
      imagem: 'https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png',
      funcao: funcoes[3].nome
    }
  ];

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
    }));
  }

  const cadastrarFuncao = (novaFuncao) => {
    setFuncoes([...funcoes, {...novaFuncao, id: uuidv4()}]);
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
};

export default App;
