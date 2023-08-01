import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`

* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${theme.COLORS.BLACK};
    width:100vw;
}

body, input, button, textarea {
    font-family:'Poppins', sans-serif;
}
`;