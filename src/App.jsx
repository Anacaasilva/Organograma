import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';
import { Funcao } from './componentes/Funcao';

function App() {

  const funcoes = [
    {
      nome: 'Controlador',
      corPrimaria: '#131F2B',
      corSegundaria: '#29313AC3'
    },
    {
      nome: 'Duelista',
      corPrimaria: '#2D1E38',
      corSegundaria: '#6D5F77'
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#182642',
      corSegundaria: '#364666'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#253E48',
      corSegundaria: '#1C716B'
    }
  ]

  const [agentes, setAgentes] = useState([])

  const novoAgente = (agente) => setAgentes([...agentes, agente])

  return (
    <div className="App">
      <Banner />
      <Formulario
        funcoes={funcoes.map(funcao => funcao.nome)}
        aoAgenteCadastrado={agente => novoAgente(agente)}
      />

      {funcoes.map(funcao => <Funcao
        key={funcao.nome}
        nome={funcao.nome}
        corPrimaria={funcao.corPrimaria}
        corSegundaria={funcao.corSegundaria}
        agentes={agentes.filter(agente => agente.funcao === funcao.nome)}
      />)}
    </div>
  );
}

export default App;
