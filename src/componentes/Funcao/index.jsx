import { Agente } from '../Agente'
import './Funcao.css'

export const Funcao = ({ funcao, agentes }) => {
  return (
    agentes.length > 0 ? <section
      className='funcao'
      style={{ backgroundColor: funcao.corPrimaria }}
    >
      <h3 style={{ borderColor: funcao.corSegundaria }}>{funcao.nome}</h3>
      <div className='agentes'>
        {agentes.map((agente, indice) => {
          return <Agente
            key={indice}
            agente={agente}
            corDeFundo={funcao.corSegundaria}
          />
        })}
      </div>
    </section> : ''
  )
}