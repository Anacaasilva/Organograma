import './CampoTexto.css';

export const CampoTexto = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
  return (
    <div className={`campo-texto campo-texto-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={({ target }) => aoAlterado(target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};
