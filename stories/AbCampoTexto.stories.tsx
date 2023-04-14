import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbCampoTexto, CampoTextoProps } from '../src/components/AbCampoTexto'

export default {
  title: 'componentes/CampoTexto',
  component: AbCampoTexto,
  argTypes: {
    label: {
        control: 'text'
    }
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>;

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />;

export const AbCampoTextoComponent = Template.bind({})
AbCampoTextoComponent.args = {
    label: 'Uma label interessante',
} as CampoTextoProps