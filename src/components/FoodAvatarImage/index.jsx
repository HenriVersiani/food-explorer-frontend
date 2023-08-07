import { Container } from "./styles"

export function FoodAvatarImage({ imageURL }){

    const baseUrl = "http://localhost:5051/files/"

    return(

        <Container>
            <img src={baseUrl+imageURL} />
        </Container>             
    )
    
}


