import { Agente } from '../Agente'
import './Funcao.css'
import hexToRgba from 'hex-to-rgba'

export const Funcao = ({ funcao, agentes, aoDeletar, mudarCor }) => {
  return (
    agentes.length > 0 ? <section
      className='funcao'
      style={{ backgroundColor: hexToRgba(funcao.cor, '0.6') }}>
      <input
        onChange={({ target }) => mudarCor(target.value, funcao.nome)}
        value={funcao.cor}
        type='color'
        className='inputColor'
      />
      <h3 style={{ borderColor: funcao.cor }}>{funcao.nome}</h3>
      <div className='agentes'>
        {agentes.map((agente, indice) => {
          return <Agente
            key={indice}
            agente={agente}
            corDeFundo={funcao.cor}
            aoDeletar={aoDeletar}
          />
        })}
      </div>
    </section> : ''
  )
}