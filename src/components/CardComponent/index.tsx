import React from 'react'
import styled from 'styled-components'
import { AbBotao } from '../AbBotao'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 380px;
    height: 283px;
    left: 65px;
    top: 1272px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`
const Title  = styled.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #EB9B00;

`
const Text  = styled.p`
    width: 304px;
height: 40px;
`
const Info = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
color: #002F52;
`

export const CardComponent = () => {
  return (
    <Card>
        <Title>Sobre o livro:</Title>
        <Info>Liderança em Design</Info>
        <Text>Habilidades de gestão para alavancar sua carreira</Text>
        <Text>Por: Vitor Zanini</Text>
        {/* <img src='../../assets/core.png'></img> */}
        <AbBotao/>
    </Card>
  )
}
