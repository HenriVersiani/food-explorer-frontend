import styled from "styled-components";
import foodImage from "../../assets/comida.png"
import Macarron from "../../assets/macarron.png"
export const Container = styled.div`



@keyframes topdown {
0% {
    opacity:0;
    transform: translateY(-20px)
}

100%{
    opacity:1;
    transform: translateY(0)
}
}

#principal{
    background-color:lightgray;
    
}
h1{
    color:white;
    padding: 50px;

}

#refeicoes{

    display: flex;
    justify-content: center;
    gap:30px;
    animation:topdown 2s 0ms  ;
    
}

#sobremesas{

    display: flex;
    justify-content: center;
    gap:30px;
    animation:topdown 2s 100ms  ;
}

#sucos{

    display: flex;
    justify-content: center;
    gap:30px;
    animation:topdown 2s 0ms  ;
}

#title{
    margin-left:300px;
    font-family: 'Roboto', sans-serif;
    padding:10px;
    margin:20px 20px 20px 300px;
}
`; 

export const FoodImg = styled.div`

    margin-top:50px;
    margin-left:380px;

    flex:1;
    background:url(${foodImage}) no-repeat center center;
    background-size:cover;
    height:360px;
    width:1120px;
    text-align:center;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    border-radius: 10px;

    position: relative;

    background: linear-gradient();
    animation: fade 5s ;

    @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`
export const MacarronImg = styled.div`

    margin-top:50px;
    margin-left:380px;


    flex:1;
    background:url(${FoodImg}) no-repeat center center;
    background:url(${Macarron}) no-repeat center center;
    background-size:cover;
    height:660px;
    width:520px;
    text-align:center;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    border-radius: 10px;

    position: relative;

    background: linear-gradient();
    animation: fade 5s ;

    @keyframes fade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`