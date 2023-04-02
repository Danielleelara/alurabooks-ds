import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { AbBotao } from './components/AbBotao';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const Thing: FC<Props> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export { Thing, AbBotao, Props };
