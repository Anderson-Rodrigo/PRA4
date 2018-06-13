import ReactDOM from 'react-dom';
import React from 'react';
import Titulo from './titulo/titulo';
import Menu from './menu/menu';

let App = (
	<div className="container">	
		<Menu />	
		<Titulo titulo="Titulo desta Pagina" />
		<h1> Olá Mundo </h1>
		<p> Uma Pagina renderizada pelo react teste </p>
 	</div>	
);

ReactDOM.render(App, document.getElementById('app'));