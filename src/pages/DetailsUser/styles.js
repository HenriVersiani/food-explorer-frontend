import styled from "styled-components";
import foodImage from "../../assets/image1.png"
export const Container = styled.div`


a{
    color:white;
    text-decoration:none;
}

#info{
    column-gap:30px;
}

#p1{
    font-size:30px;
    cursor: pointer;
}

#p{
    font-size:30px;
}


#include{
    display:flex;
    gap:20px;
    margin-top:70px;
}

ul{
    display: flex;
    gap: 30px;
    margin-top:20px;
}

li{
    background-color:#192227;
    padding:8px;
    border-radius:10px;
}

main{
    padding:30px;
}

#main{
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    font-size:20px;
    margin-top:60px;
}

#title{
    color:white;
}

#name{
    color:white;
    padding:0px;
    margin-top:100px;
    font-size:30px;
    margin-left:250px;
}


p{
    color:white;
    font-size:25px;
}


li{
    color:white;
}

Button{
    width:240px;
}

`;

export const FoodImage = styled.div`
    flex:1;
    background:url(${foodImage}) no-repeat center center;
    background-size:contain;
    height:382px;
    width:382px;
    text-align:center;
`;