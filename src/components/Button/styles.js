import styled from "styled-components";
import theme from "../../styles/theme";


export const Container = styled.button`
    width:100%;
    background-color: ${theme.COLORS.RED};
    color: white;

    padding: 12,32,12,32;
    border: none;
    height:55px;
    border-radius:15px;
    font-size:20px;


h2{
    font-family:'Poppins', sans-serif;
    font-weight:400;
}

:hover{
    cursor:pointer;
    opacity:75%;
}
`;


