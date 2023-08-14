import Button from "../Button";
import { FoodAvatarImage } from "../FoodAvatarImage";
import { FoodAvatarImageMenu } from "../FoodAvatarImageMenu";
import { Container, ContainerIcon, ContainerShowButton } from "./styles";
import { FoodImg } from "./styles";
import { AiOutlineHeart, AiOutlineEdit } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

export function ShowButton({ idPrato,perfil }){

    const navigate = useNavigate();

    function handleUserPrato(){
        navigate(`/admin/${idPrato}`);
    }

    if(perfil === 'user'){
        return(
            <ContainerShowButton>
             <div id="button">
                 <p id="p1">+</p>
                 <p id="p">01</p>
                 <p id="p1">-</p>
                 <Button onClick={handleUserPrato} title='Incluir'/>
             </div>
             </ContainerShowButton>
        )
    }
}

export function ShowIcon({ perfil, idPrato }){  
    
    const navigate = useNavigate();

    function handlePrato(){
        navigate(`/admin/${idPrato}`);
    }

    if(perfil === 'user'){
        return(
            <ContainerIcon>
             <AiOutlineHeart/>
             </ContainerIcon>
        )
    }else if (perfil === 'admin'){
        return(
            <ContainerIcon>
             <AiOutlineEdit onClick={handlePrato}/>
             </ContainerIcon>
        )
    }
}

export default function Food({idPrato,title,description,priçe,perfil,avatar,icon:Icon}){ 

    return(
        <Container>
            <div id="card">
                <div id="foto">                    
                    <FoodAvatarImageMenu imageURL={avatar} />
                    <ShowIcon perfil={perfil} idPrato={idPrato}/>
                </div>
                <div id="info">
                    <h2>
                        {title}
                    </h2>
                    <p>{description}</p>
                    <h2>R$ {priçe}</h2>
                </div>
                <ShowButton idPrato={idPrato} perfil={perfil}/>
            </div>
        </Container>
    )
}