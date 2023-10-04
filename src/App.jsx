import { useState } from 'react';
import Banner from './componentes/Banner';
import { Formulario } from './componentes/Formulario';

function App() {
  const [agentes, setAgentes] = useState([])

  const novoAgente = (agente) => {
    console.log(agente)
    setAgentes([...agentes, agente])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoAgenteCadastrado={agente => novoAgente(agente)} />
    </div>
  );
}

export default App;
