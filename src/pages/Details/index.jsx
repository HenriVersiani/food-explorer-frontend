
import Header from "../../components/Header"
import { Container } from "./styles"
import Button from "../../components/Button"
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { FoodAvatarImage } from "../../components/FoodAvatarImage";
import { useAuth } from "../../hooks/auth";

export function ShowButton({ idPrato,perfil,price }){

    const navigate = useNavigate();

    function handleEditPrato(){
        navigate(`/edit/${idPrato}`);
    }

    if(perfil === 'user'){
        return(
            <Button title={`Incluir - R$${price}`}/>
        )
    }

    if(perfil === 'admin'){
        return(
            <Button title='Editar Prato' onClick={handleEditPrato}/>
        )
    }
}

export default function Details(){

    const { user } = useAuth()

    const [plate, setPlate] = useState({})
    const [plateTags, setPlateTags] = useState([])

    const { id } = useParams();
    const idPrato = id;   

    const navigate = useNavigate();

    function handleEditPrato(){
        navigate(`/edit/${idPrato}`);
    }


    async function getFoodDescription(){  

        await api.get(`/food/detail/${idPrato}`)
        .then((response) => {           
    
            setPlate(response.data.lunch); 
            setPlateTags(response.data.lunchTags); 
          
    
        }).catch(error => {  
            toast.warning('Internal Error');         
            console.log(error);
        })           
    
      }
    
      useEffect(() => {
        
        getFoodDescription()
    
       }, []);

    return(
        <Container>
            <Header perfil={user.perfil}/>
            <h1 id="name">
                <Link to="/">&lt; Voltar</Link>
            </h1>
            <div id='main'>
                <image>
                    <FoodAvatarImage imageURL={plate.avatar} />
                </image>
                <div id="info">
                    <h1 id="title">
                        {plate.name}
                    </h1>
                    <p>
                        {plate.desccription}
                    </p>
                    <ul>
                        {
                            plateTags.map((tag) => {
                                return (
                                    <li>{tag.name}</li>   
                                )
                            })
                        }     
                    </ul>
                    <div id="include">
                        
                        <ShowButton idPrato={idPrato} perfil={user.perfil} price={plate.value}/>

                    </div>
                </div>
            </div>
                        
            </Container>
    )
}