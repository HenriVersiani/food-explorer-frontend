import  Button  from "../../components/Button"
import Logo  from "../../components/Logo"
import Input from "../../components/Input"
import { Container } from "./styles"
import { useAuth } from "../../hooks/auth"
import { useState } from "react"

export default function LogIn(){
  
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      <div id="bigForm">
          <Logo/>
        <div id="form">
          <h1>Faça Login</h1>
          <Input type="text" placeholder={"Email"} onChange={e => setEmail(e.target.value)}/>
          <Input type="password" placeholder={"Senha"} onChange={e => setPassword(e.target.value)} />
          <Button title="Entrar" onClick={handleSignIn}/>
          <a href="/signin"> Cria uma Conta </a>
        </div>
      </div>
    </Container>
  )
}