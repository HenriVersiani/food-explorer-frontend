import { Container } from "./styles";

export default function Input({icon: Icon, label, ...rest}){
    return(
        <Container>
            {Icon && <Icon size={30}/>}
         <label>{label}<input {...rest}/></label>
        </Container>
    )
}
