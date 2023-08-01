import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

    display:flex;
    align-items:center;

input{
    padding:14px;
    color: gray;
    background:transparent;
    border:0;
    background-color: ${theme.COLORS.LIGHTBLUE};
    border-radius:10px;
    font-family:'Poppins', sans-serif;
}

&:placeholder{
    color:gray;   
}
`;
