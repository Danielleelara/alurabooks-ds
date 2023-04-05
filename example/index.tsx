import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, AbBotao, CardComponent } from '../src';

const App = () => {
  return (
    <div>
      {/* <AbBotao/> */}
      <CardComponent/>
    </div> 
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
