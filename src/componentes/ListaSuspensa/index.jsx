import './ListaSuspensa.css'

export const ListaSuspensa = ({ label, items, valor, aoAlterado, obrigatorio = false }) => {
  return (
    <div className='lista-suspensa'>
      <label>{label}</label>
      <select
        required={obrigatorio}
        onChange={evento => aoAlterado(evento.target.value)}
        value={valor}>
        <option value=""></option>
        {items.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}
