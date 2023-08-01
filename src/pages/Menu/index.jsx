import Food from "../../components/Food"
import Header from "../../components/Header"
import { AiOutlineHeart } from "react-icons/ai"
import { Container } from "./styles"
import { FoodImg } from "./styles"

export default function Menu({props}){
  return(
  <Container>
    <main>
      <Header perfil='admin'/>
      <FoodImg/>
      <h1 id="title">Refeições</h1>
      <div id="refeicoes">  
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."
          idPrato={1}
          />
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."
          idPrato={2}
          />
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        
      </div> 
      <h1 id="title">Sobremesas</h1>
      
      <div id="sobremesas">
      <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
      </div> 
      <h1 id="title">Sucos</h1>
      <div id="sucos">
      <Food  
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
          <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
        <Food 
          title="Spaghetti Gambe"
          perfil="user"
          priçe="49,90"
          description="Spaghettil com camarões ao pesto."/>
      </div> 
    </main> 

  </Container>
    
  )
}