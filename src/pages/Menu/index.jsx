import Food from "../../components/Food"
import Header from "../../components/Header"
import { AiOutlineHeart } from "react-icons/ai"
import { Container } from "./styles"
import { FoodImg } from "./styles"
import { useAuth } from "../../hooks/auth"
import { useEffect } from "react"
import { api } from "../../service/api"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Menu({props}){

  const { user } = useAuth()

  const [lunchs, setLunchs] = useState([])
  const [deserts, setDeserts] = useState([])
  const [drinks, setDrinks] = useState([])

  async function getFoodsTypes(){  

    await api.get('/food/foods/1')
    .then((response) => {           

      setLunchs(response.data); 

    }).catch(error => {  
        toast.warning('Internal Error');         
        console.log(error);
    })


    await api.get('/food/foods/2')
    .then((response) => {           

      setDeserts(response.data); 

    }).catch(error => {  
        toast.warning('Internal Error');         
        console.log(error);
    })


    await api.get('/food/foods/3')
    .then((response) => {           

      setDrinks(response.data); 

    }).catch(error => {  
        toast.warning('Internal Error');         
        console.log(error);
    })      

  }

  useEffect(() => {
    
    getFoodsTypes()

   }, []);

  return(
  <Container>
    <main>
      <Header perfil={user.perfil}/>
      <FoodImg/>
      <h1 id="title">Refeições</h1>
      <div id="refeicoes">  
      {
        lunchs.map((lunch) => {         
          return(
            <Food 
            title={lunch.name}
            perfil={user.perfil}
            priçe={lunch.value}
            description={lunch.description}
            idPrato={lunch.id}
            avatar={lunch.avatar}
            />
          )
        })
      }   
        
      </div> 
      <h1 id="title">Sobremesas</h1>
      
      <div id="sobremesas">
      
      {
        deserts.map((lunch) => {         
          return(
            <Food 
            title={lunch.name}
            perfil={user.perfil}
            priçe={lunch.value}
            description={lunch.description}
            idPrato={lunch.id}
            avatar={lunch.avatar}
            />
          )
        })
      } 

      </div> 
      <h1 id="title">Sucos</h1>
      <div id="sucos">
      
      {
        drinks.map((lunch) => {         
          return(
            <Food 
            title={lunch.name}
            perfil={user.perfil}
            priçe={lunch.value}
            description={lunch.description}
            idPrato={lunch.id}
            avatar={lunch.avatar}
            />
          )
        })
      } 

      </div> 
    </main> 

  </Container>
    
  )
}