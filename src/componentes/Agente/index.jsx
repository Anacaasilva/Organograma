import './Agente.css';

import { MdClear } from 'react-icons/md';

export const Agente = ({ agente, corDeFundo, aoDeletar }) => {
  return (
    <div className='agente-container'>
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
            src={agente.imagem.length > 0 ? agente.imagem : "https://resources.tidal.com/images/40ebd205/803e/4082/b300/fc462c0cf90d/750x750.jpg"}
            alt={agente.nome}
          />
        </div>
        <div className='rodape'>
          <h4>{agente.nome}</h4>
          <h5>{agente.habilidades}</h5>
        </div>
      </div>
    </div>
  );
};