import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import Titulo from './components/titulo';
import CardContent from './components/cardContent/cardContent.js';
import Mega from './components/mega/mega';
import Contador from './components/contador/contador';
import Fatorial from './components/fatorial/fatorial';
import Tabela from './components/tabela/tabela';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Titulo text='COMPONENTES REACT'/>
     <Card>
     <CardContent title="SORTEADOR" description="1)">
      <Mega/>
     </CardContent>

     <CardContent title="CONTADOR" description="2)">
      <Contador/>
     </CardContent>

     <CardContent title="TABELA" description="3)">
      <Tabela/>
     </CardContent>

     <CardContent title="FATORIAL" description="4)">
      <Fatorial/>
     </CardContent>
     </Card>
  </React.StrictMode>
);


