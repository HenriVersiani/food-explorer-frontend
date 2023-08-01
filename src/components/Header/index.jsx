import Button from "../Button"
import IconLink from "../IconLink"
import Input from "../Input"
import Logo from "../Logo"
import { Container } from "./styles"
import { AiOutlineSearch } from "react-icons/ai"
import { IoMdExit } from "react-icons/io"
import { Link } from "react-router-dom"

export function ShowButton({perfil}){
    if(perfil === 'user'){
        return(
            <>
            <Link to="/add">
            <Button title='Pedidos'/>
            </Link>
            </>
        )
    }else if(perfil === 'admin'){
        return(
            <Link to="/add">
            <Button  className="button" title='+ Novo Prato'/>
            </Link>
        )
     }
}

export default function Header({ perfil, title }){

    return(
    <Container>
        <div>
            <main>
            <Logo/>
            <Input placeholder='Pesquisar' icon={ AiOutlineSearch }/>
            <ShowButton title={title} perfil={perfil}/>
            </main>
            <div id='image'>
            <Link className="image" to="/login">
                <IconLink icon={IoMdExit} />
            </Link>
            </div>
        </div> 
    </Container>
    )
}