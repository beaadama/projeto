import { Routes, Route } from 'react-router-dom'
import {Login} from '../paginas/Login'
import {Inicial} from '../paginas/Inicial'
import {Perfil} from '../paginas/Perfil'
import { Conteudo } from '../componentes/Conteudo'

export function Rotas(){
    return(
        <Routes>
            
            <Route path='/' element={<Login/>}/>

            <Route path='inicial' element={<Inicial/>}>

                <Route index element={<Conteudo/>}/>
                <Route path='perfil' element={<Perfil/>}/>

            </Route>

        </Routes>
    )
}