import styled from "styled-components";
import foodImage from "../../assets/image1.png"
import theme from "../../styles/theme";

export const Container = styled.div`

#foodImage{
    display:none;
}

#input1{
    height:50px;
    display:flex;
    gap:20px;
    font-size:20px;
    align-items:center;
    margin-top:10px
}

#input1:hover{
    cursor: pointer;
    opacity:70%;
}

#input3{
    width:300px;
}

#second{
    display:flex;
    align-items:center;
    gap:40px;
    margin-top:20px;
}

#third{
    margin-top:20px;
}

p#input4{
    width:630px;
    gap:15px;
    padding:28px;
    margin-top:10px;
}


.import{
    font-size:30px;
    margin-top:5px;
}


#tags{
    display:flex;
    padding:10px;
    background-color: ${theme.COLORS.LIGHTBLUE};
    margin-top:40px;
    gap:10px;
    border-radius:10px;
    width:800px;
}

Input{
    width:430px;
    display:grid;
    font-size:20px;
    margin-top:10px;
}

#label1{
    display:grid;
}


#buttons{
    display:flex;
    margin-top:30px;
    gap:30px;
    align-items:center;
    justify-content:flex-end;
}

#text{
    padding:14px;
    color: gray;
    background:transparent;
    border:0;
    background-color: ${theme.COLORS.LIGHTBLUE};
    border-radius:10px;
    font-family:'Poppins', sans-serif;
    resize:none;
    width:1105px;
    margin-top:10px;
    font-size:20px;
}

#input2{
    height:140px;
}

select{
  width: 325px;
  height: 50px;
  padding:10px;
  color: gray;
  background: transparent;
  border: 0;
  background-color: ${theme.COLORS.LIGHTBLUE};
  border-radius: 10px;
  display:flex;
  font-size:20px;
  align-items:center;
  font-family:'Poppins', sans-serif;
  margin-top:10px;
}

select:hover{
    opacity:90%;
}

p{
  font-family:'Poppins', sans-serif;
  width: 100%;
  height: 50px;
  padding: 14px;
  background: transparent;
  background-color: ${theme.COLORS.LIGHTBLUE};
  border-radius: 10px;
  display:flex;  
  align-items:center;
  color:white;
  font-size:20px;
}

#first{
display:flex;
align-items:center;
gap:40px;
}

label{
    color:white;
}

#add{
    color:white;
    padding:30px;
    margin-left:220px;
    margin-top:15px;
}

a{
    color:white;
    text-decoration:none;
    margin-right:50px;
}

#info{
    column-gap:30px;
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
    margin-top:10px;
}

#title{
    color:white;
}

#name{
    color:white;
    padding:0px;
    margin-top:50px;
    font-size:30px;
    margin-left:250px;
}

li{
    color:white;
}

#Button3{
    background-color: ${theme.COLORS.LIGHTBLUE};
    width:400px;
}

#Button2{
    width:400px;
}
`;
