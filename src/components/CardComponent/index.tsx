import React from 'react'
import styled from 'styled-components'
import { AbBotao } from '../AbBotao'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    gap: 16px;

    position: absolute;
    width: 380px;
    height: 283px;
    left: 65px;
    top: 1272px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`
const Title  = styled.h1`
    width: 106px;
    height: 24px;

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

export const CardComponent = () => {
  return (
    <Card>
        <Title>Sobre o livro:</Title>
        <Text>Habilidades de gestão para alavancar sua carreira</Text>
        <AbBotao/>
    </Card>
  )
}
