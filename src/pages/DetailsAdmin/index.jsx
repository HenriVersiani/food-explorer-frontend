
import Header from "../../components/Header"
import { Container, FoodImage } from "./styles"
import Button from "../../components/Button"

export default function DetailsAdmin(){
    return(
        <Container>
            <Header perfil={'admin'}/>
            <h1 id="name"><a href=""> &lt; Voltar</a> </h1>
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
                        <Button id ='Button'title='Incluir 	&#183; R$25,00'/>
                        <Button title='Editar Prato'/>
                    </div>
                </div>
            </div>
                        
            </Container>
    )
}