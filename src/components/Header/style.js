import styled from "styled-components";

export const Headerr = styled.header`

    display: flex;
    justify-content: space-evenly;
    background-color: #242424;
    border-bottom: 1px solid #282828;

    a{
        text-decoration: none;
        color: #fff;
        font-size: 15px;
        width: 100%;
        align-items: center;
        text-align: center;

    }

    a:hover{
        color: #282828;
        border: 1px solid #fff;        
        background-color: #282828;
        text-shadow: 
               -1px -1px 0px #fff, 
               -1px 1px 0px #fff,                    
                1px -1px 0px #fff,                  
                1px 0px 0px #fff;
    
    }

`;