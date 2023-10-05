import './Agente.css'

export const Agente = ({ nome, imagem, habilidades }) => {
  return (
    <div className='agente'>
      <div className='cabecalho'>
        <img src={imagem} alt={nome} />
      </div>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{habilidades}</h5>
      </div>
    </div>
  )
}