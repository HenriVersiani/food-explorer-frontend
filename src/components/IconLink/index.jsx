import { Container } from "./styles"


export default function IconLink({icon: Icon, link}){
    return(
    <Container >
        <Icon>
            {Icon}
        </Icon>
    </Container>
    )
}