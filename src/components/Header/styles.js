import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.div`

    grid-area: header;
    color:white;
    background-color: ${theme.COLORS.BLUE};
    padding: 0px;
    gap:100px;
    
.image{
    text-decoration:none;
    color:white;
}

main{
    display:flex;
    align-items:center;
    font-size:12px;
    justify-content:center;
    text-align:center;
}

div{
    display:flex;
    align-items:center;
    justify-content: space-evenly;
}

button{
    width:250px;
    font-size:20px;
    padding:30px;
    display:flex;
    margin-left:100px;
    align-items:center;
    justify-content:center;
    text-decoration:none;
}

Input{
    font-size:20px;
    width:550px;
}

a{
    text-decoration:none;
}

`;


