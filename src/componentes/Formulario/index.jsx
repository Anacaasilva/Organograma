import { useState } from 'react'
import { Botao } from '../Botao'
import { CampoTexto } from '../CampoTexto'
import { ListaSuspensa } from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = ({ aoCadastrar, funcoes, cadastrarFuncao }) => {

  const [nome, setNome] = useState('')
  const [habilidades, setHabilidades] = useState('')
  const [imagem, setImagem] = useState('')
  const [funcao, setFuncao] = useState('')
  const [nomeFuncao, setNomeFuncao] = useState('')
  const [corFuncao, setCorFuncao] = useState('')

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
    <section className='formulario-container'>
      <form className='formulario' onSubmit={aoSalvar}>
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
      <form className='formulario'
        onSubmit={(evento) => {
          evento.preventDefault()
          cadastrarFuncao({ nome: nomeFuncao, cor: corFuncao })
        }}
      >
        <h2>Preencha os dados para criar uma nova Funcao</h2>
        <CampoTexto
          obrigatorio
          label="Nome"
          placeholder="Digite o nome da funçao"
          valor={nomeFuncao}
          aoAlterado={valor => setNomeFuncao(valor)}
        />
        <CampoTexto
          obrigatorio
          type='color'
          label="Cor"
          placeholder="Digite a cor da Função"
          valor={corFuncao}
          aoAlterado={valor => setCorFuncao(valor)}
        />
        <Botao texto='Criar função' />
      </form>
    </section>
  )
}
