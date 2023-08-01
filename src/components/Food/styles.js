import styled from "styled-components";
import foodImg from "../../assets/image3.png"
export const Container = styled.div`

#card:hover{
transform:scale(1.1);
transition-property:transform;
transition-duration:0.5s;
} 
#card{
    color:white;
    width:304px;
    height:462px;
    padding:25px; 
    display:grid;
    background-color:#000204;
    border-radius:10px;

a{
    text-decoration:none;
    color:white;
}
    
}
img{
    height:172px;
    width:172px;
}

#foto{
    text-align:center;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}


svg{
    cursor:pointer;
}


#info{
    text-align:center;
    display: grid;
}

h2{
    font-family: 'Montserrat', sans-serif;
}
`;

export const ContainerIcon = styled.div`

    font-size:30px;
    cursor: pointer;

`;

export const ContainerShowButton = styled.div`


button{
    border:none;
    cursor:pointer;
}

#button{
    display:flex;
    align-items: flex-end;
    gap:20px;
}

#p{
    font-size:30px
}    

#p1{
    cursor: pointer;
    font-size:30px;
}

`;

export const FoodImg = styled.div`
    flex:1;
    background:url(${foodImg}) no-repeat center center;
    background-size:cover;
    height:182px;
    width:182px;
    text-align:center;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    margin-left:30px;
`;


