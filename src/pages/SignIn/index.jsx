import { api } from "../../service/api"
import { Form } from "./styles"
import  Button  from "../../components/Button"
import  Logo  from "../../components/Logo"
import Input from "../../components/Input"
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SignIn(){
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn(){
    
    if(!name || !email || !password){
      return toast.warn("Preencha todos os campos!")
  }
  
    await api.post("/users/create", {name, email, password})
    .then(() => {    
      toast.success("Usuário cadastrado!")
      cleanFields()
    })
    .catch((error) => {
      console.log(error)
      toast.error(error?.response?.data?.message)
    })
  }

  function cleanFields(){
    setName("")
    setEmail("")
    setPassword("")
  }

  return(
    <Form>
      <div id="bigForm">
          <Logo/>
        <div id="form">
          <h1>Crie Sua Conta</h1>
          <Input type="text" placeholder={"Nome"} value={name} onChange={e => setName(e.target.value)}/>
          <Input type="text" placeholder={"Email"} value={email} onChange={e => setEmail(e.target.value)}/>
          <Input type="password" placeholder={"Senha"} value={password} onChange={e => setPassword(e.target.value)}/>
          <Button onClick={handleSignIn} title="Criar Conta"  />
          <a href="/"> Já tenho uma conta </a>
        </div>
      </div>
    </Form>
  )
}