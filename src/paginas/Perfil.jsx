import estilos from './Perfil.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const perfilSchema = z.object({

    nome: z.string()
                    .min(1, 'Informe o nome ')
                    .max(25, 'Máximo 25 caracteres'),
    email: z.string()
                    .email({message: 'Informe seu e-mail'}),
    
    usuario: z.string()
                    .min(5, 'Minímo 5 caracteres ')
                    .max(10, 'Máximo 10 caracteres'),
    senha: z.string()
                    .min(8, 'Informe 8 caracteres')
                    .max(8, 'Informe 8 caracteres')


})



export function Perfil(){

    const {register,
           handleSubmit,
           formState: {errors}
        } = useForm({
            resolver: zodResolver(perfilSchema)
        })




    function obterDadosFormulario(data){
        console.log(data)
    }   

    return(
        <div className={estilos.conteiner}>

                <p className={estilos.titulo}>Perfil</p>
            
            <form 
                className={estilos.formulario}
                onSubmit={handleSubmit(obterDadosFormulario)}
            >
                <input
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder='Nome'
                />
                { errors.nome && (
                    <p className={estilos.message}>{errors.nome.message}</p>
                )}

                <input
                    {...register('nome')}
                    className={estilos.campo}
                    placeholder='E-mail'
                />

                <input
                    {...register('usuario')}
                    className={estilos.campo}
                    placeholder='Usuário'
                />
                { errors.usuario && (
                    <p className={estilos.message}>{errors.usuario.message}</p>
                )}

                <input
                    {...register('senha')}
                    className={estilos.campo}
                    placeholder='Senha'
                />
                { errors.senha && (
                    <p className={estilos.message}>{errors.senha.message}</p>
                )}

                <button className={estilos.botao}>Confirmar</button>

            </form>

        </div>


    )
}