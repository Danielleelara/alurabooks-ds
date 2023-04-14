import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { AbBotao } from './components/AbBotao';
import { CardComponent } from './components/CardComponent';
import { AbGrupoOpcoes } from './components/AbGrupoOpcoes';
import { AbCampoTexto } from './components/AbCampoTexto';
import { AbInputQuantidade } from './components/AbInputQuantidade';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export { Thing, AbBotao, CardComponent,AbGrupoOpcoes, AbCampoTexto, AbInputQuantidade, Props };
