//forma parecida com react
import { useState } from 'react'
import estilos from './Login.module.css'
import {useNavigate} from 'react-router-dom'

export function Login(){

   const [usuario, setUsuario] = useState ('') 
   const [senha, setSenha] = useState('')

   const navigate = useNavigate()

   
   function obterDadosFormulario(event){

        event.preventDefault()

        console.log(`Usuario: ${usuario}`)
        console.log(`Senha: ${senha}`)

        navigate('inicial')
   }
   
    return(
        <div className={estilos.conteiner}>

            <form 
                className={estilos.formulario}
                onSubmit={obterDadosFormulario}
            >
                <input
                    className={estilos.campo}
                    placeholder='Usuário'
                    value={usuario}
                    onChange={ event => setUsuario(event.target.value) }
                />
                <input
                    className={estilos.campo}
                    placeholder='Senha'
                    value={senha}
                    onChange={ event => setSenha(event.target.value)}
                />

                <button
                    className={estilos.botao}
                >Entrar</button>

            </form>
        </div>
    )
}