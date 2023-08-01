import { Container } from "./styles"
import { AiOutlineQq } from "react-icons/ai"

export default function Logo(){
    return(
    <Container>
        <a href="/">
        <AiOutlineQq/>
        <h1> Food Explorer</h1>
        </a>
    </Container>
    )
}