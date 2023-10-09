import './CampoTexto.css'

export const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={({ target }) => aoAlterado(target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  )
}
