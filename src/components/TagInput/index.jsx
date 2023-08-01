import { Container } from "./styles";

export default function TagInput({icon: Icon, title, acao, ...rest}){
    return(
        <Container>
         <input type="text" placeholder={title} {...rest} /> 
         {Icon && <Icon size={23} onClick={acao}/>}
        </Container>
    )
}
