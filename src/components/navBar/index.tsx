import React from "react";
import styled from "styled-components";

const _container = styled.div`
display: flex;
width: 100%;
height: 60px;
background-color: #E1E433;
align-items: center;
padding-left: 3rem;
justify-content: flex-start;
gap: 25%;
`;

const _title = styled.p`
font-size: 30px;
color: #000000;
font-family: 'Saira Semi Condensed', sans-serif;
`;
const _inputsearch = styled.input`
width: 30rem;
height: 2.5rem;
background-color: #8d70ff67;
border: 0 none;
border-radius: 6px;
`; 

const Navbar = () => {
    return(
        <_container>
            <_title>PokéDex</_title>
            <_inputsearch type="text" placeholder="Digite o nome do pokemon"/>
        </_container>
    )
}

export default Navbar;