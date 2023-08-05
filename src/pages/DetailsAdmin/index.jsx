
import Header from "../../components/Header"
import { Container, FoodImage } from "./styles"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom";

export default function DetailsAdmin(){

    const navigate = useNavigate();

    function handleEditPrato(idPrato){
        navigate(`/edit/${idPrato}`);
    }

    return(
        <Container>
            <Header perfil={'admin'}/>
            <h1 id="name">
                <Link to="/">&lt; Voltar</Link>
            </h1>
            <div id='main'>
                <image>
                    <FoodImage/>
                </image>
                <div id="info">
                    <h1 id="title">
                        Salada Ravanello
                    </h1>
                    <p>
                       Rabanetes, folhas verdes e molho agridoce salpicados <br/> com gergelim.
                       O pão naan dá um toque especial.
                    </p>
                    <ul>
                        <li>Alface</li>
                        <li>Cebola</li>
                        <li>Tomate</li>
                        <li>Palmito</li>
                        <li>Azeitona</li>
                    </ul>
                    <div id="include">
                        <Button title='Editar Prato' onClick={handleEditPrato}/>
                    </div>
                </div>
            </div>
                        
            </Container>
    )
}