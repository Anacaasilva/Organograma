import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = ({ aoCadastrar, funcoes }) => {

  const [nome, setNome] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [imagem, setImagem] = useState('')
  const [funcao, setFuncao] = useState('')

  const aoSalvar = e => {
    e.preventDefault()
    aoCadastrar({
      nome,
      habilidades,
      imagem,
      funcao
    })
    setNome('')
    setHabilidades('')
    setImagem('')
    setFuncao('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os campos para criar o card do agente.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do agente"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Habilidades"
          placeholder="Digite as habilidades"
          valor={habilidades}
          aoAlterado={valor => setHabilidades(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Função"
          items={funcoes}
          valor={funcao}
          aoAlterado={valor => setFuncao(valor)}
        />
        <Botao texto='Criar card' />
      </form>
    </section>
  )
}
