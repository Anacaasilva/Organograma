import './Agente.css';

import { MdClear } from 'react-icons/md';

export const Agente = ({ agente, corDeFundo, aoDeletar }) => {
  return (
    <div className='agente'>
      <MdClear
        size={25}
        className='deletar'
        onClick={() => aoDeletar(agente.id)}
      />
      <div
        className='cabecalho'
        style={{ backgroundColor: corDeFundo }}
      >
        <img
          src={agente.imagem}
          alt={agente.nome}
        />
      </div>
      <div className='rodape'>
        <h4>{agente.nome}</h4>
        <h5>{agente.habilidades}</h5>
      </div>
    </div>
  );
};