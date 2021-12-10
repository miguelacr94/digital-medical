import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Navbar from './componentes/nav/nav';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Nosotros from './componentes/nosotros/nosotros';
import Banner from './componentes/inicio/banner/banner';
import Servicios from './componentes/servicios/servicio';
import Medicos from './componentes/medicos/medicos';
import Testimonio from './componentes/testimonios/testimonios';
import Galeria from './componentes/galeria/galeria';
import Contacto from './componentes/contacto/contacto';
import Derechos from './componentes/derechos/derecho';


ReactDOM.render(
  <React.StrictMode>
<>
<Router>
<Navbar>
  <Switch>
    <Route path = '/servicios' component = {Servicios} />
  </Switch>
</Navbar>
<Banner></Banner>
<Nosotros></Nosotros>
<Servicios></Servicios>
<Medicos></Medicos>
<Testimonio></Testimonio>
<Galeria></Galeria>
<Contacto></Contacto>
<Derechos></Derechos>
</Router>
</>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
