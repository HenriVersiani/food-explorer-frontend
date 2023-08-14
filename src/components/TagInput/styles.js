


import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    align-items:center;

svg{
cursor: pointer;
margin-left:2px;
}

input{
    font-size:15px;
    padding:5px;
    width:90px !important;
    border-radius:5px;
    border: 1px dotted gray;
    color:white;
    display:flex;
    gap:5px;
    align-items:center;
    background-color:transparent;
    text-align:center;
}

&:placeholder{
    color:gray;   
}
`;
