import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`

display:flex;
justify-content:center;
align-items:center;
height:100vh;
max-width:1400px;
width:100%;
margin:0 auto;

#bigForm{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
}
#form{
    color: white;
    background-color: ${theme.COLORS.BLUE};
    padding:64px;
    display:grid;
    gap:32px;
    border-radius:15px;
    justify-items:center;
    max-height:621px;
    height:100%;
    max-width:476px;
    width:100%;
}

Input{
width:250px;
}


a{
    color: white;
    text-decoration:none;
    font-size:20px;
}

h1{
    font-weight:400;
}

`