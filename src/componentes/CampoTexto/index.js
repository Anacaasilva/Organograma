import './CampoTexto.css'

export const CampoTexto = props => {

  const aoDigitado = ({ target }) => props.aoAlterado(target.value)

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}
