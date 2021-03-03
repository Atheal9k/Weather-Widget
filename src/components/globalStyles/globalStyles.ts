import { createGlobalStyle, css } from "styled-components"

export default createGlobalStyle`
    html {
        height: 100%;
    }

    body{
        display:flex;
        flex-direction: column;  
        line-height: 1.6;     
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Lato', sans-serif;
        
    }


`
