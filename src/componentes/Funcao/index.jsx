import { Agente } from '../Agente'
import './Funcao.css'

export const Funcao = ({ nome, corPrimaria, corSegundaria, agentes }) => {
  return (
    agentes.length > 0 ? <section
      className='funcao'
      style={{
        backgroundColor: corSegundaria
      }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className='agentes'>
        {agentes.map(({ nome, habilidades, imagem }) => <Agente
          key={nome}
          corDeFundo={corPrimaria}
          nome={nome}
          habilidades={habilidades}
          imagem={imagem}
        />)}
      </div>
    </section> : ''
  )
}