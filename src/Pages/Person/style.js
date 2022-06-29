import styled from "styled-components";

export const ContainerPerson = styled.div `

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 50px ;
    background-color: #181818;
    height: 400px ;
    border-radius: 5px;

    h1{
        color: #fff;
    }

    h2{
        color: #fff;
    }

`;

export const Forms = styled.form `

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


label{
    margin: 5px;
    font-size: 30px;
    font-weight: bold;
    color: aliceblue;
}

input{
    background-color: blue;
    width: 115px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    
}

button{
    width: 115px;
    border-radius: 5px;
    border: none;
    margin: 5px;
}


`;