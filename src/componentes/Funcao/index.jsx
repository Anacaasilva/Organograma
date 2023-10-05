import { Agente } from '../Agente'
import './Funcao.css'

export const Funcao = props => {
  const css = { backgroundColor: props.corSegundaria }

  return (
    <section className='funcao' style={css} >
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className='agentes'>
        {props.agentes.map(agente => <Agente
          key={agente.nome}
          nome={agente.nome}
          habilidades={agente.habilidades}
          imagem={agente.imagem}
        />)}
      </div>
    </section>
  )
}