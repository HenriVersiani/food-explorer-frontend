import { Container } from "./styles";

export function Tag({title,acao}){
    return(
        <Container>
            {title } <a href="" onClick={acao}><h5>&#10005;</h5></a>
        </Container>
    )
}