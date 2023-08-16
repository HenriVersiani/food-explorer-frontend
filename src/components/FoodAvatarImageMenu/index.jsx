import { Container } from "./styles"

export function FoodAvatarImageMenu({ imageURL }){

    const baseUrl = "https://food-explorer-backend-ppwk.onrender.com/files/"

    return(

        <Container>
            <img src={baseUrl+imageURL} />
        </Container>             
    )
    
}


