import React from 'react';
import { CardComponent } from '../src/components/CardComponent';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
    title: 'Component/CardComponent',
    component: CardComponent
} as ComponentMeta<typeof CardComponent>

const Template: ComponentStory<typeof CardComponent> = () => <CardComponent/>

export const Secondary = Template.bind({})
