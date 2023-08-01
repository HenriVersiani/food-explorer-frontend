import  Button  from "../../components/Button"
import Logo  from "../../components/Logo"
import Input from "../../components/Input"
import { Container } from "./styles"


export default function LogIn(){
  
  return(
    <Container>
      <div id="bigForm">
          <Logo/>
        <div id="form">
          <h1>Faça Login</h1>
          <Input type="text" placeholder={"Email"}/>
          <Input type="password" placeholder={"Senha"}/>
          <Button title="Entrar"  />
          <a href="/signin"> Cria uma Conta </a>
        </div>
      </div>
    </Container>
  )
}