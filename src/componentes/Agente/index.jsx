import './Agente.css'

export const Agente = ({ agente, corDeFundo}) => {

  console.log(agente);
  return (
    <div className='agente'>
      <div
        className='cabecalho'
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={agente.imagem} alt={agente.nome} />
      </div>
      <div className='rodape'>
        <h4>{agente.nome}</h4>
        <h5>{agente.habilidades}</h5>
      </div>
    </div>
  )
}