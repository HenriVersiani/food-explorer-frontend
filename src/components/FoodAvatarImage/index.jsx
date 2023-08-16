import { Container } from "./styles"

export function FoodAvatarImage({ imageURL }){

    const baseUrl = "https://food-explorer-backend-ppwk.onrender.com/files/"

    return(

        <Container>
            <img src={baseUrl+imageURL} />
        </Container>             
    )
    
}


