import { api } from "../../service/api"
import { useEffect, useState } from "react"
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
            <Link to="/">
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


export default function Header({ perfil, title, setLunchs, setDeserts, setDrinks }) { 

    const [searchPlate, setSearchPlate] = useState("");

    async function handleSearchPlates(idCategory){        
        
        await api.get(`/food/search/category/${idCategory}`, {
            params: {
                searchPlate: searchPlate
            }
          })
        .then((response) => {    
            
            if (idCategory == 1) {
                setLunchs(response.data)
            }

            if (idCategory == 2) {
                setDeserts(response.data)
            }

            if (idCategory == 3) {
                setDrinks(response.data)
            }             
    
        }).catch(error => {  
            toast.warning('Internal Error');         
            console.log(error);
        }) 
    
    }
    
    
    useEffect(() => { 
                           
            handleSearchPlates(1)
            handleSearchPlates(2)
            handleSearchPlates(3)     
    
    
       }, [searchPlate]);

    return(
    <Container>
        <div>
            <main>
            <Logo/>
            <Input placeholder='Pesquisar' icon={ AiOutlineSearch } onChange={e => setSearchPlate(e.target.value)}/>
            <ShowButton title={title} perfil={perfil}/>
            </main>
            <div id='image'>
            <a id="logout" href="/">
                <IconLink icon={IoMdExit} />
            </a>
            </div>
        </div> 
    </Container>
    )
}