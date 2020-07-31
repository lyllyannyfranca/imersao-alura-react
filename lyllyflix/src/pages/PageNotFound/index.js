import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Image from '../../assets/img/NotFound.gif';
import styled from 'styled-components';

export const Main = styled.div `
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    .Button {
        display: flex;
        padding-left: 150px;
        padding-right: 150px;
    }
    .Image {
        padding-left: 30px;
        width: 60%;
        @media (max-width: 800px) {
            width: 30%;
        }
    }
`;

export const ButtonCustom = styled(Button) `
    flex: 1;
    justify-content: center;
    background-color: orange;
    border: 1px solid black;
`;

function PageNotFound() {
    return (
        <PageDefault>
        <Main>
        <div>
            <h1>Opa! Parece que você se perdeu, certo?</h1>
            <h2>Não se preocupe, use a porta dos fundos: </h2>
        <div className="Button">
            <ButtonCustom as={Link} to="/">Ir pra home</ButtonCustom>
        </div>
        </div>
            <img className="Image" src={Image} alt="404"/>
            
        </Main>
        </PageDefault>
    )
}


export default PageNotFound;
