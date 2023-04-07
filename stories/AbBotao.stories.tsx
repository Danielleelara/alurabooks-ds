import React from 'react';
import {AbBotao, AbBotaoProps} from '../src/components/AbBotao'
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'Component/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primary = Template.bind({})

Primary.args ={
    texto: "Ab Botão Primário",
    tipo: 'primario'
} as AbBotaoProps

export const Sencondary = Template.bind({})

Sencondary.args ={
    texto: "Ab Botão Secundário",
    tipo: 'secundario'
} as AbBotaoProps